import { NextRequest, NextResponse } from "next/server";
import { createHash, createHmac } from "crypto";

const SHERBOOK_BASE =
  process.env.SHERBOOK_API_URL || "https://app.blackcab.ro/sherbook";

// Paths that require X-API-Key HMAC signing
const SIGNED_PATHS = [
  "registration/new",
  "registration/password",
  "registration/password/callback",
];

function computeApiKeyHeader(method: string, body: string): string | null {
  const publicKey = process.env.SHERBOOK_API_PUBLIC_KEY;
  const authToken = process.env.SHERBOOK_API_AUTH_TOKEN;

  if (!publicKey || !authToken) {
    console.warn("[Sherbook Proxy] Missing API key credentials");
    return null;
  }

  // MD5 hash of the request body
  const md5Hash = createHash("md5").update(body, "utf8").digest("hex");

  // String to sign: "METHOD:md5hash"
  const stringToSign = `${method}:${md5Hash}`;

  // HMAC-SHA256 with base64-decoded auth token as the key
  const keyBuffer = Buffer.from(authToken, "base64");
  const hmac = createHmac("sha256", keyBuffer)
    .update(stringToSign)
    .digest("base64");

  return `${publicKey}:${hmac}`.trim();
}

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

  // Read body for POST/PUT/PATCH
  let body: string | undefined;
  if (method !== "GET" && method !== "HEAD") {
    try {
      body = await request.text();
    } catch {
      // No body
    }
  }

  // Add X-API-Key HMAC signature for registration endpoints
  const needsSigning = SIGNED_PATHS.some((p) => apiPath === p);
  if (needsSigning && body) {
    const apiKeyValue = computeApiKeyHeader(method, body);
    if (apiKeyValue) {
      headers["X-API-Key"] = apiKeyValue;
      headers["X-Captcha-Token"] = apiKeyValue;
      console.log(`[Sherbook Proxy] /${apiPath} — X-API-Key: present (${apiKeyValue.substring(0, 20)}...)`);
    } else {
      console.warn(`[Sherbook Proxy] /${apiPath} — X-API-Key: MISSING (no credentials)`);
    }
  }

  const fetchOptions: RequestInit = {
    method,
    headers,
  };

  if (body) {
    fetchOptions.body = body;
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
