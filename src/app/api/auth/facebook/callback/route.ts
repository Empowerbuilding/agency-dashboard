import { NextRequest, NextResponse } from "next/server";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://agency.empowerbuilding.ai";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/settings?error=no_code", APP_URL));
  }

  try {
    const appId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
    const appSecret = process.env.FACEBOOK_APP_SECRET;
    const redirectUri = `${APP_URL}/api/auth/facebook/callback`;

    const tokenRes = await fetch(
      `https://graph.facebook.com/v19.0/oauth/access_token?client_id=${appId}&redirect_uri=${encodeURIComponent(redirectUri)}&client_secret=${appSecret}&code=${code}`
    );
    const tokenData = await tokenRes.json();

    if (tokenData.error) {
      console.error("FB token error:", tokenData.error);
      return NextResponse.redirect(
        new URL("/settings?error=token_exchange_failed", APP_URL)
      );
    }

    // In production, store the access token in Supabase
    return NextResponse.redirect(
      new URL("/settings?connected=true", APP_URL)
    );
  } catch (e) {
    console.error("FB callback error:", e);
    return NextResponse.redirect(
      new URL("/settings?error=callback_failed", APP_URL)
    );
  }
}
