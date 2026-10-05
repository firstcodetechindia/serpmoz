import { cn } from "@/lib/utils";

/**
 * SERPMOZ mark: a search lens whose handle becomes a growth line.
 * Drawn inline so it inherits colour and needs no network request.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden className={cn("size-7", className)}>
      <circle cx="14" cy="18" r="9.25" stroke="currentColor" strokeWidth="3.5" />
      <path d="M14 18 27.5 4.5" stroke="var(--color-orange)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M19.5 4.5h8v8" stroke="var(--color-orange)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", tone === "dark" ? "text-white" : "text-navy", className)}>
      <LogoMark />
      <span className="text-[1.0625rem] leading-none font-semibold tracking-[0.14em]">SERPMOZ</span>
    </span>
  );
}
