import { cn } from "@/lib/utils";

/** Colours for chart series, in order. Drawn from the brand tokens only. */
export const seriesColors = ["var(--color-blue)", "var(--color-cyan)", "var(--color-navy)", "var(--color-orange)", "var(--color-line-strong)"] as const;

/** Circular score. The number is rendered by the caller so it can animate. */
export function Ring({
  value,
  size = 120,
  stroke = 8,
  color = "var(--color-cyan)",
  track = "var(--color-line)",
  className,
  children,
}: {
  value: number;
  size?: number;
  stroke?: number;
  color?: string;
  track?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className={cn("relative shrink-0", className)} style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="size-full -rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - value / 100)}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">{children}</div>
    </div>
  );
}

/** Donut for part-to-whole breakdowns of up to five segments. */
export function Donut({ segments, size = 96, stroke = 12, className, children }: { segments: { value: number; color?: string }[]; size?: number; stroke?: number; className?: string; children?: React.ReactNode }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const total = segments.reduce((a, s) => a + s.value, 0) || 1;
  const gap = 2;
  // Each arc starts where the previous ones end.
  const arcs = segments.map((seg, i) => {
    const len = (seg.value / total) * c;
    const start = segments.slice(0, i).reduce((sum, x) => sum + (x.value / total) * c, 0);
    return { len: Math.max(len - gap, 0), start, color: seg.color ?? seriesColors[i % seriesColors.length] };
  });
  return (
    <div className={cn("relative shrink-0", className)} style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="size-full -rotate-90" aria-hidden>
        {arcs.map((arc, i) => (
          <circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none" stroke={arc.color} strokeWidth={stroke} strokeDasharray={`${arc.len} ${c - arc.len}`} strokeDashoffset={-arc.start} />
        ))}
      </svg>
      {children ? <div className="absolute inset-0 flex flex-col items-center justify-center">{children}</div> : null}
    </div>
  );
}

/** Single horizontal bar split into segments – channel mix, attribution. */
export function StackedBar({ segments, className }: { segments: { value: number; color?: string; label?: string }[]; className?: string }) {
  const total = segments.reduce((a, s) => a + s.value, 0) || 1;
  return (
    <div className={cn("flex h-2.5 w-full gap-0.5 overflow-hidden rounded-full", className)} aria-hidden>
      {segments.map((s, i) => (
        <span key={i} className="h-full first:rounded-l-full last:rounded-r-full" style={{ width: `${(s.value / total) * 100}%`, background: s.color ?? seriesColors[i % seriesColors.length] }} />
      ))}
    </div>
  );
}

/** Small vertical bar chart. Heights are relative to the largest value. */
export function Bars({ values, highlight, className, color = "var(--color-blue)", muted = "var(--color-line-strong)" }: { values: number[]; highlight?: number; className?: string; color?: string; muted?: string }) {
  const max = Math.max(...values) || 1;
  return (
    <div className={cn("flex h-full items-end gap-1.5", className)} aria-hidden>
      {values.map((v, i) => (
        <span
          key={i}
          className="flex-1 rounded-t-[3px]"
          style={{ height: `${Math.max((v / max) * 100, 4)}%`, background: highlight === undefined || highlight === i ? color : muted }}
        />
      ))}
    </div>
  );
}

/** Funnel as centred, narrowing bars with a label and value per stage. */
export function Funnel({ stages, tone = "light", className }: { stages: { label: string; value: string; width: number }[]; tone?: "light" | "dark"; className?: string }) {
  return (
    <ol className={cn("space-y-1.5", className)}>
      {stages.map((s, i) => (
        <li key={s.label} className="flex items-center gap-3">
          <div className="flex-1">
            <div
              className={cn("mx-auto flex h-8 items-center justify-between rounded-md px-3 text-xs font-medium", i === stages.length - 1 ? "bg-orange text-navy" : tone === "dark" ? "bg-white/10 text-white" : "bg-blue-wash text-navy")}
              style={{ width: `${s.width}%` }}
            >
              <span className="truncate">{s.label}</span>
              <span className="tabular">{s.value}</span>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
