"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
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
      <p aria-hidden className={cn("mt-4 font-semibold text-navy", compact ? "text-[clamp(1.75rem,1.2rem+1.8vw,2.5rem)] leading-[1.12] tracking-[-0.03em]" : "text-h2")}>
        From Visibility <span className="text-ink/55">to Revenue.</span>
      </p>
    </div>
  );
}

/**
 * Nine connected stages, pinned while the visitor moves through them. One
 * scroll gesture moves exactly one stage on every screen: a wheel or trackpad
 * gesture is stepped in script, and touch screens use scroll snapping with a
 * mandatory stop at each stage (see `.gs-stop` in globals.css). Clicking a
 * stage, the arrow buttons and the arrow keys work too.
 */
export function GrowthSystem() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  /** Scroll position of each stage, measured from the stops laid out in CSS. */
  const stops = () => {
    const el = track.current;
    if (!el) return null;
    const top = el.getBoundingClientRect().top + window.scrollY;
    return [...el.querySelectorAll<HTMLElement>(".gs-stop")].map((m) => top + m.offsetTop);
  };

  const jump = (i: number) => {
    const at = stops();
    if (!at) return;
    const target = Math.min(N - 1, Math.max(0, i));
    window.scrollTo({ top: at[target], behavior: reduce ? "auto" : "smooth" });
  };

  const jumpRef = useRef(jump);
  const stopsRef = useRef(stops);
  const activeRef = useRef(active);
  useEffect(() => {
    jumpRef.current = jump;
    stopsRef.current = stops;
    activeRef.current = active;
  });

  useEffect(() => {
    const pinned = () => {
      const el = track.current;
      if (!el) return false;
      const r = el.getBoundingClientRect();
      return r.top <= 1 && r.bottom >= window.innerHeight - 1;
    };

    // The active stage is the stop nearest the current scroll position.
    let frame = 0;
    const sync = () => {
      frame = 0;
      const at = stopsRef.current();
      if (!at) return;
      let best = 0;
      for (let i = 1; i < at.length; i++) if (Math.abs(at[i] - window.scrollY) < Math.abs(at[best] - window.scrollY)) best = i;
      setActive((cur) => (cur === best ? cur : best));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(sync); };

    // Wheel and trackpad: one gesture, one stage. A gesture is new when the
    // wheel has been quiet for a moment or its speed picks up again; the long
    // tail of trackpad inertia is neither, so it cannot skip a stage.
    let lockedUntil = 0;
    let lastAt = 0;
    let lastSize = 0;
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || Math.abs(e.deltaY) < Math.abs(e.deltaX) || !pinned()) return;
      const now = performance.now();
      const size = Math.abs(e.deltaY);
      const fresh = now - lastAt > 160 || size > lastSize + 6;
      lastAt = now;
      lastSize = size;
      const target = activeRef.current + (e.deltaY > 0 ? 1 : -1);
      if (target < 0 || target > N - 1) return; // past either end: let the page scroll on
      e.preventDefault();
      if (now < lockedUntil || !fresh) return;
      lockedUntil = now + 520;
      activeRef.current = target;
      jumpRef.current(target);
    };

    // Arrow keys step through the stages while the panel is pinned.
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || !pinned()) return;
      e.preventDefault();
      jumpRef.current(activeRef.current + (e.key === "ArrowRight" ? 1 : -1));
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const stage = growthSystem[active];
  const next = growthSystem[active + 1];

  return (
    <section id="growth-system" aria-labelledby="growth-system-title" style={themeOf(active)} className="relative">
      {/* One real heading for both layouts; each layout shows its own styled copy */}
      <h2 id="growth-system-title" className="sr-only">The SERPMOZ growth system: from visibility to revenue</h2>
      <div ref={track} className="gs-track relative">
        {/* One stop per stage. They are only scroll positions; nothing is drawn. */}
        {growthSystem.map((s, i) => (
          <div key={s.name} aria-hidden className="gs-stop" style={{ "--gs-i": i } as React.CSSProperties} />
        ))}

        <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden bg-[var(--gs-wash)] transition-colors duration-700 ease-out lg:min-h-[44rem] lg:justify-center lg:pt-24 lg:pb-8">
          <div aria-hidden className="absolute -top-40 -right-40 size-[42rem] rounded-full bg-[var(--gs-accent)] opacity-25 glow transition-colors duration-700" />
          <div aria-hidden className="absolute -bottom-52 -left-40 size-[32rem] rounded-full bg-surface opacity-70 glow" />

          {/* ---------- Large screens ---------- */}
          <div className="shell relative hidden grid-cols-12 items-stretch gap-8 lg:grid">
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

          {/* ---------- Small screens: the same stages, one per scroll ---------- */}
          <div className="relative flex min-h-0 flex-1 flex-col px-5 pt-[4.75rem] pb-4 md:px-10 lg:hidden">
            <p className="label-mono text-[0.6875rem] text-[var(--gs-ink)] transition-colors duration-700">The SERPMOZ growth system</p>
            <p aria-hidden className="mt-1.5 text-[1.625rem] leading-[1.12] font-semibold tracking-[-0.03em] text-navy">
              From Visibility <span className="text-ink/55">to Revenue.</span>
            </p>

            {/* Where you are: nine segments, each a button */}
            <ol className="mt-4 flex gap-1.5" aria-label="Stages">
              {growthSystem.map((s, i) => (
                <li key={s.name} className="flex-1">
                  <button type="button" onClick={() => jump(i)} aria-label={`${pad(i + 1)} ${s.name}`} aria-current={i === active ? "step" : undefined} className="block w-full cursor-pointer py-2">
                    <span className={cn("block h-1.5 rounded-full transition-colors duration-500", i === active ? "bg-[var(--gs-accent)]" : i < active ? "bg-navy/45" : "bg-navy/12")} />
                  </button>
                </li>
              ))}
            </ol>

            <div className="mt-2 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.5rem] bg-surface p-5 shadow-float">
              <AnimatePresence mode="wait" initial={false}>
                <m.div
                  key={active}
                  className="flex min-h-0 flex-1 flex-col"
                  initial={{ opacity: 0, y: reduce ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduce ? 0 : -12 }}
                  transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="flex items-baseline gap-2">
                    <span className="tabular text-[2.75rem] leading-none font-semibold tracking-[-0.05em] text-[var(--gs-accent)]">{pad(active + 1)}</span>
                    <span className="tabular text-sm font-medium text-navy/35">/ {pad(N)}</span>
                  </p>
                  <h3 className="mt-3 text-[1.375rem] leading-tight font-semibold tracking-[-0.025em] text-navy">{stage.name}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{stage.body}</p>
                  <div className="mt-4 flex min-h-0 flex-1 flex-col justify-center overflow-hidden rounded-2xl bg-[var(--gs-wash)] p-3 transition-colors duration-700">
                    <StageVisual index={active} />
                  </div>
                </m.div>
              </AnimatePresence>
            </div>

            {/* Kept clear of the back-to-top button in the corner */}
            <div className="mt-3 flex items-center justify-between gap-3 pr-14">
              <p className="text-xs text-navy/60">{next ? <>Scroll for <span className="font-semibold text-navy">{next.name}</span></> : "Last stage. Keep scrolling."}</p>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => jump(active - 1)} disabled={active === 0} aria-label="Previous stage" className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-navy/20 bg-surface text-navy disabled:opacity-35">
                  <ArrowLeft aria-hidden className="size-4" />
                </button>
                <button type="button" onClick={() => jump(active + 1)} disabled={active === N - 1} aria-label="Next stage" className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-navy text-white disabled:opacity-35">
                  <ArrowRight aria-hidden className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
