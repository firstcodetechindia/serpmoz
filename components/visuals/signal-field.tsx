import { cn } from "@/lib/utils";

/**
 * Decorative backdrop for dark stages: search "rings" radiating from a focal
 * point, with signal lines travelling towards it.
 */
export function SignalField({ className, cx = 62, cy = 46 }: { className?: string; cx?: number; cy?: number }) {
  const lines = [
    `M-5,18 C22,20 40,34 ${cx},${cy}`,
    `M-5,58 C18,62 38,54 ${cx},${cy}`,
    `M-5,92 C24,88 44,68 ${cx},${cy}`,
    `M105,8 C92,18 78,30 ${cx},${cy}`,
    `M105,88 C94,78 80,62 ${cx},${cy}`,
    `M48,-5 C50,12 56,30 ${cx},${cy}`,
  ];
  return (
    <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className={cn("pointer-events-none absolute inset-0 size-full", className)}>
      <defs>
        <radialGradient id="sf-glow" cx={`${cx}%`} cy={`${cy}%`} r="46%">
          <stop offset="0%" stopColor="#1677ff" stopOpacity="0.38" />
          <stop offset="55%" stopColor="#00b8d9" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#00b8d9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#sf-glow)" />
      {[14, 24, 35, 47].map((r, i) => (
        <ellipse key={r} cx={cx} cy={cy} rx={r} ry={r * 1.25} fill="none" stroke="#fff" strokeOpacity={0.1 - i * 0.018} strokeWidth="1" vectorEffect="non-scaling-stroke" strokeDasharray={i % 2 ? "2 6" : undefined} />
      ))}
      {lines.map((d, i) => (
        <g key={d}>
          <path d={d} fill="none" stroke="#fff" strokeOpacity="0.07" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path
            d={d}
            fill="none"
            stroke={i % 3 === 0 ? "#ff7a00" : "#00b8d9"}
            strokeOpacity="0.7"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeDasharray="3 21"
            vectorEffect="non-scaling-stroke"
            className="motion-safe:animate-dash"
            style={{ animationDuration: `${2.6 + i * 0.5}s` }}
          />
        </g>
      ))}
    </svg>
  );
}
