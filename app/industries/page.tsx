import type { Metadata } from "next";
import { IndustryCard } from "@/components/industries/industry-explorer";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { industries } from "@/data/industries";
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
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((ind) => (
              <li key={ind.slug}>
                <IndustryCard slug={ind.slug} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FinalCta />
      <JsonLd data={webPageSchema({ ...meta, type: "CollectionPage" })} />
    </>
  );
}
