"use client";

import { useId } from "react";
import * as m from "framer-motion/m";
import { areaPath, scalePoints, smoothPath } from "@/lib/utils/chart";
import { cn } from "@/lib/utils";

type Props = {
  /** Primary series, drawn as a filled line */
  values: number[];
  /** Optional comparison series, drawn as a dashed line */
  compare?: number[];
  xLabels?: string[];
  className?: string;
  /** Accessible summary of what the chart shows */
  summary: string;
  color?: "blue" | "cyan";
};

const W = 600;
const H = 200;

export function TrendChart({ values, compare, xLabels, className, summary, color = "blue" }: Props) {
  const id = useId();
  const pts = scalePoints(values, W, H, 14);
  const cmp = compare ? scalePoints(compare, W, H, 14) : null;
  const stroke = color === "blue" ? "var(--color-blue)" : "var(--color-cyan)";
  const end = pts[pts.length - 1];

  return (
    <figure className={cn("w-full", className)}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" role="img" aria-label={summary} className="block h-full w-full overflow-visible">
        <defs>
          <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={stroke} stopOpacity="0.2" />
            <stop offset="100%" stopColor={stroke} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} stroke="var(--color-line)" strokeDasharray="2 5" vectorEffect="non-scaling-stroke" />
        ))}
        {cmp ? (
          <path d={smoothPath(cmp)} fill="none" stroke="var(--color-line-strong)" strokeWidth="1.5" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
        ) : null}
        <m.path
          d={areaPath(pts, H)}
          fill={`url(#${id}-fill)`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <m.path
          d={smoothPath(pts)}
          fill="none"
          stroke={stroke}
          strokeWidth="2.25"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <m.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.4 }}>
          <line x1={end[0]} x2={end[0]} y1={end[1]} y2={H} stroke={stroke} strokeOpacity="0.35" vectorEffect="non-scaling-stroke" />
        </m.g>
      </svg>
      {xLabels ? (
        <figcaption className="label-mono mt-2 flex justify-between text-[0.625rem] text-muted" aria-hidden>
          {xLabels.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </figcaption>
      ) : null}
    </figure>
  );
}
