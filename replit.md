# Talent Forge

India's first AI + Blockchain talent marketplace connecting engineering graduates with companies — built by ResourceIndia.co.

## Run & Operate

- `pnpm --filter @workspace/talent-forge run dev` — run the web app (reads PORT env var)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Web: React 19 + Vite 7, Wouter routing, Framer Motion, Tailwind CSS v4
- Charts: Recharts (employer dashboard spend analytics)
- Toasts: Sonner (all CTA buttons fire waitlist toast)
- Icons: Lucide React
- No backend needed — all mock data

## Where things live

- `artifacts/talent-forge/src/pages/` — all 10 page components
- `artifacts/talent-forge/src/components/` — shared components (Navbar, Footer, TFESGauge, StatCounter, MissionCard, ProjectCard, TalentCard, DashboardSidebar)
- `artifacts/talent-forge/src/index.css` — dark design system, glass-card, btn-gradient, text-gradient, hover-glow utilities
- `artifacts/talent-forge/src/App.tsx` — router + providers

## Architecture decisions

- All 10 routes registered in App.tsx via Wouter's `<Switch>` with WouterRouter base set from `import.meta.env.BASE_URL`
- Dark mode forced globally: `document.documentElement.classList.add("dark")` in App useEffect
- `StatCounter` uses native `IntersectionObserver` (not react-intersection-observer which is not installed)
- All CTAs fire `toast("🚀 Feature coming soon! Join the waitlist.")` via Sonner — no real auth/backend yet
- `DashboardSidebar` accepts `type: "student" | "employer"` — dashboards have no Navbar (sidebar replaces it)

## Product

- **Landing** — Hero with live TFES gauge card, stats, how-it-works, domain coverage, gamification tiers, blockchain proof, testimonials, CTA
- **ForStudents** — Journey timeline, interactive earnings calculator (domain × hours × tier), feature grid
- **ForEmployers** — ROI calculator (industry vs Talent Forge cost), 3-step hiring flow, trust signal metrics
- **ForColleges** — Placement stats, feature cards, institutional pricing tiers, testimonial
- **Assessment** — Interactive 3-question demo (ECE circuit theory), progress tracker, AI hint button, results modal with TFES gauge breakdown
- **Marketplace** — Filterable project cards + talent pool tab, domain filters, search, budget slider
- **StudentDashboard** — Stat cards, TFES gauge, XP progress bar, active missions, recommended projects, recent badge
- **EmployerDashboard** — Project status table, Recharts spend vs industry chart, hiring metrics, top candidates
- **Pricing** — Monthly/annual toggle, 3-tier plans + institution pricing, collapsible FAQ
- **About** — Mission quote, problem/solution narrative, stats, team grid, investors, press logos

## User preferences

- Dark design: #0F172A bg, #1E293B cards, #2563EB primary blue, #38BDF8 electric blue, #F59E0B amber
- Glassmorphism cards, gradient buttons, Inter font
- India-specific: ₹ currency, Bengaluru/Chennai/Coimbatore locations, NSDC mentions

## Gotchas

- Do NOT import `react-intersection-observer` — not installed; use native IntersectionObserver in StatCounter
- `Shield` is NOT locally defined in Landing.tsx — import `ShieldCheck` from lucide-react instead
- Sonner Toaster is in App.tsx as `<Sonner richColors position="bottom-right" />` alongside shadcn `<Toaster />`

## Pointers

- See `pnpm-workspace` skill for monorepo structure and TypeScript setup
- Tailwind v4 config is in `index.css` (`@theme inline {}` block) — no `tailwind.config.js`
