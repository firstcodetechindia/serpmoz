import { scalePoints, smoothPath } from "@/lib/utils/chart";
import { cn } from "@/lib/utils";

/** Decorative inline trend. The number beside it carries the meaning. */
export function Sparkline({ values, className, tone = "blue" }: { values: number[]; className?: string; tone?: "blue" | "cyan" | "orange" | "muted" }) {
  const pts = scalePoints(values, 80, 24, 3);
  const stroke = {
    blue: "var(--color-blue)",
    cyan: "var(--color-cyan)",
    orange: "var(--color-orange)",
    muted: "var(--color-line-strong)",
  }[tone];
  return (
    <svg viewBox="0 0 80 24" aria-hidden className={cn("h-6 w-20", className)} preserveAspectRatio="none">
      <path d={smoothPath(pts)} fill="none" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
