import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { LocationsOverviewMap } from "@/components/locations/location-world-map";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { photos, type PhotoKey } from "@/data/images";
import { citiesOf, locationPath, markets } from "@/data/locations";
import { cta } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

const meta = {
  title: "Locations: Markets We Work In",
  description: "How SERPMOZ approaches digital growth in India, the USA, the UK, the UAE, Canada, Australia, Singapore and Europe, with local notes for thirteen cities.",
  path: "/locations/",
};

export const metadata: Metadata = buildMetadata(meta);

export default function LocationsPage() {
  return (
    <>
      <header data-hero="dark" className="stage relative overflow-hidden pt-28 pb-14 text-white md:pt-36 md:pb-20">
        <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <div className="shell relative">
          <Breadcrumbs crumbs={[{ name: "Locations", href: meta.path }]} tone="dark" />
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="label-mono text-cyan">Global + local growth</p>
              <h1 className="mt-4 text-[clamp(2.25rem,1.3rem+3.3vw,3.75rem)] leading-[1.1] font-semibold tracking-[-0.035em]">Local Expertise. Global Ambition.</h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lead text-white/75">A strategy that works in Mumbai will not transfer unchanged to London or Dubai. These pages describe what is different about each market, and what we do about it.</p>
              <CtaLink href={cta.audit.href} variant="primary" size="lg" className="mt-6">{cta.audit.label}</CtaLink>
            </div>
          </div>
          <div className="no-scrollbar -mx-5 mt-10 overflow-x-auto px-5 md:mx-0 md:overflow-visible md:px-0">
            <LocationsOverviewMap className="min-w-[44rem] md:min-w-0" />
          </div>
        </div>
      </header>

      <section aria-labelledby="markets-title" className="bg-surface py-12 md:py-16 lg:py-20">
        <div className="shell">
          <p className="label-mono text-muted">Markets</p>
          <h2 id="markets-title" className="mt-4 text-h2 font-semibold text-navy">Eight markets, each with its own page.</h2>
          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {markets.map((m) => {
              const cities = citiesOf(m.slug);
              return (
                <li key={m.slug} className="flex flex-col overflow-hidden rounded-panel border border-line bg-canvas">
                  <Link href={locationPath(m)} className="group relative block overflow-hidden bg-navy text-white">
                    <Photo photo={photos[m.photo as PhotoKey] ?? photos.skyline} sizes="(min-width: 768px) 50vw, 100vw" wash="strong" className="aspect-[16/7]" imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                    <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                      <span>
                        <span className="label-mono block text-[0.625rem] text-cyan">{m.kind === "region" ? "Region" : "Market"} · {m.code}</span>
                        <span className="mt-1 block text-2xl font-semibold tracking-[-0.03em]">{m.name}</span>
                      </span>
                      <span className="flex size-10 items-center justify-center rounded-full bg-white text-navy transition-all duration-300 group-hover:rotate-45 group-hover:bg-orange"><ArrowUpRight aria-hidden className="size-4" /></span>
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[0.9375rem] leading-relaxed text-muted">{m.hero.description}</p>
                    {cities.length ? (
                      <ul className="mt-4 flex flex-wrap gap-1.5 pt-1" aria-label={`Cities in ${m.name}`}>
                        {cities.map((c) => (
                          <li key={c.slug}>
                            <Link href={locationPath(c)} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink transition-colors hover:border-navy hover:bg-navy hover:text-white">
                              <MapPin aria-hidden className="size-3.5 text-orange" />
                              {c.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <FinalCta />
      <JsonLd data={webPageSchema({ ...meta, type: "CollectionPage" })} />
    </>
  );
}
