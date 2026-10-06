# SEO audit and standing compliance rules

Audit of the live site at https://serpmoz.com/ on 6 October 2026, and the rules every new page or change must meet from now on. Part A is what was found. Part B is the standing checklist. Part C is the work still open, in priority order.

How this was checked: live pages fetched (home, about, contact, resources, case studies, a city page, robots.txt, sitemap), plus the codebase. Not measured: Core Web Vitals field data, PageSpeed lab scores (the API refused the request), backlinks, rankings, Search Console. Those need the owner's accounts.

---

## Part A. Audit findings

### 1. Brand and positioning

- **Reads as a company, not a tool.** The H1 "AI Can Do the Work. Experts Know What Work Matters." and the services, industries, locations and engagement-model sections make it clear this is a services business. No confusion with Moz, Ahrefs or SE Ranking in the content itself.
- **The name invites the confusion anyway.** "SERP" + "MOZ" reads like an SEO tool, and Moz is a registered brand in this category. Expect brand searches to be corrected to "serp moz". Worth a trademark opinion before spending on brand.
- **The word "agency" appears nowhere.** The site calls itself an "AI-Powered Digital Growth Company". Nobody searches for that. People search "digital marketing agency", "SEO company", "SEO agency". The positioning is distinctive but invisible to the queries that matter.
- **No proof.** No client names, logos, testimonials, reviews, numbers, team, founder, address, phone or email. Case studies are three "Illustrative Growth Scenarios", correctly labelled and set to noindex. This is honest, and it is also the single biggest weakness on the site.
- **Differentiation is real but abstract.** "Accountable for growth, not activity" and "AI accelerated, expert approved" are claims a buyer cannot verify without proof.

### 2. Technical SEO

Good:
- `www` redirects to the apex domain. One canonical host.
- Trailing-slash URLs enforced, self-referencing canonicals, clean lowercase slugs.
- `robots.txt` allows all, blocks `/api/`, names the sitemap.
- Sitemap index with five child sitemaps, generated from data.
- Static pages, system fonts via `geist`, no blur or backdrop filters, images through `next/image`.
- Illustrative case studies are noindex and left out of the sitemap.
- No horizontal overflow from 320px to 1920px, no console errors, on the pages tested.

Problems:
- **Homepage has 26 H2 headings.** Captions inside visuals ("How growth connects", "How a buyer finds you Sample", "Campaigns by qualified outcomes Sample") and all five hero slides are H2s. This buries the real outline.
- **Not indexed, or not visible, for its own name.** A search for the brand returned nothing from the domain. Search Console and Bing Webmaster verification status is unknown.
- **Core Web Vitals unverified.** The homepage is heavy with animation and a pinned scroll section. Needs a real PageSpeed and field-data check on a mid-range Android phone.
- **Scroll control.** The growth-system section steps wheel scrolling and uses scroll snapping on touch. It must be tested on real iOS and Android; a section that traps scrolling hurts engagement.
- **`AUDIT_WEBHOOK_URL`** must be set in production or the forms go nowhere.
- **`/resources/#ai-search`** is in the menu as if it were a page. It is an anchor.

### 3. On-page SEO

- **Titles and descriptions are unique and the right length** on all 38 service pages and 21 location pages.
- **One H1 per page.** Good.
- **Titles are not built around what people type.**
  - Home: "SERPMOZ | AI-Powered Digital Growth Company". No "digital marketing agency", no "SEO".
  - Country: "Digital Growth in India". The query is "digital marketing agency in India".
  - City: "Digital Growth & SEO Services in Gurgaon". Closer, but "SEO company in Gurgaon" and "digital marketing agency in Gurgaon" are absent from title, H1 and body.
- **Service pages are the strongest asset.** About 1,900 words each, a direct answer near the top, nine FAQs, comparison tables, WebPage, Service, FAQ and Breadcrumb schema.
- **Internal linking is good inside services and locations**, weaker from articles to services and from services to locations.
- **"Reviewed by the SERPMOZ … team on 6 Oct 2026"** is shown on every service page. No named person has reviewed them. This is an unverified claim and must be made true or removed.

