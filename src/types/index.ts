export type Client = {
  id: string;
  name: string;
  slug: string;
  fbPageId?: string;
  fbPageName?: string;
  connected: boolean;
};

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  clientId: string;
  clientName: string;
  date: string;
};

export type Campaign = {
  id: string;
  name: string;
  status: "ACTIVE" | "PAUSED";
  budget: number;
  spend: number;
  leads: number;
  cpl: number;
  clientId: string;
};

export type ScheduledPost = {
  id: string;
  text: string;
  imageUrl?: string;
  scheduledAt: string;
  status: "scheduled" | "published" | "draft";
  clientId: string;
  clientName: string;
};
