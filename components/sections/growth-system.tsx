"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import * as m from "framer-motion/m";
import { ArrowLeft, ArrowRight, MousePointerClick } from "lucide-react";
import { StageVisual } from "@/components/visuals/stage-visual";
import { growthSystem } from "@/data/growth";
import { cn } from "@/lib/utils";

const N = growthSystem.length;
const pad = (n: number) => String(n).padStart(2, "0");

/* Each stage has its own colour: the section's ground, the accent and the glow all follow the active stage. */
const palette = [
  { wash: "#dce9ff", accent: "#1677ff", ink: "#0d5bd3" },
  { wash: "#d5f2f8", accent: "#00a3c2", ink: "#046b80" },
  { wash: "#ffe9d2", accent: "#ff7a00", ink: "#b85400" },
  { wash: "#e2e5ff", accent: "#3d5afe", ink: "#2a3fc4" },
  { wash: "#d9f2e3", accent: "#16a34a", ink: "#15803d" },
  { wash: "#dce9ff", accent: "#1677ff", ink: "#0d5bd3" },
  { wash: "#d5f2f8", accent: "#00a3c2", ink: "#046b80" },
  { wash: "#ffe9d2", accent: "#ff7a00", ink: "#b85400" },
  { wash: "#dfe5ef", accent: "#0b1f3a", ink: "#0b1f3a" },
];
const themeOf = (i: number) => ({ "--gs-wash": palette[i].wash, "--gs-accent": palette[i].accent, "--gs-ink": palette[i].ink }) as React.CSSProperties;

function Heading({ compact }: { compact?: boolean }) {
  return (
    <div>
      <p className="label-mono text-[var(--gs-ink)] transition-colors duration-700">The SERPMOZ growth system</p>
      <h2 id="growth-system-title" className={cn("mt-4 font-semibold text-navy", compact ? "text-[clamp(1.75rem,1.2rem+1.8vw,2.5rem)] leading-[1.12] tracking-[-0.03em]" : "text-h2")}>
        From Visibility <span className="text-ink/55">to Revenue.</span>
      </h2>
    </div>
  );
}

/**
 * Nine connected stages. On large screens the section pins: scrolling, clicking
 * a stage, the arrow buttons or the arrow keys all move through them, and the
 * colour of the whole section follows. Small screens get a swipeable rail.
 */
