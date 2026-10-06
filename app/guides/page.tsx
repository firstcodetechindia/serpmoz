import type { Metadata } from "next";
import { ResourceIndex } from "@/components/resources/resource-index";
import { buildMetadata } from "@/lib/seo/metadata";

const meta = {
  title: "Guides: SEO, AI Search and Conversion Playbooks",
  description: "Practical, step-by-step guides from SERPMOZ for teams working on AI search visibility, SEO prioritisation and conversion.",
  path: "/guides/",
};

export const metadata: Metadata = buildMetadata(meta);

export default function GuidesPage() {
  return (
    <ResourceIndex
      meta={meta}
      label="Guides"
      heading="Guides."
      lead="Practical references for teams doing the work. Each one sets out a method you can apply this week."
      format="Guide"
    />
  );
}
