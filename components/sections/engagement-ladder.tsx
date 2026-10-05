"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { engagements } from "@/data/growth";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const heights = ["h-24", "h-32", "h-40", "h-48", "h-56"];

/**
 * Engagement models drawn as a staircase of business maturity. Picking a step
 * shows its scope beneath. No prices: scope follows the diagnostic.
 */
export function EngagementLadder() {
  const [active, setActive] = useState(1);
  const e = engagements[active];

  return (
    <div>
      {/* Steps */}
      <div role="tablist" aria-label="Engagement models" className="no-scrollbar -mx-5 flex items-end gap-2 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-5 md:gap-3 md:overflow-visible md:px-0">
        {engagements.map((x, i) => {
          const on = i === active;
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
                "group flex w-40 shrink-0 flex-col justify-between rounded-t-2xl border border-b-0 p-4 text-left transition-colors duration-300 md:w-auto md:p-5",
                heights[i],
                on ? "border-navy bg-navy text-white" : "border-line bg-surface text-ink hover:border-navy/40",
              )}
            >
              <span className={cn("label-mono text-[0.625rem]", on ? "text-cyan" : "text-muted")}>
                {String(i + 1).padStart(2, "0")} · {x.stage}
              </span>
              <span className="text-lg leading-tight font-semibold tracking-[-0.02em] md:text-xl">{x.name}</span>
            </button>
          );
        })}
      </div>

      {/* Detail */}
      <div role="tabpanel" aria-label={e.name} className="grid gap-8 rounded-b-panel border border-line bg-surface p-6 md:rounded-tr-none md:p-9 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="label-mono text-blue-ink">{e.focus}</p>
          <p className="mt-3 text-[clamp(1.25rem,1.05rem+0.8vw,1.75rem)] leading-snug font-medium tracking-[-0.02em] text-navy">{e.forWhom}</p>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            <div>
              <dt className="label-mono text-muted">How we work together</dt>
              <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink">{e.collaboration}</dd>
            </div>
            <div>
              <dt className="label-mono text-muted">What it is designed to produce</dt>
              <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink">{e.outcome}</dd>
            </div>
          </div>
          <div>
            <dt className="label-mono text-muted">Typically includes</dt>
            <dd className="mt-2">
              <ul className="space-y-2">
                {e.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[0.9375rem] text-ink">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-blue-ink" />
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
