import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/growth/final-cta";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { AiExpertSplit, Block, Faqs, LinkList, MeasuresPanel, RuledRows } from "@/components/services/page-parts";
import { CtaLink } from "@/components/ui/cta-link";
import { getService, services } from "@/data/services";
import { serviceCategories } from "@/data/services/catalog";
import { cta } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema, serviceSchema, webPageSchema } from "@/lib/seo/schema";

type Props = { params: Promise<{ service: string }> };

// Only the services defined in data/services exist; everything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).service);
  if (!service) return {};
  return buildMetadata({ title: service.metaTitle, description: service.metaDescription, path: `/${service.slug}/` });
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).service);
  if (!service) notFound();

  const path = `/${service.slug}/`;
  const category = serviceCategories.find((c) => c.id === service.category)!;
  const related = service.related.map(getService).filter((s) => s !== undefined);

  return (
    <>
      <PageHero
        crumbs={[{ name: service.name, href: path }]}
        label={category.label}
        title={service.title}
        lead={service.intro}
        aside={<MeasuresPanel measures={service.measures} />}
      >
        <CtaLink href={cta.audit.href} variant="primary" size="lg">{cta.audit.label}</CtaLink>
        <CtaLink href="#scope" variant="outline" size="lg" arrow={false}>See what is included</CtaLink>
      </PageHero>

      <Block label="Where it usually starts" title="Signs this is the right conversation." className="border-t-0">
        <ul className="border-b border-line">
          {service.problems.map((p) => (
            <li key={p} className="flex gap-5 border-t border-line py-5 text-[clamp(1.125rem,1rem+0.5vw,1.375rem)] leading-snug font-medium tracking-[-0.015em] text-ink">
              <span aria-hidden className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-orange" />
              {p}
            </li>
          ))}
        </ul>
      </Block>

      <section id="scope" className="scroll-mt-24 border-t border-line bg-surface py-16 md:py-24">
        <div className="shell">
          <p className="label-mono text-muted">Scope</p>
          <h2 className="mt-4 max-w-2xl text-h2 font-semibold text-navy">What the work covers.</h2>
          <div className="mt-12">
            <RuledRows rows={service.scope} />
          </div>
        </div>
      </section>

      <Block label="How we work" title="AI for speed. People for judgement.">
        <AiExpertSplit ai={service.ai} experts={service.experts} />
      </Block>

      <Block label="Questions" title="Asked before most engagements.">
        <Faqs faqs={service.faqs} />
      </Block>

      <Block label="Related" title="Works best alongside.">
        <LinkList links={related.map((r) => ({ label: r.name, href: `/${r.slug}/`, note: r.summary }))} />
      </Block>

      <FinalCta />

      <JsonLd
        data={[
          webPageSchema({ path, title: service.metaTitle, description: service.metaDescription }),
          serviceSchema({ name: service.name, summary: service.summary, path }),
          faqSchema(service.faqs),
        ]}
      />
    </>
  );
}
