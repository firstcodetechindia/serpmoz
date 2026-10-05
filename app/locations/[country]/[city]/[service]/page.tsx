import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Block, MeasuresPanel, RuledRows } from "@/components/services/page-parts";
import { ArrowLink, CtaLink } from "@/components/ui/cta-link";
import { CapabilityVisual } from "@/components/visuals/capability-visual";
import { getCity, getCountry, getLocationService, locationServices } from "@/data/locations";
import { getService } from "@/data/services";
import { cta } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, webPageSchema } from "@/lib/seo/schema";

type Props = { params: Promise<{ country: string; city: string; service: string }> };

/**
 * Service × location pages. Generated only for entries in `locationServices`,
 * each of which must carry genuinely local content. No programmatic fan-out.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return locationServices.map((l) => ({ country: l.country, city: l.city, service: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const entry = getLocationService(p.country, p.city, p.service);
  if (!entry) return {};
  return buildMetadata({
    title: entry.title,
    description: entry.metaDescription,
    path: `/locations/${entry.country}/${entry.city}/${entry.slug}/`,
  });
}

export default async function LocationServicePage({ params }: Props) {
  const p = await params;
  const entry = getLocationService(p.country, p.city, p.service);
  const country = getCountry(p.country);
  const city = getCity(p.country, p.city);
  const service = entry ? getService(entry.service) : undefined;
  if (!entry || !country || !city || !service) notFound();

  const path = `/locations/${entry.country}/${entry.city}/${entry.slug}/`;

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Locations", href: "/locations/" },
          { name: country.name, href: `/locations/${country.slug}/` },
          { name: city.name, href: `/locations/${country.slug}/${city.slug}/` },
          { name: service.name, href: path },
        ]}
        label={`${service.name} · ${city.name}`}
        title={entry.title}
        lead={entry.intro}
        aside={<CapabilityVisual category={service.category} />}
      >
        <CtaLink href={cta.audit.href} variant="primary" size="lg">{cta.audit.label}</CtaLink>
      </PageHero>

      <section className="bg-surface py-16 md:py-24">
        <div className="shell">
          <p className="label-mono text-muted">Specific to {city.name}</p>
          <h2 className="mt-4 max-w-2xl text-h2 font-semibold text-navy">What we account for locally.</h2>
          <div className="mt-12">
            <RuledRows rows={entry.localFactors} />
          </div>
        </div>
      </section>

      <Block label="The service" title={service.name}>
        <div className="grid gap-10 xl:grid-cols-[1.4fr_1fr]">
          <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-muted">{service.summary}</p>
          <MeasuresPanel measures={service.measures} />
        </div>
        <ArrowLink href={`/${service.slug}/`} className="mt-6">
          Full scope of {service.name}
        </ArrowLink>
      </Block>

      <FinalCta />
      <JsonLd
        data={[
          webPageSchema({ path, title: entry.title, description: entry.metaDescription }),
          serviceSchema({ name: `${service.name} in ${city.name}`, summary: entry.metaDescription, path, areaServed: `${city.name}, ${country.name}` }),
        ]}
      />
    </>
  );
}
