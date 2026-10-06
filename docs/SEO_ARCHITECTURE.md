# SEO architecture

## URLs
Flat and keyword-first, one segment below the domain, trailing slash: `/{service}-{place}/`, `/digital-marketing-agency-{place}/`, `/{service}-for-{industry}/`, `/{service}/`. `lib/routes.ts` builds the single table and throws on duplicates. Old nested URLs redirect permanently in `next.config.ts`. A URL is never changed without a redirect.

## Per-page technical rules
One H1; unique title (46 characters or fewer) and description (120 to 160); self-referencing canonical on the apex domain; Open Graph and Twitter tags; breadcrumb trail and BreadcrumbList; WebPage, Service (with `areaServed`) and FAQPage JSON-LD; no LocalBusiness schema until a verified address exists; in the sitemap from data; images with alt text.

## Duplicate content
Two checks run in `scripts/seo-check.ts`:
1. Sentence reuse: any sentence of nine or more words appearing on two pages is an error.
2. Swap test: all place names are replaced with a token and every pair of pages is compared by shared four-word phrases. Above 25% is an error (a doorway-style page); above 10% is a warning.

## Indexing decisions
All 163 location pages are indexable and in the sitemap. No page was merged, redirected, noindexed or removed in this rebuild, because every page now carries its own content for a service the place record lists. If a page fails the check and cannot be rewritten, noindex it rather than keep it thin.

## Internal linking
Generated map in `INTERNAL_LINKING_MAP.md`. Every page needs at least two inbound links and five distinct outbound links; orphan pages fail `seo:check`.

## Validation
- `npm run seo:check`: data, metadata, links, claims, duplication, quality score; writes `docs/LOCATION_AUDIT.md`.
- `npm run seo:crawl`: the same plus the rendered HTML of every location page and every internal link found (H1 count, title, canonical, robots, Open Graph, schema, breadcrumbs, call to action, image alt text, broken links). Needs a running server (`SEO_CHECK_URL`).
- `npm test`, `npm run lint`, `npm run build`.

## Not measured here
Core Web Vitals field data, rankings, indexation in Search Console, backlinks.
