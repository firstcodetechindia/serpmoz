import { renderSitemapIndex, xmlResponse } from "@/lib/seo/sitemap";

export const dynamic = "force-static";

/** Sitemap index. Child sitemaps live at /sitemaps/{group}.xml. */
export function GET() {
  return xmlResponse(renderSitemapIndex());
}
