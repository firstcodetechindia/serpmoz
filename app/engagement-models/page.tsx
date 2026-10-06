import type { Metadata } from "next";
import { Check } from "lucide-react";
import { AuditCta } from "@/components/layout/audit-cta";
import { PageHero } from "@/components/layout/page-hero";
import { EngagementLadder } from "@/components/sections/engagement-ladder";
import { JsonLd } from "@/components/seo/json-ld";
import { Block, Faqs, Prose, RuledRows } from "@/components/services/page-parts";
import { ArrowLink, CtaLink } from "@/components/ui/cta-link";
import { comparisonRows, engagementFaqs, engagements, howToChoose, type EngagementModel } from "@/data/engagement";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema, webPageSchema } from "@/lib/seo/schema";

const meta = {
  title: "Engagement Models: Five Ways to Work With Us",
  description:
    "Growth Starter, Growth, Scale, Growth Partner and Enterprise: how each SERPMOZ engagement model is scoped, staffed and run. Pricing follows the scope.",
  path: "/engagement-models/",
};

export const metadata: Metadata = buildMetadata(meta);

const faqs = engagementFaqs.map((f) => ({ ...f }));
const PRICING = "Scoped after the diagnostic";

function cell(model: EngagementModel, key: (typeof comparisonRows)[number]["key"]) {
  if (key === "stage") return model.stage;
  if (key === "pricing") return PRICING;
  return model.compare[key];
}

const scopeRows = [
  { key: "channels", label: "Channels in scope" },
  { key: "cadence", label: "Review cadence" },
  { key: "team", label: "Team involvement" },
] as const;

