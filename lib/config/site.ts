import type { NavGroup, NavLink } from "@/types";
import { industries } from "@/data/industries";
import { countries, markets } from "@/data/locations";
import { serviceCategories } from "@/data/services/catalog";

const trim = (v?: string) => (v ?? "").trim().replace(/\/+$/, "");

export const site = {
  name: "SERPMOZ",
  legalName: "SERPMOZ",
  domain: "serpmoz.com",
  url: trim(process.env.NEXT_PUBLIC_SITE_URL) || "https://serpmoz.com",
  /** Future GrowthOS application origin (app.serpmoz.com). Empty until launched. */
  appUrl: trim(process.env.NEXT_PUBLIC_APP_URL),
  contactEmail: trim(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  category: "AI-Powered Digital Growth Company",
  tagline: "AI-Powered. Expert-Led. Revenue-Focused.",
  philosophy: "AI Can Do the Work. Experts Know What Work Matters.",
  title: "Digital Marketing Agency & SEO Company | SERPMOZ",
  description:
    "SERPMOZ is an AI-powered digital marketing agency and SEO company: SEO, AI search, paid media, content, CRO and web, led by specialists.",
  locale: "en",
  /** Add profile URLs once the accounts exist; empty entries are not rendered or put in schema. */
  social: {
    LinkedIn: "",
    Instagram: "",
    YouTube: "",
    X: "",
  } as Record<string, string>,
} as const;

export const cta = {
  audit: { label: "Get Your Growth Audit", href: "/growth-audit/" },
  services: { label: "Explore Our Services", href: "/services/" },
  strategist: { label: "Talk to a Growth Strategist", href: "/contact/" },
} as const;

const navIndustries = [
  "saas",
  "ecommerce",
  "healthcare",
  "real-estate",
  "finance",
  "education",
  "legal",
  "manufacturing",
  "hospitality",
  "home-services",
  "b2b",
  "local-business",
];

/** Services shown per column in the Solutions menu; the rest sit behind "All services". */
const menuServices: Record<string, string[]> = {
  "search-ai": ["/seo-services/", "/ai-seo-services/", "/aeo-services/", "/geo-services/", "/local-seo-services/", "/technical-seo/"],
  performance: ["/ppc-management/", "/google-ads/", "/meta-ads/", "/linkedin-ads/", "/retargeting/", "/lead-generation/"],
  "content-social": ["/social-media-marketing/", "/content-marketing/", "/linkedin-marketing/", "/instagram-marketing/", "/youtube-marketing/", "/video-marketing/"],
  "conversion-automation": ["/cro/", "/landing-page-optimization/", "/marketing-automation/", "/whatsapp-automation/", "/email-marketing/", "/ai-agents/"],
  "web-digital": ["/web-development/", "/nextjs-development/", "/wordpress-development/", "/shopify-development/", "/webflow-development/", "/ui-ux-design/"],
};

/** One short line per discipline for menus. The full statement lives in the service catalog. */
const disciplineLines: Record<string, string> = {
  "search-ai": "Be found in search, maps and AI answers",
  performance: "Paid demand measured on revenue",
  "content-social": "Attention and authority that compound",
  "conversion-automation": "Turn visits into enquiries, then follow up",
  "web-digital": "Sites built for speed and conversion",
};

const solutionColumns = serviceCategories.map((c) => ({
  id: c.id,
  title: c.label,
  description: disciplineLines[c.id],
  href: c.href,
  links: menuServices[c.id].map((href) => {
    const item = c.items.find((i) => i.href === href)!;
    return { label: item.name, href, description: item.summary };
  }),
}));

export const navigation: NavGroup[] = [
  {
    label: "Solutions",
    href: "/services/",
    summary: "Five disciplines, planned together.",
    all: "All services",
    columns: solutionColumns,
    links: solutionColumns.flatMap((c) => c.links),
  },
  {
    label: "Industries",
    href: "/industries/",
    summary: "Strategy shaped by how your buyers search and decide.",
    all: "All industries",
    links: navIndustries.map((slug) => {
      const i = industries.find((x) => x.slug === slug)!;
      return { label: i.name, href: `/industries/${i.slug}/`, description: i.line };
    }),
  },
  {
    label: "Locations",
    href: "/locations/",
    summary: "Local expertise. Global ambition.",
    all: "All locations",
    links: countries.map((c) => ({ label: c.name, href: `/locations/${c.slug}/`, description: c.cities.length ? c.cities.slice(0, 4).map((x) => x.name).join(", ") : "Market overview", badge: markets.find((m) => m.slug === c.slug)?.code })),
  },
  { label: "Case Studies", href: "/case-studies/", summary: "How the work is planned and measured." },
  {
    label: "Resources",
    href: "/resources/",
    summary: "Research and practice from the people doing the work.",
    all: "All resources",
    links: [
      { label: "Insights", href: "/resources/", description: "Argued positions on single questions" },
      { label: "Guides", href: "/guides/", description: "Practical references for teams" },
      { label: "Reports", href: "/reports/", description: "Original analysis, method shown" },
      { label: "AI Search Resources", href: "/resources/#ai-search", description: "Understanding AI discovery" },
    ],
  },
  {
    label: "Company",
    href: "/about/",
    summary: "Who we are and how we work.",
    all: "About SERPMOZ",
    links: [
      { label: "About", href: "/about/", description: "What SERPMOZ is, and is not" },
      { label: "Methodology", href: "/methodology/", description: "Discover, diagnose, prioritize, execute, measure, optimize" },
      { label: "Engagement Models", href: "/engagement-models/", description: "Five ways to work with us" },
      { label: "Careers", href: "/careers/", description: "Work with us" },
      { label: "Contact", href: "/contact/", description: "Start a conversation" },
      { label: "GrowthOS", href: "/growthos/", description: "Our planned platform. Coming soon" },
    ],
  },
];

const group = (label: string) => navigation.find((g) => g.label === label)!;

export const footerNav: { title: string; links: NavLink[] }[] = [
  { title: "Solutions", links: [...serviceCategories.map((c) => ({ label: c.label, href: c.href })), { label: "All services", href: "/services/" }] },
  { title: "Industries", links: [...group("Industries").links!.slice(0, 5), { label: "All industries", href: "/industries/" }] },
  { title: "Locations", links: [...countries.slice(0, 5).map((c) => ({ label: c.name, href: `/locations/${c.slug}/` })), { label: "All locations", href: "/locations/" }] },
  { title: "Resources", links: [{ label: "Case Studies", href: "/case-studies/" }, ...group("Resources").links!.map(({ label, href }) => ({ label, href }))] },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "Methodology", href: "/methodology/" },
      { label: "Engagement Models", href: "/engagement-models/" },
      { label: "Careers", href: "/careers/" },
      { label: "Contact", href: "/contact/" },
      { label: "Growth Audit", href: "/growth-audit/" },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms", href: "/terms/" },
  { label: "Cookie Policy", href: "/cookie-policy/" },
  { label: "Disclaimer", href: "/disclaimer/" },
  { label: "Accessibility", href: "/accessibility/" },
];
