import { CornerDownRight, Search } from "lucide-react";
import { CountUp } from "@/components/dashboard/count-up";
import { AppWindow, BarRow, Delta, IllustrativeTag } from "@/components/dashboard/primitives";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { CtaLink } from "@/components/ui/cta-link";
import { aiVisibility as d } from "@/data/dashboard";
import { cn } from "@/lib/utils";

function ScoreRing({ score }: { score: number }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative size-32 shrink-0">
      <svg viewBox="0 0 120 120" className="size-full -rotate-90" aria-hidden>
        <circle cx="60" cy="60" r={r} fill="none" stroke="var(--color-line)" strokeWidth="8" />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="var(--color-cyan)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - score / 100)}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <CountUp value={score} className="tabular text-4xl leading-none font-semibold tracking-[-0.04em] text-navy" />
        <span className="label-mono mt-1 text-[0.5625rem] text-muted">of 100</span>
      </div>
    </div>
  );
}

function Cell({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("p-5", className)}>
      <h3 className="label-mono text-muted">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function AiVisibility() {
  return (
    <Section aria-labelledby="ai-visibility-title" className="overflow-hidden border-y border-line bg-surface">
      <div aria-hidden className="atmosphere absolute inset-0" />
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <SectionHeader
            id="ai-visibility-title"
            index="04"
            label="AI search visibility"
            title={["Your Next Customer", "May Not Click Google."]}
            className="lg:col-span-7"
          />
          <Reveal className="lg:col-span-5 lg:pt-12" delay={0.1}>
            <p className="text-lead text-muted">
              They may ask an assistant for a shortlist and never see a results page. If the answer names three companies,
              the question is whether you are one of them, and what was said.
            </p>
            <CtaLink href="/ai-seo-services/" variant="solid" size="lg" className="mt-8">
              Check Your AI Visibility
            </CtaLink>
          </Reveal>
        </div>

        <Reveal className="mt-14 lg:mt-20" y={24}>
          <AppWindow title="GrowthOS" crumb="AI Search" actions={<IllustrativeTag>Sample data</IllustrativeTag>}>
            {/* Prompt under test */}
            <div className="flex items-start gap-3 border-b border-line/80 px-5 py-4">
              <Search aria-hidden className="mt-0.5 size-4 shrink-0 text-muted" />
              <div className="min-w-0">
                <p className="label-mono text-[0.625rem] text-muted">Tracked prompt · 1 of 40</p>
                <p className="mt-1 text-[0.9375rem] text-ink">“{d.prompt}”</p>
              </div>
            </div>

            <div className="grid md:grid-cols-12">
              <Cell title="AI Visibility Score" className="border-b border-line/80 md:col-span-4 md:border-r lg:col-span-3">
                <div className="flex items-center gap-5 md:flex-col md:items-start lg:flex-row lg:items-center">
                  <ScoreRing score={d.score} />
                  <div>
                    <Delta>+{d.scoreChange} pts</Delta>
                    <p className="mt-1 text-xs text-muted">vs previous 30 days</p>
                  </div>
                </div>
                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line/80 pt-4">
                  <div>
                    <dt className="text-xs text-muted">Brand Mentions</dt>
                    <dd className="tabular mt-1 text-xl font-semibold tracking-[-0.02em] text-navy">{d.brandMentions}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Competitor Mentions</dt>
                    <dd className="tabular mt-1 text-xl font-semibold tracking-[-0.02em] text-navy">{d.competitorMentions}</dd>
                  </div>
                </dl>
              </Cell>

              <Cell title="Share of Recommendation" className="border-b border-line/80 md:col-span-8 lg:col-span-5 lg:border-r">
                <div className="space-y-3.5">
                  {d.share.map((s) => (
                    <BarRow key={s.name} label={s.name} value={s.value} tone={"self" in s ? "cyan" : "muted"} className={"self" in s ? "font-medium" : undefined} />
                  ))}
                </div>
                <p className="mt-5 flex gap-2 text-[0.8125rem] leading-snug text-muted">
                  <CornerDownRight aria-hidden className="mt-0.5 size-3.5 shrink-0" />
                  How often each brand is named when an assistant is asked to recommend a provider in the category.
                </p>
              </Cell>

              <Cell title="Citation Sources" className="border-b border-line/80 md:col-span-6 md:border-r lg:col-span-4 lg:border-r-0">
                <ul className="divide-y divide-line/80 text-[0.8125rem]">
                  {d.sources.map((s) => (
                    <li key={s.name} className="flex items-center justify-between py-2 first:pt-0">
                      <span className="text-ink">{s.name}</span>
                      <span className="tabular text-muted">{s.count}</span>
                    </li>
                  ))}
                </ul>
              </Cell>

              <Cell title="Missing Topics" className="border-b border-line/80 md:col-span-6 md:border-b-0 lg:col-span-5 lg:border-r">
                <ul className="flex flex-wrap gap-2">
                  {d.missingTopics.map((t) => (
                    <li key={t} className="rounded-full border border-dashed border-line-strong px-3 py-1.5 text-[0.8125rem] text-ink">
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[0.8125rem] text-muted">Topics where competitors are cited and your content is absent.</p>
              </Cell>

              <Cell title="Content Opportunities" className="md:col-span-12 lg:col-span-7">
                <ol className="divide-y divide-line/80 text-[0.875rem]">
                  {d.opportunities.map((o, i) => (
                    <li key={o.title} className="flex items-center gap-3 py-2.5 first:pt-0">
                      <span className="label-mono w-5 text-[0.625rem] text-muted">{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1 text-ink">{o.title}</span>
                      <span className={cn("label-mono text-[0.625rem]", o.impact === "High" ? "text-orange-ink" : "text-muted")}>{o.impact}</span>
                    </li>
                  ))}
                </ol>
              </Cell>
            </div>
          </AppWindow>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-12">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 md:col-span-7" aria-label="AI discovery environments we track">
            {d.platforms.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-ink">
                <span aria-hidden className="size-1.5 rounded-full bg-cyan" />
                {p}
              </li>
            ))}
          </ul>
          <p className="text-xs leading-relaxed text-muted md:col-span-5">
            Illustrative interface with sample data. AI answers vary between runs and no platform offers guaranteed
            placement; we measure trends across repeated prompts and report them as ranges.
          </p>
        </div>
      </div>
    </Section>
  );
}
