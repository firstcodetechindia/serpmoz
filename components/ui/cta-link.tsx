import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = VariantProps<typeof buttonVariants> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  arrow?: "right" | "up-right" | false;
  /** Analytics label. Clicks are reported as `cta_click` (see components/seo/analytics-events.tsx). */
  "data-cta"?: string;
};

/** A link that looks like a button, with the arrow nudge used across the site. */
export function CtaLink({ href, children, className, arrow = "right", ...variants }: Props) {
  const Icon = arrow === "up-right" ? ArrowUpRight : ArrowRight;
  return (
    <Button asChild className={className} {...variants}>
      <Link href={href}>
        {children}
        {arrow ? (
          <Icon
            aria-hidden
            className={cn(
              "transition-transform duration-200 ease-out-quint",
              arrow === "right"
                ? "group-hover/btn:translate-x-0.5"
                : "group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5",
            )}
          />
        ) : null}
      </Link>
    </Button>
  );
}

/** Inline text link with an arrow, for "read more" style actions. */
export function ArrowLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group/al inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-ink underline decoration-line-strong decoration-1 underline-offset-[6px] transition-colors hover:decoration-navy",
        className,
      )}
    >
      {children}
      <ArrowRight aria-hidden className="size-4 transition-transform duration-200 ease-out-quint group-hover/al:translate-x-0.5" />
    </Link>
  );
}
