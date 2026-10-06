import { SpyNav } from "@/components/navigation/spy-nav";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { AuditCta } from "@/components/layout/audit-cta";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Block, Prose } from "@/components/services/page-parts";
import { ArrowLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { MethodLoop } from "@/components/visuals/method-loop";
import { growthSystem, methodology } from "@/data/growth";
import { photos } from "@/data/images";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

const meta = {
  title: "Methodology: Six Stages From Discovery to Optimization",
  description:
    "The six-stage SERPMOZ methodology. What happens at each stage, what AI accelerates, what experts decide and what you receive.",
  path: "/methodology/",
};

export const metadata: Metadata = buildMetadata(meta);

const slug = (name: string) => name.toLowerCase();

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Methodology", href: meta.path }]}
        label="Methodology"
        title="Strategy first. AI accelerated. Expert approved."
        lead="Every engagement follows the same six stages. The order matters: nothing is executed before it has been prioritised, and nothing is reported that cannot be traced to its source."
      />

      <section aria-labelledby="loop-title" className="overflow-hidden py-16 md:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="label-mono text-muted">The method</p>
            <h2 id="loop-title" className="mt-4 max-w-sm text-[clamp(1.625rem,1.3rem+1.3vw,2.25rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-navy">
              Six stages, run as a loop.
            </h2>
            <Prose className="mt-6">
              <p>
                The method is a cycle, not a checklist. Optimize feeds Discover, so each pass starts with better evidence
                than the last one had.
              </p>
              <p>
                At every stage the work is split the same way. AI handles what benefits from speed and scale. A specialist
                makes the decisions and answers for them.
              </p>
            </Prose>
            <SpyNav aria-label="Stages" className="mt-8">
              <ol className="flex flex-wrap gap-2">
                {methodology.map((s, i) => (
                  <li key={s.name}>
                    <a
                      href={`#${slug(s.name)}`}
                      className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-navy/40 aria-[current=location]:border-navy aria-[current=location]:bg-navy aria-[current=location]:text-white aria-[current=location]:[&>span]:text-white/60"
                    >
                      <span className="label-mono text-[0.625rem] text-muted">{String(i + 1).padStart(2, "0")}</span>
                      {s.name}
                    </a>
                  </li>
                ))}
              </ol>
            </SpyNav>
          </div>
          <div className="lg:col-span-7">
            <MethodLoop />
          </div>
        </div>
      </section>

      <section aria-labelledby="stages-title" className="border-t border-line bg-surface py-16 md:py-24">
        <div className="shell">
          <p className="label-mono text-muted">Stage by stage</p>
          <h2 id="stages-title" className="mt-4 max-w-2xl text-[clamp(1.625rem,1.3rem+1.3vw,2.25rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-navy">
            What happens, who decides and what you receive.
          </h2>

          <div className="mt-12 border-b border-line">
            {methodology.map((s, i) => (
              <article key={s.name} id={slug(s.name)} aria-labelledby={`${slug(s.name)}-title`} className="grid scroll-mt-28 gap-x-8 gap-y-8 border-t border-line py-12 md:py-16 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <span className="tabular block text-5xl leading-[1.12] font-semibold tracking-[-0.05em] text-ink/15 md:text-6xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 id={`${slug(s.name)}-title`} className="mt-4 text-[clamp(1.75rem,1.4rem+1.4vw,2.5rem)] leading-[1.12] font-semibold tracking-[-0.03em] text-navy">
                    {s.name}
                  </h3>
                  <p className="mt-3 max-w-xs text-[1.0625rem] font-medium text-ink">{s.body}</p>
                </div>

                <div className="lg:col-span-8">
                  <h4 className="label-mono text-muted">What happens</h4>
                  <p className="mt-3 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">{s.happens}</p>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-panel border border-line bg-canvas p-6">
                      <h4 className="label-mono text-blue-ink">What AI accelerates</h4>
                      <ul className="mt-4">
                        {s.ai.map((item) => (
                          <li key={item} className="border-t border-line py-3 text-[0.9375rem] leading-relaxed text-ink first:border-t-0 first:pt-0 last:pb-0">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-panel bg-navy p-6 text-white">
                      <h4 className="label-mono text-cyan">What experts decide</h4>
                      <ul className="mt-4">
                        {s.experts.map((item) => (
                          <li key={item} className="border-t border-white/15 py-3 text-[0.9375rem] leading-relaxed first:border-t-0 first:pt-0 last:pb-0">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <h4 className="label-mono mt-8 text-muted">What you receive</h4>
                  <ul className="mt-3 border-b border-line">
                    {s.receive.map((item) => (
                      <li key={item} className="flex gap-3 border-t border-line py-3.5 text-[1.0625rem] leading-relaxed text-ink">
                        <Check aria-hidden className="mt-1.5 size-4 shrink-0 text-blue-ink" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <div className="shell grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Photo photo={photos.analystScreens} sizes="(min-width: 1024px) 440px, 100vw" className="aspect-[4/3] rounded-panel" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="label-mono text-muted">Where AI sits</p>
            <h2 className="mt-4 max-w-sm text-[clamp(1.625rem,1.3rem+1.3vw,2.25rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-navy">
              Accelerated, not automated.
            </h2>
            <Prose className="mt-6">
              <p>
                AI is used at every stage: to process research, cluster data, draft content, monitor performance and surface
                anomalies. It makes each stage faster and lets us look at more evidence than a team could by hand.
              </p>
              <p>
                <strong>It does not make decisions.</strong> Priorities, positioning, technical choices and anything published
                under your name are reviewed and approved by a specialist who is accountable for the outcome.
              </p>
            </Prose>
          </div>
        </div>
      </section>

      <Block label="The growth system" title="What the method is applied to." className="bg-surface">
        <ol className="grid border-b border-line sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
          {growthSystem.map((s, i) => (
            <li key={s.name} className="border-t border-line py-5">
              <span className="label-mono text-muted">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.015em] text-navy">{s.name}</h3>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
        <ArrowLink href="/engagement-models/" className="mt-8">How engagements are scoped</ArrowLink>
      </Block>

      <AuditCta
        location="methodology"
        title="The first two stages are the growth audit."
        body="Discover and Diagnose are where every engagement begins. Request an audit and see what they turn up for your business."
      />
      <JsonLd data={webPageSchema(meta)} />
    </>
  );
}