### 4. Content and topical authority

- **Five articles, all dated the same day, all by "SERPMOZ Research".** Quality is above average (argued positions, not keyword filler) but five posts with no named author build no topical authority.
- **Eight research areas are listed with no content behind most of them.** Empty clusters look like a promise not kept.
- **No industry content beyond the industry landing pages.** No "SEO for dentists", "real estate lead generation in Gurgaon", "SaaS SEO pricing" depth pieces.
- **No pricing content, no "cost of SEO in India", no comparison content ("agency vs in-house", "SEO vs Google Ads" exists only inside service pages).** These are high-intent queries that newer sites can win.
- **No original data.** "Reports" exists as a page with nothing in it.

### 5. Local SEO

- **21 location pages with real geography, unique copy and a map.** Structurally ahead of most agency sites.
- **No NAP anywhere.** No address, phone or email on the site, contact page or footer.
- **No Google Business Profile visible.** Without one, the site cannot appear in the map pack for "near me" or "[service] in [city]" at all.
- **No LocalBusiness schema.** Correct for now, because there is no verified address. It becomes a gap the day there is one.
- **No reviews** on Google, Clutch, GoodFirms, Sortlist or DesignRush.
- **Thirteen cities, one company.** Without a real presence, Dubai, London, New York, Toronto and Sydney pages are competing against agencies with an office, a profile and reviews in those cities. They will be slow.
- **Local phrasing is missing.** "near me", "in [city]", locality names (Cyber City, DLF, Sohna Road) appear in body copy but not in titles, H2s or FAQs as the queries are typed.

### 6. Keyword strategy

- **Generic bucket: weak.** "Digital marketing agency", "SEO company", "SEO agency", "digital marketing company" are not targeted by any title or H1. The homepage targets a phrase with no search demand.
- **Local bucket: structurally strong, lexically weak.** The pages exist and are deep. They do not use the head terms.
- **Long-tail and AI-search bucket: strongest.** AEO, GEO, AI SEO service pages and the article on measuring AI visibility are differentiated and competition is thin.
- **Verdict:** stronger on emerging terms (AI search) and on service-level informational intent; weakest on the commercial head terms and on anything that needs local proof.

### 7. E-E-A-T and trust

| Signal | State |
| --- | --- |
| Named founder or leadership | Absent |
| Team bios with credentials | Absent |
| Named authors on articles | Absent ("SERPMOZ Research") |
| Real case studies with numbers | Absent (three illustrative scenarios) |
| Testimonials, reviews | Absent |
| Client logos | Absent |
| Address, phone, email | Absent |
| Company registration, GST, year founded | Absent |
| Third-party profiles and mentions | None found |
| Social profiles | None linked |
| Certifications (Google Partner, Meta) | Absent |
| Privacy, terms, cookie, accessibility pages | Present |
| Honest wording (no guarantees, samples labelled) | Present and consistent |

The site is honest and well argued, and anonymous. For a "your money" category, anonymity is the problem.

### 8. Gaps, ranked by how much they cost

1. No identity: who runs this, where, how to reach them.
2. No proof: no real client outcome anywhere.
3. No Google Business Profile, no reviews, no NAP.
4. Head terms not targeted on home, country or city pages.
5. Too few articles, no named authors, no industry or pricing clusters.
6. Homepage heading structure.
7. Thirteen cities with no presence signal in any of them.
8. Unverified "Reviewed by" line on 38 pages.
9. No backlinks or third-party listings.
10. Core Web Vitals and indexation unmeasured.

---

## Part B. Standing compliance checklist

Every new page and every change to an existing page must pass these. They sit alongside the existing rules: no invented clients, numbers, awards, offices or guarantees.

### Identity and honesty
- [ ] No claim that cannot be shown to be true. No "leading", "best", "#1", "trusted by N".
- [ ] No "Reviewed by" or author line unless a named, real person did it.
- [ ] No office, address or phone on a page unless it exists. LocalBusiness schema only with a verified address.
- [ ] Samples and scenarios are labelled as samples and stay noindex.
- [ ] Facts that change (platform rules, pricing, regulation) are dated or written generally.

