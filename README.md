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
  [service]/            18 service pages from data/services (/seo-services/, /google-ads/ …)
  growthos/[module]/    GrowthOS module pages (/growthos/ai-search/, /seo/, /revenue/)
  industries/[slug]/    20 industry pages
  locations/…           country → city → service × location
  resources/[slug]/     Articles; /guides/ and /reports/ are filtered indexes
  api/growth-audit/     Form endpoint (validation, spam traps, rate limit)
  sitemap.xml/ sitemaps/[file]/   Sitemap index + one sitemap per content type
components/
  ui/                   Button, CtaLink, Badge, GlassPanel, MetricCard, Photo
  layout/               Section, SectionHeader, PageHero, PhotoBand, Reveal
  navigation/ footer/   Header with mega menu, mobile sheet, footer
  sections/             The fifteen homepage sections, one file each
  growthos/             Product UI: GrowthosPreview, AiSearchPanel and the reusable panels
                        (SearchOpportunityTable, RevenueAttribution, CompetitorPanel,
                        PlatformVisibility, AIInsightPanel)
  charts/               TrendChart, Sparkline, Ring, Donut, StackedBar, Bars, Funnel, CountUp
  visuals/              Diagrams: SignalField, Ecosystem, GrowthPath, MethodLoop, WorldMap,
                        Venn, StageVisual, CapabilityVisual
  industries/ services/ resources/ forms/ seo/
data/                   All copy and structured content. Edit here, not in components.
  images.ts             Every photograph, with alt text (Unsplash, reviewed by eye)
  resources/articles.ts Published articles
  dashboard.ts growthos.ts   Sample figures for product previews (always labelled)
  world-map.ts          Generated dot map (Natural Earth 110m)
lib/
  config/site.ts        Brand, navigation, CTAs, social links
  seo/                  Metadata builder, JSON-LD builders, sitemap groups
  forms/audit.ts        Zod schema + country-aware phone rules, shared by form and API
  server/               Webhook delivery and rate limiter (swap for DB/KV later)
  analytics/            Vendor-neutral dataLayer events
app/globals.css         Design tokens (colour, type scale, radius, shadow, glass, stage, motion)
```

## Design system

Tokens are defined once in `app/globals.css` under `@theme` and used through Tailwind
utilities (`bg-navy`, `text-muted`, `border-line`, `text-h2`, `glass`, `stage`, `label-mono`, `shell`).
Do not add raw hex values to components.

- **Light by default.** The navy `stage` is used for the hero, the AI Search and GrowthOS
  showcases, inner-page heroes and the closing CTA.
- **Orange** is reserved for the primary action and the "revenue" end-state.
- **Glass** is reserved for the header and floating product chrome. Never nest it.
- **Photography** goes through `<Photo>`, which applies one tonal treatment and loads
  responsive AVIF/WebP straight from the Unsplash CDN. Swap images in `data/images.ts`.
- **Motion** is CSS for reveals and ambient lines, Framer Motion for charts, counters and the
  scroll-driven growth system. Everything respects `prefers-reduced-motion`.

## Content rules built into the code

- Product previews read from `data/dashboard.ts` and `data/growthos.ts` and always render an
  "Illustrative data" / "Sample" label. Keep that label if you change the figures.
- The Evidence section and the case-study section show the *format* of proof, with no figures.
  Replace them with real, permissioned material only.
- The platform strip in the hero is labelled "Platforms we work across". Do not turn it into
  a logo wall unless a formal partnership exists.
- Location pages are generated only for entries in `data/locations`. Add a page when there is
  something specific to say about the place; do not fan out by city name.
- Articles in `data/resources/articles.ts` must not contain invented statistics.

## Analytics events

Pushed to `window.dataLayer` (loaded into GTM only when `NEXT_PUBLIC_GTM_ID` is set):
`cta_click` (any element with `data-cta`), `nav_click`, `scroll_depth` (25/50/75/100),
`service_explore`, `growthos_module_view`, `interaction`, `audit_form_start`,
`audit_form_submit`, `audit_form_error`. No personal data is ever included.

## Before launch

1. **Form delivery**: set `AUDIT_WEBHOOK_URL` (CRM, Zapier, Make, n8n or your own API). Without it,
   production submissions are rejected on purpose so that no lead is silently lost.
2. **Legal pages**: `data/legal.ts` is starter copy. Have it reviewed and add company details.
3. **Social links**: add profile URLs in `lib/config/site.ts`; empty ones render as plain text.
4. **Contact email**: set `NEXT_PUBLIC_CONTACT_EMAIL` to show it on the contact and careers pages.
5. **Articles**: the six pieces in `data/resources/articles.ts` are bylined "SERPMOZ Research".
   Have a strategist review each before treating it as the company's published view.
6. **Service copy**: `data/services` describes how SERPMOZ works (review process, account
   ownership, NDAs). Confirm each statement matches how you actually operate.
7. **Analytics**: set `NEXT_PUBLIC_GTM_ID` and add a consent banner where the law requires one.
8. **Rate limiting**: the built-in limiter is per-instance. Add Vercel Firewall or Cloudflare rules.

## Deployment

Vercel: import the repository, add the variables from `.env.example`, deploy. Nothing in the
code depends on Vercel-only APIs, so it also runs on any Node host (`npm run build && npm start`)
or behind Cloudflare.

## GrowthOS

The marketing site stays on `serpmoz.com`; the product is planned for `app.serpmoz.com`.
Set `NEXT_PUBLIC_APP_URL` when it exists and the GrowthOS page CTA will point to it. Form
delivery (`lib/server/audit-delivery.ts`) and rate limiting are isolated so they can move to
PostgreSQL/KV without touching UI code.
