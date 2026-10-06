import { publishedCaseStudies } from "@/data/case-studies";
import { industries } from "@/data/industries";
import { industryServicePath, industryServices } from "@/data/industries/services";
import { legalDocs } from "@/data/legal";
import { locationPath, locations } from "@/data/locations";
import { localServicePath, localServices } from "@/data/locations/services";
import { articles } from "@/data/resources";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/seo/metadata";

export type SitemapEntry = { path: string; priority?: number; changefreq?: "daily" | "weekly" | "monthly" | "yearly" };

/**
 * One group per content type. Each becomes /sitemaps/{group}.xml and is listed
 * in the index at /sitemap.xml, so new content types (articles, case studies,
 * service × industry) can be added without the files growing unmanageable.
 */
export const sitemapGroups: Record<string, () => SitemapEntry[]> = {
  pages: () => [
    { path: "/", priority: 1, changefreq: "weekly" },
    { path: "/about/", priority: 0.6 },
    { path: "/methodology/", priority: 0.6 },
    { path: "/contact/", priority: 0.7 },
    { path: "/growth-audit/", priority: 0.9 },
    { path: "/engagement-models/", priority: 0.7 },
    { path: "/careers/", priority: 0.4 },
    { path: "/case-studies/", priority: 0.6 },
    ...publishedCaseStudies.map((c) => ({ path: `/case-studies/${c.slug}/`, priority: 0.7 })),
    ...legalDocs.map((d) => ({ path: `/${d.slug}/`, priority: 0.2, changefreq: "yearly" as const })),
  ],
  services: () => [{ path: "/services/", priority: 0.9 }, ...services.map((s) => ({ path: `/${s.slug}/`, priority: 0.9 }))],
  resources: () => [
    { path: "/resources/", priority: 0.7, changefreq: "weekly" },
    { path: "/guides/", priority: 0.5, changefreq: "weekly" },
    ...articles.map((a) => ({ path: `/resources/${a.slug}/`, priority: 0.7 })),
  ],
  industries: () => [
    { path: "/industries/", priority: 0.7 },
    ...industries.map((i) => ({ path: `/industries/${i.slug}/`, priority: 0.7 })),
    // Services written for one sector are included automatically.
    ...industryServices.map((r) => ({ path: industryServicePath(r), priority: 0.8 })),
  ],
  // Every record in data/locations is included automatically.
  locations: () => [
    { path: "/locations/", priority: 0.7 },
    ...locations.map((l) => ({ path: locationPath(l), priority: l.kind === "city" ? 0.6 : 0.7 })),
    // A service in a place: one entry per page written (data/locations/services).
    ...localServices.map((p) => ({ path: localServicePath(p), priority: 0.8 })),
  ],
};

const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';

export function renderSitemapIndex() {
  const items = Object.keys(sitemapGroups)
    .map((g) => `  <sitemap><loc>${absoluteUrl(`/sitemaps/${g}.xml`)}</loc></sitemap>`)
    .join("\n");
  return `${xmlHeader}\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`;
}

export function renderSitemap(entries: SitemapEntry[]) {
  const items = entries
    .map(
      (e) =>
        `  <url><loc>${absoluteUrl(e.path)}</loc><changefreq>${e.changefreq ?? "monthly"}</changefreq><priority>${(e.priority ?? 0.5).toFixed(1)}</priority></url>`,
    )
    .join("\n");
  return `${xmlHeader}\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>\n`;
}

export const xmlResponse = (body: string) =>
  new Response(body, { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" } });
