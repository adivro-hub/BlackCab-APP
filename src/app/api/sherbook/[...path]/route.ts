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

  console.log(`[HMAC DEBUG] publicKey: "${publicKey}"`);
  console.log(`[HMAC DEBUG] authToken length: ${authToken.length}, first5: "${authToken.substring(0, 5)}", last5: "${authToken.substring(authToken.length - 5)}"`);
  console.log(`[HMAC DEBUG] body length: ${body.length}`);

  // MD5 hash of the request body
  const md5Hash = createHash("md5").update(body, "utf8").digest("hex");
  console.log(`[HMAC DEBUG] md5Hash: ${md5Hash}`);

  // String to sign: "METHOD:md5hash"
  const stringToSign = `${method}:${md5Hash}`;
  console.log(`[HMAC DEBUG] stringToSign: ${stringToSign}`);

  // HMAC-SHA256 with base64-decoded auth token as the key
  const keyBuffer = Buffer.from(authToken, "base64");
  console.log(`[HMAC DEBUG] keyBuffer hex: ${keyBuffer.toString("hex")}`);
  console.log(`[HMAC DEBUG] keyBuffer length: ${keyBuffer.length}`);

  const hmac = createHmac("sha256", keyBuffer)
    .update(stringToSign)
    .digest("base64");
  console.log(`[HMAC DEBUG] hmac: ${hmac}`);

  const result = `${publicKey}:${hmac}`.trim();
  console.log(`[HMAC DEBUG] final header: ${result}`);

  return result;
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
  if (needsSigning) {
    if (!body) {
      return NextResponse.json(
        { status: "SIGNING_ERROR", errorMessage: "Request body required for signed endpoints" },
        { status: 400 }
      );
    }
    const apiKeyValue = computeApiKeyHeader(method, body);
    if (!apiKeyValue) {
      return NextResponse.json(
        { status: "SIGNING_ERROR", errorMessage: "Server missing API signing credentials" },
        { status: 500 }
      );
    }
    headers["X-API-Key"] = apiKeyValue;
    console.log(`[Sherbook Proxy] /${apiPath} — X-API-Key: ${apiKeyValue.substring(0, 20)}...`);
  }

  const fetchOptions: RequestInit = {
    method,
    headers,
  };

  if (body) {
    fetchOptions.body = body;
  }

  const targetUrl = `${SHERBOOK_BASE}/${apiPath}`;
  console.log(`[Sherbook Proxy] >>> ${method} ${targetUrl}`);
  if (needsSigning && body) {
    console.log(`[Sherbook Proxy] >>> body: ${body.substring(0, 300)}`);
  }

  try {
    const apiRes = await fetch(targetUrl, fetchOptions);
    const data = await apiRes.text();

    console.log(`[Sherbook Proxy] <<< ${method} /${apiPath} — HTTP ${apiRes.status}: ${data.substring(0, 500)}`);

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
    console.error(`[Sherbook Proxy] !!! ${method} /${apiPath} FETCH ERROR:`, error);
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
