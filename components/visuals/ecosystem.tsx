import { Globe, MapPin, MessagesSquare, Search, Share2, Sparkles, Store, type LucideIcon } from "lucide-react";
import { LogoMark } from "@/components/navigation/logo";
import { searchSurfaces } from "@/data/growth";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  Google: Search,
  "AI Search": Sparkles,
  Maps: MapPin,
  Social: Share2,
  Communities: MessagesSquare,
  Marketplaces: Store,
  Websites: Globe,
};

const R = 40; // node orbit radius, % of the stage
const nodes = searchSurfaces.map((s, i) => {
  const a = ((-90 + (i * 360) / searchSurfaces.length) * Math.PI) / 180;
  return { ...s, x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
});

/**
 * The discovery ecosystem: seven places a buyer can find a brand, wired to one
 * centre. A square stage on tablet and up; a connected list on phones.
 */
export function Ecosystem({ className }: { className?: string }) {
  return (
    <div className={className}>
      {/* Orbit */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[40rem] sm:block">
        <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 size-full">
          <defs>
            <radialGradient id="eco-glow">
              <stop offset="0%" stopColor="var(--color-blue)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="var(--color-blue)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="46" fill="url(#eco-glow)" />
          <circle cx="50" cy="50" r="22" fill="none" stroke="var(--color-line-strong)" strokeWidth="0.25" />
          <circle cx="50" cy="50" r={R} fill="none" stroke="var(--color-line-strong)" strokeWidth="0.25" strokeDasharray="0.6 1.6" />
          <circle cx="50" cy="50" r="49" fill="none" stroke="var(--color-line)" strokeWidth="0.25" />
          {nodes.map((n, i) => (
            <g key={n.name}>
              <line x1="50" y1="50" x2={n.x} y2={n.y} stroke="var(--color-line-strong)" strokeWidth="0.25" />
              <line
                x1={n.x}
                y1={n.y}
                x2="50"
                y2="50"
                stroke={i % 3 === 1 ? "var(--color-cyan)" : "var(--color-blue)"}
                strokeWidth="0.55"
                strokeLinecap="round"
                strokeDasharray="1.2 22.8"
                className="motion-safe:animate-dash"
                style={{ animationDuration: `${2.4 + (i % 4) * 0.45}s` }}
              />
            </g>
          ))}
        </svg>

        <div className="absolute top-1/2 left-1/2 flex size-[26%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-navy text-white shadow-float">
          <span aria-hidden className="absolute inset-0 rounded-full border border-blue motion-safe:animate-ping-soft" />
          <LogoMark className="size-8 text-white md:size-10" />
          <span className="mt-1.5 text-[0.6875rem] font-semibold tracking-[0.16em] md:text-xs">SERPMOZ</span>
        </div>

        <ul>
          {nodes.map((n) => {
            const Icon = icons[n.name] ?? Globe;
            return (
              <li
                key={n.name}
                className="group absolute w-[9.5rem] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-line bg-surface p-3 shadow-soft transition-shadow duration-300 hover:shadow-float md:w-44"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-wash text-blue-ink transition-colors group-hover:bg-navy group-hover:text-white">
                    <Icon aria-hidden className="size-4" />
                  </span>
                  <span className="text-[0.9375rem] font-semibold tracking-[-0.015em] text-navy">{n.name}</span>
                </div>
                <p className="mt-2 text-xs leading-snug text-muted">{n.detail}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Phones: same structure, read top to bottom */}
      <div className="sm:hidden">
        <div className="mx-auto flex size-28 flex-col items-center justify-center rounded-full bg-navy text-white shadow-float">
          <LogoMark className="size-8 text-white" />
          <span className="mt-1.5 text-[0.6875rem] font-semibold tracking-[0.16em]">SERPMOZ</span>
        </div>
        <span aria-hidden className="mx-auto block h-6 w-px bg-line-strong" />
        <ul className="grid grid-cols-2 gap-2.5">
          {nodes.map((n, i) => {
            const Icon = icons[n.name] ?? Globe;
            return (
              <li key={n.name} className={cn("rounded-2xl border border-line bg-surface p-3", i === nodes.length - 1 && "col-span-2")}>
                <div className="flex items-center gap-2">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-wash text-blue-ink">
                    <Icon aria-hidden className="size-3.5" />
                  </span>
                  <span className="text-sm font-semibold text-navy">{n.name}</span>
                </div>
                <p className="mt-1.5 text-xs leading-snug text-muted">{n.detail}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
