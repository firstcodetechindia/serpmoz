"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export type HeroSlide = {
  key: string;
  /** Short name on the slide selector */
  label: string;
  eyebrow: string;
  /** Two lines; the second is set in the gradient */
  title: [string, string];
  body: string;
  cta: { label: string; href: string };
  more: { label: string; href: string };
  visual: React.ReactNode;
};

const DWELL = 7000;

/**
 * The hero as a short sequence: who we are, then what we do and why it is
 * different, each with its own picture. Every slide is in the page from the
 * first render, stacked in one grid cell, so nothing shifts as they change
 * and the first one reads fine without JavaScript.
 */
export function HeroSlider({ slides, children }: { slides: HeroSlide[]; children?: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const held = useRef(false);
  const n = slides.length;

  useEffect(() => {
    if (!playing || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!held.current && document.visibilityState === "visible" && window.scrollY < window.innerHeight * 0.6) setActive((i) => (i + 1) % n);
    }, DWELL);
    return () => window.clearInterval(id);
  }, [playing, n]);

  const go = (i: number) => {
    const next = (i + n) % n;
    setActive(next);
    setPlaying(false);
    track({ event: "interaction", component: "hero_slider", value: slides[next].label });
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(active + 1);
    else if (e.key === "ArrowLeft") go(active - 1);
    else return;
    e.preventDefault();
  };

  const hold = { onMouseEnter: () => (held.current = true), onMouseLeave: () => (held.current = false), onFocusCapture: () => (held.current = true), onBlurCapture: () => (held.current = false) };

  return (
    <div className="shell relative pt-28 pb-10 md:pt-36 lg:pb-12" aria-roledescription="carousel" aria-label="What SERPMOZ does">
      <div className="grid grid-cols-1 gap-x-10 gap-y-9 lg:grid-cols-12 lg:items-center lg:gap-y-12" {...hold}>
        {/* ---------- Words ---------- */}
        <div className="order-1 grid lg:col-span-6">
          {slides.map((s, i) => {
            const on = i === active;
            const Title = i === 0 ? "h1" : "h2";
            return (
              <div
                key={s.key}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${n}: ${s.label}`}
                aria-hidden={!on}
                inert={!on}
                className={cn("col-start-1 row-start-1 transition-[opacity,visibility] duration-500", on ? "visible opacity-100" : "invisible opacity-0")}
              >
                <p className={cn("inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pr-4 pl-2.5 text-[0.8125rem] font-medium text-white/85 transition-all duration-700 ease-out-quint", on ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0")}>
                  <span className="relative flex size-2" aria-hidden>
                    <span className="absolute inset-0 rounded-full bg-orange motion-safe:animate-ping-soft" />
                    <span className="relative size-2 rounded-full bg-orange" />
                  </span>
                  {s.eyebrow}
                </p>

                <Title id={i === 0 ? "hero-title" : undefined} className="mt-7 text-[clamp(2.375rem,1.2rem+3.6vw,4rem)] leading-[1.08] font-semibold tracking-[-0.035em]">
                  {s.title.map((line, l) => (
                    <span key={line} className="block overflow-hidden pb-2">
                      <span
                        className={cn(
                          "block transition-all duration-700 ease-out-quint",
                          l === 1 && "bg-gradient-to-r from-cyan via-[#7cc4ff] to-white bg-clip-text text-transparent",
                          on ? "translate-y-0 opacity-100" : "translate-y-[60%] opacity-0",
                        )}
                        style={{ transitionDelay: on ? `${120 + l * 110}ms` : "0ms" }}
                      >
                        {line}
                      </span>
                    </span>
                  ))}
                </Title>

                <p className={cn("mt-4 max-w-xl text-lead text-white/75 transition-all duration-700 ease-out-quint", on ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")} style={{ transitionDelay: on ? "320ms" : "0ms" }}>
                  {s.body}
                </p>

                <div className={cn("mt-9 flex flex-col gap-3 transition-all duration-700 ease-out-quint sm:flex-row", on ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")} style={{ transitionDelay: on ? "420ms" : "0ms" }}>
                  <CtaLink href={s.cta.href} variant="primary" size="lg" data-cta={`hero-${s.key}`}>{s.cta.label}</CtaLink>
                  <CtaLink href={s.more.href} variant="onDark" size="lg" arrow={false} data-cta={`hero-${s.key}-more`}>{s.more.label}</CtaLink>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---------- Pictures ---------- */}
        <div className="order-3 grid lg:order-2 lg:col-span-6 lg:pl-4" aria-hidden>
          {slides.map((s, i) => (
            <div
              key={s.key}
              inert={i !== active}
              className={cn(
                "col-start-1 row-start-1 flex items-center transition-all duration-700 ease-out-quint",
                i === active ? "visible translate-x-0 scale-100 opacity-100" : "invisible translate-x-6 scale-[0.97] opacity-0",
              )}
            >
              <div className="w-full">{s.visual}</div>
            </div>
          ))}
        </div>

        {/* ---------- Selector ---------- */}
        <div className="order-2 flex flex-col gap-4 lg:order-3 lg:col-span-12 lg:mt-2 lg:flex-row lg:items-end lg:gap-8">
          <div role="tablist" aria-label="Choose a slide" onKeyDown={onKey} className="grid flex-1 grid-cols-5 gap-2 sm:gap-3">
            {slides.map((s, i) => {
              const on = i === active;
              return (
                <button key={s.key} role="tab" type="button" aria-selected={on} tabIndex={on ? 0 : -1} onClick={() => go(i)} className="group text-left outline-none">
                  <span className="block h-1 overflow-hidden rounded-full bg-white/15">
                    {on ? (
                      <span key={`${active}-${playing}`} className={cn("block h-full origin-left rounded-full bg-orange", playing && "motion-safe:animate-[tour_7s_linear_forwards]")} />
                    ) : (
                      <span className={cn("block h-full rounded-full bg-white/40 transition-transform duration-300", i < active ? "scale-x-100" : "origin-left scale-x-0 group-hover:scale-x-100")} />
                    )}
                  </span>
                  <span className="mt-3 hidden items-baseline gap-2 sm:flex">
                    <span className={cn("tabular text-xs font-semibold", on ? "text-orange" : "text-white/40")}>{String(i + 1).padStart(2, "0")}</span>
                    <span className={cn("text-sm font-medium transition-colors group-hover:text-white group-focus-visible:underline", on ? "text-white" : "text-white/50")}>{s.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex items-center justify-between gap-2 lg:justify-end">
            <p className="text-sm font-medium text-white sm:hidden">
              <span className="tabular text-orange">{String(active + 1).padStart(2, "0")}</span> {slides[active].label}
            </p>
            <div className="flex items-center gap-1.5">
              {[
                { label: playing ? "Pause slides" : "Play slides", icon: playing ? Pause : Play, on: () => setPlaying((p) => !p) },
                { label: "Previous slide", icon: ArrowLeft, on: () => go(active - 1) },
                { label: "Next slide", icon: ArrowRight, on: () => go(active + 1) },
              ].map((b) => (
                <button key={b.label} type="button" aria-label={b.label} onClick={b.on} className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors hover:bg-white hover:text-navy">
                  <b.icon aria-hidden className="size-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
