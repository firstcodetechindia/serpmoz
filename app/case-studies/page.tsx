import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CaseStudyFramework } from "@/components/case-studies/case-study-framework";
import { SampleBadge } from "@/components/ui/badge";
import { Photo } from "@/components/ui/photo";
import { illustrativeScenarios, publishedCaseStudies, type CaseStudy } from "@/data/case-studies";
import { getIndustry } from "@/data/industries";
import { photos } from "@/data/images";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Block, Prose } from "@/components/services/page-parts";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

const meta = {
  title: "Case Studies",
  description:
    "How SERPMOZ documents results: challenge, strategy, execution, result and business impact, published only with client approval and verified figures.",
  path: "/case-studies/",
};

export const metadata: Metadata = buildMetadata(meta);

const standards = [
  { title: "Client approval", body: "Nothing is published without written permission. Some of our work will always stay private." },
  { title: "Verified figures", body: "Numbers come from the client’s own analytics, ad accounts or CRM, with the date range stated." },
  { title: "Context included", body: "Starting point, budget level, market conditions and anything else that helps a reader judge the result fairly." },
  { title: "What did not work", body: "Tests that failed and decisions we reversed are part of the account." },
];

function StudyList({ items }: { items: CaseStudy[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {items.map((c) => (
        <li key={c.slug} className="min-w-0">
          <Link href={`/case-studies/${c.slug}/`} className="group flex h-full flex-col rounded-panel border border-line bg-surface p-6 transition-colors hover:border-navy md:p-7">
            <span className="flex flex-wrap items-center justify-between gap-3">
              {c.illustrative ? <SampleBadge>Illustrative Growth Scenario</SampleBadge> : <span className="label-mono text-blue-ink">Case study</span>}
              <ArrowUpRight aria-hidden className="size-4 shrink-0 text-line-strong transition-colors group-hover:text-blue-ink" />
            </span>
            <h3 className="mt-5 text-xl leading-snug font-semibold tracking-[-0.02em] text-navy">{c.title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{c.summary}</p>
            <span className="label-mono mt-auto pt-6 text-muted">
              {getIndustry(c.industry)?.name ?? c.industry} · {c.market}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Case Studies", href: meta.path }]}
        label="Case studies"
        title="Growth you can measure."
        lead="We are preparing our first case studies for publication. This page explains the standard they are being written to, so you know how to read them when they arrive."
        aside={<Photo photo={photos.teamWorkshop} sizes="(min-width: 1024px) 480px, 100vw" priority className="aspect-[4/3] rounded-panel shadow-[0_40px_90px_-30px_rgb(0_0_0/0.65)] lg:aspect-[5/4]" />}
      />

      <section className="py-16 md:py-24">
        <div className="shell">
          <p className="label-mono text-muted">The structure</p>
          <h2 className="mt-4 max-w-2xl text-h2 font-semibold text-navy">Five parts, every time.</h2>
          <div className="mt-12">
            <CaseStudyFramework />
          </div>
        </div>
      </section>

      {publishedCaseStudies.length ? (
        <section className="border-t border-line py-16 md:py-24">
          <div className="shell">
            <p className="label-mono text-muted">Published work</p>
            <h2 className="mt-4 max-w-2xl text-h2 font-semibold text-navy">Client case studies.</h2>
            <div className="mt-10">
              <StudyList items={publishedCaseStudies} />
            </div>
          </div>
        </section>
      ) : null}

      <Block label="Publishing standards" title="What has to be true before we publish." className="bg-surface">
        <ul className="grid border-b border-line sm:grid-cols-2 sm:gap-x-10">
          {standards.map((s) => (
            <li key={s.title} className="border-t border-line py-6">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{s.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ul>
      </Block>

      {illustrativeScenarios.length ? (
        <section className="border-t border-line py-16 md:py-24">
          <div className="shell">
            <p className="label-mono text-muted">Illustrative Growth Scenarios</p>
            <h2 className="mt-4 max-w-2xl text-h2 font-semibold text-navy">How we would approach three common situations.</h2>
            <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">
              These are not client results. Each one sets out a realistic starting point, the diagnosis we would expect, the plan and what would be measured. They name no company and contain no result figures.
            </p>
            <div className="mt-10">
              <StudyList items={illustrativeScenarios} />
            </div>
          </div>
        </section>
      ) : null}

      <Block label="In the meantime" title="Ask us directly." className="bg-surface">
        <Prose>
          <p>
            If you are evaluating SERPMOZ now, talk to a strategist. We will walk you through how we would approach your
            situation, what we would measure and what a realistic first ninety days looks like.
          </p>
        </Prose>
      </Block>

      <FinalCta />
      <JsonLd data={webPageSchema({ ...meta, type: "CollectionPage" })} />
    </>
  );
}
