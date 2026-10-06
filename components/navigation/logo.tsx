import { useId } from "react";
import { wordmark } from "@/components/navigation/logo-paths";
import { cn } from "@/lib/utils";

/**
 * The SERPMOZ symbol: a ring (the search field) that an arrow leaves at 45
 * degrees (direction and growth). The ring is cut where the arrow crosses it.
 * Geometry matches public/brand/logo-icon.svg, built by scripts/build-brand.py.
 * The ring takes the current text colour, so it is navy on light grounds and
 * white on dark ones; the arrow is always orange.
 */
export function LogoMark({ className, accent = true }: { className?: string; accent?: boolean }) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden className={cn("size-8 shrink-0", className)}>
      <defs>
        <mask id={`${id}m`} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
          <rect width="64" height="64" fill="#fff" />
          <path d="M29 35 64 0" stroke="#000" strokeWidth="13" strokeLinecap="round" />
        </mask>
        <mask id={`${id}c`} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
          <rect width="64" height="64" fill="#fff" />
          <circle cx="31.2" cy="32.8" r="18.6" fill="#000" />
          <path d="M29 35 64 0" stroke="#000" strokeWidth="13" strokeLinecap="round" />
        </mask>
        <linearGradient id={`${id}g`} x1="8" y1="30" x2="40" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--color-blue)" />
          <stop offset="1" stopColor="var(--color-cyan)" />
        </linearGradient>
      </defs>
      <circle cx="27" cy="37" r="16" stroke="currentColor" strokeWidth="10" mask={`url(#${id}m)`} />
      {accent ? <circle cx="27" cy="37" r="16" stroke={`url(#${id}g)`} strokeWidth="10" mask={`url(#${id}c)`} /> : null}
      <path d="M29 35 50.5 13.500" stroke="var(--color-orange)" strokeWidth="7.500" strokeLinecap="round" />
      <path d="M38.500 5.500H58.500V25.500Z" fill="var(--color-orange)" />
    </svg>
  );
}

/**
 * The logo for the header, footer and menus: symbol and name, with the tagline
 * under the name when `tagline` is set. "SERP" follows the surrounding text
 * colour; "MOZ" is brand blue. Name and tagline are drawn from outlines, so
 * they look the same before fonts load, and the tagline is exactly as wide as
 * the name.
 */
export function Logo({ className, tone = "light", tagline = false }: { className?: string; tone?: "light" | "dark"; tagline?: boolean }) {
  const gap = 7.5;
  const height = tagline ? wordmark.capHeight + gap + wordmark.taglineCap : wordmark.capHeight;
  return (
    <span className={cn("inline-flex items-center gap-2.5", tone === "dark" ? "text-white" : "text-navy", className)}>
      <LogoMark className={tagline ? "size-9 md:size-10" : undefined} />
      <svg viewBox={`0 0 ${wordmark.width} ${height}`} aria-hidden className={cn("w-auto", tagline ? "h-[1.75rem] md:h-[2.125rem]" : "h-[0.9375rem] md:h-4")}>
        <g transform={`translate(0 ${wordmark.capHeight})`}>
          <path d={wordmark.serp} fill="currentColor" />
          <path d={wordmark.moz} transform={`translate(${wordmark.mozX} 0)`} fill="var(--color-blue)" />
        </g>
        {tagline ? <path d={wordmark.tagline} transform={`translate(0 ${height})`} fill="currentColor" fillOpacity="0.7" /> : null}
      </svg>
      <span className="sr-only">SERPMOZ{tagline ? ", AI-powered digital growth" : ""}</span>
    </span>
  );
}
