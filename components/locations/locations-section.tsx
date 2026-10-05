import Link from "next/link";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { ArrowLink } from "@/components/ui/cta-link";
import { countries, featuredCities } from "@/data/locations";

export function LocationsSection() {
  return (
    <Section aria-labelledby="locations-title" className="border-t border-line bg-surface">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeader
            id="locations-title"
            index="10"
            label="Global + local growth"
            title={["Local Expertise.", "Global Ambition."]}
            lead="Language, regulation, platforms and buying habits change from market to market, and from city to city. Strategy is adapted to each, not translated."
          />
          <ArrowLink href="/locations/" className="mt-8">
            See how we work by market
          </ArrowLink>
        </div>

        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
          <h3 className="label-mono text-muted">Countries and regions</h3>
          <ul className="mt-5 grid grid-cols-2 border-b border-line sm:grid-cols-4">
            {countries.map((c) => (
              <li key={c.slug} className="border-t border-line">
                <Link href={`/locations/${c.slug}/`} className="group block py-5 pr-3">
                  <span className="label-mono text-muted transition-colors group-hover:text-orange-ink">{c.short}</span>
                  <span className="mt-1.5 block text-xl font-semibold tracking-[-0.025em] text-navy">{c.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="label-mono mt-12 text-muted">Cities</h3>
          <ul className="mt-4 flex flex-wrap gap-x-1.5 gap-y-1 text-[1.0625rem] leading-relaxed">
            {featuredCities.map((c, i) => (
              <li key={c.slug} className="flex items-center gap-1.5">
                <Link href={`/locations/${c.country}/${c.slug}/`} className="text-ink underline decoration-line-strong decoration-1 underline-offset-4 transition-colors hover:text-blue-ink hover:decoration-blue">
                  {c.name}
                </Link>
                {i < featuredCities.length - 1 ? <span aria-hidden className="text-line-strong">·</span> : null}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
