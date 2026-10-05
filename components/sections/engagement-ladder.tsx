"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { engagements } from "@/data/growth";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * Engagement models on a line of business maturity. Choosing a point fills the
 * line up to it and shows that model's scope. No prices: scope follows the diagnostic.
 */
export function EngagementLadder() {
  const [active, setActive] = useState(1);
  const e = engagements[active];
  const n = engagements.length;

  return (
    <div>
      {/* Maturity line */}
      <div className="relative">
        <div aria-hidden className="absolute top-[1.375rem] right-[10%] left-[10%] hidden h-1 rounded-full bg-navy/10 md:block">
          <div className="h-full rounded-full bg-gradient-to-r from-blue to-orange transition-[width] duration-700 ease-out-quint" style={{ width: `${(active / (n - 1)) * 100}%` }} />
        </div>
        <div role="tablist" aria-label="Engagement models" className="no-scrollbar relative -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-5 md:gap-0 md:overflow-visible md:px-0">
          {engagements.map((x, i) => {
            const on = i === active;
            const done = i <= active;
            return (
              <button
                key={x.name}
                role="tab"
                type="button"
                aria-selected={on}
                onClick={() => {
                  setActive(i);
                  track({ event: "interaction", component: "engagement_ladder", value: x.name });
                }}
                className={cn(
                  "group flex shrink-0 items-center gap-2.5 rounded-full border px-4 py-2.5 text-left transition-colors md:flex-col md:gap-0 md:rounded-none md:border-0 md:px-2 md:py-0 md:text-center",
                  on ? "border-navy bg-navy text-white md:bg-transparent md:text-ink" : "border-navy/15 bg-surface/70 md:bg-transparent",
                )}
              >
                <span
                  className={cn(
                    "tabular flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 md:size-12 md:border-4 md:border-orange-wash md:text-sm",
                    on ? "bg-orange text-navy md:scale-110 md:shadow-float" : done ? "bg-navy text-white" : "bg-white text-muted md:ring-1 md:ring-navy/15 group-hover:text-navy",
                  )}
                >
                  {i + 1}
                </span>
                <span className="md:mt-4">
                  <span className={cn("block text-[0.9375rem] font-semibold tracking-[-0.01em] whitespace-nowrap md:text-lg", on ? "md:text-navy" : "md:text-ink/55 md:group-hover:text-navy")}>{x.name}</span>
                  <span className={cn("label-mono mt-0.5 hidden text-[0.625rem] md:block", on ? "text-orange-ink" : "text-muted")}>{x.stage}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail */}
      <div role="tabpanel" aria-label={e.name} className="mt-8 grid overflow-hidden rounded-panel bg-surface shadow-float lg:mt-12 lg:grid-cols-12">
        <div className="stage relative overflow-hidden p-7 text-white md:p-10 lg:col-span-5">
          <div aria-hidden className="absolute -right-24 -bottom-24 size-72 rounded-full bg-orange/25 blur-3xl" />
          <div key={e.name} className="relative motion-safe:animate-fade-in">
            <p className="label-mono text-cyan">{e.stage} · {e.focus}</p>
            <h3 className="mt-4 text-[clamp(2rem,1.5rem+2vw,3rem)] leading-none font-semibold tracking-[-0.04em]">{e.name}</h3>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/80">{e.forWhom}</p>
            <Link href="/engagement-models/" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white underline decoration-white/30 underline-offset-[6px] hover:decoration-orange">
              Compare all five models <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
        </div>
        <dl key={e.name} className="grid gap-8 p-7 motion-safe:animate-fade-in sm:grid-cols-2 md:p-10 lg:col-span-7">
          <div className="space-y-6">
            <div>
              <dt className="label-mono text-muted">How we work together</dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink">{e.collaboration}</dd>
            </div>
            <div>
              <dt className="label-mono text-muted">What it is designed to produce</dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink">{e.outcome}</dd>
            </div>
          </div>
          <div>
            <dt className="label-mono text-muted">Typically includes</dt>
            <dd className="mt-3">
              <ul className="space-y-2.5">
                {e.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9375rem] text-ink">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-wash text-blue-ink"><Check aria-hidden className="size-3" strokeWidth={3} /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
