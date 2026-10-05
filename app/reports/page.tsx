import type { Metadata } from "next";
import { ResourceIndex } from "@/components/resources/resource-index";
import { buildMetadata } from "@/lib/seo/metadata";

const meta = {
  title: "Reports",
  description: "Original research reports from SERPMOZ. Each will be published with its data and method so that findings can be checked and reused.",
  path: "/reports/",
};

export const metadata: Metadata = buildMetadata(meta);

export default function ReportsPage() {
  return (
    <ResourceIndex
      meta={meta}
      label="Reports"
      heading="Reports."
      lead="Original analysis, with the data and method published alongside the findings."
      format="Report"
      emptyNote="Our first report is in preparation. A report needs original data and a method that stands up to scrutiny, so we will publish when both are ready and not before."
    />
  );
}
