"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Megaphone,
  FileText,
  Settings,
  LogOut,
  ChevronDown,
  Building2,
} from "lucide-react";
import { useClient } from "@/lib/client-context";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/leads", label: "Leads", icon: Users },
  { href: "/ads", label: "Ad Campaigns", icon: Megaphone },
  { href: "/posts", label: "Posts", icon: FileText },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { selectedClient, setSelectedClient, allClients } = useClient();
  const [clientsOpen, setClientsOpen] = useState(true);

  return (
    <aside className="w-64 bg-sidebar min-h-screen flex flex-col text-white shrink-0">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/10">
        <h1 className="text-lg font-bold tracking-tight">
          <span className="text-accent">Empower</span> Agency
        </h1>
        <p className="text-xs text-gray-400 mt-0.5">Marketing Dashboard</p>
      </div>

      {/* Client Switcher */}
      <div className="px-3 py-3 border-b border-white/10">
        <button
          onClick={() => setClientsOpen(!clientsOpen)}
          className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md hover:bg-white/5 transition-colors"
        >
          <span className="flex items-center gap-2">
            <Building2 size={16} />
            Clients
          </span>
          <ChevronDown
            size={14}
            className={`transition-transform ${clientsOpen ? "rotate-180" : ""}`}
          />
        </button>
        {clientsOpen && (
          <div className="mt-1 space-y-0.5">
            <button
              onClick={() => setSelectedClient(null)}
              className={`w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors ${
                selectedClient === null
                  ? "bg-accent text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              All Clients
            </button>
            {allClients.map((client) => (
              <button
                key={client.id}
                onClick={() => setSelectedClient(client)}
                className={`w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors flex items-center gap-2 ${
                  selectedClient?.id === client.id
                    ? "bg-accent text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${client.connected ? "bg-green-400" : "bg-gray-500"}`}
                />
                {client.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                isActive
                  ? "bg-accent text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-white/10">
        <Link
          href="/login"
          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white rounded-md hover:bg-white/5 transition-colors"
        >
          <LogOut size={18} />
          Sign Out
        </Link>
      </div>
    </aside>
  );
}
