# Location architecture

How the location pages of serpmoz.com are built, and how to add one. The system is an engine: a location is a data record, and every page, map, link, schema block and sitemap entry is derived from it. No location information lives in a page component.

## Page types and URLs

| Type | URL | Source | Status |
| --- | --- | --- | --- |
| Index | `/locations/` | all records | live |
| Country | `/locations/{country}/` | record with `kind: "country"` | live |
| Region | `/locations/{region}/` | record with `kind: "region"` (several countries) | live (Europe) |
| City | `/locations/{country}/{city}/` | record with `kind: "city"` | live |
| Service in a city | `/locations/{country}/{city}/{service}/` | `locationServices` in `data/locations/index.ts` | live, two pages |
| Industry in a place | `/locations/{country}/{city}/industries/{industry}/` | not built | planned |

All URLs end with a slash. Slugs are lowercase with hyphens.

### Markets (countries and regions)

India (master page), USA, UK, UAE, Canada, Australia, Singapore, Europe.

### Cities

- India: Delhi, Gurgaon, Noida, Mumbai, Bangalore, Hyderabad, Pune, Jaipur
- UAE: Dubai
- UK: London
- USA: New York
- Canada: Toronto
- Australia: Sydney

### Service in a city

Only Gurgaon has these today: `seo-services` and `ai-seo`. They are written by hand, one at a time, because a page such as "SEO in Pune" is only worth publishing when it says something the city page and the service page do not. Do not generate them from a template.

## Files

```
data/locations/
  records/{slug}.ts        one file per location (cities are named {country}-{city}.ts)
  index.ts                 the registry: lists, lookups, paths, service-in-city pages
  validate.ts              publishing rules, run every time the registry loads
  geo.generated.ts         map outlines (generated, do not edit)
scripts/
  build-location-geo.mjs   regenerates geo.generated.ts          npm run geo
  build-linking-map.ts     regenerates INTERNAL_LINKING_MAP.md   npm run docs:links
  alias.mjs                lets Node run the TypeScript data files for tests and scripts
components/locations/
  location-world-map.tsx   the one map component
  location-page.tsx        the one page layout for country, region and city
app/locations/
  page.tsx                              index
  [country]/page.tsx                    country and region pages
  [country]/[city]/page.tsx             city pages
  [country]/[city]/[service]/page.tsx   service in a city
lib/seo/schema.ts          locationServiceSchema and the shared schema builders
lib/seo/sitemap.ts         the locations group is built from the registry
tests/locations.test.ts    data checks                            npm test
```

## The record

Type: `LocationRecord` in `types/index.ts`.

| Field | Purpose |
| --- | --- |
| `slug`, `kind`, `name`, `inSentence`, `code` | identity; `inSentence` is the name as written mid-sentence ("the UAE") |
| `countryCode`, `continent`, `parent` | geography; `parent` is the market slug and is required for cities |
| `market` | key of the map outline in `geo.generated.ts` |
| `latitude`, `longitude` | marker position; for a market, its label point |
| `aka`, `cluster`, `nearby` | other names people search (Gurugram), the named area (Delhi NCR), neighbouring city slugs |
| `photo` | key in `data/images.ts` |
| `seo` | `title`, `metaDescription`, `primaryKeyword`, `secondaryKeywords`, `searchIntent` |
| `hero` | `title` (the H1) and `description` |
| `facts` | four short facts under the hero |
| `answer` | a question and a direct answer, for search and AI answers |
| `overview`, `discovery`, `searchAi`, `local`, `opportunities`, `considerations` | the body of the page; `local` is for cities |
| `services` | service slug, a title for this place, a line on what it does, and why it matters here |
| `industries` | industry slug and a note specific to this place |
| `whyUs`, `cta` | closing sections |
| `related` | paths of other location pages |
| `caseStudies`, `resources` | slugs |
| `faqs` | five to eight questions |

Body text may contain links written as `[label](/path/)`. They are rendered by `components/ui/rich-text.tsx` and checked by the tests.

## The map

One component, `LocationWorldMap`, draws every location map. It takes a record and nothing else.

- **World view** (tablet and desktop): a dotted world, every market as a faint outline that links to its page and names itself on hover, routes from the selected place to the other markets, and the selected market filled and glowing. Markets too small to see at this scale (UAE, Singapore) get a ring.
- **Close-up** (all sizes; on phones it is the whole map): the market on its own with its cities as markers. Cities link to their pages and name themselves on hover. On a city page the city is the large orange marker, its `nearby` cities are emphasised, and the page's own marker is not a link. Cities that sit on top of each other share one label named after their `cluster`. Labels pick the side of their marker that is clear of other labels and inside the drawing.
- **Caption and chips**: the sentence beside the map and the city links are the text equivalent of the picture.

