import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Public routes that don't require auth
  const publicPaths = ["/login", "/privacy", "/terms", "/api/"];
  const isPublic = publicPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isPublic) {
    return NextResponse.next();
  }

  // In production, check Supabase session cookie here
  // For now, allow all requests through for development
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
