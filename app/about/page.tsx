import type { Metadata } from "next";
import { FinalCta } from "@/components/growth/final-cta";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Block, Prose } from "@/components/services/page-parts";
import { ArrowLink } from "@/components/ui/cta-link";
import { pillars } from "@/data/growth";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

const meta = {
  title: "About",
  description:
    "SERPMOZ is an AI-powered digital growth company. We combine human expertise, AI, search intelligence and technology to connect visibility to revenue.",
  path: "/about/",
};

export const metadata: Metadata = buildMetadata(meta);

const combines = [
  "Human expertise", "Artificial intelligence", "Search intelligence", "Data", "Technology",
  "Strategy", "Marketing execution", "Conversion optimization", "Automation", "Revenue measurement",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: meta.path }]}
        label="About SERPMOZ"
        title="AI-powered. Expert-led. Revenue-focused."
        lead="SERPMOZ is an AI-powered digital growth company. We help businesses become discoverable wherever modern customers search, and we connect that visibility to leads and revenue."
      />

      <Block label="What we believe" title="AI can do the work. Experts know what work matters." className="border-t-0">
        <Prose>
          <p>
            AI has made marketing execution easier. A small team can now research a market, draft a campaign, produce a
            month of content and analyse the results in days.
          </p>
          <p>
            <strong>That has not made growth easier.</strong> When everyone can produce more, the advantage moves to the
            people who know what is worth producing: which opportunities carry commercial value, which channels deserve
            investment, why a competitor is winning and why traffic is not converting.
          </p>
          <p>
            We built SERPMOZ around that division of labour. AI does the volume. Experts set the direction, check the
            output and answer for the result.
          </p>
        </Prose>
      </Block>

      <Block label="What we are" title="A growth company, not a channel agency." className="bg-surface">
        <Prose>
          <p>
            We are not an SEO agency, a social media agency or a supplier of marketing packages. Those models sell activity
            in a single channel and report on it in that channel’s terms.
          </p>
          <p>We combine the disciplines growth actually depends on, and manage them against one outcome:</p>
        </Prose>
        <ul className="mt-8 grid grid-cols-2 border-b border-line sm:grid-cols-3 lg:grid-cols-5">
          {combines.map((c) => (
            <li key={c} className="border-t border-line py-4 pr-3 text-[0.9375rem] font-medium text-ink">{c}</li>
          ))}
        </ul>
      </Block>

      <Block label="Principles" title="How we choose to operate.">
        <ul className="grid border-b border-line sm:grid-cols-2 sm:gap-x-10">
          {pillars.map((p) => (
            <li key={p.name} className="border-t border-line py-6">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{p.name}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
        <ArrowLink href="/methodology/" className="mt-8">Read our methodology</ArrowLink>
      </Block>

      <FinalCta />
      <JsonLd data={webPageSchema({ ...meta, type: "AboutPage" })} />
    </>
  );
}
