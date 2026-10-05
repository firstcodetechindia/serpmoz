import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/final-cta";
import { MethodologySteps } from "@/components/sections/methodology";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Block, Prose } from "@/components/services/page-parts";
import { MethodLoop } from "@/components/visuals/method-loop";
import { growthSystem } from "@/data/growth";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

const meta = {
  title: "Methodology",
  description:
    "Strategy first, AI accelerated, expert approved. The six-stage SERPMOZ methodology: discover, diagnose, prioritize, execute, measure and optimize.",
  path: "/methodology/",
};

export const metadata: Metadata = buildMetadata(meta);

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Methodology", href: meta.path }]}
        label="Methodology"
        title="Strategy first. AI accelerated. Expert approved."
        lead="Every engagement follows the same six stages. The order matters: nothing is executed before it has been prioritised, and nothing is reported that cannot be traced to its source."
      />

      <section className="overflow-hidden py-16 md:py-24">
        <div className="shell grid items-start gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <MethodLoop />
          </div>
          <div className="lg:col-span-7">
            <MethodologySteps />
          </div>
        </div>
      </section>

      <Block label="Where AI sits" title="Accelerated, not automated." className="bg-surface">
        <Prose>
          <p>
            AI is used at every stage: to process research, cluster data, draft content, monitor performance and surface
            anomalies. It makes each stage faster and lets us look at more evidence than a team could by hand.
          </p>
          <p>
            <strong>It does not make decisions.</strong> Priorities, positioning, technical choices and anything published
            under your name are reviewed and approved by a specialist who is accountable for the outcome.
          </p>
        </Prose>
      </Block>

      <Block label="The growth system" title="What the method is applied to.">
        <ol className="grid border-b border-line sm:grid-cols-3">
          {growthSystem.map((s, i) => (
            <li key={s.name} className="border-t border-line py-5 pr-4">
              <span className="label-mono text-muted">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-1.5 text-lg font-semibold tracking-[-0.015em] text-navy">{s.name}</p>
            </li>
          ))}
        </ol>
      </Block>

      <FinalCta />
      <JsonLd data={webPageSchema(meta)} />
    </>
  );
}
