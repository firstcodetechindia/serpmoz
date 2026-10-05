import type { Metadata } from "next";
import { ResourceIndex } from "@/components/resources/resource-index";
import { buildMetadata } from "@/lib/seo/metadata";

const meta = {
  title: "Resources: Research & Insights",
  description:
    "Research, guides and insights from SERPMOZ on AI search, SEO, paid media, CRO and analytics, written up with the method shown.",
  path: "/resources/",
};

export const metadata: Metadata = buildMetadata(meta);

export default function ResourcesPage() {
  return (
    <ResourceIndex
      meta={meta}
      label="SERPMOZ Research"
      heading="Research, not recycled advice."
      lead="What we learn from doing the work, with the method and the reasoning shown. No invented statistics, and no advice we would not follow ourselves."
      showCategories
    />
  );
}
