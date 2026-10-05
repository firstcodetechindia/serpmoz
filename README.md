# SERPMOZ website

Marketing site for **serpmoz.com**: AI-Powered Digital Growth Company.
Next.js (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui conventions (Radix + CVA) · Framer Motion · Lucide.

## Run it

```bash
cd "/Volumes/My Work/Development/serpmoz"
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` / `npm start` | Production build and server |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |
| `npm test` | Form validation tests (Node test runner) |

Requires Node 22.18 or newer.

## Where things live

```
app/                    Routes. One folder per URL; dynamic folders read from data/
  [service]/            /seo-services/, /ai-seo-services/ … (11 pages from data/services)
  industries/[slug]/    20 industry pages
  locations/…           country → city → service × location
  api/growth-audit/     Form endpoint (validation, spam traps, rate limit)
  sitemap.xml/ sitemaps/[file]/   Sitemap index + one sitemap per content type
components/
  ui/                   Button, CtaLink (shadcn-style primitives)
  layout/               Section, SectionHeader, PageHero, Reveal
  navigation/ footer/   Header with mega menu, mobile sheet, footer
  hero/ growth/ services/ growthos/ dashboard/ industries/ locations/
  case-studies/ resources/ forms/ seo/
data/                   All copy and structured content. Edit here, not in components.
lib/
  config/site.ts        Brand, navigation, CTAs, social links
  seo/                  Metadata builder, JSON-LD builders, sitemap groups
  forms/audit.ts        Zod schema shared by the form and the API
  server/               Webhook delivery and rate limiter (swap for DB/KV later)
  analytics/            Vendor-neutral dataLayer events
app/globals.css         Design tokens (colour, type scale, radius, shadow, glass, motion)
```

## Design system

Tokens are defined once in `app/globals.css` under `@theme` and used through Tailwind
utilities (`bg-navy`, `text-muted`, `border-line`, `text-h2`, `glass`, `label-mono`, `shell`).
Do not add raw hex values to components.

- **Orange** is reserved for the primary action and the "revenue" end-state.
- **Glass** (`.glass`) is reserved for product UI, the floating header and metric panels.
- **Navy surfaces** are used once per page at most (closing CTA) plus small emphasis panels.

## Content rules built into the code

- Product mock-ups read from `data/dashboard.ts` and `data/growthos.ts` and always render an
  "Illustrative data" label. Keep that label if you change the figures.
- `data/growth.ts → trustSlots`, `data/resources → articles` and the case-study section are
  honest placeholders. Replace them with real, permissioned material only.
- Location pages are generated only for entries in `data/locations`. Add a page when there is
  something specific to say about the place; do not fan out by city name.

## Before launch

1. **Form delivery**: set `AUDIT_WEBHOOK_URL` (CRM, Zapier, Make, n8n or your own API). Without it,
   production submissions are rejected on purpose so that no lead is silently lost.
2. **Legal pages**: `data/legal.ts` is starter copy. Have it reviewed and add company details.
3. **Social links**: add profile URLs in `lib/config/site.ts`; empty ones render as plain text.
4. **Contact email**: set `NEXT_PUBLIC_CONTACT_EMAIL` to show it on the contact and careers pages.
5. **Service copy**: `data/services` describes how SERPMOZ works (review process, account
   ownership, NDAs). Confirm each statement matches how you actually operate.
6. **Analytics**: set `NEXT_PUBLIC_GTM_ID` and add a consent banner where the law requires one.
7. **Rate limiting**: the built-in limiter is per-instance. Add Vercel Firewall or Cloudflare rules.

## Deployment

Vercel: import the repository, add the variables from `.env.example`, deploy. Nothing in the
code depends on Vercel-only APIs, so it also runs on any Node host (`npm run build && npm start`)
or behind Cloudflare.

## GrowthOS

The marketing site stays on `serpmoz.com`; the product is planned for `app.serpmoz.com`.
Set `NEXT_PUBLIC_APP_URL` when it exists and the GrowthOS page CTA will point to it. Form
delivery (`lib/server/audit-delivery.ts`) and rate limiting are isolated so they can move to
PostgreSQL/KV without touching UI code.
