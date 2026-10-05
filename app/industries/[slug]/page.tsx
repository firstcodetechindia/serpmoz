import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/growth/final-cta";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Block, LinkList, MeasuresPanel, Prose, RuledRows } from "@/components/services/page-parts";
import { CtaLink } from "@/components/ui/cta-link";
import { getIndustry, industries } from "@/data/industries";
import { getService } from "@/data/services";
import { cta } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

const metaFor = (name: string, line: string, slug: string) => ({
  title: `${name} Marketing & Growth`,
  description: `Digital growth for ${name.toLowerCase() === "b2b" ? "B2B" : name} businesses: ${line.charAt(0).toLowerCase()}${line.slice(1)} SEO, AI search, paid media and conversion from SERPMOZ.`,
  path: `/industries/${slug}/`,
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ind = getIndustry((await params).slug);
  return ind ? buildMetadata(metaFor(ind.name, ind.line, ind.slug)) : {};
}

export default async function IndustryPage({ params }: Props) {
  const ind = getIndustry((await params).slug);
  if (!ind) notFound();
  const meta = metaFor(ind.name, ind.line, ind.slug);
  const related = ind.services.map(getService).filter((s) => s !== undefined);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Industries", href: "/industries/" },
          { name: ind.name, href: meta.path },
        ]}
        label={`Industry · ${ind.name}`}
        title={ind.line}
        aside={<MeasuresPanel measures={ind.measures} title="Outcomes we plan around" />}
      >
        <CtaLink href={cta.audit.href} variant="primary" size="lg">{cta.audit.label}</CtaLink>
      </PageHero>

      <Block label="How buyers decide" title={`Search and buying behaviour in ${ind.name === "B2B" || ind.name === "SaaS" ? ind.name : ind.name.toLowerCase()}.`} className="border-t-0">
        <Prose className="text-[clamp(1.125rem,1rem+0.5vw,1.375rem)] leading-normal text-ink">
          <p>{ind.buyerBehaviour}</p>
        </Prose>
      </Block>

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <div className="shell">
          <p className="label-mono text-muted">Where we focus</p>
          <h2 className="mt-4 max-w-2xl text-h2 font-semibold text-navy">Three priorities for {ind.name === "B2B" || ind.name === "SaaS" ? ind.name : ind.name.toLowerCase()}.</h2>
          <div className="mt-12">
            <RuledRows rows={ind.focus} />
          </div>
        </div>
      </section>

      <Block label="Services" title="Typically involved.">
        <LinkList links={related.map((r) => ({ label: r.name, href: `/${r.slug}/`, note: r.summary }))} />
      </Block>

      <FinalCta />
      <JsonLd data={webPageSchema(meta)} />
    </>
  );
}
