import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IndustryCard } from "@/components/industries/industry-explorer";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { industries } from "@/data/industries";
import { industryServicePath, industryServices } from "@/data/industries/services";
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
          <h2 className="sr-only">Industries SERPMOZ plans growth for</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((ind) => (
              <li key={ind.slug}>
                <IndustryCard slug={ind.slug} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section aria-labelledby="by-sector-title" className="border-t border-line bg-surface py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="label-mono text-muted">Services by sector</p>
            <h2 id="by-sector-title" className="mt-4 text-h2 font-semibold text-navy">The same service, planned for a different buyer.</h2>
            <p className="mt-5 max-w-md text-lead text-muted">
              A service changes with the sector it is written for. Property buyers, software evaluators, patients and procurement teams research differently, face different rules and decide on different evidence. These pages set out what changes. For the full list of services see <Link href="/services/" className="text-blue-ink underline underline-offset-2">all SERPMOZ services</Link>.
            </p>
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-7">
            {industryServices.map((r) => (
              <li key={r.slug} className="border-t border-line">
                <Link href={industryServicePath(r)} className="group flex items-start justify-between gap-3 py-4 text-navy">
                  <span className="font-semibold tracking-[-0.01em] transition-colors group-hover:text-blue-ink">{r.seo.title.split(":")[0].split(",")[0]}</span>
                  <ArrowUpRight aria-hidden className="mt-1 size-4 shrink-0 text-muted transition-colors group-hover:text-orange" />
                </Link>
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
