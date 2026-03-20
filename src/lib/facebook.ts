const FB_APP_ID = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID!;
const FB_REDIRECT_URI =
  typeof window !== "undefined"
    ? `${window.location.origin}/api/auth/facebook/callback`
    : "";

export function getFacebookLoginUrl() {
  const scopes = [
    "pages_manage_posts",
    "pages_read_engagement",
    "ads_management",
    "ads_read",
    "leads_retrieval",
    "pages_show_list",
  ].join(",");

  return `https://www.facebook.com/v19.0/dialog/oauth?client_id=${FB_APP_ID}&redirect_uri=${encodeURIComponent(FB_REDIRECT_URI)}&scope=${scopes}&response_type=code`;
}

export async function fetchFromFacebook(
  endpoint: string,
  accessToken: string
) {
  const res = await fetch(
    `https://graph.facebook.com/v19.0${endpoint}${endpoint.includes("?") ? "&" : "?"}access_token=${accessToken}`
  );
  return res.json();
}
