import { NextRequest, NextResponse } from "next/server";

const SHERBOOK_BASE = process.env.SHERBOOK_API_URL || "https://beirut-master.sherlock.com/sherbook";

async function proxyRequest(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
  method: string
) {
  const { path } = await params;
  const apiPath = path.join("/");

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip",
  };

  // Forward session token from header (sent by client) or cookie (fallback)
  const sessionToken =
    request.headers.get("SESSION-TOKEN") ||
    request.cookies.get("blackcab-session")?.value;
  if (sessionToken) {
    headers["SESSION-TOKEN"] = sessionToken;
  }

  // Forward JSESSIONID cookie
  const jsessionId = request.cookies.get("JSESSIONID")?.value;
  if (jsessionId) {
    headers["Cookie"] = `JSESSIONID=${jsessionId}`;
  }

  const fetchOptions: RequestInit = {
    method,
    headers,
  };

  // Only include body for POST/PUT/PATCH
  if (method !== "GET" && method !== "HEAD") {
    try {
      const body = await request.text();
      if (body) {
        fetchOptions.body = body;
      }
    } catch {
      // No body
    }
  }

  try {
    const apiRes = await fetch(`${SHERBOOK_BASE}/${apiPath}`, fetchOptions);
    const data = await apiRes.text();

    const response = new NextResponse(data, {
      status: apiRes.status,
      headers: { "Content-Type": "application/json" },
    });

    // Forward Set-Cookie from API response (JSESSIONID)
    const setCookie = apiRes.headers.get("set-cookie");
    if (setCookie) {
      response.headers.set("Set-Cookie", setCookie);
    }

    return response;
  } catch (error) {
    console.error(`[Sherbook Proxy] ${method} /${apiPath} failed:`, error);
    return NextResponse.json(
      { status: "PROXY_ERROR", errorMessage: "Failed to reach Sherbook API" },
      { status: 502 }
    );
  }
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  return proxyRequest(request, context, "POST");
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  return proxyRequest(request, context, "GET");
}
