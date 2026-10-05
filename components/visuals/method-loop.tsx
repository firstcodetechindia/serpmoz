"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { methodology } from "@/data/growth";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const N = methodology.length;
const R = 40;
const pos = methodology.map((_, i) => {
  const a = ((-90 + (i * 360) / N) * Math.PI) / 180;
  return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
});
const C = 2 * Math.PI * R;

/**
 * The methodology as what it is: a loop. Six stages on a ring, the active one
 * explained in the centre. Advances on its own until the visitor takes over.
 */
export function MethodLoop({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!auto || reduce) return;
    const t = setInterval(() => setActive((a) => (a + 1) % N), 3800);
    return () => clearInterval(t);
  }, [auto, reduce]);

  const choose = (i: number) => {
    setAuto(false);
    setActive(i);
    track({ event: "interaction", component: "method_loop", value: methodology[i].name });
  };

  const stage = methodology[active];

  return (
    <div className={className} onMouseEnter={() => setAuto(false)}>
      <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
        <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 size-full -rotate-90">
          <circle cx="50" cy="50" r={R} fill="none" stroke="var(--color-line)" strokeWidth="0.6" />
          <circle cx="50" cy="50" r={R - 7} fill="none" stroke="var(--color-line)" strokeWidth="0.25" strokeDasharray="0.6 1.6" />
          {/* Progress arc: fills to the active stage */}
          <circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke="var(--color-blue)"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C * (1 - active / N)}
            className="transition-[stroke-dashoffset] duration-700 ease-out-quint"
          />
        </svg>


        <ol>
          {methodology.map((s, i) => {
            const on = i === active;
            const done = i < active;
            return (
              <li key={s.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${pos[i].x}%`, top: `${pos[i].y}%` }}>
                <button
                  type="button"
                  onClick={() => choose(i)}
                  aria-pressed={on}
                  aria-label={`${i + 1}. ${s.name}`}
                  className={cn(
                    "flex size-12 flex-col items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300 sm:size-[4.5rem]",
                    on ? "scale-110 border-navy bg-navy text-white shadow-float" : done ? "border-blue bg-surface text-navy" : "border-line-strong bg-surface text-muted hover:border-navy hover:text-navy",
                  )}
                >
                  <span className={cn("label-mono text-[0.5625rem]", on ? "text-cyan" : "text-muted")}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="hidden text-[0.6875rem] leading-tight sm:block">{s.name}</span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* Centre: the active stage */}
        <div className="absolute top-1/2 left-1/2 w-[56%] -translate-x-1/2 -translate-y-1/2 text-center" aria-live="polite">
          <p className="label-mono text-blue-ink">Stage {String(active + 1).padStart(2, "0")} of {String(N).padStart(2, "0")}</p>
          <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-navy sm:text-4xl">{stage.name}</p>
          <p className="mt-2 text-sm leading-snug font-medium text-ink sm:text-base">{stage.body}</p>
          <p className="mt-2 hidden text-[0.8125rem] leading-relaxed text-muted md:block">{stage.detail}</p>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-muted md:hidden">{stage.detail}</p>
    </div>
  );
}
