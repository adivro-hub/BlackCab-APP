import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("blackcab-session")?.value;
  const { pathname } = request.nextUrl;

  const isAuthRoute =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/forgot-password");
  const isApiRoute = pathname.startsWith("/api");
  const isPublicAsset =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/icons") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico";

  // Skip middleware for API routes and static assets
  if (isApiRoute || isPublicAsset) {
    return NextResponse.next();
  }

  // TODO: Re-enable auth redirect once SMS/login is working
  // Redirect unauthenticated users to login
  // if (!sessionToken && !isAuthRoute) {
  //   const loginUrl = new URL("/login", request.url);
  //   loginUrl.searchParams.set("redirect", pathname);
  //   return NextResponse.redirect(loginUrl);
  // }

  // Redirect authenticated users away from auth pages
  if (sessionToken && isAuthRoute) {
    return NextResponse.redirect(new URL("/book", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
