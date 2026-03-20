import { Client, Lead, Campaign, ScheduledPost } from "@/types";

export const clients: Client[] = [
  {
    id: "1",
    name: "Barnhaus Steel Builders",
    slug: "barnhaus",
    fbPageId: "123456789",
    fbPageName: "Barnhaus Steel Builders",
    connected: true,
  },
  {
    id: "2",
    name: "Showcase Builders",
    slug: "showcase",
    fbPageId: "234567890",
    fbPageName: "Showcase Builders LLC",
    connected: true,
  },
  {
    id: "3",
    name: "CW Custom Builders",
    slug: "cwcustom",
    fbPageId: "345678901",
    fbPageName: "CW Custom Builders",
    connected: true,
  },
  {
    id: "4",
    name: "Modern Dwellings",
    slug: "modern-dwellings",
    fbPageId: "456789012",
    fbPageName: "Modern Dwellings",
    connected: false,
  },
];

export const leads: Lead[] = [
  {
    id: "l1",
    name: "John Patterson",
    email: "john.p@email.com",
    phone: "(512) 555-0142",
    source: "Facebook Lead Ad",
    clientId: "1",
    clientName: "Barnhaus Steel Builders",
    date: "2026-03-19",
  },
  {
    id: "l2",
    name: "Sarah Mitchell",
    email: "sarah.m@email.com",
    phone: "(512) 555-0198",
    source: "Website Form",
    clientId: "1",
    clientName: "Barnhaus Steel Builders",
    date: "2026-03-19",
  },
  {
    id: "l3",
    name: "David Chen",
    email: "dchen@email.com",
    phone: "(737) 555-0167",
    source: "Facebook Lead Ad",
    clientId: "2",
    clientName: "Showcase Builders",
    date: "2026-03-19",
  },
  {
    id: "l4",
    name: "Maria Rodriguez",
    email: "maria.r@email.com",
    phone: "(512) 555-0234",
    source: "Google Ads",
    clientId: "2",
    clientName: "Showcase Builders",
    date: "2026-03-18",
  },
  {
    id: "l5",
    name: "James Wilson",
    email: "jwilson@email.com",
    phone: "(737) 555-0289",
    source: "Facebook Lead Ad",
    clientId: "3",
    clientName: "CW Custom Builders",
    date: "2026-03-18",
  },
  {
    id: "l6",
    name: "Emily Thompson",
    email: "emily.t@email.com",
    phone: "(512) 555-0312",
    source: "Referral",
    clientId: "3",
    clientName: "CW Custom Builders",
    date: "2026-03-17",
  },
  {
    id: "l7",
    name: "Michael Brown",
    email: "mbrown@email.com",
    phone: "(512) 555-0445",
    source: "Facebook Lead Ad",
    clientId: "4",
    clientName: "Modern Dwellings",
    date: "2026-03-19",
  },
  {
    id: "l8",
    name: "Lisa Park",
    email: "lisa.park@email.com",
    phone: "(737) 555-0178",
    source: "Website Form",
    clientId: "1",
    clientName: "Barnhaus Steel Builders",
    date: "2026-03-17",
  },
  {
    id: "l9",
    name: "Robert Garcia",
    email: "rgarcia@email.com",
    phone: "(512) 555-0556",
    source: "Facebook Lead Ad",
    clientId: "2",
    clientName: "Showcase Builders",
    date: "2026-03-17",
  },
  {
    id: "l10",
    name: "Amanda Foster",
    email: "afoster@email.com",
    phone: "(737) 555-0334",
    source: "Google Ads",
    clientId: "4",
    clientName: "Modern Dwellings",
    date: "2026-03-18",
  },
  {
    id: "l11",
    name: "Kevin Nguyen",
    email: "knguyen@email.com",
    phone: "(512) 555-0678",
    source: "Facebook Lead Ad",
    clientId: "1",
    clientName: "Barnhaus Steel Builders",
    date: "2026-03-16",
  },
  {
    id: "l12",
    name: "Rachel Adams",
    email: "radams@email.com",
    phone: "(737) 555-0412",
    source: "Website Form",
    clientId: "3",
    clientName: "CW Custom Builders",
    date: "2026-03-19",
  },
];