export function GrowthSystem() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(N - 1, Math.max(0, Math.floor(v * N)));
    setActive((cur) => (cur === next ? cur : next));
  });

  const jump = (i: number) => {
    const el = track.current;
    if (!el) return;
    const target = Math.min(N - 1, Math.max(0, i));
    const top = el.getBoundingClientRect().top + window.scrollY;
    const span = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (span * (target + 0.5)) / N, behavior: reduce ? "auto" : "smooth" });
  };

  // Arrow keys step through the stages while the pinned panel is on screen.
  const jumpRef = useRef(jump);
  const activeRef = useRef(active);
  useEffect(() => {
    jumpRef.current = jump;
    activeRef.current = active;
  });
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = track.current;
      if (!el || (e.key !== "ArrowRight" && e.key !== "ArrowLeft")) return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      const r = el.getBoundingClientRect();
      if (r.top > 0 || r.bottom < window.innerHeight) return;
      e.preventDefault();
      jumpRef.current(activeRef.current + (e.key === "ArrowRight" ? 1 : -1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const stage = growthSystem[active];
  const next = growthSystem[active + 1];

  return (
    <section id="growth-system" aria-labelledby="growth-system-title" style={themeOf(active)} className="relative bg-[var(--gs-wash)] transition-colors duration-700 ease-out">
      {/* ---------- Large screens: pinned and interactive ---------- */}
      <div ref={track} className="hidden lg:block" style={{ height: `${N * 32 + 80}vh` }}>
        <div className="sticky top-0 flex h-screen min-h-[44rem] flex-col justify-center overflow-hidden pt-24 pb-8">
          <div aria-hidden className="absolute -top-40 -right-40 size-[42rem] rounded-full bg-[var(--gs-accent)] opacity-25 blur-[130px] transition-colors duration-700" />
          <div aria-hidden className="absolute -bottom-52 -left-40 size-[32rem] rounded-full bg-surface opacity-70 blur-[120px]" />

          <div className="shell relative grid grid-cols-12 items-stretch gap-8">
            {/* Stage list */}
            <div className="col-span-4 flex flex-col">
              <Heading compact />
              <ol className="mt-7 flex-1">
                {growthSystem.map((s, i) => {
                  const on = i === active;
                  return (
                    <li key={s.name}>
                      <button
                        type="button"
                        onClick={() => jump(i)}
                        aria-current={on ? "step" : undefined}
                        className={cn(
                          "group relative flex w-full items-center gap-4 rounded-xl py-2 pr-3 pl-4 text-left transition-all duration-300",
                          on ? "bg-surface shadow-soft" : "hover:bg-surface/50",
                        )}
                      >
                        <span aria-hidden className={cn("absolute top-1/2 left-0 w-1 -translate-y-1/2 rounded-full bg-[var(--gs-accent)] transition-all duration-300", on ? "h-6 opacity-100" : "h-0 opacity-0")} />
                        <span className={cn("tabular w-6 text-xs font-semibold transition-colors", on ? "text-[var(--gs-ink)]" : i < active ? "text-navy/60" : "text-navy/35")}>{pad(i + 1)}</span>
                        <span className={cn("flex-1 text-[0.9375rem] tracking-[-0.01em] transition-colors", on ? "font-semibold text-navy" : i < active ? "font-medium text-navy/70" : "font-medium text-navy/45 group-hover:text-navy")}>{s.name}</span>
                        <span aria-hidden className={cn("size-2 rounded-full transition-all duration-300", on ? "scale-125 bg-[var(--gs-accent)]" : i < active ? "bg-navy/40" : "border border-navy/25")} />
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Active stage */}
            <div className="col-span-8 flex flex-col overflow-hidden rounded-[1.75rem] bg-surface shadow-float">
              <div className="h-1.5 bg-navy/5">
                <div className="h-full rounded-r-full bg-[var(--gs-accent)] transition-all duration-500 ease-out-quint" style={{ width: `${((active + 1) / N) * 100}%` }} />
              </div>
              <div className="grid flex-1 grid-cols-2 gap-8 p-8 xl:p-10">
                <div className="relative flex flex-col">
                  <AnimatePresence mode="wait" initial={false}>
                    <m.div
                      key={active}
                      initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: reduce ? 0 : -10 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="flex items-baseline gap-2">
                        <span className="tabular text-[5rem] leading-none font-semibold tracking-[-0.06em] text-[var(--gs-accent)]">{pad(active + 1)}</span>
                        <span className="tabular text-lg font-medium text-navy/30">/ {pad(N)}</span>
                      </p>
                      <h3 className="mt-5 text-[clamp(1.75rem,1.2rem+1.6vw,2.375rem)] leading-[1.15] font-semibold tracking-[-0.03em] text-navy">{stage.name}</h3>
                      <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted">{stage.body}</p>
                    </m.div>
                  </AnimatePresence>
                  {next ? (
                    <p className="mt-auto pt-6 text-sm text-muted">
                      Feeds into <button type="button" onClick={() => jump(active + 1)} className="font-semibold text-[var(--gs-ink)] underline decoration-1 underline-offset-4 hover:decoration-2">{next.name}</button>
                    </p>
                  ) : (
                    <p className="mt-auto pt-6 text-sm text-muted">
                      Then the loop starts again, at <button type="button" onClick={() => jump(0)} className="font-semibold text-[var(--gs-ink)] underline decoration-1 underline-offset-4 hover:decoration-2">{growthSystem[0].name}</button>
                    </p>
                  )}
                </div>
                <div className="flex flex-col justify-center rounded-2xl bg-[var(--gs-wash)] p-4 transition-colors duration-700">
                  <AnimatePresence mode="wait" initial={false}>
                    <m.div key={active} initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                      <StageVisual index={active} className="min-h-[15rem]" />
                    </m.div>
                  </AnimatePresence>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-line px-8 py-4 xl:px-10">
                <p className="flex items-center gap-2 text-xs text-muted">
                  <MousePointerClick aria-hidden className="size-4" />
                  Scroll, click a stage or use the arrow keys
                </p>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => jump(active - 1)} disabled={active === 0} aria-label="Previous stage" className="flex size-10 items-center justify-center rounded-full border border-line text-navy transition-colors hover:border-navy disabled:opacity-35 disabled:hover:border-line">
                    <ArrowLeft aria-hidden className="size-4" />
                  </button>
                  <button type="button" onClick={() => jump(active + 1)} disabled={active === N - 1} aria-label="Next stage" className="flex h-10 items-center gap-2 rounded-full bg-navy px-5 text-sm font-medium text-white transition-colors hover:bg-[var(--gs-accent)] disabled:opacity-35 disabled:hover:bg-navy">
                    Next stage <ArrowRight aria-hidden className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Small screens: swipeable rail ---------- */}
      <div className="bg-surface py-20 md:py-28 lg:hidden">
        <div className="shell" style={themeOf(0)}>
          <Heading />
          <p className="mt-6 text-lead text-muted">We don’t optimize marketing channels in isolation. We connect them to the customer’s journey and the business outcome.</p>
        </div>
        <ol
          tabIndex={0}
          aria-label="Nine stages of the SERPMOZ growth system. Swipe horizontally."
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 md:scroll-px-10 md:px-10"
        >
          {growthSystem.map((s, i) => (
            <li key={s.name} style={themeOf(i)} className="w-[85vw] max-w-[24rem] shrink-0 snap-start rounded-panel bg-[var(--gs-wash)] p-5">
              <div className="flex items-center gap-3">
                <span aria-hidden className="size-2.5 rounded-full bg-[var(--gs-accent)]" />
                <span aria-hidden className="h-px flex-1 bg-navy/15" />
                <span className="label-mono text-[var(--gs-ink)]">{pad(i + 1)} / {pad(N)}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-navy">{s.name}</h3>
              <p className="mt-2 min-h-[4.5rem] text-[0.9375rem] leading-relaxed text-muted">{s.body}</p>
              <StageVisual index={i} className="mt-4" />
            </li>
          ))}
        </ol>
        <p className="shell label-mono mt-6 flex items-center gap-3 text-muted" aria-hidden>
          Swipe <span className="h-px w-10 bg-line-strong" /> 09 stages
        </p>
      </div>
    </section>
  );
}
