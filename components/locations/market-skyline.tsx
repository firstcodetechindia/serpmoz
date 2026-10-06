"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, MapPin, Pause, Play } from "lucide-react";
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
  services: { name: string; href: string }[];
  industries: { name: string; href: string }[];
};

/* The clock each market is read on. */
const zones: Record<string, { tz: string; place: string }> = {
  india: { tz: "Asia/Kolkata", place: "New Delhi" },
  usa: { tz: "America/New_York", place: "New York" },
  uk: { tz: "Europe/London", place: "London" },
  uae: { tz: "Asia/Dubai", place: "Dubai" },
  canada: { tz: "America/Toronto", place: "Toronto" },
  australia: { tz: "Australia/Sydney", place: "Sydney" },
  singapore: { tz: "Asia/Singapore", place: "Singapore" },
  europe: { tz: "Europe/Paris", place: "Paris" },
};

type Sky = "day" | "dusk" | "night";

const skies: Record<Sky, { bg: string; line: string; idle: string; ground: string; orb: string; label: string }> = {
  day: { bg: "linear-gradient(180deg,#cfe1ff 0%,#eaf2ff 60%,#ffffff 100%)", line: "text-navy", idle: "text-navy/30 group-hover:text-navy/60", ground: "bg-navy/25", orb: "#ff9a2e", label: "Daytime" },
  dusk: { bg: "linear-gradient(180deg,#3b4f8f 0%,#f2a26b 62%,#ffe3c7 100%)", line: "text-navy", idle: "text-navy/35 group-hover:text-navy/65", ground: "bg-navy/40", orb: "#ffd29a", label: "Golden hour" },
  night: { bg: "linear-gradient(180deg,#06142a 0%,#0b1f3a 55%,#1b3a6b 100%)", line: "text-white", idle: "text-white/30 group-hover:text-white/65", ground: "bg-white/30", orb: "#e8eefc", label: "Night" },
};

