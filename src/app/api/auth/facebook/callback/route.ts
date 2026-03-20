import { NextRequest, NextResponse } from "next/server";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://agency.empowerbuilding.ai";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  if (!code) {
    return new NextResponse(`<html><body><script>
      if (window.opener) { window.opener.postMessage({type:'fb_auth',success:false,error:'no_code'}, '*'); window.close(); }
      else { window.location.href = '${APP_URL}/settings?error=no_code'; }
    </script></body></html>`, { headers: { 'Content-Type': 'text/html' } });
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
      return new NextResponse(`<html><body><script>
        if (window.opener) { window.opener.postMessage({type:'fb_auth',success:false,error:'token_failed'}, '*'); window.close(); }
        else { window.location.href = '${APP_URL}/settings?error=token_exchange_failed'; }
      </script></body></html>`, { headers: { 'Content-Type': 'text/html' } });
    }

    // Success - close popup and notify parent
    return new NextResponse(`<html><body><script>
      if (window.opener) { window.opener.postMessage({type:'fb_auth',success:true}, '*'); window.close(); }
      else { window.location.href = '${APP_URL}/settings?connected=true'; }
    </script></body></html>`, { headers: { 'Content-Type': 'text/html' } });

  } catch (e) {
    return new NextResponse(`<html><body><script>
      if (window.opener) { window.opener.postMessage({type:'fb_auth',success:false,error:'callback_failed'}, '*'); window.close(); }
      else { window.location.href = '${APP_URL}/settings?error=callback_failed'; }
    </script></body></html>`, { headers: { 'Content-Type': 'text/html' } });
  }
}
