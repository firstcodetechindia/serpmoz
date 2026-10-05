import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badge = cva("label-mono inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[0.625rem] whitespace-nowrap", {
  variants: {
    variant: {
      neutral: "border border-line bg-surface/80 text-muted",
      dark: "border border-white/15 bg-white/5 text-white/70",
      blue: "bg-blue-wash text-blue-ink",
      cyan: "bg-cyan-wash text-navy",
      orange: "bg-orange-wash text-orange-ink",
      success: "bg-success/10 text-success-ink",
    },
  },
  defaultVariants: { variant: "neutral" },
});

export function Badge({ className, variant, dot, children }: VariantProps<typeof badge> & { className?: string; dot?: boolean; children: React.ReactNode }) {
  return (
    <span className={cn(badge({ variant }), className)}>
      {dot ? <span aria-hidden className="size-1.5 rounded-full bg-orange" /> : null}
      {children}
    </span>
  );
}

/** Required on every surface that shows invented figures. */
export function SampleBadge({ tone = "light", children = "Illustrative data", className }: { tone?: "light" | "dark"; children?: React.ReactNode; className?: string }) {
  return (
    <Badge variant={tone === "dark" ? "dark" : "neutral"} dot className={className}>
      {children}
    </Badge>
  );
}
