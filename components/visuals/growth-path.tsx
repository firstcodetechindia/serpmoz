"use client";

import * as m from "framer-motion/m";
import { diyPath, serpmozPath } from "@/data/growth";
import { smoothPath, type Point } from "@/lib/utils/chart";
import { cn } from "@/lib/utils";

/* Coordinates in a 0–100 box. The SERPMOZ path climbs; the DIY path flat-lines. */
const climb: Point[] = [
  [10, 82], [24, 76], [38, 66], [52, 53], [66, 40], [80, 26], [94, 10],
];
const flat: Point[] = [
  [10, 93], [24, 92], [38, 93],
];
const flatTail: Point[] = [[38, 93], [62, 93.5], [94, 93]];

/**
 * Two journeys on the same axes. Desktop and tablet only – small screens get
 * the step lists in the section itself, where the labels have room.
 */
export function GrowthPath({ className }: { className?: string }) {
  return (
    <div className={cn("relative aspect-[16/11] w-full", className)}>
      <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full overflow-visible">
        <defs>
          <linearGradient id="gp-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-blue)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="var(--color-blue)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[25, 50, 75].map((y) => (
          <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="var(--color-line)" strokeDasharray="2 6" vectorEffect="non-scaling-stroke" />
        ))}
        <path d={`${smoothPath(climb)} L94,100 L10,100 Z`} fill="url(#gp-area)" />
        {/* DIY: solid for three steps, then a tail that goes nowhere */}
        <path d={smoothPath(flat)} fill="none" stroke="var(--color-line-strong)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        <path d={smoothPath(flatTail)} fill="none" stroke="var(--color-line-strong)" strokeWidth="2" strokeDasharray="3 6" vectorEffect="non-scaling-stroke" />
        <m.path
          d={smoothPath(climb)}
          fill="none"
          stroke="var(--color-blue)"
          strokeWidth="2.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      <p className="label-mono absolute top-0 left-0 text-navy">SERPMOZ</p>
      <p className="label-mono absolute bottom-[9%] left-[46%] text-muted">DIY AI · stops at output</p>

      {flat.map(([x, y], i) => (
        <div key={diyPath[i]} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
          <span className="block size-2.5 rounded-full border-2 border-line-strong bg-surface" />
          <span className="absolute top-3.5 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap text-muted">{diyPath[i]}</span>
        </div>
      ))}

      {climb.map(([x, y], i) => {
        const step = serpmozPath[i];
        const last = i === climb.length - 1;
        return (
          <m.div
            key={step.step}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            transition={{ delay: 0.25 + i * 0.26, duration: 0.4 }}
          >
            <span className={cn("block rounded-full", last ? "size-4 bg-orange ring-[6px] ring-orange/20" : "size-3 border-[2.5px] border-blue bg-surface")} />
            <span
              className={cn(
                "absolute bottom-5 whitespace-nowrap",
                last ? "right-0 text-right" : "left-1/2 -translate-x-1/2 text-center",
              )}
            >
              <span className="label-mono block text-[0.5625rem] text-muted">{String(i + 1).padStart(2, "0")}</span>
              <span className={cn("block text-sm font-semibold tracking-[-0.01em]", last ? "text-base text-navy" : "text-navy")}>{step.step}</span>
            </span>
          </m.div>
        );
      })}
    </div>
  );
}