### Every page
- [ ] One H1. It contains the page's primary keyword in natural words.
- [ ] H2s are section headings only. Captions, labels and card titles inside visuals are not headings.
- [ ] Heading levels do not skip.
- [ ] Unique title, 60 characters or fewer including the brand, primary keyword near the front.
- [ ] Unique meta description, 120 to 160 characters, says what the page offers and to whom.
- [ ] Self-referencing canonical on the apex domain with a trailing slash.
- [ ] Open Graph title, description and image.
- [ ] Visible breadcrumbs and BreadcrumbList schema on everything below the homepage.
- [ ] In the sitemap automatically (from data), unless it is deliberately noindex.
- [ ] A direct answer to the page's main question in the first screen of body copy.
- [ ] At least three contextual internal links in the copy, not only in grids: one up (parent), one across (sibling), one to a conversion page.
- [ ] One primary call to action (Growth Audit) above the fold and again at the end.
- [ ] Images have dimensions, descriptive alt text, and are lazy below the fold.
- [ ] No horizontal scroll from 320px to 1920px. No console errors. Works with reduced motion.
- [ ] No wasted space: in two-column sections the shorter column is pinned while the longer one scrolls (`ColumnBalance`); use `overflow-clip`, not `overflow-hidden`, on section panels so pinning works. Text links get a touch-sized hit area on phones.
- [ ] Pages with nothing to show yet (for example Reports before the first report) are `noindex` and out of the sitemap.
- [ ] A long article headline gets a shorter `seoTitle` (about 55 characters) for search results.
- [ ] `npm run lint`, `npm test` and `npm run build` pass.

### Keyword mapping
- [ ] One primary keyword per URL. No two URLs share a primary keyword.
- [ ] The primary keyword is in the title, H1, first 100 words and one H2, as people type it.
- [ ] Head terms use the words buyers use: "agency", "company", "services".
- [ ] Record the mapping in the page's data (`seo.primaryKeyword`, `secondaryKeywords`, `searchIntent`).

| Page type | URL | Primary keyword pattern |
| --- | --- | --- |
| Home | `/` | digital marketing agency (+ brand line) |
| Service | `/{service}/` | [service] services / agency / company |
| Service in a place | `/{service}-{place}/` e.g. `/local-seo-services-delhi/`, `/seo-services-india/` | [service] company in [place] |
| Place | `/digital-marketing-agency-{place}/` | digital marketing agency in [place] |
| Service for a sector | `/{service}-for-{industry}/` | [service] for [industry] |
| Industry | `/industries/{industry}/` | digital marketing for [industry] |
| Article | `/resources/{slug}/` | a question or comparison, never a head term a service page owns |

URL rules:
- Commercial pages live one level below the domain and are named for the search, service first. No `/locations/country/city/` nesting; hierarchy is shown by breadcrumbs and links.
- `lib/routes.ts` is the single table of flat URLs. Two pages may never claim the same one; the build stops if they do.
- When a URL changes, add a permanent redirect in `next.config.ts`.
- Link from the ground up: a service-in-a-city page links to the same service in nearby cities and in its country, to the other services in that city, to the city page and to the general service page.

### Service pages
- [ ] Follows the master service page structure (answer, problems, pillars, process, timeline, outcomes, comparison, fit, FAQs).
- [ ] Six to nine FAQs that are real questions, with FAQPage schema.
- [ ] Service schema with `areaServed` and an offer catalogue.
- [ ] Links to at least two related services, one industry and one location.

