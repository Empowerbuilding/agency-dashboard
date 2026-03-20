"use client";

import { Users, Megaphone, DollarSign, TrendingUp } from "lucide-react";
import StatCard from "@/components/stat-card";
import { useClient } from "@/lib/client-context";
import { leads, campaigns } from "@/lib/mock-data";

export default function DashboardHome() {
  const { selectedClient } = useClient();

  const filteredLeads = selectedClient
    ? leads.filter((l) => l.clientId === selectedClient.id)
    : leads;
  const filteredCampaigns = selectedClient
    ? campaigns.filter((c) => c.clientId === selectedClient.id)
    : campaigns;

  const today = new Date().toISOString().split("T")[0];
  const todayLeads = filteredLeads.filter((l) => l.date === today).length;
  const activeCampaigns = filteredCampaigns.filter(
    (c) => c.status === "ACTIVE"
  ).length;
  const totalSpend = filteredCampaigns.reduce((sum, c) => sum + c.spend, 0);
  const bestAd = filteredCampaigns.length
    ? filteredCampaigns.reduce((best, c) => (c.cpl < best.cpl ? c : best))
    : null;

  const recentLeads = filteredLeads.slice(0, 5);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          {selectedClient ? selectedClient.name : "Dashboard Overview"}
        </h1>
        <p className="text-gray-500 mt-1">
          {selectedClient
            ? "Client performance at a glance"
            : "All clients performance at a glance"}
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Leads Today"
          value={todayLeads}
          subtitle={`${filteredLeads.length} total`}
          icon={Users}
        />
        <StatCard
          title="Active Campaigns"
          value={activeCampaigns}
          subtitle={`${filteredCampaigns.length} total`}
          icon={Megaphone}
          color="text-green-600"
        />
        <StatCard
          title="Total Spend"
          value={`$${totalSpend.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          subtitle="This period"
          icon={DollarSign}
          color="text-orange-500"
        />
        <StatCard
          title="Best Performing"
          value={bestAd ? `$${bestAd.cpl.toFixed(2)} CPL` : "N/A"}
          subtitle={bestAd ? bestAd.name.split(" - ")[1] || bestAd.name : ""}
          icon={TrendingUp}
          color="text-purple-600"
        />
      </div>

      {/* Recent Leads & Campaign Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Recent Leads</h2>
          </div>
          <div className="divide-y divide-gray-50">
            {recentLeads.map((lead) => (
              <div
                key={lead.id}
                className="px-6 py-3 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {lead.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {lead.source} &middot; {lead.clientName}
                  </p>
                </div>
                <span className="text-xs text-gray-400">{lead.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Performance */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">
              Campaign Performance
            </h2>
          </div>
          <div className="divide-y divide-gray-50">
            {filteredCampaigns.slice(0, 5).map((campaign) => (
              <div
                key={campaign.id}
                className="px-6 py-3 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {campaign.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {campaign.leads} leads &middot; $
                    {campaign.spend.toFixed(2)} spent
                  </p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    campaign.status === "ACTIVE"
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {campaign.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
