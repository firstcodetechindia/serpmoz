import assert from "node:assert/strict";
import { test } from "node:test";
import { getCaseStudy } from "../data/case-studies.ts";
import { industryServicePath, industryServices } from "../data/industries/services/index.ts";
import { articles, clusters, seriesOf } from "../data/resources/index.ts";
import { getService } from "../data/services/index.ts";
import { sitemapGroups } from "../lib/seo/sitemap.ts";

const sitemap = new Set(Object.values(sitemapGroups).flatMap((group) => group().map((e) => e.path)));
const real = (path: string) => sitemap.has(path.split("#")[0]) || (path.startsWith("/case-studies/") && getCaseStudy(path.split("/")[2]) !== undefined);
const links = (value: unknown) => [...JSON.stringify(value).matchAll(/\]\((\/[^)\s]*)\)/g)].map((m) => m[1]);
// Claims SERPMOZ must not make about itself. Articles may discuss guarantees as a warning sign, so only first-person forms are checked.
const banned = /\b(we guarantee|we are the (best|leading|top)|#1 agency|our [a-z ]{0,20}office)\b/i;

test("every article has a unique slug and title and is in the sitemap", () => {
  assert.equal(new Set(articles.map((a) => a.slug)).size, articles.length);
  assert.equal(new Set(articles.map((a) => a.title)).size, articles.length);
  for (const a of articles) assert.ok(sitemap.has(`/resources/${a.slug}/`), a.slug);
});

test("article links and related services point at real pages", () => {
  for (const a of articles) {
    for (const path of links(a)) assert.ok(real(path), `${a.slug}: ${path}`);
    for (const s of a.relatedServices) assert.ok(getService(s), `${a.slug}: service ${s}`);
  }
});

test("every series has a real pillar and each piece links to another in the series", () => {
  for (const [key, c] of Object.entries(clusters)) {
    assert.ok(real(c.pillar), `${key}: pillar ${c.pillar}`);
    const pieces = articles.filter((a) => a.cluster === key);
    assert.ok(pieces.length >= 4, `${key} has ${pieces.length} pieces`);
    for (const a of pieces) {
      const siblings = seriesOf(a).map((x) => `/resources/${x.slug}/`);
      assert.ok(links(a).some((l) => siblings.includes(l)), `${a.slug} links to no sibling`);
    }
  }
});

test("service-for-industry pages are in the sitemap and link to real pages", () => {
  for (const r of industryServices) {
    const at = industryServicePath(r);
    assert.ok(sitemap.has(at), at);
    for (const path of links(r)) assert.ok(real(path), `${at}: ${path}`);
    for (const path of r.related.locations) assert.ok(real(path), `${at}: location ${path}`);
    for (const slug of r.related.articles) assert.ok(sitemap.has(`/resources/${slug}/`), `${at}: article ${slug}`);
    assert.ok(links(r).includes(`/industries/${r.industry}/`), `${at} does not link to its industry`);
    assert.ok(links(r).includes(`/${r.service}/`), `${at} does not link to its service`);
  }
});

test("no article or sector page makes an office claim, a guarantee or a superlative about us", () => {
  for (const a of articles) assert.doesNotMatch(JSON.stringify(a), banned, a.slug);
  for (const r of industryServices) assert.doesNotMatch(JSON.stringify(r), banned, industryServicePath(r));
});

test("no prices, percentages or dashes used as punctuation in the new content", () => {
  const series = articles.filter((a) => a.cluster);
  for (const item of [...series, ...industryServices]) {
    const text = JSON.stringify(item);
    assert.doesNotMatch(text, /[₹$£€%]|\b(INR|USD|GBP|AED)\b/, "currency or percentage");
    assert.doesNotMatch(text, /[–—]/, "en or em dash");
  }
});
