import { cn } from "@/lib/utils";

/** Small deterministic generator so each article gets its own, stable figure. */
function seeded(seed: string) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

const kinds = ["range", "matrix", "split", "flow", "bars", "paths"] as const;
const byCategory: Record<string, (typeof kinds)[number]> = {
  "ai-search": "range", seo: "matrix", "digital-growth": "flow", "paid-media": "bars", cro: "split", analytics: "paths",
};

/**
 * Cover art for a resource: an abstract research figure drawn from the piece's
 * own slug. Decorative, so it is hidden from assistive technology.
 */
export function ArticleCover({ slug, category, className, tone = "navy" }: { slug: string; category: string; className?: string; tone?: "navy" | "light" }) {
  const rnd = seeded(slug);
  const kind = byCategory[category] ?? kinds[Math.floor(rnd() * kinds.length)];
  const navy = tone === "navy";
  const ink = navy ? "#ffffff" : "var(--color-navy)";
  const soft = navy ? "rgb(255 255 255 / 0.16)" : "rgb(11 31 58 / 0.12)";

  let body: React.ReactNode = null;
  if (kind === "range") {
    // Repeated runs: a band of uncertainty with a median line
    const xs = Array.from({ length: 12 }, (_, i) => 30 + i * 31);
    const mid = xs.map((x, i) => [x, 150 - i * 6 - rnd() * 22] as const);
    body = (
      <>
        {mid.map(([x, y], i) => {
          const spread = 18 + rnd() * 26;
          return <line key={i} x1={x} x2={x} y1={y - spread} y2={y + spread} stroke="var(--color-cyan)" strokeOpacity="0.55" strokeWidth="9" strokeLinecap="round" />;
        })}
        <polyline points={mid.map((p) => p.join(",")).join(" ")} fill="none" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
        {mid.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3.5" fill={ink} />)}
      </>
    );
  } else if (kind === "matrix") {
    body = (
      <>
        <rect x="200" y="20" width="180" height="90" rx="6" fill="var(--color-blue)" fillOpacity="0.28" />
        <line x1="200" x2="200" y1="20" y2="200" stroke={soft} strokeWidth="1.5" />
        <line x1="20" x2="380" y1="110" y2="110" stroke={soft} strokeWidth="1.5" />
        {Array.from({ length: 22 }, (_, i) => {
          const x = 36 + rnd() * 330;
          const y = 34 + rnd() * 152;
          const hot = x > 200 && y < 110;
          return <circle key={i} cx={x} cy={y} r={hot ? 7 : 5} fill={hot ? "var(--color-orange)" : ink} fillOpacity={hot ? 1 : 0.45} />;
        })}
      </>
    );
  } else if (kind === "split") {
    const a = Array.from({ length: 7 }, () => 30 + rnd() * 50);
    const b = a.map((v) => v + 22 + rnd() * 34);
    body = (
      <>
        {a.map((v, i) => <rect key={`a${i}`} x={34 + i * 22} y={196 - v} width="13" height={v} rx="3" fill={ink} fillOpacity="0.3" />)}
        {b.map((v, i) => <rect key={`b${i}`} x={222 + i * 22} y={196 - v} width="13" height={v} rx="3" fill={i === b.length - 1 ? "var(--color-orange)" : "var(--color-cyan)"} />)}
        <line x1="204" x2="204" y1="24" y2="200" stroke={soft} strokeWidth="1.5" strokeDasharray="4 6" />
      </>
    );
  } else if (kind === "flow") {
    // A wide stream narrowing to one line: where the bottleneck sits
    body = (
      <>
        {Array.from({ length: 9 }, (_, i) => {
          const y0 = 30 + i * 20;
          return <path key={i} d={`M10,${y0} C140,${y0} 170,112 250,112 L390,112`} fill="none" stroke={i === 4 ? "var(--color-orange)" : ink} strokeOpacity={i === 4 ? 1 : 0.32} strokeWidth={i === 4 ? 3 : 1.5} />;
        })}
        <circle cx="250" cy="112" r="16" fill="none" stroke="var(--color-cyan)" strokeWidth="2" />
        <circle cx="250" cy="112" r="5" fill="var(--color-cyan)" />
      </>
    );
  } else if (kind === "bars") {
    const vals = Array.from({ length: 14 }, (_, i) => 40 + rnd() * 60 + i * 5);
    body = (
      <>
        {vals.map((v, i) => <rect key={i} x={24 + i * 26} y={198 - v} width="15" height={v} rx="3" fill={i > 9 ? "var(--color-cyan)" : ink} fillOpacity={i > 9 ? 1 : 0.3} />)}
        <path d="M24,120 C120,118 220,96 380,52" fill="none" stroke="var(--color-orange)" strokeWidth="2.5" strokeLinecap="round" />
      </>
    );
  } else {
    // Three routes to the same point
    body = (
      <>
        <path d="M20,40 C150,40 180,110 380,110" fill="none" stroke="var(--color-cyan)" strokeWidth="2.5" />
        <path d="M20,110 L380,110" fill="none" stroke={ink} strokeOpacity="0.5" strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" />
        <path d="M20,184 C150,184 200,110 380,110" fill="none" stroke="var(--color-blue)" strokeWidth="2.5" />
        {[40, 110, 184].map((y) => <circle key={y} cx="20" cy={y} r="6" fill={ink} />)}
        <circle cx="380" cy="110" r="10" fill="var(--color-orange)" />
      </>
    );
  }

  return (
    <div aria-hidden className={cn("relative overflow-hidden", navy ? "bg-navy" : "bg-blue-wash", className)}>
      {navy ? <div className="absolute -top-1/3 -right-1/4 size-[70%] rounded-full bg-blue/40 blur-3xl" /> : null}
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" className="relative size-full">
        {[55, 110, 165].map((y) => <line key={y} x1="0" x2="400" y1={y} y2={y} stroke={soft} strokeWidth="1" strokeDasharray="2 7" />)}
        {body}
      </svg>
    </div>
  );
}
