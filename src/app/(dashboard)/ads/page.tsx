"use client";

import { useState } from "react";
import { Pause, Play, Pencil, X, Check } from "lucide-react";
import { useClient } from "@/lib/client-context";
import { campaigns as initialCampaigns, clients } from "@/lib/mock-data";
import { Campaign } from "@/types";

export default function AdsPage() {
  const { selectedClient } = useClient();
  const [campaignData, setCampaignData] = useState<Campaign[]>(initialCampaigns);
  const [editingBudget, setEditingBudget] = useState<string | null>(null);
  const [budgetValue, setBudgetValue] = useState("");
  const [clientFilter, setClientFilter] = useState<string>("all");

  const activeClientId = selectedClient?.id || clientFilter;

  const filtered = campaignData.filter(
    (c) => activeClientId === "all" || c.clientId === activeClientId
  );

  function toggleStatus(id: string) {
    setCampaignData((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "ACTIVE" ? "PAUSED" : "ACTIVE" }
          : c
      )
    );
  }

  function startEditBudget(campaign: Campaign) {
    setEditingBudget(campaign.id);
    setBudgetValue(campaign.budget.toString());
  }

  function saveBudget(id: string) {
    const num = parseFloat(budgetValue);
    if (!isNaN(num) && num > 0) {
      setCampaignData((prev) =>
        prev.map((c) => (c.id === id ? { ...c, budget: num } : c))
      );
    }
    setEditingBudget(null);
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ad Campaigns</h1>
          <p className="text-gray-500 mt-1">
            Manage Facebook ad campaigns across clients
          </p>
        </div>
        {!selectedClient && (
          <select
            value={clientFilter}
            onChange={(e) => setClientFilter(e.target.value)}
            className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
          >
            <option value="all">All Clients</option>
            {clients.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="space-y-4">
        {filtered.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-gray-900">
                    {campaign.name}
                  </h3>
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
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      Budget
                    </p>
                    {editingBudget === campaign.id ? (
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-sm text-gray-500">$</span>
                        <input
                          type="number"
                          value={budgetValue}
                          onChange={(e) => setBudgetValue(e.target.value)}
                          className="w-24 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-accent outline-none"
                          autoFocus
                        />
                        <button
                          onClick={() => saveBudget(campaign.id)}
                          className="p-1 text-green-600 hover:bg-green-50 rounded"
                        >
                          <Check size={14} />
                        </button>
                        <button
                          onClick={() => setEditingBudget(null)}
                          className="p-1 text-gray-400 hover:bg-gray-50 rounded"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ) : (
                      <p className="text-lg font-semibold text-gray-900 mt-1">
                        ${campaign.budget.toLocaleString()}
                      </p>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      Spend
                    </p>
                    <p className="text-lg font-semibold text-gray-900 mt-1">
                      ${campaign.spend.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      Leads
                    </p>
                    <p className="text-lg font-semibold text-gray-900 mt-1">
                      {campaign.leads}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      CPL
                    </p>
                    <p className="text-lg font-semibold text-gray-900 mt-1">
                      ${campaign.cpl.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => toggleStatus(campaign.id)}
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    campaign.status === "ACTIVE"
                      ? "bg-yellow-50 text-yellow-700 hover:bg-yellow-100"
                      : "bg-green-50 text-green-700 hover:bg-green-100"
                  }`}
                >
                  {campaign.status === "ACTIVE" ? (
                    <>
                      <Pause size={14} /> Pause
                    </>
                  ) : (
                    <>
                      <Play size={14} /> Resume
                    </>
                  )}
                </button>
                <button
                  onClick={() => startEditBudget(campaign)}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Pencil size={14} /> Edit Budget
                </button>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-400">
            No campaigns found for the selected client.
          </div>
        )}
      </div>
    </div>
  );
}
