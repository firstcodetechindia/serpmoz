import { worldMap } from "@/data/world-map";
import { cn } from "@/lib/utils";

const { width: W, height: H, points: P } = worldMap;

type Label = { city: string; text?: string; dx: number; dy: number; anchor?: "start" | "end" | "middle"; hub?: boolean };

/* Label positions are nudged by hand so that nothing collides at any width. */
const labels: Label[] = [
  { city: "Toronto", dx: -8, dy: -8, anchor: "end" },
  { city: "New York", dx: 8, dy: 12, anchor: "start" },
  { city: "London", dx: 0, dy: -12, anchor: "middle" },
  { city: "Dubai", dx: -8, dy: 14, anchor: "end" },
  { city: "Delhi", text: "Delhi NCR", dx: 10, dy: -8, anchor: "start", hub: true },
  { city: "Mumbai", dx: -8, dy: 12, anchor: "end" },
  { city: "Bangalore", dx: 8, dy: 14, anchor: "start" },
  { city: "Singapore", dx: 10, dy: 4, anchor: "start" },
  { city: "Sydney", dx: -10, dy: 4, anchor: "end" },
];

const minor = ["Gurgaon", "Noida", "Jaipur", "Pune", "Hyderabad"];

const arcs: [string, string][] = [
  ["Delhi", "London"], ["Delhi", "Dubai"], ["Delhi", "Singapore"], ["London", "New York"], ["London", "Toronto"],
  ["Dubai", "London"], ["Singapore", "Sydney"], ["Mumbai", "Dubai"], ["Delhi", "Mumbai"], ["Mumbai", "Bangalore"],
];

function arc(a: [number, number], b: [number, number]) {
  const mx = (a[0] + b[0]) / 2;
  const my = (a[1] + b[1]) / 2;
  const dist = Math.hypot(b[0] - a[0], b[1] - a[1]);
  return `M${a[0]},${a[1]} Q${mx},${my - dist * 0.28} ${b[0]},${b[1]}`;
}

/**
 * Dotted world map with the cities we cover and the routes between them.
 * Geometry comes from Natural Earth via data/world-map.ts; nothing is a raster image.
 */
export function WorldMap({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="World map showing the markets SERPMOZ works across: India, the UAE, the UK, the USA, Canada, Singapore, Australia and Europe." className={cn("h-auto w-full min-w-[40rem] overflow-visible sm:min-w-0", className)}>
      <path d={worldMap.dots} fill="none" stroke={dark ? "rgb(255 255 255 / 0.22)" : "rgb(11 31 58 / 0.2)"} strokeWidth="3.2" strokeLinecap="round" />

      {arcs.map(([from, to], i) => {
        const d = arc(P[from], P[to]);
        return (
          <g key={`${from}-${to}`}>
            <path d={d} fill="none" stroke="var(--color-blue)" strokeOpacity="0.35" strokeWidth="1.2" />
            <path d={d} fill="none" stroke={i % 3 === 0 ? "var(--color-orange)" : "var(--color-cyan)"} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="5 19" className="motion-safe:animate-dash" style={{ animationDuration: `${2.2 + (i % 5) * 0.4}s` }} />
          </g>
        );
      })}

      {minor.map((c) => (
        <circle key={c} cx={P[c][0]} cy={P[c][1]} r="2.6" fill="var(--color-blue)" />
      ))}

      {labels.map((l) => {
        const [x, y] = P[l.city];
        return (
          <g key={l.city}>
            <circle cx={x} cy={y} r="9" fill="var(--color-blue)" fillOpacity="0.16" />
            <circle cx={x} cy={y} r={l.hub ? 5 : 4} fill={l.hub ? "var(--color-orange)" : "var(--color-blue)"} stroke={dark ? "var(--color-navy)" : "#fff"} strokeWidth="1.5" />
            <text
              x={x + l.dx}
              y={y + l.dy}
              textAnchor={l.anchor ?? "start"}
              style={{ font: "600 12.5px var(--font-sans)", letterSpacing: "-0.01em", fill: dark ? "#fff" : "var(--color-navy)", paintOrder: "stroke", stroke: dark ? "var(--color-navy-deep)" : "var(--color-canvas)", strokeWidth: 4, strokeLinejoin: "round" }}
            >
              {l.text ?? l.city}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
