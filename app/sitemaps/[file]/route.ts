import { notFound } from "next/navigation";
import { renderSitemap, sitemapGroups, xmlResponse } from "@/lib/seo/sitemap";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(sitemapGroups).map((g) => ({ file: `${g}.xml` }));
}

export async function GET(_: Request, { params }: { params: Promise<{ file: string }> }) {
  const group = (await params).file.replace(/\.xml$/, "");
  const build = sitemapGroups[group];
  if (!build) notFound();
  return xmlResponse(renderSitemap(build()));
}
