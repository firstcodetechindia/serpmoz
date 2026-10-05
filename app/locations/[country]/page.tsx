import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Block, LinkList, RuledRows } from "@/components/services/page-parts";
import { CtaLink } from "@/components/ui/cta-link";
import { WorldMap } from "@/components/visuals/world-map";
import { countries, getCountry } from "@/data/locations";
import { cta } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

type Props = { params: Promise<{ country: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

const metaFor = (name: string, slug: string, context: string) => ({
  title: `Digital Growth in ${name === "Europe" ? "Europe" : name === "USA" || name === "UK" || name === "UAE" ? `the ${name}` : name}`,
  description: context.length > 158 ? `${context.slice(0, context.lastIndexOf(" ", 155))}…` : context,
  path: `/locations/${slug}/`,
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCountry((await params).country);
  return c ? buildMetadata(metaFor(c.name, c.slug, c.context)) : {};
}

export default async function CountryPage({ params }: Props) {
  const c = getCountry((await params).country);
  if (!c) notFound();
  const meta = metaFor(c.name, c.slug, c.context);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Locations", href: "/locations/" },
          { name: c.name, href: meta.path },
        ]}
        label={`Market · ${c.short}`}
        title={meta.title}
        lead={c.context}
        aside={<WorldMap tone="dark" className="hidden lg:block" />}
      >
        <CtaLink href={cta.audit.href} variant="primary" size="lg">{cta.audit.label}</CtaLink>
      </PageHero>

      <section className="bg-surface py-16 md:py-24">
        <div className="shell">
          <p className="label-mono text-muted">What changes here</p>
          <h2 className="mt-4 max-w-2xl text-h2 font-semibold text-navy">Three things we plan for.</h2>
          <div className="mt-12">
            <RuledRows rows={c.considerations} />
          </div>
        </div>
      </section>

      {c.cities.length ? (
        <Block label="Cities" title="City-level notes.">
          <LinkList links={c.cities.map((city) => ({ label: city.name, href: `/locations/${c.slug}/${city.slug}/`, note: city.considerations[0] }))} />
        </Block>
      ) : null}

      <FinalCta />
      <JsonLd data={webPageSchema(meta)} />
    </>
  );
}
