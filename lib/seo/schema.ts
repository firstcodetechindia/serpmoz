import { site } from "@/lib/config/site";
import { absoluteUrl } from "@/lib/seo/metadata";
import type { Crumb, Service } from "@/types";

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    url: `${site.url}/`,
    description: site.description,
    slogan: site.tagline,
    logo: absoluteUrl("/icon.svg"),
    ...(site.contactEmail ? { email: site.contactEmail } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: `${site.url}/`,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

export function webPageSchema(p: {
  path: string;
  title: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  /** ISO date of the last specialist review */
  reviewed?: string;
  /** CSS selectors of the passages that answer the page's question directly */
  speakable?: string[];
}): Json {
  const url = absoluteUrl(p.path);
  return {
    "@context": "https://schema.org",
    "@type": p.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: p.title,
    description: p.description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    ...(p.reviewed ? { dateModified: p.reviewed, lastReviewed: p.reviewed, reviewedBy: { "@id": ORG_ID } } : {}),
    ...(p.speakable?.length ? { speakable: { "@type": "SpeakableSpecification", cssSelector: p.speakable } } : {}),
  };
}

export function breadcrumbSchema(crumbs: Crumb[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.href),
    })),
  };
}

export function serviceSchema(
  s: Pick<Service, "name" | "summary"> & {
    path: string;
    areaServed?: string | string[];
    /** Parts of the service that have their own pages */
    includes?: { name: string; path?: string }[];
    audience?: string[];
    category?: string;
  },
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(s.path)}#service`,
    name: s.name,
    serviceType: s.name,
    description: s.summary,
    url: absoluteUrl(s.path),
    provider: { "@id": ORG_ID },
    ...(s.category ? { category: s.category } : {}),
    ...(s.areaServed ? { areaServed: s.areaServed } : {}),
    ...(s.audience?.length ? { audience: { "@type": "BusinessAudience", audienceType: s.audience.join("; ") } } : {}),
    ...(s.includes?.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${s.name}: what is included`,
            itemListElement: s.includes.map((i) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: i.name, ...(i.path ? { url: absoluteUrl(i.path) } : {}) },
            })),
          },
        }
      : {}),
  };
}

/** Only for pages whose FAQs are visible on the page itself. */
export function faqSchema(faqs: { q: string; a: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Ready for the resources section once real articles are published. */
export function articleSchema(a: {
  path: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  modifiedAt?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    mainEntityOfPage: absoluteUrl(a.path),
    // Pieces are bylined to the editorial team; switch to Person when named authors are added.
    author: { "@type": "Organization", name: a.author, url: `${site.url}/` },
    publisher: { "@id": ORG_ID },
    datePublished: a.publishedAt,
    dateModified: a.modifiedAt ?? a.publishedAt,
  };
}