### Location pages
- [ ] Passes `validateLocations`, `npm test` and `npm run seo:check` with no errors; score 85 or more.
- [ ] Says only what is true without local experience: common-knowledge facts, how the service works, what SERPMOZ does. No claims about how people in the place search, choose or behave, no market size, growth, competition or adoption statements.
- [ ] No lists of localities written for keywords, no "near me" sections. A locality may appear only where it helps set up a listing or page correctly.
- [ ] States plainly, once, that the market is served remotely. No "our office", "our team in", "local team".
- [ ] One plain H1 ("AI SEO Services in Gurgaon"), a 40 to 80 word answer first, five to eight real FAQs, an honest "what nobody can promise" block.
- [ ] Related links are relevant: parent market, nearby cities of the same market, other services in the place. No cross-links to unrelated cities.
- [ ] Written by hand, one at a time. No templates; the swap test (place names removed) must not show near-duplicates.

### Articles
- [ ] Named author with a bio page, publish date, last-updated date.
- [ ] Article schema with `author` as a Person.
- [ ] Belongs to a cluster and links to its pillar service page and two sibling articles.
- [ ] Contains something original: a method, a worked example, data, or a clear position.

### Trust (as it becomes available)
- [ ] Real case study: client approved in writing, baseline, what was done, measured change, period, method. Then `illustrative: false`.
- [ ] Testimonials with name, role, company, and permission on file.
- [ ] Review counts and ratings only when pulled from a live third-party profile.

---

## Part C. Open work, in priority order

Needs the owner (cannot be built without real facts):
1. Founder and team: names, roles, photos, LinkedIn. Author pages follow from this.
2. Real business address, phone, email, registration details, founding year.
3. Google Business Profile for the real location; then NAP in the footer and contact page, LocalBusiness schema, and a reviews process.
4. One real case study with numbers, even a small one. Then a second.
5. Search Console and Bing Webmaster verified; sitemap submitted; indexation checked.
6. Listings on Clutch, GoodFirms, DesignRush, Sortlist, LinkedIn company page.
7. A decision on the brand name and the Moz trademark.

Done on 6 October 2026:
- Flat URLs: `/{service}-{place}/` (142 pages written, one per service listed on each place), `/digital-marketing-agency-{place}/`, `/{service}-for-{industry}/`. Old nested URLs redirect permanently.
- Logo system in `public/brand/`, documented in `docs/BRAND_IDENTITY.md`.
- Home, country and city pages retitled around "digital marketing agency in [place]" with "SEO company" in the H1, description and FAQs. Each page still states that work is delivered remotely.
- Homepage outline: one H1 ("AI-Powered Digital Marketing Agency and SEO Company"); hero slide headlines and footer column titles are no longer headings.
- "Reviewed by" line and its schema removed from all service pages.
- City pages: a head-term FAQ and a "near me" FAQ each; country pages: a "how to choose" FAQ. Eight FAQs per location.
- Article series: AI search, local SEO, and pricing and choosing an agency. Five pieces each, linked to each other and to a pillar page (`clusters` in `data/resources/articles.ts`).
- Service-for-industry pages at `/industries/{industry}/{service}/`: nine written (`data/industries/services/`). To add one, write a record file there and add it to the list in `index.ts`.

Still open from this list:
- Articles and sector pages are AI drafts by "SERPMOZ Research". They need a named author and a read by someone who knows each sector, especially the regulation notes.
- "Digital marketing agency in [city]" titles sit on pages for cities where there is no office. The copy says so; a Google Business Profile for the real location is still what makes local rankings possible.
- Decide which cities are real targets.
- Run PageSpeed on mobile for home, a service page, a city page and a sector page.

Originally listed as buildable:

1. Retitle home, country and city pages around "digital marketing agency" and "SEO company" patterns, keeping the growth-company line as positioning.
2. Fix the homepage heading outline: section headings only.
3. Remove or replace the "Reviewed by" line until a named reviewer exists.
4. Add "near me" and head-term FAQs to city pages.
5. Article programme: three clusters first (AI search, local SEO, pricing and buying an agency), four to six pieces each, tied to service pillars.
6. Industry depth pages: service for industry (for example "SEO for real estate developers").
7. Decide which cities are real targets. Keep the home market and its cities as the priority; treat distant cities as secondary until there is proof there.
8. Run PageSpeed on mobile for home, a service page and a city page; fix what it finds.
