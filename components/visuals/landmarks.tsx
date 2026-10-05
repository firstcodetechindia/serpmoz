import { cn } from "@/lib/utils";

/**
 * One line-drawn landmark per market, on a shared 100 × 140 grid with the
 * ground at the bottom edge. Original drawings; `accent` marks the part that
 * lights up when the market is selected.
 */
const drawings: Record<string, { label: string; lines: string; accent: string; extra?: React.ReactNode }> = {
  india: {
    label: "Taj Mahal",
    lines: "M4,118 H96 M8,140 V118 M92,140 V118 M30,118 V86 H70 V118 M43,118 V100 Q50,90 57,100 V118 M16,118 V104 H28 V118 M72,118 V104 H84 V118 M16,104 Q22,92 28,104 M72,104 Q78,92 84,104 M7,118 V70 M13,118 V70 M5,70 H15 M87,118 V70 M93,118 V70 M85,70 H95 M10,70 V60 M90,70 V60",
    accent: "M36,86 Q33,62 50,53 Q67,62 64,86 Z M50,53 V42",
  },
  usa: {
    label: "Statue of Liberty",
    lines: "M34,140 V112 H66 V140 M38,112 V98 H62 V112 M42,98 L46,58 H56 L60,98 M46,46 L43,40 M49,44 L48,37 M53,44 L54,37 M56,46 L59,40 M55,60 L64,34 M61,34 H67 M46,66 L40,76 M36,73 l7,-2 l2,9 l-7,2 Z",
    accent: "M64,34 Q59,26 64,18 Q69,26 64,34 Z",
    extra: <circle cx="51" cy="50" r="5" />,
  },
  uk: {
    label: "Elizabeth Tower",
    lines: "M38,140 V52 H62 V140 M35,52 V30 H65 V52 Z M35,30 L50,8 L65,30 M50,8 V2 M44,60 V132 M50,60 V132 M56,60 V132 M62,104 H96 V140 M70,104 V96 M80,104 V96 M90,104 V96 M50,41 V36 M50,41 H54",
    accent: "M57,41 A7,7 0 1 1 43,41 A7,7 0 1 1 57,41 Z",
  },
  uae: {
    label: "Burj Khalifa",
    lines: "M47,22 H53 V44 H57 V70 H61 V96 H66 V118 H70 V140 M47,22 V44 H43 V70 H39 V96 H34 V118 H30 V140 M50,22 V140",
    accent: "M50,2 V22 M48,12 H52",
  },
  canada: {
    label: "CN Tower",
    lines: "M46,140 L48,58 M54,140 L52,58 M40,140 L46,120 M60,140 L54,120 M47,46 V34 H53 V46 M50,34 V4",
    accent: "M38,52 A12,6 0 1 0 62,52 A12,6 0 1 0 38,52 Z",
  },
  australia: {
    label: "Sydney Opera House",
    lines: "M6,140 V128 H94 V140 M14,128 Q18,92 44,84 Q36,108 40,128 M58,128 Q66,96 90,92 Q80,112 84,128",
    accent: "M34,128 Q40,84 70,72 Q58,104 62,128 Z",
  },
  singapore: {
    label: "Marina Bay Sands",
    lines: "M16,140 L20,60 H32 L34,140 M42,140 L44,60 H56 L58,140 M66,140 L68,60 H80 L84,140 M24,74 V132 M50,74 V132 M75,74 V132",
    accent: "M6,58 Q50,44 96,54 V61 H6 Z",
  },
  europe: {
    label: "Eiffel Tower",
    lines: "M22,140 Q40,110 44,84 M78,140 Q60,110 56,84 M32,140 Q50,112 68,140 M34,104 H66 M42,84 H58 M44,84 Q48,50 49,20 M56,84 Q52,50 51,20 M47,44 H53 M46,62 H54",
    accent: "M50,20 V4 M48,20 H52",
  },
};

export const landmarkLabel = (slug: string) => drawings[slug]?.label ?? "";

export function Landmark({ slug, active, className }: { slug: string; active?: boolean; className?: string }) {
  const d = drawings[slug];
  if (!d) return null;
  return (
    <svg aria-hidden viewBox="0 0 100 140" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("overflow-visible", className)}>
      <g stroke="currentColor">
        <path d={d.lines} />
        {d.extra}
      </g>
      <path
        d={d.accent}
        stroke={active ? "var(--color-orange)" : "currentColor"}
        fill={active ? "var(--color-orange)" : "none"}
        fillOpacity={active ? 0.9 : 0}
        className="transition-all duration-500"
      />
    </svg>
  );
}
