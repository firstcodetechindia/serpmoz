import type { NavGroup, NavLink } from "@/types";
import { industries } from "@/data/industries";

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
  title: "SERPMOZ | AI-Powered Digital Growth Company",
  description:
    "SERPMOZ helps businesses grow through SEO, AI Search, performance marketing, content, CRO and AI-powered growth intelligence.",
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
  audit: { label: "Get Your Growth Audit", href: "/contact/#growth-audit" },
  growthos: { label: "Explore GrowthOS", href: "/growthos/" },
  strategist: { label: "Talk to a Growth Strategist", href: "/contact/" },
} as const;

const navIndustries = [
  "saas",
  "ecommerce",
  "healthcare",
  "dental",
  "real-estate",
  "finance",
  "education",
  "legal",
  "b2b",
  "professional-services",
  "local-businesses",
];

export const navigation: NavGroup[] = [
  {
    label: "Solutions",
    href: "/seo-services/",
    summary: "Eight capabilities, one growth system.",
    links: [
      { label: "SEO & Search", href: "/seo-services/", description: "Technical, content and authority, prioritised by value" },
      { label: "AI Search", href: "/ai-seo-services/", description: "Visibility in AI-generated answers: AEO and GEO" },
      { label: "Local & Maps", href: "/local-seo-services/", description: "Profiles, reviews and location visibility" },
      { label: "Performance Marketing", href: "/ppc-management/", description: "Paid media managed against return" },
      { label: "Social & Content", href: "/social-media-marketing/", description: "Editorial, social and digital PR" },
      { label: "CRO & Conversion", href: "/cro/", description: "Research, landing pages and experimentation" },
      { label: "Marketing Automation", href: "/marketing-automation/", description: "CRM, journeys and AI agents" },
      { label: "Web & Digital", href: "/web-development/", description: "Sites built for search, speed and conversion" },
    ],
  },
  {
    label: "Industries",
    href: "/industries/",
    summary: "Strategy shaped by how your buyers search and decide.",
    links: navIndustries.map((slug) => {
      const i = industries.find((x) => x.slug === slug)!;
      return { label: i.name, href: `/industries/${i.slug}/` };
    }),
  },
  {
    label: "Resources",
    href: "/resources/",
    summary: "Research and practice from the people doing the work.",
    links: [
      { label: "Insights", href: "/resources/#insights", description: "Argued positions on single questions" },
      { label: "Case Studies", href: "/case-studies/", description: "How we document results" },
      { label: "Guides", href: "/resources/#guides", description: "Practical references for teams" },
      { label: "Reports", href: "/resources/#reports", description: "Original analysis, method shown" },
      { label: "AI Search Resources", href: "/resources/#ai-search", description: "Understanding AI discovery" },
    ],
  },
  { label: "GrowthOS", href: "/growthos/" },
  {
    label: "Company",
    href: "/about/",
    summary: "Who we are and how we work.",
    links: [
      { label: "About", href: "/about/", description: "What SERPMOZ is, and is not" },
      { label: "Methodology", href: "/methodology/", description: "Strategy first, AI accelerated, expert approved" },
      { label: "Careers", href: "/careers/", description: "Work with us" },
      { label: "Contact", href: "/contact/", description: "Start a conversation" },
    ],
  },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  { title: "Solutions", links: navigation[0].links! },
  { title: "Industries", links: [...navigation[1].links!.slice(0, 7), { label: "All industries", href: "/industries/" }] },
  { title: "Resources", links: navigation[2].links! },
  {
    title: "Company",
    links: [
      ...navigation[4].links!.map(({ label, href }) => ({ label, href })),
      { label: "GrowthOS", href: "/growthos/" },
      { label: "Locations", href: "/locations/" },
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
