import Link from "next/link";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { ArrowLink } from "@/components/ui/cta-link";
import { WorldMap } from "@/components/visuals/world-map";
import { countries, featuredCities } from "@/data/locations";

export function LocationsSection() {
  return (
    <Section aria-labelledby="locations-title" className="overflow-hidden">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <SectionHeader
            id="locations-title"
            index="10"
            label="Global + local growth"
            title={["Local Expertise.", "Global Ambition."]}
            className="lg:col-span-6"
          />
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-12" delay={0.1}>
            <p className="text-lead text-muted">
              Language, regulation, platforms and buying habits change from market to market, and from city to city.
              Strategy is adapted to each, not translated.
            </p>
            <ArrowLink href="/locations/" className="mt-6">
              See how we work by market
            </ArrowLink>
          </Reveal>
        </div>

        <Reveal className="relative mt-10 lg:mt-14" y={24}>
          <div aria-hidden className="absolute inset-x-[10%] top-[10%] bottom-[10%] rounded-full bg-blue/10 blur-3xl" />
          <div className="no-scrollbar relative -mx-5 overflow-x-auto px-5 py-4 sm:mx-0 sm:overflow-visible sm:px-0">
            <WorldMap />
          </div>
        </Reveal>

        <Reveal className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h3 className="label-mono text-muted">Countries and regions</h3>
            <ul className="mt-4 grid grid-cols-2 border-b border-line sm:grid-cols-4">
              {countries.map((c) => (
                <li key={c.slug} className="border-t border-line">
                  <Link href={`/locations/${c.slug}/`} className="group block py-4 pr-3">
                    <span className="label-mono text-muted transition-colors group-hover:text-orange-ink">{c.short}</span>
                    <span className="mt-1 block text-lg font-semibold tracking-[-0.02em] text-navy transition-colors group-hover:text-blue-ink">{c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <h3 className="label-mono text-muted">Cities</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {featuredCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/locations/${c.country}/${c.slug}/`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink transition-colors hover:border-navy hover:text-navy"
                  >
                    <span aria-hidden className="size-1.5 rounded-full bg-blue" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
