import type { Metadata } from "next";
import { FinalCta } from "@/components/growth/final-cta";
import { IndustriesIndex } from "@/components/industries/industries-index";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

const meta = {
  title: "Industries",
  description:
    "Growth strategy shaped by how buyers in your sector search, compare and decide: SaaS, ecommerce, healthcare, finance, real estate, education and more.",
  path: "/industries/",
};

export const metadata: Metadata = buildMetadata(meta);

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Industries", href: meta.path }]}
        label="Industries"
        title="Growth strategies built around your business."
        lead="Every sector has its own buyers, regulations, sales cycles and search behaviour. These pages set out how we approach each one, and what we measure."
      />
      <section className="py-16 md:py-24">
        <div className="shell">
          <IndustriesIndex detailed />
        </div>
      </section>
      <FinalCta />
      <JsonLd data={webPageSchema({ ...meta, type: "CollectionPage" })} />
    </>
  );
}
