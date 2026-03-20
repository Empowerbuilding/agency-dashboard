"use client";

import { useState, useEffect, Suspense } from "react";
import { Facebook, CheckCircle, AlertCircle } from "lucide-react";
import { clients } from "@/lib/mock-data";
import { getFacebookLoginUrl } from "@/lib/facebook";
import { useSearchParams } from "next/navigation";

function SettingsContent() {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("connected") === "true") {
      setConnected(true);
    }
    // Listen for popup message
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "fb_auth") {
        setConnecting(false);
        if (e.data.success) setConnected(true);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [searchParams]);

  function handleConnectFacebook() {
    setConnecting(true);
    const url = getFacebookLoginUrl();
    window.open(url, "fb_auth", "width=600,height=700,left=200,top=100");
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">Manage Facebook connections and account settings</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-600 rounded-lg text-white">
            <Facebook size={20} />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Facebook Connection</h2>
            <p className="text-sm text-gray-500">Connect your Facebook account to manage pages and ads</p>
          </div>
        </div>

        {connected ? (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm font-medium">
              <CheckCircle size={16} />
              Connected to Facebook
            </div>
            <button onClick={() => { setConnected(false); handleConnectFacebook(); }} className="text-sm text-gray-500 underline hover:text-gray-700">
              Reconnect
            </button>
          </div>
        ) : (
          <button
            onClick={handleConnectFacebook}
            disabled={connecting}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#1877F2] text-white rounded-lg text-sm font-medium hover:bg-[#166FE5] transition-colors disabled:opacity-50"
          >
            <Facebook size={16} />
            {connecting ? "Connecting..." : "Connect with Facebook"}
          </button>
        )}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">Connected Pages</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {clients.map((client) => (
            <div key={client.id} className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-semibold text-sm">
                  {client.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{client.name}</p>
                  <p className="text-xs text-gray-500">{client.fbPageName || "No page connected"}</p>
                </div>
              </div>
              {client.connected ? (
                <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
                  <CheckCircle size={14} /> Connected
                </span>
              ) : (
                <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                  <AlertCircle size={14} /> Not Connected
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SettingsContent />
    </Suspense>
  );
}
