# Empower Agency Dashboard

Marketing agency dashboard for managing multiple clients' Facebook ads, page posts, and CRM leads.

**Live:** [agency.empowerbuilding.ai](https://agency.empowerbuilding.ai)

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase Auth
- Facebook Graph API

## Getting Started

```bash
npm install
cp .env.example .env.local
# Fill in your Supabase and Facebook credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/login` - Email/password login
- `/` - Dashboard overview with client switcher
- `/leads` - Leads table with client filtering
- `/ads` - Facebook ad campaign management
- `/posts` - Post composer and scheduler
- `/settings` - Facebook OAuth and connected pages
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## Clients

- Barnhaus Steel Builders
- Showcase Builders
- CW Custom Builders
- Modern Dwellings
