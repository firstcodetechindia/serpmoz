// SEO and content validation for every location-related page.
//
//   npm run seo:check            checks the data and writes docs/LOCATION_AUDIT.md
//   npm run seo:crawl            also fetches each page from a running site
//                                (SEO_CHECK_URL, default http://localhost:3000) and
//                                checks the rendered HTML
//
// It fails (exit code 1) on errors: duplicate or missing metadata, repeated
// sentences, near-duplicate pages, unsupported claims, orphan pages, broken
// links. Warnings and the quality score are for editorial review.
import { writeFileSync } from "node:fs";
import { getIndustry } from "../data/industries/index.ts";
import { industryServicePath, industryServices } from "../data/industries/services/index.ts";
import { citiesOf, getLocation, locationPath, locations } from "../data/locations/index.ts";
import { localServicePath, localServices, localServicesFor, localServicesIn } from "../data/locations/services/index.ts";
import { articles } from "../data/resources/index.ts";
import { getService } from "../data/services/index.ts";
import { sitemapGroups } from "../lib/seo/sitemap.ts";
import type { LocalServicePage, LocationRecord } from "../types/index.ts";

type Kind = "Country" | "City" | "Service + Country" | "Service + City";
type Row = {
  path: string;
  kind: Kind;
  title: string;
  description: string;
  h1: string;
  /** The words only this page carries */
  own: string[];
  /** Short list items stating what nobody can promise; the same limit may be worded the same way */
  limits: string[];
  /** Every place name that may appear in it, for the swap test */
  places: string[];
  faqs: { q: string; a: string }[];
  out: string[];
  score: number;
  notes: string[];
};

