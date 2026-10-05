"use client";

import { useState } from "react";
import { CornerDownRight, FileSearch, Search, Sparkles, TriangleAlert } from "lucide-react";
import { Ring } from "@/components/charts/shapes";
import { SampleBadge } from "@/components/ui/badge";
import { aiAnswer, aiVisibility as d, aiVisibilityViews } from "@/data/dashboard";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

function Cell({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("p-5", className)}>
      <h3 className="label-mono text-muted">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

/**
 * AI Search intelligence demo: a simulated assistant answer on the left, the
 * measurement built from many such answers on the right. Sample data throughout.
 */
export function AiSearchPanel() {
  const [viewId, setViewId] = useState<string>(aiVisibilityViews[0].id);
  const view = aiVisibilityViews.find((v) => v.id === viewId) ?? aiVisibilityViews[0];

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
      {/* What the buyer sees */}
      <div className="glass-dark flex flex-col rounded-panel p-5 md:p-6 lg:col-span-5">
        <div className="flex items-center justify-between gap-3">
          <p className="label-mono flex items-center gap-2 text-white/60">
            <Sparkles aria-hidden className="size-3.5 text-cyan" />
            Simulated AI answer
          </p>
          <SampleBadge tone="dark">Sample</SampleBadge>
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/12 bg-white/5 px-4 py-3">
          <Search aria-hidden className="mt-0.5 size-4 shrink-0 text-white/50" />
          <p className="text-[0.9375rem] leading-snug text-white">{d.prompt}</p>
        </div>

        <div className="mt-5 flex-1 text-[0.9375rem] leading-relaxed text-white/80">
          <p>{aiAnswer.intro}</p>
          <ol className="mt-4 space-y-3">
            {aiAnswer.picks.map((p, i) => {
              const self = "self" in p;
              return (
                <li key={p.name} className={cn("rounded-xl border p-3.5", self ? "border-cyan/50 bg-cyan/10" : "border-white/10")}>
                  <p className="flex items-center gap-2 font-semibold text-white">
                    <span className="label-mono text-[0.625rem] text-white/50">{i + 1}</span>
                    {p.name}
                    {self ? <span className="label-mono rounded-full bg-cyan px-1.5 py-0.5 text-[0.5625rem] text-navy">You</span> : null}
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    {p.why}{" "}
                    {p.cites.map((c) => (
                      <sup key={c} className="ml-0.5 rounded bg-white/10 px-1 text-[0.625rem] text-white/70">{c}</sup>
                    ))}
                  </p>
                </li>
              );
            })}
          </ol>
          <p className="mt-4 flex gap-2 text-sm text-white/60">
            <TriangleAlert aria-hidden className="mt-0.5 size-3.5 shrink-0 text-orange" />
            {aiAnswer.gap}
          </p>
        </div>

        <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/50">
          Written for illustration. It is not output from any AI product, and real answers differ from run to run.
        </p>
      </div>

      {/* What we measure across hundreds of them */}
      <div className="flex flex-col overflow-hidden rounded-panel border border-white/60 bg-white text-ink shadow-[0_40px_90px_-30px_rgb(0_0_0/0.65)] lg:col-span-7">
        <div className="flex h-11 items-center justify-between gap-3 border-b border-line/80 px-4">
          <p className="flex items-center gap-2 text-[0.8125rem] font-medium">
            <FileSearch aria-hidden className="size-4 text-muted" />
            GrowthOS<span className="font-normal text-muted"> / AI Search</span>
          </p>
          <SampleBadge>Sample data</SampleBadge>
        </div>

        <div role="tablist" aria-label="AI discovery environment" className="no-scrollbar flex gap-1 overflow-x-auto border-b border-line/80 px-3 py-2">
          {aiVisibilityViews.map((v) => (
            <button
              key={v.id}
              role="tab"
              type="button"
              aria-selected={v.id === viewId}
              onClick={() => {
                setViewId(v.id);
                track({ event: "interaction", component: "ai_search_panel", value: v.id });
              }}
              className={cn(
                "shrink-0 rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium whitespace-nowrap transition-colors",
                v.id === viewId ? "bg-navy text-white" : "text-muted hover:text-navy",
              )}
            >
              {v.name}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-12" role="tabpanel" aria-label={`${view.name} sample metrics`}>
          <Cell title="AI Visibility Score" className="border-b border-line/80 sm:col-span-5 sm:border-r">
            <div className="flex items-center gap-5">
              <Ring value={view.score} size={112} stroke={9}>
                <span className="tabular text-4xl leading-none font-semibold tracking-[-0.04em] text-navy">{view.score}</span>
                <span className="label-mono mt-1 text-[0.5625rem] text-muted">/ 100</span>
              </Ring>
              <div>
                <p className="tabular text-sm font-medium text-success-ink">+{view.change} pts</p>
                <p className="mt-0.5 text-xs text-muted">vs previous 30 days</p>
              </div>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-line/80 pt-4">
              <div>
                <dt className="text-xs text-muted">Brand Mentions</dt>
                <dd className="tabular mt-1 text-xl font-semibold tracking-[-0.02em] text-navy">{view.brand}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Competitor Mentions</dt>
                <dd className="tabular mt-1 text-xl font-semibold tracking-[-0.02em] text-navy">{view.competitors}</dd>
              </div>
            </dl>
          </Cell>

          <Cell title="Share of Recommendation" className="border-b border-line/80 sm:col-span-7">
            <div className="space-y-3">
              {d.share.map((s, i) => {
                const self = "self" in s;
                const value = view.share[i];
                return (
                  <div key={s.name} className="grid grid-cols-[6.5rem_1fr_2.25rem] items-center gap-3 text-[0.8125rem]">
                    <span className={cn("truncate", self ? "font-semibold text-navy" : "text-ink")}>{s.name}</span>
                    <span className="h-2 overflow-hidden rounded-full bg-line/80" aria-hidden>
                      <span className={cn("block h-full rounded-full transition-[width] duration-500 ease-out-quint", self ? "bg-cyan" : "bg-line-strong")} style={{ width: `${value * 2.6}%` }} />
                    </span>
                    <span className="tabular text-right text-muted">{value}%</span>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 flex gap-2 text-xs leading-snug text-muted">
              <CornerDownRight aria-hidden className="mt-0.5 size-3.5 shrink-0" />
              How often each brand is named when an assistant is asked to recommend a provider.
            </p>
          </Cell>

          <Cell title="Citation Sources" className="border-b border-line/80 sm:col-span-4 sm:border-r sm:border-b-0">
            <ul className="divide-y divide-line/80 text-[0.8125rem]">
              {d.sources.map((s) => (
                <li key={s.name} className="flex items-center justify-between gap-2 py-2 first:pt-0">
                  <span className="text-ink">{s.name}</span>
                  <span className="tabular text-muted">{s.count}</span>
                </li>
              ))}
            </ul>
          </Cell>

          <Cell title="Missing Topics" className="border-b border-line/80 sm:col-span-4 sm:border-r sm:border-b-0">
            <ul className="space-y-2">
              {d.missingTopics.map((t) => (
                <li key={t} className="rounded-lg border border-dashed border-line-strong px-3 py-2 text-[0.8125rem] text-ink">{t}</li>
              ))}
            </ul>
          </Cell>

          <Cell title="Content Opportunities" className="sm:col-span-4">
            <ol className="space-y-2.5 text-[0.8125rem]">
              {d.opportunities.map((o) => (
                <li key={o.title} className="flex items-start gap-2">
                  <span aria-hidden className={cn("mt-1.5 size-1.5 shrink-0 rounded-full", o.impact === "High" ? "bg-orange" : "bg-line-strong")} />
                  <span className="text-ink">{o.title}</span>
                </li>
              ))}
            </ol>
          </Cell>
        </div>

        <dl className="mt-auto flex flex-wrap gap-x-8 gap-y-2 border-t border-line/80 bg-canvas px-5 py-3 text-xs text-muted">
          <div className="flex gap-2"><dt>Tracked prompts</dt><dd className="tabular font-medium text-ink">40</dd></div>
          <div className="flex gap-2"><dt>Runs per prompt</dt><dd className="tabular font-medium text-ink">5</dd></div>
          <div className="flex gap-2"><dt>Reported as</dt><dd className="font-medium text-ink">30-day range</dd></div>
        </dl>
      </div>
    </div>
  );
}
