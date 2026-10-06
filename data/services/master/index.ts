import type { Service, ServiceMaster } from "@/types";
import { seoServices } from "./seo-services";

/**
 * Master-standard pages. A service listed here renders with the long-form
 * layout; the rest keep the base layout until their content is written.
 * `overrides` lets a master page adjust base fields without touching them.
 */
export const masters: Record<string, { content: ServiceMaster; overrides?: Partial<Service> }> = {
  "seo-services": { content: seoServices },
};
