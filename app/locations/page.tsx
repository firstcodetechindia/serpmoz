import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { WorldMap } from "@/components/visuals/world-map";
import { countries } from "@/data/locations";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

const meta = {
  title: "Locations",
  description:
    "How SERPMOZ approaches growth in India, the USA, the UK, the UAE, Canada, Australia, Singapore and Europe: language, regulation and local search behaviour.",
  path: "/locations/",
};

export const metadata: Metadata = buildMetadata(meta);

export default function LocationsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Locations", href: meta.path }]}
        label="Global + local growth"
        title="Local expertise. Global ambition."
        lead="A strategy that works in Mumbai will not transfer unchanged to London or Dubai. These pages describe what is different about each market, and what we do about it."
      />
      <section className="stage -mt-px overflow-hidden pb-16 md:pb-24">
        <div className="shell no-scrollbar overflow-x-auto py-4 sm:overflow-visible">
          <WorldMap tone="dark" />
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="shell">
          <ul className="border-b border-line">
            {countries.map((c) => (
              <li key={c.slug} className="grid gap-x-8 gap-y-3 border-t border-line py-8 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <span className="label-mono text-muted">{c.short}</span>
                  <h2 className="mt-2 text-h3 font-semibold text-navy">
                    <Link href={`/locations/${c.slug}/`} className="transition-colors hover:text-blue-ink">{c.name}</Link>
                  </h2>
                </div>
                <p className="text-[1.0625rem] leading-relaxed text-muted lg:col-span-6">{c.context}</p>
                <ul className="flex flex-wrap content-start gap-x-4 gap-y-1.5 lg:col-span-3">
                  {c.cities.map((city) => (
                    <li key={city.slug}>
                      <Link href={`/locations/${c.slug}/${city.slug}/`} className="text-[0.9375rem] text-ink underline decoration-line-strong underline-offset-4 hover:text-blue-ink">
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
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
