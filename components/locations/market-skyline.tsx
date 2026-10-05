"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Landmark, landmarkLabel } from "@/components/visuals/landmarks";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export type Market = {
  slug: string;
  name: string;
  short: string;
  context: string;
  points: string[];
  cities: { slug: string; name: string }[];
};

/**
 * Eight markets as a skyline of their landmarks. Pointing at or choosing one
 * lights it up and shows what is specific about competing there.
 */
export function MarketSkyline({ markets }: { markets: Market[] }) {
  const [active, setActive] = useState(0);
  const m = markets[active];

  const choose = (i: number, source: "hover" | "click") => {
    setActive(i);
    if (source === "click") track({ event: "interaction", component: "market_skyline", value: markets[i].name });
  };

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-soft">
      {/* Skyline */}
      <div className="relative bg-gradient-to-b from-blue-tint via-blue-wash to-surface">
        <div aria-hidden className="absolute top-8 right-[12%] size-20 rounded-full bg-orange/25 blur-xl" />
        <div aria-hidden className="absolute top-10 right-[14%] size-10 rounded-full bg-orange/70" />
        <svg aria-hidden viewBox="0 0 100 20" preserveAspectRatio="none" className="absolute inset-x-0 top-6 h-24 w-full text-blue/30">
          <path d="M0,16 Q30,-6 62,10 T100,4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 7" vectorEffect="non-scaling-stroke" className="motion-safe:animate-dash" style={{ animationDuration: "6s" }} />
        </svg>

        <div role="tablist" aria-label="Markets" className="no-scrollbar relative flex items-end gap-1 overflow-x-auto px-4 pt-16 sm:px-6 lg:grid lg:grid-cols-8 lg:gap-0 lg:overflow-visible lg:px-8 lg:pt-20">
          {markets.map((x, i) => {
            const on = i === active;
            return (
              <button
                key={x.slug}
                role="tab"
                type="button"
                aria-selected={on}
                aria-label={`${x.name}: ${landmarkLabel(x.slug)}`}
                onMouseEnter={() => choose(i, "hover")}
                onFocus={() => choose(i, "hover")}
                onClick={() => choose(i, "click")}
                className="group relative flex w-[5.5rem] shrink-0 flex-col items-center outline-none lg:w-auto"
              >
                <span className={cn("label-mono mb-2 rounded-full px-2 py-0.5 text-[0.5625rem] transition-all duration-300", on ? "bg-navy text-white" : "text-transparent")}>{landmarkLabel(x.slug)}</span>
                <Landmark
                  slug={x.slug}
                  active={on}
                  className={cn(
                    "h-28 w-auto origin-bottom transition-all duration-500 ease-out-quint sm:h-36 lg:h-44",
                    on ? "scale-110 text-navy" : "scale-90 text-navy/30 group-hover:text-navy/60",
                  )}
                />
              </button>
            );
          })}
        </div>
        {/* Ground */}
        <div aria-hidden className="relative h-px bg-navy/25" />
      </div>

      {/* Market names sit under the ground line, in step with the landmarks */}
      <div aria-hidden className="no-scrollbar hidden border-b border-line px-8 lg:grid lg:grid-cols-8">
        {markets.map((x, i) => (
          <button key={x.slug} type="button" tabIndex={-1} onMouseEnter={() => choose(i, "hover")} onClick={() => choose(i, "click")} className="relative py-4 text-center">
            <span className={cn("absolute top-0 left-1/2 h-0.5 -translate-x-1/2 bg-orange transition-all duration-300", i === active ? "w-12" : "w-0")} />
            <span className={cn("label-mono block text-[0.625rem]", i === active ? "text-orange-ink" : "text-muted")}>{x.short}</span>
            <span className={cn("mt-0.5 block text-[0.9375rem] font-semibold tracking-[-0.01em] transition-colors", i === active ? "text-navy" : "text-ink/45")}>{x.name}</span>
          </button>
        ))}
      </div>

      {/* Selected market */}
      <div role="tabpanel" aria-label={m.name} key={m.slug} className="grid grid-cols-1 gap-8 p-6 motion-safe:animate-fade-in md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-10">
        <div className="lg:col-span-5">
          <p className="label-mono text-orange-ink">{m.short} · {landmarkLabel(m.slug)}</p>
          <h3 className="mt-3 text-[clamp(2rem,1.5rem+2vw,3rem)] leading-[1.1] font-semibold tracking-[-0.035em] text-navy">{m.name}</h3>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted">{m.context}</p>
          <Link href={`/locations/${m.slug}/`} className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-navy px-5 text-sm font-medium text-white transition-colors hover:bg-blue-ink">
            Growth in {m.name} <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="label-mono text-muted">What is different here</p>
          <ul className="mt-3 border-b border-line">
            {m.points.map((p, i) => (
              <li key={p} className="flex items-baseline gap-4 border-t border-line py-3 text-[1.0625rem] font-medium tracking-[-0.01em] text-ink">
                <span className="label-mono text-blue-ink">{String(i + 1).padStart(2, "0")}</span>
                {p}
              </li>
            ))}
          </ul>
          {m.cities.length ? (
            <>
              <p className="label-mono mt-6 text-muted">Cities</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {m.cities.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/locations/${m.slug}/${c.slug}/`} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-canvas px-3 py-1.5 text-sm text-ink transition-colors hover:border-navy hover:bg-navy hover:text-white">
                      <MapPin aria-hidden className="size-3.5 text-orange" />
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
