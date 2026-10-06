# SEO content system

How location and service-in-a-place content is modelled, written and checked. The model is the `LocalServicePage` type in `types/index.ts`; the pages live in `data/locations/services/{place}.ts`; the component is `components/locations/local-service-page.tsx`.

## The page model

| Field | Purpose | Rule |
| --- | --- | --- |
| `seo` | title, meta description, primary and secondary keywords | title 46 characters or fewer, description 120 to 160, unique across the site |
| `h1` | plain service and place | "AI SEO Services in Gurgaon" |
| `intro` | what it is, who it suits, the problem, why this place | no invented local behaviour |
| `answer` | question and a 40 to 80 word direct answer | says what the service is, what it does, and one limit |
| `context` | three paragraphs of reasoning | facts common to the place, then how the service applies |
| `audiences` | three kinds of business it suits | described by their problem, not by invented local statistics |
| `challenges` | three or four things that shape the work | |
| `approach` | five stages | the method; the AI and expert split is shared per service |
| `expectations` | two paragraphs and three "not guaranteed" items | rankings, traffic, leads, AI citations are never promised |
| `sectors` | three industry slugs with a note | links to sector pages |
| `faqs` | five to eight real questions | one must explain remote delivery; FAQPage schema is generated from them |

Shared blocks (what the service includes, deliverables, AI accelerates, experts decide) come from the service record, so they are the same on every page for that service by design. They are excluded from the uniqueness checks.

## Page order

Hero and answer, what the service includes, why this place, who it is for, what shapes the work, how SERPMOZ approaches it, what happens and what you receive, industries, FAQs, related links, final call to action.

## Quality score

`npm run seo:check` scores every location page out of 100 and writes `docs/LOCATION_AUDIT.md`. Target 85 or more.

| Criterion | Points | Measured by |
| --- | --- | --- |
| Search intent | 20 | plain H1 with service and place, FAQ count |
| Content depth | 15 | words of its own against a minimum |
| Expertise and accuracy | 15 | no claim, presence or promise errors; limits stated |
| Location relevance | 15 | distinctness once place names are removed |
| Semantic and answer coverage | 10 | question-led FAQs with substantive answers |
| Internal linking | 10 | links out and links in |
| UX | 5 | shared components |
| Conversion | 5 | shared components |
| Technical SEO | 5 | metadata and sitemap checks |

The score is a machine reading. It cannot tell whether a statement is true or useful. Each page still needs a person who knows the service and, for market facts, the place.

## Adding or changing a page

1. Write or edit the page object. Follow `CONTENT_STYLE_GUIDE.md`.
2. `npm test` and `npm run seo:check` must pass with no errors.
3. After building and starting the site, `npm run seo:crawl` checks the rendered pages.
4. Update `docs/INTERNAL_LINKING_MAP.md` with `npm run docs:links`.
