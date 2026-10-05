import type { ServiceCategory } from "@/types";

/** Homepage + navigation view of the full capability set, grouped by job. */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "search-ai",
    label: "Search & AI",
    statement:
      "Be found in search results, map results and AI-generated answers for the queries that lead to customers.",
    href: "/seo-services/",
    items: [
      { name: "SEO", href: "/seo-services/" },
      { name: "AI SEO", href: "/ai-seo-services/" },
      { name: "AEO", href: "/ai-seo-services/" },
      { name: "GEO", href: "/ai-seo-services/" },
      { name: "Local SEO", href: "/local-seo-services/" },
      { name: "Google Maps SEO", href: "/local-seo-services/" },
      { name: "International SEO", href: "/international-seo/" },
      { name: "Ecommerce SEO", href: "/ecommerce-seo/" },
      { name: "Enterprise SEO", href: "/enterprise-seo/" },
      { name: "Technical SEO", href: "/seo-services/" },
    ],
  },
  {
    id: "performance",
    label: "Performance",
    statement:
      "Paid demand managed against qualified leads, acquisition cost and return, not platform-reported conversions.",
    href: "/ppc-management/",
    items: [
      { name: "Google Ads", href: "/google-ads/" },
      { name: "Microsoft Ads" },
      { name: "Meta Ads", href: "/meta-ads/" },
      { name: "LinkedIn Ads", href: "/linkedin-ads/" },
      { name: "PPC" },
      { name: "Retargeting" },
      { name: "Lead Generation" },
    ],
  },
  {
    id: "content-social",
    label: "Content & Social",
    statement:
      "An editorial programme that earns attention, authority and citations across the places your buyers pay attention.",
    href: "/social-media-marketing/",
    items: [
      { name: "Content Strategy", href: "/content-marketing/" },
      { name: "SEO Content", href: "/content-marketing/" },
      { name: "Social Media" },
      { name: "LinkedIn" },
      { name: "Instagram" },
      { name: "YouTube" },
      { name: "Video" },
      { name: "Digital PR", href: "/digital-pr/" },
      { name: "Influencer Marketing" },
    ],
  },
  {
    id: "conversion-automation",
    label: "Conversion & Automation",
    statement:
      "Turn visits into enquiries and enquiries into revenue, with the follow-up systems that stop leads going cold.",
    href: "/cro/",
    items: [
      { name: "CRO", href: "/cro/" },
      { name: "Landing Pages", href: "/cro/" },
      { name: "Funnel Optimization", href: "/cro/" },
      { name: "Analytics", href: "/cro/" },
      { name: "CRM", href: "/marketing-automation/" },
      { name: "WhatsApp Automation", href: "/marketing-automation/" },
      { name: "Email Automation", href: "/marketing-automation/" },
      { name: "AI Agents", href: "/marketing-automation/" },
      { name: "Marketing Automation", href: "/marketing-automation/" },
    ],
  },
  {
    id: "web-digital",
    label: "Web & Digital",
    statement:
      "Sites and digital products engineered for search, speed, accessibility and conversion from the first wireframe.",
    href: "/web-development/",
    items: [
      { name: "Web Design" },
      { name: "Next.js" },
      { name: "WordPress", href: "/wordpress-development/" },
      { name: "Shopify", href: "/shopify-development/" },
      { name: "Webflow" },
      { name: "Ecommerce Development" },
      { name: "Custom Digital Products" },
    ],
  },
];
