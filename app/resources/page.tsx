import type { Metadata } from "next";
import { FinalCta } from "@/components/growth/final-cta";
import { PageHero } from "@/components/layout/page-hero";
import { ResourceCategories } from "@/components/resources/resource-categories";
import { JsonLd } from "@/components/seo/json-ld";
import { Block } from "@/components/services/page-parts";
import { articles, resourceFormats } from "@/data/resources";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

const meta = {
  title: "Resources: Research & Insights",
  description:
    "Research, guides and reports from SERPMOZ on AI search, SEO, paid media, CRO, analytics and marketing automation, written by the people doing the work.",
  path: "/resources/",
};

export const metadata: Metadata = buildMetadata(meta);

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Resources", href: meta.path }]}
        label="SERPMOZ Research"
        title="Research, not recycled advice."
        lead="We publish what we learn from doing the work, with the method and the data shown. The library is being built now; this is what it will cover and how."
      />

      <section className="py-16 md:py-24">
        <div className="shell">
          <p className="label-mono text-muted">Formats</p>
          <ul className="mt-6 grid border-b border-line md:grid-cols-3">
            {resourceFormats.map((f, i) => (
              <li key={f.id} id={f.id} className="scroll-mt-28 border-t border-line py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <span className="label-mono text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 text-h3 font-semibold text-navy">{f.name}</h2>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Block label="Research areas" title="Eight subjects, and the questions we are working on." className="bg-surface">
        <ResourceCategories detailed />
      </Block>

      {articles.length === 0 ? (
        <Block label="Latest" title="First publications are in progress.">
          <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-muted">
            We would rather publish a few pieces worth citing than fill a blog on a schedule. New work will appear here as
            it is completed and reviewed.
          </p>
        </Block>
      ) : null}

      <FinalCta />
      <JsonLd data={webPageSchema({ ...meta, type: "CollectionPage" })} />
    </>
  );
}
