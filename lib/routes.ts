import { getIndustryService, industryServiceSlug, industryServices } from "@/data/industries/services";
import { getLocation, LOCATION_PREFIX, locations } from "@/data/locations";
import { getLocalService, localServices, localServiceSlug } from "@/data/locations/services";
import { getService, services } from "@/data/services";
import type { IndustryServiceRecord, LocalServicePage, LocationRecord, Service } from "@/types";

/**
 * Every commercial page lives one level below the domain, named for what
 * people search:
 *   /seo-services/                       a service
 *   /local-seo-services-delhi/           a service in a place
 *   /seo-services-for-real-estate/       a service for a sector
 *   /digital-marketing-agency-delhi/     a place
 * This file is the one place that knows which is which.
 */
export type FlatPage =
  | { kind: "service"; service: Service }
  | { kind: "local-service"; page: LocalServicePage }
  | { kind: "industry-service"; record: IndustryServiceRecord }
  | { kind: "location"; location: LocationRecord };

const table = new Map<string, FlatPage>();
function add(slug: string, page: FlatPage) {
  if (table.has(slug)) throw new Error(`Two pages claim the URL /${slug}/. Rename one of them.`);
  table.set(slug, page);
}
for (const service of services) add(service.slug, { kind: "service", service });
for (const page of localServices) add(localServiceSlug(page), { kind: "local-service", page });
for (const record of industryServices) add(industryServiceSlug(record), { kind: "industry-service", record });
for (const location of locations) add(`${LOCATION_PREFIX}${location.slug}`, { kind: "location", location });

export const flatSlugs = [...table.keys()];
export const resolveFlat = (slug: string) => table.get(slug);

// Re-exported so callers do not need to know where each kind is kept.
export { getIndustryService, getLocalService, getLocation, getService };
