"use client";

import Sidebar from "@/components/sidebar";
import MobileSidebar from "@/components/mobile-sidebar";
import { ClientProvider } from "@/lib/client-context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProvider>
      <div className="flex min-h-screen">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <MobileSidebar />
        <main className="flex-1 min-w-0">
          <div className="p-6 lg:p-8 max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </ClientProvider>
  );
}
