import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Block, LinkList } from "@/components/services/page-parts";
import { CtaLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { photos } from "@/data/images";
import { countries, getCity, getCountry, locationServices } from "@/data/locations";
import { primaryServices } from "@/data/services";
import { cta } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

type Props = { params: Promise<{ country: string; city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return countries.flatMap((c) => c.cities.map((city) => ({ country: c.slug, city: city.slug })));
}

const metaFor = (city: string, country: string, countrySlug: string, citySlug: string, context: string) => ({
  title: `Digital Growth in ${city}, ${country}`,
  description: context.length > 158 ? `${context.slice(0, context.lastIndexOf(" ", 155))}…` : context,
  path: `/locations/${countrySlug}/${citySlug}/`,
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const country = getCountry(p.country);
  const city = getCity(p.country, p.city);
  return country && city ? buildMetadata(metaFor(city.name, country.name, country.slug, city.slug, city.context)) : {};
}

export default async function CityPage({ params }: Props) {
  const p = await params;
  const country = getCountry(p.country);
  const city = getCity(p.country, p.city);
  if (!country || !city) notFound();
  const meta = metaFor(city.name, country.name, country.slug, city.slug, city.context);
  const local = locationServices.filter((l) => l.country === country.slug && l.city === city.slug);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Locations", href: "/locations/" },
          { name: country.name, href: `/locations/${country.slug}/` },
          { name: city.name, href: meta.path },
        ]}
        label={`${country.name} · ${city.name}`}
        title={`Growth strategy for businesses in ${city.name}.`}
        lead={city.context}
        aside={<Photo photo={photos.skyline} sizes="(min-width: 1024px) 480px, 100vw" decorative className="hidden aspect-[5/4] rounded-panel lg:block" />}
      >
        <CtaLink href={cta.audit.href} variant="primary" size="lg">{cta.audit.label}</CtaLink>
      </PageHero>

      <Block label="Local factors" title={`What shapes demand in ${city.name}.`} className="border-t-0">
        <ul className="border-b border-line">
          {city.considerations.map((c) => (
            <li key={c} className="flex gap-5 border-t border-line py-5 text-[clamp(1.125rem,1rem+0.5vw,1.375rem)] leading-snug font-medium tracking-[-0.015em] text-ink">
              <span aria-hidden className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-orange" />
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">
          These sit on top of the national picture. For language, regulation and platform considerations, see our notes on{" "}
          <Link href={`/locations/${country.slug}/`} className="text-blue-ink underline underline-offset-4">{country.name}</Link>.
        </p>
      </Block>

      {local.length ? (
        <Block label={`Services in ${city.name}`} title="Local service pages.">
          <LinkList links={local.map((l) => ({ label: l.title, href: `/locations/${l.country}/${l.city}/${l.slug}/` }))} />
        </Block>
      ) : null}

      <Block label="Services" title="What we do.">
        <LinkList links={primaryServices.slice(0, 8).map((s) => ({ label: s.name, href: `/${s.slug}/`, note: s.summary }))} />
      </Block>

      <FinalCta />
      <JsonLd data={webPageSchema(meta)} />
    </>
  );
}