const errors: string[] = [];
const warnings: string[] = [];
const sitemap = new Set(Object.values(sitemapGroups).flatMap((g) => g().map((e) => e.path)));
const words = (s: string) => s.toLowerCase().match(/[a-z0-9']+/g) ?? [];
const count = (texts: string[]) => texts.reduce((n, t) => n + words(t).length, 0);
const linksIn = (value: unknown) => [...JSON.stringify(value).matchAll(/\]\((\/[^)\s#]*)/g)].map((m) => m[1]);
const marketOf = (l: LocationRecord) => (l.kind === "city" ? getLocation(l.parent!)! : l);
const namesOf = (l: LocationRecord) => [l.name, ...(l.aka ?? []), l.inSentence.replace(/^the /, "")];

/* ------------------------------------------------------------------ inventory */
const rows: Row[] = [];

for (const l of locations) {
  const own = [
    l.hero.description, l.answer.text, ...l.overview.paragraphs, l.discovery.intro, ...l.discovery.channels.map((c) => c.body),
    ...l.searchAi.paragraphs, ...(l.local ? [...l.local.paragraphs, ...l.local.points] : []), ...l.opportunities.map((o) => o.body),
    ...l.services.flatMap((s) => [s.body, s.why]), ...l.industries.map((i) => i.note), ...l.considerations.map((c) => c.body), ...l.whyUs.map((w) => w.body),
  ];
  const local = localServicesIn(l.slug);
  rows.push({
    path: locationPath(l),
    kind: l.kind === "city" ? "City" : "Country",
    title: l.seo.title,
    description: l.seo.metaDescription,
    h1: l.hero.title,
    own,
    limits: [],
    places: namesOf(l),
    faqs: l.faqs,
    out: [
      ...linksIn(l), ...l.related, ...local.map(localServicePath), ...l.industries.map((i) => `/industries/${i.slug}/`),
      ...(l.kind === "city" ? [locationPath(marketOf(l)), ...(l.nearby ?? []).map((n) => locationPath(getLocation(n)!))] : citiesOf(l.slug).map(locationPath)),
      ...l.resources.map((r) => `/resources/${r}/`),
    ],
    score: 0,
    notes: [],
  });
}

const ownOf = (p: LocalServicePage) => [
  p.intro, p.answer.text, ...p.context.paragraphs, ...p.audiences.map((a) => a.body), ...p.challenges.map((c) => c.body),
  ...p.approach.map((a) => a.body), ...p.expectations.paragraphs, ...p.sectors.map((s) => s.note),
];

for (const p of localServices) {
  const place = getLocation(p.place)!;
  const service = getService(p.service)!;
  const market = marketOf(place);
  const near = place.kind === "city" ? citiesOf(market.slug).filter((c) => (place.nearby ?? []).includes(c.slug)) : citiesOf(place.slug);
  rows.push({
    path: localServicePath(p),
    kind: place.kind === "city" ? "Service + City" : "Service + Country",
    title: p.seo.title,
    description: p.seo.metaDescription,
    h1: p.h1,
    own: ownOf(p),
    limits: p.expectations.notGuaranteed,
    places: [...namesOf(place), ...namesOf(market)],
    faqs: p.faqs,
    out: [
      `/${service.slug}/`, locationPath(place), ...(place.kind === "city" ? [locationPath(market)] : []),
      ...localServicesIn(p.place).filter((x) => x.service !== p.service).map(localServicePath),
      ...[...(place.kind === "city" ? [market] : []), ...near].flatMap((l) => localServicesFor(p.service).filter((x) => x.place === l.slug).map(localServicePath)),
      ...p.sectors.map((s) => `/industries/${s.slug}/`),
      ...articles.filter((a) => a.relatedServices.includes(service.slug)).slice(0, 3).map((a) => `/resources/${a.slug}/`),
    ],
    score: 0,
    notes: [],
  });
}

/* ------------------------------------------------------------------ metadata */
for (const field of ["title", "description", "h1", "path"] as const) {
  const seen = new Map<string, string>();
  for (const r of rows) {
    const v = r[field];
    if (!v) errors.push(`${r.path}: missing ${field}`);
    // A place page and its own H1 may match its title; duplicates across pages may not.
    if (seen.has(v)) errors.push(`${r.path}: ${field} duplicates ${seen.get(v)}`);
    seen.set(v, r.path);
  }
}
for (const r of rows) {
  if (r.title.length > 46) errors.push(`${r.path}: title is ${r.title.length} characters (46 at most, so the brand fits)`);
  if (r.description.length < 120 || r.description.length > 160) errors.push(`${r.path}: description is ${r.description.length} characters (120 to 160)`);
  if (!/^\/[a-z0-9-]+\/$/.test(r.path)) errors.push(`${r.path}: URL must be one lowercase segment with a trailing slash`);
  if (!sitemap.has(r.path)) errors.push(`${r.path}: not in the sitemap`);
  if (/\b(best|top|leading|#1|no\.? ?1)\b/i.test(`${r.title} ${r.h1}`)) errors.push(`${r.path}: superlative in title or H1`);
  if (r.faqs.length < 5 || r.faqs.length > 8) errors.push(`${r.path}: ${r.faqs.length} FAQs (5 to 8)`);
  if (new Set(r.faqs.map((f) => f.a)).size !== r.faqs.length) errors.push(`${r.path}: two FAQs share an answer`);
}

/* ------------------------------------------------------------------ links and orphans */
const known = new Set([...sitemap, ...industryServices.map(industryServicePath)]);
const inbound = new Map<string, Set<string>>();
for (const r of rows) {
  for (const to of new Set(r.out)) {
    if (to === r.path) continue;
    if (!known.has(to) && !to.startsWith("/case-studies/")) errors.push(`${r.path}: links to ${to}, which does not exist`);
    inbound.set(to, (inbound.get(to) ?? new Set()).add(r.path));
  }
}
// Service pages link to every place they are written for.
for (const p of localServices) inbound.set(localServicePath(p), (inbound.get(localServicePath(p)) ?? new Set()).add(`/${p.service}/`));
for (const l of locations) inbound.set(locationPath(l), (inbound.get(locationPath(l)) ?? new Set()).add("/locations/"));
for (const r of rows) {
  const n = inbound.get(r.path)?.size ?? 0;
  if (n === 0) errors.push(`${r.path}: orphan page, nothing links to it`);
  else if (n < 2) warnings.push(`${r.path}: only one page links to it`);
  if (new Set(r.out).size < 5) warnings.push(`${r.path}: fewer than five related links`);
}

/* ------------------------------------------------------------------ claims and wording */
const unsupported = /\b(increasingly|rapidly|overwhelming majority|almost all (businesses|companies|firms|buyers|people)|thousands of (businesses|companies|firms|customers|people)|most (companies|businesses|buyers|people) (here|in|there)|highly competitive|is growing (fast|quickly)|booming)\b/i;
const presence = /\b(our|visit our) [a-z ]{0,24}(office|team in|specialists in)\b|\blocal (team|office|specialists)\b/i;
const promise = /\b(we guarantee|guaranteed (rankings?|results|leads|traffic)|(we|you|your (site|business|pages?)) will rank|first page guaranteed)\b/i;
// Saying there is no office is the opposite of claiming one.
const denial = /\b(no|not claim an?|not have an?|without an?|nor an?|or an?) (local )?(office|team|staff)[a-z ,]{0,40}/gi;
const figures = /[%₹$£€]|\b\d+(\.\d+)?\s?(percent|per cent|million|billion|crore|lakh)\b/i;
for (const r of rows) {
  const text = [...r.own, ...r.limits, ...r.faqs.map((f) => f.a)].join(" ");
  const claims = text.replace(denial, " ");
  for (const [label, re] of [["unsupported local claim", unsupported], ["implies a local presence", presence], ["promise", promise], ["statistic or price", figures]] as const) {
    const m = claims.match(re);
    if (m) errors.push(`${r.path}: ${label}: "${claims.slice(Math.max(0, m.index! - 40), m.index! + 60).trim()}"`);
  }
  if (/[–—]/.test(text)) errors.push(`${r.path}: en or em dash`);
  if (!/remote/i.test(text)) warnings.push(`${r.path}: never says how the market is served (remote delivery)`);
  const named = r.places.slice(0, 2).reduce((n, name) => n + (text.split(name).length - 1), 0);
  const density = named / Math.max(1, count([text]) / 100);
  if (r.kind.startsWith("Service") && density > 1.6) warnings.push(`${r.path}: place name used ${named} times (${density.toFixed(1)} per 100 words)`);
}

/* ------------------------------------------------------------------ duplication */
// 1. No sentence may be reused between pages.
const sentences = new Map<string, string>();
let repeated = 0;
for (const r of rows) {
  for (const s of [...r.own, ...r.faqs.map((f) => f.a)].flatMap((t) => t.split(/(?<=[.?]) /))) {
    if (words(s).length < 9) continue;
    const prior = sentences.get(s);
    if (prior && prior !== r.path) {
      repeated++;
      if (repeated <= 25) errors.push(`${r.path}: repeats a sentence from ${prior}: "${s.slice(0, 80)}"`);
    } else sentences.set(s, r.path);
  }
}
if (repeated > 25) errors.push(`...and ${repeated - 25} more repeated sentences`);

// 2. The swap test: with every place name removed, are two pages still mostly the same?
const stop = new Set("the a an and or of to in for on with by is are it that this as at from be can may your you we our their its not but if than then so do does".split(" "));
function shingles(r: Row) {
  let text = [...r.own, ...r.faqs.map((f) => f.a)].join(" ");
  for (const name of [...r.places].sort((a, b) => b.length - a.length)) text = text.split(name).join("PLACE");
  const w = words(text).filter((x) => !stop.has(x));
  const set = new Set<string>();
  for (let i = 0; i + 4 <= w.length; i++) set.add(w.slice(i, i + 4).join(" "));
  return set;
}
const sh = new Map(rows.map((r) => [r.path, shingles(r)]));
const similarity = (a: Set<string>, b: Set<string>) => {
  let both = 0;
  for (const x of a) if (b.has(x)) both++;
  return both / Math.min(a.size, b.size);
};
const nearest = new Map<string, { path: string; score: number }>();
for (let i = 0; i < rows.length; i++) {
  for (let j = i + 1; j < rows.length; j++) {
    const s = similarity(sh.get(rows[i].path)!, sh.get(rows[j].path)!);
    for (const [a, b] of [[rows[i], rows[j]], [rows[j], rows[i]]]) if (s > (nearest.get(a.path)?.score ?? 0)) nearest.set(a.path, { path: b.path, score: s });
    if (s > 0.25) errors.push(`${rows[i].path} and ${rows[j].path}: ${(s * 100).toFixed(0)}% of phrasing shared once place names are removed (near-duplicate)`);
    else if (s > 0.1) warnings.push(`${rows[i].path} and ${rows[j].path}: ${(s * 100).toFixed(0)}% of phrasing shared once place names are removed`);
  }
}

/* ------------------------------------------------------------------ quality score */
// A machine reading of the nine-part gate. It measures what can be measured;
// accuracy and usefulness still need a person who knows the market and the service.
for (const r of rows) {
  const n = count(r.own) + count(r.faqs.map((f) => f.a));
  const text = [...r.own, ...r.faqs.map((f) => f.a)].join(" ");
  const pathErrors = errors.filter((e) => e.startsWith(`${r.path}:`) || e.includes(` ${r.path}:`) || e.startsWith(`${r.path} and`) || e.includes(`and ${r.path}:`));
  const has = (re: RegExp) => re.test(text);
  const service = r.kind.startsWith("Service");
  let s = 0;
  // Search intent 20: the title and H1 say the service and place plainly, and the page opens with a direct answer.
  s += /(Services?|Agency|Company|Management|Marketing|Automation|Optimi[sz]ation|Development|Ads|SEO|PR|Generation) (in|for) /.test(r.h1) ? 12 : 6;
  s += r.faqs.length >= 5 ? 8 : 4;
  // Content depth 15
  s += n >= (service ? 1100 : 1800) ? 15 : n >= (service ? 800 : 1300) ? 11 : 6;
  // Expertise and accuracy 15: no claim, presence or promise errors; limits stated.
  s += pathErrors.some((e) => /claim|presence|promise|statistic/.test(e)) ? 5 : 11;
  s += (r.limits.length >= 3 || has(/cannot be guaranteed|no guarantee|can(?:not|'t) (?:promise|guarantee)|nobody can/i)) ? 4 : 2;
  // Location relevance 15: distinct from every other page once place names are removed, and not stuffed.
  const sim = nearest.get(r.path)?.score ?? 0;
  s += sim <= 0.05 ? 15 : sim <= 0.1 ? 12 : sim <= 0.25 ? 7 : 2;
  // Semantic and AEO coverage 10: a direct answer of sensible length and question-led FAQs.
  s += r.faqs.every((f) => f.q.trim().endsWith("?")) ? 5 : 3;
  s += r.faqs.every((f) => words(f.a).length >= 30) ? 5 : 3;
  // Internal linking 10
  const out = new Set(r.out).size, inn = inbound.get(r.path)?.size ?? 0;
  s += (out >= 8 ? 6 : out >= 5 ? 4 : 2) + (inn >= 3 ? 4 : inn >= 2 ? 3 : 1);
  // UX 5, conversion 5, technical 5: guaranteed by the shared page components and checked by `npm run seo:crawl`.
  s += 5 + 5;
  s += pathErrors.some((e) => /title|description|sitemap|URL/.test(e)) ? 1 : 5;
  r.score = s;
  if (sim > 0.1) r.notes.push(`closest page ${nearest.get(r.path)!.path} (${(sim * 100).toFixed(0)}%)`);
  if (n < (service ? 1100 : 1800)) r.notes.push(`${n} words of its own`);
}

/* ------------------------------------------------------------------ rendered pages (optional) */
if (process.argv.includes("--crawl")) {
  const base = (process.env.SEO_CHECK_URL ?? "http://localhost:3000").replace(/\/$/, "");
  const all = new Set<string>();
  let checked = 0;
  for (const r of rows) {
    const res = await fetch(base + r.path, { redirect: "manual" }).catch(() => null);
    if (!res) { errors.push(`could not reach ${base}. Start the site (npm run build && npm start) or set SEO_CHECK_URL.`); break; }
    if (res.status !== 200) { errors.push(`${r.path}: HTTP ${res.status}`); continue; }
    const html = await res.text();
    checked++;
    const one = (re: RegExp) => html.match(re)?.[1] ?? "";
    const h1 = [...html.matchAll(/<h1[\s>]/g)].length;
    if (h1 !== 1) errors.push(`${r.path}: ${h1} H1 elements`);
    if (!one(/<title>([^<]+)<\/title>/).includes(r.title.replace(/&/g, "&amp;")) && !one(/<title>([^<]+)<\/title>/).includes(r.title)) errors.push(`${r.path}: <title> does not carry the page title`);
    if (!one(/<meta name="description" content="([^"]+)"/)) errors.push(`${r.path}: no meta description`);
    const canonical = one(/<link rel="canonical" href="([^"]+)"/);
    if (!canonical.endsWith(r.path)) errors.push(`${r.path}: canonical is "${canonical}"`);
    if (/<meta name="robots" content="[^"]*noindex/.test(html)) errors.push(`${r.path}: noindex`);
    for (const og of ["og:title", "og:description", "og:image", "twitter:card"]) if (!html.includes(`property="${og}"`) && !html.includes(`name="${og}"`)) errors.push(`${r.path}: missing ${og}`);
    const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]).join(" ");
    for (const type of ["WebPage", "Service", "FAQPage", "BreadcrumbList"]) if (!ld.includes(`"@type":"${type}"`)) errors.push(`${r.path}: no ${type} schema`);
    if (ld.includes("LocalBusiness")) errors.push(`${r.path}: LocalBusiness schema (no verified address exists)`);
    if (!/aria-label="Breadcrumb"/.test(html)) errors.push(`${r.path}: no breadcrumb trail`);
    if (!/growth-audit\//.test(html)) errors.push(`${r.path}: no growth audit call to action`);
    for (const img of html.match(/<img\b[^>]*>/g) ?? []) if (!/\balt="/.test(img)) errors.push(`${r.path}: image without alt text`);
    for (const m of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)"/g)) if (!m[1].startsWith("/_next") && !m[1].startsWith("/api")) all.add(m[1]);
  }
  for (const href of all) {
    const res = await fetch(base + href, { redirect: "manual" }).catch(() => null);
    if (res && res.status >= 400) errors.push(`broken internal link ${href} (HTTP ${res.status})`);
    if (res && res.status >= 300 && res.status < 400) warnings.push(`internal link ${href} redirects; link to the final URL`);
  }
  console.log(`crawled ${checked} pages and ${all.size} internal links at ${base}`);
}

/* ------------------------------------------------------------------ report */
const kinds: Kind[] = ["Country", "City", "Service + Country", "Service + City"];
const below = rows.filter((r) => r.score < 85);
const avg = (list: Row[]) => (list.length ? Math.round(list.reduce((n, r) => n + r.score, 0) / list.length) : 0);
const report = `# Location page audit

GENERATED by \`npm run seo:check\`. Do not edit by hand.

The score is a machine reading of the nine-part quality gate in docs/SEO_CONTENT_SYSTEM.md. It checks structure, length, uniqueness, links and wording. It cannot judge whether a statement about a market is true or whether the page is useful to a buyer: that needs a person who knows the place and the service.

| Type | Pages | Average score | Below 85 |
| --- | --- | --- | --- |
${kinds.map((k) => { const list = rows.filter((r) => r.kind === k); return `| ${k} | ${list.length} | ${avg(list)} | ${list.filter((r) => r.score < 85).length} |`; }).join("\n")}
| **All** | **${rows.length}** | **${avg(rows)}** | **${below.length}** |

Errors: ${errors.length}. Warnings: ${warnings.length}. Sentences repeated between pages: ${repeated}.

## Errors

${errors.length ? errors.map((e) => `- ${e}`).join("\n") : "None."}

## Warnings

${warnings.length ? warnings.slice(0, 80).map((w) => `- ${w}`).join("\n") + (warnings.length > 80 ? `\n- ...and ${warnings.length - 80} more` : "") : "None."}

## Every page

| Page | Type | Score | Own words | Links out | Links in | Notes |
| --- | --- | --- | --- | --- | --- | --- |
${rows.map((r) => `| \`${r.path}\` | ${r.kind} | ${r.score} | ${count(r.own) + count(r.faqs.map((f) => f.a))} | ${new Set(r.out).size} | ${inbound.get(r.path)?.size ?? 0} | ${r.notes.join("; ")} |`).join("\n")}
`;
writeFileSync(new URL("../docs/LOCATION_AUDIT.md", import.meta.url), report);

console.log(`${rows.length} location pages: ${kinds.map((k) => `${rows.filter((r) => r.kind === k).length} ${k}`).join(", ")}`);
console.log(`average score ${avg(rows)}, ${below.length} below 85, ${errors.length} errors, ${warnings.length} warnings`);
for (const e of errors.slice(0, 40)) console.log("ERROR  ", e);
if (errors.length > 40) console.log(`...and ${errors.length - 40} more errors (see docs/LOCATION_AUDIT.md)`);
for (const w of warnings.slice(0, 12)) console.log("warning", w);
if (warnings.length > 12) console.log(`...and ${warnings.length - 12} more warnings (see docs/LOCATION_AUDIT.md)`);
// Unused import guard for getIndustry: sectors are validated in the registry.
void getIndustry;
process.exit(errors.length ? 1 : 0);
