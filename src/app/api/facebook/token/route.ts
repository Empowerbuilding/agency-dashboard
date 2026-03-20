import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.cookies.get('fb_access_token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'No token stored' }, { status: 404 });
  }
  return NextResponse.json({ token });
}