export const campaigns: Campaign[] = [
  {
    id: "c1",
    name: "Barnhaus - Steel Home Leads Q1",
    status: "ACTIVE",
    budget: 3000,
    spend: 1847.32,
    leads: 42,
    cpl: 43.98,
    clientId: "1",
  },
  {
    id: "c2",
    name: "Barnhaus - Retargeting Visitors",
    status: "ACTIVE",
    budget: 1500,
    spend: 923.15,
    leads: 18,
    cpl: 51.29,
    clientId: "1",
  },
  {
    id: "c3",
    name: "Showcase - New Construction Leads",
    status: "ACTIVE",
    budget: 5000,
    spend: 3241.67,
    leads: 87,
    cpl: 37.26,
    clientId: "2",
  },
  {
    id: "c4",
    name: "Showcase - Brand Awareness",
    status: "PAUSED",
    budget: 2000,
    spend: 1456.0,
    leads: 23,
    cpl: 63.3,
    clientId: "2",
  },
  {
    id: "c5",
    name: "CW Custom - Luxury Home Leads",
    status: "ACTIVE",
    budget: 4000,
    spend: 2890.45,
    leads: 56,
    cpl: 51.62,
    clientId: "3",
  },
  {
    id: "c6",
    name: "CW Custom - Renovation Retarget",
    status: "ACTIVE",
    budget: 1800,
    spend: 1102.8,
    leads: 31,
    cpl: 35.57,
    clientId: "3",
  },
  {
    id: "c7",
    name: "Modern Dwellings - Minimalist Homes",
    status: "ACTIVE",
    budget: 3500,
    spend: 2156.9,
    leads: 64,
    cpl: 33.7,
    clientId: "4",
  },
  {
    id: "c8",
    name: "Modern Dwellings - Lookalike Audience",
    status: "PAUSED",
    budget: 2500,
    spend: 1678.23,
    leads: 29,
    cpl: 57.87,
    clientId: "4",
  },
];

export const scheduledPosts: ScheduledPost[] = [
  {
    id: "p1",
    text: "Check out our latest steel frame build! 🏗️ Barnhaus quality you can trust.",
    scheduledAt: "2026-03-20T10:00:00Z",
    status: "scheduled",
    clientId: "1",
    clientName: "Barnhaus Steel Builders",
  },
  {
    id: "p2",
    text: "Dream home tour this Saturday! Come see what Showcase Builders can do for you. 🏠",
    scheduledAt: "2026-03-22T14:00:00Z",
    status: "scheduled",
    clientId: "2",
    clientName: "Showcase Builders",
  },
  {
    id: "p3",
    text: "Another stunning custom build completed. Thank you to the Miller family! ⭐",
    scheduledAt: "2026-03-18T09:00:00Z",
    status: "published",
    clientId: "3",
    clientName: "CW Custom Builders",
  },
  {
    id: "p4",
    text: "Modern living starts here. Explore our new floor plans for 2026. 🏡",
    scheduledAt: "2026-03-25T11:00:00Z",
    status: "draft",
    clientId: "4",
    clientName: "Modern Dwellings",
  },
];

export function getTodayLeadsCount(): number {
  const today = new Date().toISOString().split("T")[0];
  return leads.filter((l) => l.date === today).length;
}

export function getActiveCampaignsCount(): number {
  return campaigns.filter((c) => c.status === "ACTIVE").length;
}

export function getTotalSpend(): number {
  return campaigns.reduce((sum, c) => sum + c.spend, 0);
}

export function getBestPerformingAd(): Campaign {
  return campaigns.reduce((best, c) => (c.cpl < best.cpl ? c : best));
}
