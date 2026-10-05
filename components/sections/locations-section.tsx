import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { MarketSkyline } from "@/components/locations/market-skyline";
import { ArrowLink } from "@/components/ui/cta-link";
import { countries } from "@/data/locations";

/** First sentence of a market's context: enough for the homepage. */
const firstSentence = (text: string) => text.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? text;

export function LocationsSection() {
  const markets = countries.map((c) => ({
    slug: c.slug,
    name: c.name,
    short: c.short,
    context: firstSentence(c.context),
    points: c.considerations.slice(0, 3).map((x) => x.title),
    cities: c.cities.map((x) => ({ slug: x.slug, name: x.name })),
  }));

  return (
    <Section aria-labelledby="locations-title" className="overflow-hidden bg-surface">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <SectionHeader id="locations-title" label="Global + local growth" title={["Local Expertise.", "Global Ambition."]} className="lg:col-span-6" />
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-12" delay={0.1}>
            <p className="text-lead text-muted">
              Language, regulation, platforms and buying habits change from market to market, and from city to city.
              Strategy is adapted to each, not translated.
            </p>
            <ArrowLink href="/locations/" className="mt-5">See how we work by market</ArrowLink>
          </Reveal>
        </div>

        <Reveal className="mt-10 lg:mt-12" y={24}>
          <MarketSkyline markets={markets} />
        </Reveal>
        <p className="mt-4 text-xs text-muted">Landmarks mark the markets we plan for. They do not indicate offices; work is delivered remotely.</p>
      </div>
    </Section>
  );
}
