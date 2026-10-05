import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { Block, Prose } from "@/components/services/page-parts";
import { Badge } from "@/components/ui/badge";
import { CtaLink } from "@/components/ui/cta-link";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

const meta = {
  title: "GrowthOS: Coming Soon",
  description: "GrowthOS is the growth intelligence platform SERPMOZ is planning for its clients. It is not available yet.",
  path: "/growthos/",
};

// A placeholder until there is a product to describe.
export const metadata: Metadata = buildMetadata({ ...meta, noindex: true });

const ideas = [
  { title: "One view of growth", body: "Search, AI visibility, campaigns, conversions and revenue read in the same place." },
  { title: "Evidence behind every number", body: "Each figure traceable to the system it came from." },
  { title: "Decisions, not dashboards", body: "What changed, why it matters and what to do next." },
];

export default function GrowthosPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "GrowthOS", href: meta.path }]}
        label="GrowthOS"
        title="GrowthOS. Coming Soon."
        lead="A growth intelligence platform we are planning for SERPMOZ clients. It does not exist yet, and nothing here is for sale. Today the work is done by our team, with AI and established tools."
      >
        <Badge variant="dark" dot>In planning</Badge>
        <CtaLink href="/services/" variant="onDark" size="lg">See what we do today</CtaLink>
      </PageHero>

      <Block label="The idea" title="What it is meant to do." className="border-t-0">
        <ul className="grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-3">
          {ideas.map((i) => (
            <li key={i.title} className="bg-surface p-7">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{i.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{i.body}</p>
            </li>
          ))}
        </ul>
        <Prose className="mt-8">
          <p>We will describe features, availability and access when there is something real to show. If you want to hear when that happens, tell us through the contact page.</p>
        </Prose>
      </Block>

      <FinalCta />
      <JsonLd data={webPageSchema(meta)} />
    </>
  );
}
