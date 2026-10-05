import type { Metadata } from "next";
import { site } from "@/lib/config/site";

type PageMeta = {
  title: string;
  description: string;
  /** Site-relative path with trailing slash, e.g. "/seo-services/" */
  path: string;
  /** Use the title exactly as given (no "| SERPMOZ" suffix) */
  absoluteTitle?: boolean;
  noindex?: boolean;
  type?: "website" | "article";
};

const ogImage = {
  url: "/images/serpmoz-ai-powered-digital-growth-og.png",
  width: 1200,
  height: 630,
  alt: "SERPMOZ: AI Can Do the Work. Experts Know What Work Matters.",
};

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Consistent title, canonical, Open Graph and X card for every page. */
export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle,
  noindex,
  type = "website",
}: PageMeta): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  const url = absoluteUrl(path);
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type,
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