export default function EngagementModelsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Engagement Models", href: meta.path }]}
        label="Engagement models"
        title="Five ways to work with us, scoped to your stage."
        lead="We do not sell packages. Each model describes a shape of engagement: how many channels, how often we review, and how closely our team works with yours. The detail is set after a diagnostic."
      >
        <CtaLink href="/growth-audit/" variant="primary" size="lg" data-cta="engagement-hero-audit">
          Request Your Growth Audit
        </CtaLink>
        <CtaLink href="#compare" variant="onDark" size="lg" arrow={false} data-cta="engagement-hero-compare">
          Compare the models
        </CtaLink>
      </PageHero>

      <section aria-labelledby="ladder-title" className="py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="label-mono text-muted">At a glance</p>
            <h2 id="ladder-title" className="mt-4 text-[clamp(1.625rem,1.3rem+1.3vw,2.25rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-navy">
              Ordered by business maturity.
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted">
              Each step adds scope and closeness, not a longer list of deliverables. Select a model to see its outline, or
              read each one in full below.
            </p>
          </div>
          <div className="mt-10 md:mt-14">
            <EngagementLadder />
          </div>
          <p className="mt-6 max-w-2xl text-sm text-muted">
            No prices are shown because none would be accurate. Pricing follows the diagnostic and the scope agreed with
            you.
          </p>
        </div>
      </section>

      <section aria-labelledby="models-title" className="border-t border-line bg-surface py-16 md:py-24">
        <div className="shell">
          <p className="label-mono text-muted">The five models</p>
          <h2 id="models-title" className="mt-4 max-w-2xl text-[clamp(1.625rem,1.3rem+1.3vw,2.25rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-navy">
            Who each one suits, what it includes and how it runs.
          </h2>

          <div className="mt-12 border-b border-line">
            {engagements.map((m, i) => (
              <article key={m.slug} id={m.slug} aria-labelledby={`${m.slug}-title`} className="grid scroll-mt-28 gap-8 border-t border-line py-12 md:py-16 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-4">
                  <p className="label-mono text-blue-ink">
                    {String(i + 1).padStart(2, "0")} · {m.stage}
                  </p>
                  <h3 id={`${m.slug}-title`} className="mt-3 text-h3 font-semibold text-navy">{m.name}</h3>
                  <p className="mt-3 max-w-sm text-[1.0625rem] leading-relaxed text-ink">{m.forWhom}</p>
                  <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-muted">
                    <span className="font-medium text-ink">Designed to produce: </span>
                    {m.outcome}.
                  </p>
                </div>

                <div className="grid gap-10 lg:col-span-8">
                  <div>
                    <h4 className="label-mono text-muted">Who it suits</h4>
                    <ul className="mt-3 border-b border-line">
                      {m.suits.map((s) => (
                        <li key={s} className="flex gap-3 border-t border-line py-3.5 text-[1.0625rem] leading-relaxed text-ink">
                          <Check aria-hidden className="mt-1.5 size-4 shrink-0 text-blue-ink" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="label-mono text-muted">What is typically included</h4>
                    <dl className="mt-3 border-b border-line">
                      {scopeRows.map((r) => (
                        <div key={r.key} className="grid gap-x-6 gap-y-1 border-t border-line py-4 sm:grid-cols-[11rem_1fr]">
                          <dt className="text-[0.9375rem] font-semibold text-navy">{r.label}</dt>
                          <dd className="text-[1.0625rem] leading-relaxed text-muted">{m[r.key]}</dd>
                        </div>
                      ))}
                    </dl>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {m.includes.map((item) => (
                        <li key={item} className="rounded-full border border-line bg-canvas px-3.5 py-1.5 text-sm text-ink">{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="label-mono text-muted">How it is run</h4>
                    <p className="mt-3 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">{m.run}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" aria-labelledby="compare-title" className="scroll-mt-24 border-t border-line py-16 md:py-24">
        <div className="shell">
          <p className="label-mono text-muted">Comparison</p>
          <h2 id="compare-title" className="mt-4 max-w-2xl text-[clamp(1.625rem,1.3rem+1.3vw,2.25rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-navy">
            The five models side by side.
          </h2>
          <p id="compare-hint" className="mt-4 text-sm text-muted lg:hidden">Scroll sideways to see every model.</p>

          <div
            role="region"
            aria-labelledby="compare-title"
            aria-describedby="compare-hint"
            tabIndex={0}
            className="mt-8 overflow-x-auto rounded-panel border border-line bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
          >
            <table className="w-full min-w-[60rem] border-collapse text-left text-[0.9375rem]">
              <caption className="sr-only">
                Comparison of the five SERPMOZ engagement models by stage, scope, cadence, team, reporting and pricing
              </caption>
              <thead>
                <tr className="bg-canvas">
                  <th scope="col" className="sticky left-0 z-10 w-40 bg-canvas px-4 py-4 align-bottom md:w-44 md:px-5">
                    <span className="sr-only">Aspect</span>
                  </th>
                  {engagements.map((m, i) => (
                    <th key={m.slug} scope="col" className="border-l border-line px-4 py-4 align-bottom md:px-5">
                      <span className="label-mono block text-[0.625rem] text-muted">{String(i + 1).padStart(2, "0")}</span>
                      <a href={`#${m.slug}`} className="mt-1 block text-base font-semibold tracking-[-0.015em] text-navy underline-offset-4 hover:underline">
                        {m.name}
                      </a>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.key} className="border-t border-line">
                    <th scope="row" className="sticky left-0 z-10 bg-surface px-4 py-4 align-top font-semibold text-navy md:px-5">
                      {row.label}
                    </th>
                    {engagements.map((m) => (
                      <td key={m.slug} className="border-l border-line px-4 py-4 align-top leading-relaxed text-muted md:px-5">
                        {cell(m, row.key)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-2xl text-sm text-muted">
            These are typical shapes, not fixed tiers. Your proposal sets out the actual scope, team and cadence, with the
            reasoning behind each.
          </p>
        </div>
      </section>

      <Block label="How to choose" title="Four questions that settle it." className="bg-surface">
        <RuledRows rows={[...howToChoose]} />
        <Prose className="mt-10">
          <p>
            <strong>If you are unsure, you do not have to choose.</strong> The growth audit ends with a recommendation,
            including which model fits and why. You can begin with a narrower scope and widen it when the evidence
            supports it.
          </p>
        </Prose>
        <ArrowLink href="/methodology/" className="mt-8">How every engagement is run</ArrowLink>
      </Block>

      <Block label="Pricing" title="Why pricing follows the diagnostic.">
        <Prose>
          <p>
            Two businesses on the same model can need very different amounts of work. A local service firm and a
            multi-market software company might both suit Growth, and their scopes would have little in common.
          </p>
          <p>
            So we do not publish prices. After the audit you receive a proposal that states the scope, the team, the
            cadence and the cost, and explains how each follows from what we found. If the numbers do not make sense for
            your business, we would rather learn that before either of us commits.
          </p>
        </Prose>
      </Block>

      <Block label="Questions" title="Engagement models, answered." className="bg-surface">
        <Faqs faqs={faqs} />
      </Block>

      <AuditCta
        location="engagement-models"
        title="Find out which model fits."
        body="Every engagement starts with the growth audit. It shows where the opportunities are and what scope would be needed to act on them."
      />
      <JsonLd data={[webPageSchema(meta), faqSchema(faqs)]} />
    </>
  );
}
