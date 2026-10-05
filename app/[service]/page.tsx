import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { PhotoBand } from "@/components/layout/photo-band";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { AiExpertSplit, Block, Faqs, LinkList, MeasuresPanel, RuledRows } from "@/components/services/page-parts";
import { CtaLink } from "@/components/ui/cta-link";
import { CapabilityVisual } from "@/components/visuals/capability-visual";
import { photos } from "@/data/images";
import { getService, services } from "@/data/services";
import { serviceCategories } from "@/data/services/catalog";
import { cta } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema, serviceSchema, webPageSchema } from "@/lib/seo/schema";
import type { ServiceCategoryId } from "@/types";

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

const bandPhoto: Record<ServiceCategoryId, keyof typeof photos> = {
  "search-ai": "analystScreens",
  performance: "analystDesk",
  "content-social": "teamWorkshop",
  "conversion-automation": "teamOffice",
  "web-digital": "strategyWhiteboard",
};

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
        aside={<CapabilityVisual category={service.category} />}
      >
        <CtaLink href={cta.audit.href} variant="primary" size="lg" data-cta="service-audit">{cta.audit.label}</CtaLink>
        <CtaLink href="#scope" variant="onDark" size="lg" arrow={false}>See what is included</CtaLink>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="label-mono text-muted">Where it usually starts</p>
            <h2 className="mt-4 max-w-lg text-[clamp(1.625rem,1.3rem+1.3vw,2.25rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-navy">Signs this is the right conversation.</h2>
            <ul className="mt-8 border-b border-line">
              {service.problems.map((p) => (
                <li key={p} className="flex gap-5 border-t border-line py-5 text-[clamp(1.0625rem,1rem+0.4vw,1.25rem)] leading-snug font-medium tracking-[-0.015em] text-ink">
                  <span aria-hidden className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-orange" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <MeasuresPanel measures={service.measures} />
          </div>
        </div>
      </section>

      <section id="scope" className="scroll-mt-24 border-t border-line bg-surface py-16 md:py-24">
        <div className="shell">
          <p className="label-mono text-muted">Scope</p>
          <h2 className="mt-4 max-w-2xl text-h2 font-semibold text-navy">What the work covers.</h2>
          <div className="mt-12">
            <RuledRows rows={service.scope} />
          </div>
        </div>
      </section>

      <div className="bg-surface pb-16 md:pb-24">
        <PhotoBand photo={photos[bandPhoto[service.category]]} label="How we work" statement="AI for speed. People for judgement.">
          <p>Every deliverable passes through a specialist who is accountable for it. The tools make them faster; they do not make the decisions.</p>
        </PhotoBand>
      </div>

      <Block label="Division of labour" title="What AI accelerates, and what experts decide." className="border-t-0">
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
