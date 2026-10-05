"use client";

import { useRef, useState } from "react";
import { AnimatePresence, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import * as m from "framer-motion/m";
import { StageVisual } from "@/components/visuals/stage-visual";
import { growthSystem } from "@/data/growth";
import { cn } from "@/lib/utils";

const N = growthSystem.length;

/* Each stage has its own colour: the section's wash, the accent and the glow all follow the active stage. */
const palette = [
  { wash: "#eaf2ff", accent: "#1677ff", ink: "#0d5bd3" },
  { wash: "#e3f8fc", accent: "#00b8d9", ink: "#046b80" },
  { wash: "#fff3e6", accent: "#ff7a00", ink: "#b85400" },
  { wash: "#eef0ff", accent: "#3d5afe", ink: "#2a3fc4" },
  { wash: "#e6f7ee", accent: "#16a34a", ink: "#15803d" },
  { wash: "#eaf2ff", accent: "#1677ff", ink: "#0d5bd3" },
  { wash: "#e3f8fc", accent: "#00b8d9", ink: "#046b80" },
  { wash: "#fff3e6", accent: "#ff7a00", ink: "#b85400" },
  { wash: "#e9edf5", accent: "#0b1f3a", ink: "#0b1f3a" },
];
const themeOf = (i: number) => ({ "--gs-wash": palette[i].wash, "--gs-accent": palette[i].accent, "--gs-ink": palette[i].ink }) as React.CSSProperties;
const pad = (n: number) => String(n).padStart(2, "0");

function Intro() {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
      <div className="lg:col-span-7">
        <p className="label-mono flex items-center gap-3 text-muted">
          The SERPMOZ growth system
        </p>
        <h2 id="growth-system-title" className="mt-5 text-h2 font-semibold text-navy">
          From Visibility <span className="text-ink/55">to Revenue.</span>
        </h2>
      </div>
      <p className="text-lead text-muted lg:col-span-5">
        We don’t optimize marketing channels in isolation. We connect them to the customer’s journey and the business outcome.
      </p>
    </div>
  );
}

/**
 * Nine stages. On large screens the section pins and the page scroll moves
 * through them, changing colour with each stage; on small screens it is a swipeable rail with the same panels.
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
    const top = el.getBoundingClientRect().top + window.scrollY;
    const span = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (span * (i + 0.5)) / N, behavior: reduce ? "auto" : "smooth" });
  };

  const stage = growthSystem[active];

  return (
    <section id="growth-system" aria-labelledby="growth-system-title" style={themeOf(active)} className="relative scroll-mt-0 bg-[var(--gs-wash)] transition-colors duration-700 ease-out">
      {/* ---------- Large screens: pinned, scroll-driven ---------- */}
      <div ref={track} className="hidden lg:block" style={{ height: `${N * 32 + 80}vh` }}>
        <div className="sticky top-0 flex h-screen min-h-[42rem] flex-col justify-center overflow-hidden py-24">
          <div aria-hidden className="absolute -top-40 -right-40 size-[40rem] rounded-full bg-[var(--gs-accent)] opacity-20 blur-[120px] transition-colors duration-700" />
          <div aria-hidden className="absolute -bottom-52 -left-40 size-[32rem] rounded-full bg-[var(--gs-accent)] opacity-10 blur-[120px] transition-colors duration-700" />
          <div className="shell relative">
            <Intro />

            {/* Progress rail */}
            <ol className="mt-12 grid grid-cols-9">
              {growthSystem.map((s, i) => (
                <li key={s.name} className="relative">
                  <button type="button" onClick={() => jump(i)} aria-current={i === active ? "step" : undefined} className="group block w-full pt-5 text-left">
                    <span aria-hidden className={cn("absolute top-0 left-0 h-0.5 w-full transition-colors duration-500", i <= active ? "bg-[var(--gs-accent)]" : "bg-navy/10")} />
                    <span aria-hidden className={cn("absolute -top-[0.3125rem] left-0 size-3 rounded-full border-2 transition-colors duration-300", i === active ? "scale-125 border-[var(--gs-accent)] bg-[var(--gs-accent)]" : i < active ? "border-[var(--gs-accent)] bg-surface" : "border-line-strong bg-surface")} />
                    <span className={cn("label-mono block transition-colors", i === active ? "text-[var(--gs-ink)]" : "text-muted")}>{pad(i + 1)}</span>
                    <span className={cn("mt-1 block pr-3 text-[0.8125rem] leading-tight font-medium transition-colors", i === active ? "text-navy" : "text-muted group-hover:text-ink")}>{s.name}</span>
                  </button>
                </li>
              ))}
            </ol>

            {/* Active stage */}
            <div className="mt-12 grid grid-cols-12 items-center gap-8">
              <div className="relative col-span-6 min-h-[15rem]">
                <AnimatePresence mode="wait" initial={false}>
                  <m.div
                    key={active}
                    initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduce ? 0 : -10 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="tabular text-[6.5rem] leading-none font-semibold tracking-[-0.06em] text-[var(--gs-accent)] opacity-60 transition-colors duration-700">{pad(active + 1)}</p>
                    <h3 className="mt-2 text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.035em] text-navy">{stage.name}</h3>
                    <p className="mt-4 max-w-md text-lead text-muted">{stage.body}</p>
                  </m.div>
                </AnimatePresence>
              </div>
              <div className="col-span-6 xl:col-span-5 xl:col-start-8">
                <AnimatePresence mode="wait" initial={false}>
                  <m.div
                    key={active}
                    initial={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <StageVisual index={active} className="min-h-[17rem] shadow-float" />
                  </m.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Small screens: swipeable rail ---------- */}
      <div className="bg-surface py-20 md:py-28 lg:hidden">
        <div className="shell">
          <Intro />
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
                <span aria-hidden className="h-px flex-1 bg-line-strong" />
                <span className="label-mono text-muted">{pad(i + 1)} / {pad(N)}</span>
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