function localTime(slug: string, now: Date | null) {
  const zone = zones[slug];
  if (!now || !zone) return null;
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: zone.tz, hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(now);
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 12) % 24;
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const t = hour + minute / 60;
  const sky: Sky = t >= 7 && t < 17.5 ? "day" : (t >= 5.5 && t < 7) || (t >= 17.5 && t < 19.5) ? "dusk" : "night";
  // Where the sun or moon sits: left to right across its half of the day.
  const span = sky === "night" ? ((t + 24 - 19.5) % 24) / 10 : (t - 5.5) / 14;
  return { text: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`, sky, x: Math.min(0.94, Math.max(0.06, span)), place: zone.place };
}

const stars = [[8, 18], [17, 9], [26, 26], [35, 12], [44, 22], [53, 8], [61, 19], [70, 11], [79, 24], [88, 14], [94, 28], [13, 32], [48, 34], [74, 33]];
const DWELL = 5000;

/**
 * Eight markets as a skyline of their landmarks. The scene tours on its own
 * until someone takes over; choosing a market lights its landmark, sets the
 * sky to the real local time there and shows what matters in that market.
 */
export function MarketSkyline({ markets }: { markets: Market[] }) {
  const [active, setActive] = useState(0);
  const [touring, setTouring] = useState(true);
  const [now, setNow] = useState<Date | null>(null);
  const hovering = useRef(false);
  const n = markets.length;
  const m = markets[active];

  // Clock: read on the client only, so server and browser never disagree.
  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 30_000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, []);

  // Tour: advance while nobody is pointing at the scene.
  useEffect(() => {
    if (!touring || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!hovering.current && document.visibilityState === "visible") setActive((i) => (i + 1) % n);
    }, DWELL);
    return () => window.clearInterval(id);
  }, [touring, n]);

  const choose = (i: number, source: "hover" | "click" | "key") => {
    setActive((i + n) % n);
    if (source !== "hover") {
      setTouring(false);
      track({ event: "interaction", component: "market_skyline", value: markets[(i + n) % n].name });
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") choose(active + 1, "key");
    else if (e.key === "ArrowLeft") choose(active - 1, "key");
    else return;
    e.preventDefault();
  };

  const time = localTime(m.slug, now);
  const sky = skies[time?.sky ?? "day"];
  const night = time?.sky === "night";

  return (
    <div
      className="overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-float"
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      {/* ---------- Scene ---------- */}
      <div className="relative">
        {/* Three skies stacked; the one that matches local time fades in */}
        {(Object.keys(skies) as Sky[]).map((k) => (
          <div key={k} aria-hidden className={cn("absolute inset-0 transition-opacity duration-1000", (time?.sky ?? "day") === k ? "opacity-100" : "opacity-0")} style={{ background: skies[k].bg }} />
        ))}
        <div aria-hidden className={cn("absolute inset-0 transition-opacity duration-1000", night ? "opacity-100" : "opacity-0")}>
          {stars.map(([x, y], i) => (
            <span key={i} className="absolute size-[3px] rounded-full bg-white/80 motion-safe:animate-ping-soft" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.4}s`, animationDuration: "3.5s" }} />
          ))}
        </div>
        {/* Sun or moon, placed by the hour */}
        <div
          aria-hidden
          className="absolute top-0 size-11 -translate-x-1/2 rounded-full transition-all duration-1000 ease-out-quint"
          style={{ left: `${(time?.x ?? 0.8) * 100}%`, top: `${14 + Math.abs((time?.x ?? 0.8) - 0.5) * 34}%`, background: sky.orb, boxShadow: `0 0 0 10px ${sky.orb}26, 0 0 60px 18px ${sky.orb}55` }}
        />

        {/* Scene controls */}
        <div className="relative flex items-center justify-between gap-3 px-5 pt-5 lg:px-8 lg:pt-6">
          <p className={cn("flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-700", night ? "bg-white/10 text-white" : "bg-white/70 text-navy")}>
            <Clock aria-hidden className="size-3.5" />
            {time ? (
              <>
                <span className="tabular font-semibold">{time.text}</span> in {time.place} · {sky.label}
              </>
            ) : (
              "Local time"
            )}
          </p>
          <div className="flex items-center gap-1.5">
            <span className={cn("tabular mr-1 hidden text-xs font-semibold sm:inline", night ? "text-white/70" : "text-navy/60")}>
              {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </span>
            {[
              { label: touring ? "Pause tour" : "Play tour", icon: touring ? Pause : Play, on: () => setTouring((t) => !t) },
              { label: "Previous market", icon: ArrowLeft, on: () => choose(active - 1, "click") },
              { label: "Next market", icon: ArrowRight, on: () => choose(active + 1, "click") },
            ].map((b) => (
              <button key={b.label} type="button" aria-label={b.label} onClick={b.on} className={cn("flex size-9 items-center justify-center rounded-full transition-colors", night ? "bg-white/10 text-white hover:bg-white hover:text-navy" : "bg-white/70 text-navy hover:bg-navy hover:text-white")}>
                <b.icon aria-hidden className="size-4" />
              </button>
            ))}
          </div>
        </div>

        {/* Landmarks */}
        <div role="tablist" aria-label="Markets" onKeyDown={onKey} className="no-scrollbar relative flex items-end gap-1 overflow-x-auto px-4 pt-6 sm:px-6 lg:grid lg:grid-cols-8 lg:gap-0 lg:overflow-visible lg:px-8 lg:pt-4">
          {markets.map((x, i) => {
            const on = i === active;
            return (
              <button
                key={x.slug}
                role="tab"
                type="button"
                aria-selected={on}
                tabIndex={on ? 0 : -1}
                aria-label={`${x.name}: ${landmarkLabel(x.slug)}`}
                onMouseEnter={() => choose(i, "hover")}
                onFocus={() => choose(i, "hover")}
                onClick={() => choose(i, "click")}
                className="group relative flex w-[5.5rem] shrink-0 flex-col items-center rounded-t-2xl pt-2 outline-none focus-visible:ring-2 focus-visible:ring-orange lg:w-auto"
              >
                {/* Spotlight behind the chosen landmark */}
                <span aria-hidden className={cn("absolute inset-x-1 top-6 bottom-0 rounded-t-full transition-opacity duration-700", on ? "opacity-100" : "opacity-0")} style={{ background: night ? "linear-gradient(180deg,transparent,rgb(255 255 255 / 0.14))" : "linear-gradient(180deg,transparent,rgb(255 255 255 / 0.75))" }} />
                <span className={cn("label-mono relative mb-6 rounded-full sm:mb-7 lg:mb-9 px-2 py-0.5 text-[0.5625rem] whitespace-nowrap transition-all duration-300", on ? "translate-y-0 bg-orange text-navy opacity-100" : "translate-y-1 opacity-0")}>{landmarkLabel(x.slug)}</span>
                <Landmark
                  slug={x.slug}
                  active={on}
                  className={cn("relative h-28 w-auto origin-bottom transition-all duration-500 ease-out-quint sm:h-36 lg:h-44", on ? cn("scale-110", sky.line) : cn("scale-[0.86]", sky.idle))}
                />
              </button>
            );
          })}
        </div>
        <div aria-hidden className={cn("relative h-px transition-colors duration-700", sky.ground)} />
      </div>

      {/* ---------- Market names, with the tour's progress under the active one ---------- */}
      <div className="hidden border-b border-line px-8 lg:grid lg:grid-cols-8">
        {markets.map((x, i) => {
          const on = i === active;
          return (
            <button key={x.slug} type="button" tabIndex={-1} aria-hidden onMouseEnter={() => choose(i, "hover")} onClick={() => choose(i, "click")} className="relative py-4 text-center">
              <span className="absolute inset-x-3 top-0 h-0.5 overflow-hidden rounded-full">
                {on ? <span key={`${active}-${touring}`} className={cn("block h-full origin-left bg-orange", touring && "motion-safe:animate-[tour_5s_linear_forwards]")} /> : null}
              </span>
              <span className={cn("label-mono block text-[0.625rem]", on ? "text-orange-ink" : "text-muted")}>{x.short}</span>
              <span className={cn("mt-0.5 block text-[0.9375rem] font-semibold tracking-[-0.01em] transition-colors", on ? "text-navy" : "text-ink/45")}>{x.name}</span>
            </button>
          );
        })}
      </div>

      {/* ---------- Selected market ---------- */}
      <div role="tabpanel" aria-label={m.name} key={m.slug} className="grid grid-cols-1 gap-8 p-6 motion-safe:animate-fade-in md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-10">
        <div className="lg:col-span-4">
          <p className="label-mono text-orange-ink">{m.short} · {landmarkLabel(m.slug)}</p>
          <h3 className="mt-3 text-[clamp(2rem,1.5rem+2vw,3rem)] leading-[1.1] font-semibold tracking-[-0.035em] text-navy">{m.name}</h3>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted">{m.context}</p>
          <Link href={`/digital-marketing-agency-${m.slug}/`} className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-navy px-5 text-sm font-medium text-white transition-colors hover:bg-blue-ink">
            Growth in {m.name} <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>

        <div className="lg:col-span-4">
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
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Cities in ${m.name}`}>
              {m.cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/digital-marketing-agency-${c.slug}/`} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-canvas px-3 py-1.5 text-sm text-ink transition-colors hover:border-navy hover:bg-navy hover:text-white">
                    <MapPin aria-hidden className="size-3.5 text-orange" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="rounded-2xl bg-canvas p-5 lg:col-span-4">
          <p className="label-mono text-muted">Most needed in {m.name}</p>
          <ul className="mt-2">
            {m.services.map((s) => (
              <li key={s.href} className="border-b border-line last:border-b-0">
                <Link href={s.href} className="group/s flex items-center justify-between gap-3 py-2.5 text-[0.9375rem] font-medium text-ink transition-colors hover:text-blue-ink">
                  {s.name}
                  <ArrowUpRight aria-hidden className="size-4 text-line-strong transition-all group-hover/s:translate-x-0.5 group-hover/s:-translate-y-0.5 group-hover/s:text-blue-ink" />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Industries we see here">
            {m.industries.map((x) => (
              <li key={x.href}>
                <Link href={x.href} className="inline-block rounded-full bg-surface px-2.5 py-1 text-xs text-muted transition-colors hover:bg-navy hover:text-white">{x.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
