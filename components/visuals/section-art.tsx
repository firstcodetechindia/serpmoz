import { useId } from "react";
import { cn } from "@/lib/utils";

export type SectionArtKind = "search" | "network" | "growth" | "talk";

/**
 * Quiet line drawings in the brand colours that sit beside a section heading,
 * so a short heading next to a long column of text is not left in a field of
 * white. Decorative only: hidden from assistive technology.
 */
export function SectionArt({ kind = "search", className }: { kind?: SectionArtKind; className?: string }) {
  // Unique ids: the drawing is rendered twice per section (one copy per screen size).
  const id = useId();
  return (
    <svg viewBox="0 0 320 240" fill="none" aria-hidden className={cn("h-auto w-full text-navy", className)}>
      <defs>
        <pattern id={`${id}d`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.1" fill="currentColor" opacity="0.16" />
        </pattern>
        <linearGradient id={`${id}f`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-blue)" stopOpacity="0.16" />
          <stop offset="1" stopColor="var(--color-cyan)" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="304" height="224" rx="28" fill={`url(#${id}f)`} />
      <rect x="8" y="8" width="304" height="224" rx="28" fill={`url(#${id}d)`} />

      {kind === "search" ? (
        <>
          {/* A search lens whose handle becomes a growth line, echoing the mark */}
          <circle cx="132" cy="128" r="74" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1.5" />
          <circle cx="132" cy="128" r="52" stroke="var(--color-blue)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="3 7" className="origin-center [transform-box:fill-box] motion-safe:animate-[spin_40s_linear_infinite]" />
          <circle cx="132" cy="128" r="32" stroke="currentColor" strokeWidth="5" />
          <path d="M155 105 236 40" stroke="var(--color-orange)" strokeWidth="5" strokeLinecap="round" />
          <path d="M206 38h32v32" stroke="var(--color-orange)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          {[0, 1, 2].map((i) => (
            <g key={i} opacity={0.9 - i * 0.22}>
              <rect x="206" y={132 + i * 26} width="84" height="16" rx="8" fill="#fff" />
              <rect x="214" y={138 + i * 26} width={[48, 34, 56][i]} height="4" rx="2" fill={i === 0 ? "var(--color-blue)" : "currentColor"} fillOpacity={i === 0 ? 1 : 0.25} />
            </g>
          ))}
        </>
      ) : null}

      {kind === "network" ? (
        <>
          {/* Places and channels joined to one plan */}
          {[[70, 70], [250, 62], [58, 176], [262, 178], [160, 44], [160, 204]].map(([x, y], i) => (
            <g key={i}>
              <path d={`M160 122 ${x} ${y}`} stroke="currentColor" strokeOpacity="0.14" strokeWidth="1.2" />
              <path d={`M160 122 ${x} ${y}`} stroke={i % 2 ? "var(--color-cyan)" : "var(--color-blue)"} strokeWidth="1.6" strokeLinecap="round" strokeDasharray="4 18" className="motion-safe:animate-dash" style={{ animationDuration: `${2.6 + i * 0.4}s` }} />
              <circle cx={x} cy={y} r="13" fill="#fff" stroke="currentColor" strokeOpacity="0.14" />
              <circle cx={x} cy={y} r="4.5" fill={i === 1 ? "var(--color-orange)" : "var(--color-blue)"} />
            </g>
          ))}
          <circle cx="160" cy="122" r="30" fill="var(--color-navy)" />
          <circle cx="160" cy="122" r="30" stroke="var(--color-cyan)" strokeWidth="1.5" className="origin-center [transform-box:fill-box] motion-safe:animate-ping-soft" />
          <circle cx="156" cy="126" r="9" stroke="#fff" strokeWidth="3" />
          <path d="M162 120 172 110" stroke="var(--color-orange)" strokeWidth="3" strokeLinecap="round" />
        </>
      ) : null}

      {kind === "growth" ? (
        <>
          {/* Steps that rise, with the line of results over them */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={48 + i * 40} y={178 - (22 + i * 22)} width="24" height={22 + i * 22} rx="6" fill={i === 5 ? "var(--color-blue)" : "currentColor"} fillOpacity={i === 5 ? 1 : 0.1 + i * 0.03} />
          ))}
          <path d="M40 178h248" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" />
          <path d="M52 150 100 132 140 112 180 96 220 66 268 38" stroke="var(--color-orange)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M244 36h26v26" stroke="var(--color-orange)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {[[100, 132], [180, 96]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="5" fill="#fff" stroke="var(--color-orange)" strokeWidth="2.5" />)}
          <rect x="44" y="194" width="92" height="6" rx="3" fill="currentColor" fillOpacity="0.14" />
          <rect x="144" y="194" width="52" height="6" rx="3" fill="var(--color-cyan)" fillOpacity="0.5" />
        </>
      ) : null}

      {kind === "talk" ? (
        <>
          {/* A question and a clear answer */}
          <rect x="40" y="46" width="170" height="62" rx="20" fill="#fff" />
          <path d="M64 108v18l20-18" fill="#fff" />
          <rect x="62" y="66" width="104" height="6" rx="3" fill="currentColor" fillOpacity="0.3" />
          <rect x="62" y="82" width="66" height="6" rx="3" fill="currentColor" fillOpacity="0.16" />
          <circle cx="188" cy="77" r="11" fill="var(--color-orange)" fillOpacity="0.16" />
          <path d="M184.500 73.500a3.500 3.500 0 1 1 5 3.200c-1 .500-1.500 1-1.500 2.300M188 83.200v.300" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" />
          <rect x="106" y="128" width="176" height="70" rx="20" fill="var(--color-navy)" />
          <path d="M258 198v18l-20-18" fill="var(--color-navy)" />
          <rect x="128" y="148" width="118" height="6" rx="3" fill="#fff" fillOpacity="0.85" />
          <rect x="128" y="164" width="132" height="6" rx="3" fill="#fff" fillOpacity="0.4" />
          <rect x="128" y="180" width="74" height="6" rx="3" fill="var(--color-cyan)" />
          <circle cx="60" cy="170" r="5" fill="var(--color-blue)" className="motion-safe:animate-ping-soft origin-center [transform-box:fill-box]" />
          <circle cx="60" cy="170" r="5" fill="var(--color-blue)" />
        </>
      ) : null}
    </svg>
  );
}