Outlines are real boundaries from Natural Earth (public domain), taken from the `world-atlas` package and written to `geo.generated.ts` by `scripts/build-location-geo.mjs`. Nothing is drawn by hand. Large markets use the 1:110m set to keep the page light, close-ups of India and the UK use 1:50m, and close-ups of the UAE and Singapore use 1:10m. Europe is the union of 36 countries listed in the script. The world projection is equirectangular and must match `data/world-map.ts`.

Animation is CSS only and sits behind `motion-safe`, so it is off for people who ask for reduced motion.

## SEO rules

- **Title**: `seo.title`, at most 46 characters so the site name fits. Unique.
- **Meta description**: 120 to 160 characters. Unique.
- **H1**: `hero.title`. Unique. One per page.
- **Canonical**: the page's own URL. Open Graph and Twitter tags come from the same fields.
- **Breadcrumbs**: Home, Locations, country, city, with `BreadcrumbList` schema.
- **Schema**: `WebPage`, `Service` with `areaServed` (Country, City or Place with coordinates), `FAQPage`, `BreadcrumbList`.
- **Never `LocalBusiness`.** SERPMOZ is not presented as having an office in any city. Pages say the work is delivered remotely. `areaServed` describes where a service is offered, not where a business is.
- **Sitemap**: `/sitemaps/locations.xml` is built from the registry. Never edit it by hand.
- **No doorway pages.** A city page must say things its country page does not: how people there search, which districts and names matter, which sectors carry weight. If there is not enough to say, do not publish the page.
- **No invented facts.** No statistics, client names, rankings, results or office addresses. Regulation is described in general terms and readers are pointed to their own adviser.

## Publishing rules (enforced)

`validateLocations` runs whenever the registry loads, so `npm run build` and `npm run dev` stop with a list of problems if a record breaks a rule:

- coordinates in range, a map outline for `market`, a valid `parent` for cities, a country code
- hero, call to action, exactly four facts, a photo that exists
- unique title, meta description and H1, within the length limits
- at least four services and three industries, all real slugs
- related locations that exist and are not the page itself; `nearby` cities that exist
- at least five FAQs, three overview paragraphs, four discovery channels; a `local` section on cities

`npm test` adds: every page is in the sitemap, markers fall inside their market's outline, case studies and resources exist, links inside the copy resolve, and the copy contains no office claim or guarantee.

## Adding a location

1. Copy the closest record in `data/locations/records/` and rewrite it. A city file is named `{country}-{city}.ts`.
2. Import it in `data/locations/index.ts` and add it to the `locations` list.
3. Only for a new country or region: add it to `MARKETS` in `scripts/build-location-geo.mjs` with its ISO numeric code, then `npm run geo`.
4. `npm test`, then `npm run docs:links`.

The page, map highlight, marker, breadcrumbs, schema, sitemap entry, index card and links from neighbouring pages all follow from the record. No component changes.

## Quality gate

A page is published when it scores 85 or more out of 100:

| Area | Points | What earns them | How it is checked |
| --- | --- | --- | --- |
| Local relevance | 20 | content that would be wrong if the place name were swapped | read by a person who knows the market |
| Search intent | 15 | title, H1 and opening match what someone searching the primary keyword wants | review against `seo.searchIntent` |
| Content depth | 15 | overview, discovery, search and AI, opportunities and considerations all carry substance | build rules on section counts, then review |
| Service relevance | 10 | each service has a reason specific to this place | review of `services[].why` |
| AEO | 10 | a direct answer near the top and five to eight real questions | build rules, FAQ schema |
| Internal linking | 10 | services, industries, parent, neighbours, resources, links in the copy | tests and `INTERNAL_LINKING_MAP.md` |
| UX | 10 | correct highlight and marker, no overflow from 320px, no console errors, reduced motion respected | browser crawl |
| Technical SEO | 5 | unique title, description and H1, canonical, schema, sitemap | build rules and tests |
| Conversion | 5 | growth audit in the hero, the closing band and the sticky bar | browser crawl |

The last five rows (40 points) are checked by machine and every current page passes them. The first four rows (60 points) are editorial: the drafts were written to meet them, but a draft is not a score. A page should only be treated as passing once a person who knows the market has read it.

## Known limits

- Location copy was drafted with AI and needs review by someone who knows each market before launch, especially statements about regulation, platforms and districts.
- Photos come from the shared library in `data/images.ts`. There is no location-specific photography yet.
- Case study links on location pages go to illustrative scenarios, which are marked noindex and are not in the sitemap by design.
