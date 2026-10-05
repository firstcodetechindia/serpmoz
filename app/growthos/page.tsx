import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GrowthosPreview } from "@/components/growthos/growthos-preview";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/layout/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { Block, Prose } from "@/components/services/page-parts";
import { CtaLink } from "@/components/ui/cta-link";
import { growthosMetrics, growthosModules, growthosPages } from "@/data/growthos";
import { cta, site } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

const meta = {
  title: "GrowthOS: Growth Intelligence Layer",
  description:
    "GrowthOS brings search visibility, AI visibility, competitors, campaigns, conversions and revenue into one intelligence layer for SERPMOZ clients.",
  path: "/growthos/",
};

export const metadata: Metadata = buildMetadata(meta);

export default function GrowthosPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "GrowthOS", href: meta.path }]}
        label="GrowthOS · Product preview"
        title="Your growth intelligence layer."
        lead="GrowthOS brings your search visibility, AI visibility, competitors, campaigns, conversions and revenue into one intelligence layer, so every decision starts from the same evidence."
        className="pb-10 md:pb-14"
      >
        <CtaLink href={site.appUrl || cta.strategist.href} variant="primary" size="lg" data-cta="growthos-walkthrough">
          {site.appUrl ? "Open GrowthOS" : "Request a walkthrough"}
        </CtaLink>
        <CtaLink href="#modules" variant="onDark" size="lg" arrow={false}>See the modules</CtaLink>
      </PageHero>

      <section className="stage -mt-px overflow-hidden pb-16 text-white md:pb-24">
        <div className="shell">
          <Reveal y={24}>
            <GrowthosPreview />
          </Reveal>
          <p className="mt-5 text-xs text-white/55">
            Interactive product preview with illustrative figures. GrowthOS is being built alongside client engagements; the
            interface and modules shown here may change.
          </p>
        </div>
      </section>

      <Block label="Why it exists" title="Dashboards report channels. Businesses need answers." className="border-t-0">
        <Prose>
          <p>
            Most marketing teams already have more dashboards than they can read. Each one describes a channel in that
            channel’s own terms, and none of them agree on what a lead is worth.
          </p>
          <p>
            GrowthOS is organised around questions instead: <strong>is marketing producing revenue, where is it coming
            from, who is gaining on us, and what should we do next?</strong> Each module answers one of them, using the
            same definitions of lead, conversion and revenue throughout.
          </p>
          <p>
            AI does the reading: it watches the data, flags changes and drafts recommendations. A strategist reviews
            every recommendation before it becomes a task.
          </p>
        </Prose>
      </Block>

      <section id="modules" className="scroll-mt-24 border-t border-line bg-surface py-16 md:py-24">
        <div className="shell">
          <p className="label-mono text-muted">Modules</p>
          <h2 className="mt-4 max-w-2xl text-h2 font-semibold text-navy">Eleven modules. One question each.</h2>
          <ol className="mt-12 border-b border-line">
            {growthosModules.map((m, i) => {
              const page = growthosPages.find((p) => p.module === m.id);
              return (
                <li key={m.id} className="grid gap-x-6 gap-y-1 border-t border-line py-6 md:grid-cols-[4rem_14rem_1fr_auto] md:items-baseline">
                  <span className="label-mono text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{m.name}</h3>
                  <p className="text-[1.0625rem] text-muted">{m.question}</p>
                  {page ? (
                    <Link href={`/growthos/${page.slug}/`} className="inline-flex items-center gap-1 text-sm font-medium text-blue-ink hover:underline hover:underline-offset-4">
                      Module detail <ArrowUpRight aria-hidden className="size-3.5" />
                    </Link>
                  ) : (
                    <span aria-hidden />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <Block label="North-star metrics" title="Seven numbers that stay on screen.">
        <ul className="grid grid-cols-2 border-b border-line sm:grid-cols-3">
          {growthosMetrics.map((m) => (
            <li key={m.name} className="border-t border-line py-5 pr-4 text-lg font-medium tracking-[-0.015em] text-ink">
              {m.name}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
          Definitions are agreed with each client at the start, so that marketing, sales and finance read the same figure
          the same way.
        </p>
      </Block>

      <FinalCta title={["See GrowthOS", "on your own data."]} body="A growth audit is the quickest way in. We connect what you already have and show you what the first version of your intelligence layer would say." />
      <JsonLd data={webPageSchema(meta)} />
    </>
  );
}
