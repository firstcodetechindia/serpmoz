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
  s: Pick<Service, "name" | "summary"> & { path: string; areaServed?: string },
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
    ...(s.areaServed ? { areaServed: s.areaServed } : {}),
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
    author: { "@type": "Person", name: a.author },
    publisher: { "@id": ORG_ID },
    datePublished: a.publishedAt,
    dateModified: a.modifiedAt ?? a.publishedAt,
  };
}
