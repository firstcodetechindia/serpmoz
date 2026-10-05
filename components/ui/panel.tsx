import { cn } from "@/lib/utils";

type PanelProps = React.ComponentProps<"div"> & { tone?: "light" | "dark" | "solid" };

/** Glass surface. Reserved for product UI, floating metrics and the header. Never nest. */
export function GlassPanel({ tone = "light", className, ...props }: PanelProps) {
  return (
    <div
      className={cn(
        "rounded-panel",
        tone === "light" && "glass",
        tone === "dark" && "glass-dark text-white",
        tone === "solid" && "border border-line bg-surface shadow-float",
        className,
      )}
      {...props}
    />
  );
}

/** Label / value / change, the atom of every dashboard in the site. */
export function MetricCard({
  label,
  value,
  delta,
  deltaGood = true,
  tone = "light",
  className,
  children,
}: {
  label: string;
  value: React.ReactNode;
  delta?: string;
  deltaGood?: boolean;
  tone?: "light" | "dark";
  className?: string;
  children?: React.ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <div className={cn("min-w-0", className)}>
      <p className={cn("truncate text-xs", dark ? "text-white/60" : "text-muted")}>{label}</p>
      <p className="mt-1.5 flex items-baseline gap-2">
        <span className={cn("tabular text-xl font-semibold tracking-[-0.02em]", dark ? "text-white" : "text-navy")}>{value}</span>
        {delta ? (
          <span className={cn("tabular text-[0.6875rem] font-medium", deltaGood ? (dark ? "text-[#4ade80]" : "text-success-ink") : dark ? "text-white/50" : "text-muted")}>{delta}</span>
        ) : null}
      </p>
      {children}
    </div>
  );
}
