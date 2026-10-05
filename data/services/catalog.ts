import type { ServiceCategory, ServiceCategoryId } from "@/types";
import { servicesIn } from "./index";

const groups: { id: ServiceCategoryId; label: string; statement: string; href: string }[] = [
  {
    id: "search-ai",
    label: "Search & AI",
    statement: "Be found in search results, map results and AI-generated answers for the queries that lead to customers.",
    href: "/seo-services/",
  },
  {
    id: "performance",
    label: "Performance Marketing",
    statement: "Paid demand managed against qualified leads, acquisition cost and return, not platform-reported conversions.",
    href: "/ppc-management/",
  },
  {
    id: "content-social",
    label: "Content & Social",
    statement: "An editorial programme that earns attention and authority in the places your buyers pay attention.",
    href: "/social-media-marketing/",
  },
  {
    id: "conversion-automation",
    label: "CRO & Automation",
    statement: "Turn visits into enquiries and enquiries into revenue, with the follow-up systems that stop leads going cold.",
    href: "/cro/",
  },
  {
    id: "web-digital",
    label: "Web & Digital",
    statement: "Sites and stores engineered for search, speed, accessibility and conversion from the first wireframe.",
    href: "/web-development/",
  },
];

/** Every service page, grouped by the job it does. Drives the homepage, menus and footer. */
export const serviceCategories: ServiceCategory[] = groups.map((g) => ({
  ...g,
  items: servicesIn(g.id).map((s) => ({ name: s.name, href: `/${s.slug}/`, summary: s.summary })),
}));
