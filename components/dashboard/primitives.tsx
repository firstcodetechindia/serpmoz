import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Marks any mock product UI as sample data. Required wherever invented figures appear. */
export function IllustrativeTag({ className, children = "Illustrative data" }: { className?: string; children?: React.ReactNode }) {
  return (
    <span className={cn("label-mono inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/80 px-2 py-1 text-[0.625rem] text-muted", className)}>
      <span aria-hidden className="size-1.5 rounded-full bg-orange" />
      {children}
    </span>
  );
}

/** Glass application window with a title bar. The frame for every GrowthOS-style mock. */
export function AppWindow({
  title,
  crumb,
  actions,
  children,
  className,
}: {
  title: string;
  crumb?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("glass overflow-hidden rounded-panel", className)}>
      <div className="flex h-11 items-center justify-between gap-3 border-b border-line/80 px-4">
        <div className="flex min-w-0 items-center gap-2.5">
          <span aria-hidden className="flex gap-1">
            <i className="size-2 rounded-full bg-line-strong" />
            <i className="size-2 rounded-full bg-line-strong" />
            <i className="size-2 rounded-full bg-line-strong" />
          </span>
          <p className="truncate text-[0.8125rem] font-medium text-ink">
            {title}
            {crumb ? <span className="font-normal text-muted"> / {crumb}</span> : null}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">{actions}</div>
      </div>
      {children}
    </div>
  );
}

export function Delta({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("tabular inline-flex items-center gap-0.5 text-xs font-medium text-success-ink", className)}>
      <ArrowUpRight aria-hidden className="size-3" />
      {children}
    </span>
  );
}

/** Label / bar / value row for share and score breakdowns. */
export function BarRow({ label, value, display, tone = "blue", className }: { label: string; value: number; display?: string; tone?: "blue" | "cyan" | "navy" | "muted"; className?: string }) {
  const fill = { blue: "bg-blue", cyan: "bg-cyan", navy: "bg-navy", muted: "bg-line-strong" }[tone];
  return (
    <div className={cn("grid grid-cols-[minmax(0,7.5rem)_1fr_auto] items-center gap-3 text-[0.8125rem]", className)}>
      <span className="truncate text-ink">{label}</span>
      <span className="h-1.5 overflow-hidden rounded-full bg-line/80" aria-hidden>
        <span className={cn("block h-full rounded-full", fill)} style={{ width: `${value}%` }} />
      </span>
      <span className="tabular w-9 text-right text-muted">{display ?? `${value}%`}</span>
    </div>
  );
}
