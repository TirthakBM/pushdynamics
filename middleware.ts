import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;

  const isAuthRoute =
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/signup");

  const isProtectedRoute = req.nextUrl.pathname.startsWith("/dashboard");

  // If logged in user tries to access login/signup → redirect dashboard
  if (isAuthRoute && accessToken) {
    return NextResponse.redirect(new URL("/dashboard/home", req.url));
  }

  // If not logged in and tries dashboard → redirect login
  if (isProtectedRoute && !accessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
};
