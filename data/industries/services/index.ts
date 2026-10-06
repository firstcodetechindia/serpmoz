import { getIndustry } from "@/data/industries";
import { getService } from "@/data/services";
import type { IndustryServiceRecord } from "@/types";
import { record as educationSeo } from "./education-seo-services";
import { record as ecommerceGoogleAds } from "./ecommerce-google-ads";
import { record as financeSeo } from "./finance-seo-services";
import { record as healthcareLocalSeo } from "./healthcare-local-seo-services";
import { record as legalSeo } from "./legal-seo-services";
import { record as manufacturingLeads } from "./manufacturing-lead-generation";
import { record as realEstateGoogleAds } from "./real-estate-google-ads";
import { record as realEstateSeo } from "./real-estate-seo-services";
import { record as saasSeo } from "./saas-seo-services";

/**
 * Services written for one industry ("SEO for real estate developers").
 * To add one: write a record file beside this one and add it to the list.
 * The page, links from the industry and service pages, schema and sitemap
 * entry follow from the record.
 */
export const industryServices: IndustryServiceRecord[] = [
  realEstateSeo,
  realEstateGoogleAds,
  saasSeo,
  ecommerceGoogleAds,
  healthcareLocalSeo,
  legalSeo,
  financeSeo,
  educationSeo,
  manufacturingLeads,
];

export const industryServicePath = (r: Pick<IndustryServiceRecord, "industry" | "slug">) => `/industries/${r.industry}/${r.slug}/`;

// A record that points at a missing industry or service, or repeats a title, stops the build.
{
  const problems: string[] = [];
  const titles = new Map<string, string>();
  const paths = new Set<string>();
  for (const r of industryServices) {
    const at = industryServicePath(r);
    if (paths.has(at)) problems.push(`${at}: duplicate path`);
    paths.add(at);
    if (!getIndustry(r.industry)) problems.push(`${at}: unknown industry "${r.industry}"`);
    if (!getService(r.service)) problems.push(`${at}: unknown service "${r.service}"`);
    for (const s of r.related.services) if (!getService(s)) problems.push(`${at}: unknown related service "${s}"`);
    for (const [kind, value] of [["title", r.seo.title], ["h1", r.hero.title], ["description", r.seo.metaDescription]] as const) {
      const key = `${kind}:${value}`;
      if (titles.has(key)) problems.push(`${at}: ${kind} duplicates ${titles.get(key)}`);
      titles.set(key, at);
    }
    if (r.seo.title.length > 46) problems.push(`${at}: seo.title is ${r.seo.title.length} characters (46 at most)`);
    if (r.seo.metaDescription.length < 120 || r.seo.metaDescription.length > 160) problems.push(`${at}: metaDescription is ${r.seo.metaDescription.length} characters`);
    if (r.facts.length !== 4) problems.push(`${at}: needs exactly four facts`);
    if (r.faqs.length < 5) problems.push(`${at}: needs at least five FAQs`);
  }
  if (problems.length) throw new Error(`Industry service records failed validation:\n- ${problems.join("\n- ")}`);
}

export const getIndustryService = (industry: string, slug: string) => industryServices.find((r) => r.industry === industry && r.slug === slug);
/** Pages written for one industry. */
export const industryServicesIn = (industry: string) => industryServices.filter((r) => r.industry === industry);
/** Pages written about one service, across industries. */
export const industryServicesFor = (service: string) => industryServices.filter((r) => r.service === service);
