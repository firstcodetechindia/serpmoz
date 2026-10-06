import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, MapPin } from "lucide-react";
import { LocationWorldMap } from "@/components/locations/location-world-map";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Faqs, RuledRows } from "@/components/services/page-parts";
import { CtaLink } from "@/components/ui/cta-link";
import { SignalField } from "@/components/visuals/signal-field";
import { getCityRecord, getLocationService, getMarket, locationPath, locationServices, locationServicesIn } from "@/data/locations";
import { getService } from "@/data/services";
import { cta } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema, serviceSchema, webPageSchema } from "@/lib/seo/schema";

type Props = { params: Promise<{ country: string; city: string; service: string }> };

/**
 * Service + location pages. One exists only where data/locations has an
 * entry written for that service in that city: service intent and location
 * intent together, never a service page with a place name inserted.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return locationServices.map((l) => ({ country: l.country, city: l.city, service: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const entry = getLocationService(p.country, p.city, p.service);
  if (!entry) return {};
  return buildMetadata({ title: entry.title, description: entry.metaDescription, path: `/locations/${entry.country}/${entry.city}/${entry.slug}/` });
}

const eyebrow = "label-mono text-muted";
const h2 = "mt-4 text-h2 font-semibold text-navy";

export default async function LocationServicePage({ params }: Props) {
  const p = await params;
  const entry = getLocationService(p.country, p.city, p.service);
  const market = getMarket(p.country);
  const city = getCityRecord(p.country, p.city);
  const service = entry ? getService(entry.service) : undefined;
  if (!entry || !market || !city || !service) notFound();

  const cityPath = locationPath(city);
  const path = `${cityPath}${entry.slug}/`;
  const others = locationServicesIn(market.slug, city.slug).filter((l) => l.slug !== entry.slug);
  const pillars = service.master?.pillars ?? [];

  return (
    <article className="overflow-x-clip">
      <header data-hero="dark" className="stage relative overflow-hidden pt-28 pb-14 text-white md:pt-36 md:pb-16">
        <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <SignalField cx={74} cy={44} className="hidden opacity-40 lg:block" />
        <div className="shell relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Breadcrumbs crumbs={[{ name: "Locations", href: "/locations/" }, { name: market.name, href: locationPath(market) }, { name: city.name, href: cityPath }, { name: service.name, href: path }]} tone="dark" />
            <p className="label-mono mt-8 text-cyan">{service.name} · {city.name}</p>
            <h1 className="mt-4 text-[clamp(2.25rem,1.3rem+3.1vw,3.625rem)] leading-[1.1] font-semibold tracking-[-0.035em]">{entry.title}</h1>
            <p className="mt-6 text-lead text-white/75">{entry.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={cta.audit.href} variant="primary" size="lg" data-cta="location-service-audit">{service.cta ?? cta.audit.label}</CtaLink>
              <CtaLink href={`/${service.slug}/`} variant="onDark" size="lg" arrow={false}>How {service.name} works</CtaLink>
            </div>
          </div>
          <div className="lg:col-span-7"><LocationWorldMap location={city} /></div>
        </div>
      </header>

      <section aria-labelledby="local-title" className="bg-surface py-12 md:py-16 lg:py-20">
        <div className="shell">
          <p className={eyebrow}>Specific to {city.name}</p>
          <h2 id="local-title" className={h2}>What {service.name} has to account for in {city.inSentence}.</h2>
          <div className="mt-10"><RuledRows rows={entry.localFactors} /></div>
        </div>
      </section>

      {city.local ? (
        <section aria-labelledby="search-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
          <div className="grid grid-cols-1 overflow-hidden rounded-[1.75rem] bg-navy text-white md:rounded-[2.25rem] lg:grid-cols-12">
            <div className="p-7 md:p-12 lg:col-span-6">
              <p className="label-mono text-cyan">How {city.name} searches</p>
              <h2 id="search-title" className="mt-4 text-[clamp(1.625rem,1.3rem+1.4vw,2.375rem)] leading-[1.15] font-semibold tracking-[-0.03em]">{city.local.heading}</h2>
              <Link href={cityPath} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline decoration-white/30 underline-offset-[6px] hover:decoration-orange">Digital growth in {city.name} <ArrowRight aria-hidden className="size-4" /></Link>
            </div>
            <ul className="border-t border-white/12 p-7 md:p-12 lg:col-span-6 lg:border-t-0 lg:border-l">
              {city.local.points.map((pt) => (
                <li key={pt} className="flex gap-3 border-b border-white/12 py-3.5 text-[0.9375rem] leading-snug text-white/90 first:pt-0 last:border-b-0 last:pb-0"><MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-orange" />{pt}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section aria-labelledby="scope-title" className="bg-surface py-12 md:py-16 lg:py-20">
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className={eyebrow}>The service</p>
            <h2 id="scope-title" className={h2}>What {service.name} includes.</h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted">{service.summary}</p>
            <CtaLink href={`/${service.slug}/`} variant="solid" size="md" className="mt-6">Full {service.name} service</CtaLink>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {(pillars.length ? pillars.map((x) => ({ title: x.title, body: x.body })) : service.scope).map((x) => (
              <li key={x.title} className="rounded-2xl border border-line bg-canvas p-5">
                <h3 className="flex items-start gap-2.5 text-lg leading-snug font-semibold tracking-[-0.015em] text-navy"><Check aria-hidden className="mt-1 size-4 shrink-0 text-blue-ink" strokeWidth={3} />{x.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{x.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="faqs-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className="rounded-[1.75rem] bg-mist py-12 md:rounded-[2.25rem] md:py-16 lg:py-20">
          <div className="shell grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className={eyebrow}>Questions</p>
              <h2 id="faqs-title" className={h2}>{entry.title}: common questions.</h2>
            </div>
            <div className="lg:col-span-8"><Faqs faqs={entry.faqs} /></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="related-title" className="bg-surface py-12 md:py-16">
        <div className="shell">
          <p className={eyebrow}>Related</p>
          <h2 id="related-title" className="mt-4 text-[clamp(1.5rem,1.2rem+1.2vw,2.125rem)] leading-[1.2] font-semibold tracking-[-0.03em] text-navy">Keep exploring.</h2>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: `Digital growth in ${city.name}`, href: cityPath },
              { label: `Digital growth in ${market.inSentence}`, href: locationPath(market) },
              { label: `${service.name} services`, href: `/${service.slug}/` },
              ...others.map((o) => ({ label: o.title, href: `${cityPath}${o.slug}/` })),
              ...service.related.slice(0, 2).flatMap((slug) => { const r = getService(slug); return r ? [{ label: `${r.name} services`, href: `/${slug}/` }] : []; }),
            ].slice(0, 8).map((x) => (
              <li key={x.href}>
                <Link href={x.href} className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-line p-5 text-[0.9375rem] font-semibold text-navy transition-colors duration-300 hover:border-navy hover:bg-navy hover:text-white">
                  {x.label}
                  <ArrowUpRight aria-hidden className="size-4 shrink-0 text-navy/30 transition-colors group-hover:text-orange" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta title={[`Discuss ${service.name} for your business in ${city.name}.`]} body={city.cta.body} action={service.cta ?? cta.audit.label} />
      <JsonLd
        data={[
          webPageSchema({ path, title: `${entry.title} | SERPMOZ`, description: entry.metaDescription }),
          serviceSchema({ name: entry.title, summary: entry.metaDescription, path, areaServed: `${city.name}, ${market.name}`, category: service.name }),
          faqSchema(entry.faqs),
        ]}
      />
    </article>
  );
}
