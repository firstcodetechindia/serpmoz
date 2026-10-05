import { ArrowRight, Check, FileText, Megaphone, MousePointerClick, Search, Share2, Sparkles, TrendingUp, type LucideIcon } from "lucide-react";
import { Photo } from "@/components/ui/photo";
import { photos } from "@/data/images";
import { cn } from "@/lib/utils";

const sources: { name: string; signal: string; icon: LucideIcon; tone: string }[] = [
  { name: "Search", signal: "Ranking for buying terms", icon: Search, tone: "bg-blue text-white" },
  { name: "AI Search", signal: "Cited in the answer", icon: Sparkles, tone: "bg-cyan text-navy" },
  { name: "Content", signal: "Guide published", icon: FileText, tone: "bg-white text-navy" },
  { name: "Paid Media", signal: "Campaign live", icon: Megaphone, tone: "bg-orange text-navy" },
  { name: "Social", signal: "Reel and post out", icon: Share2, tone: "bg-white text-navy" },
];

/** Five channels converge on the website. Drawn in a stretchable box so it follows the column height. */
function Converge() {
  return (
    <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="hidden h-full w-full sm:block">
      {sources.map((s, i) => {
        const y = 10 + i * 20;
        const d = `M0,${y} C55,${y} 45,50 100,50`;
        return (
          <g key={s.name}>
            <path d={d} fill="none" stroke="#fff" strokeOpacity="0.16" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <path
              d={d}
              fill="none"
              stroke={i === 3 ? "var(--color-orange)" : "var(--color-cyan)"}
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeDasharray="4 26"
              vectorEffect="non-scaling-stroke"
              className="motion-safe:animate-dash"
              style={{ animationDuration: `${2 + i * 0.35}s` }}
            />
          </g>
        );
      })}
    </svg>
  );
}

function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("label-mono text-[0.5625rem]", className)}>{children}</span>;
}

/**
 * The growth ecosystem: channels bring people to the website, the website
 * converts them, and the enquiry becomes revenue. An illustration of how the
 * work connects. No figures, no client data.
 */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="How growth connects: search, AI search, content, paid media and social bring buyers to your website, where they convert and become revenue."
      className={cn("relative", className)}
    >
      <div aria-hidden className="grid grid-cols-1 gap-y-4 sm:grid-cols-[minmax(0,10.5rem)_2.75rem_minmax(0,1fr)]">
        {/* Channels */}
        <ul className="flex flex-wrap gap-2 sm:grid sm:grid-rows-5 sm:gap-2.5">
          {sources.map((s, i) => (
            <li
              key={s.name}
              className="flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.06] py-1.5 pr-3.5 pl-1.5 backdrop-blur-sm sm:rounded-2xl sm:py-2 sm:pl-2 motion-safe:animate-float-slow"
              style={{ animationDelay: `${i * -1.3}s` }}
            >
              <span className={cn("flex size-7 shrink-0 items-center justify-center rounded-full sm:size-8", s.tone)}>
                <s.icon className="size-3.5 sm:size-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.8125rem] leading-tight font-semibold text-white">{s.name}</span>
                <span className="hidden truncate text-[0.6875rem] leading-tight text-white/55 sm:block">{s.signal}</span>
              </span>
            </li>
          ))}
        </ul>

        <Converge />

        {/* Website */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_40px_90px_-30px_rgb(0_0_0/0.75)]">
            <div className="flex h-9 items-center gap-3 border-b border-line bg-canvas px-3.5">
              <span className="flex gap-1.5">
                <i className="size-2 rounded-full bg-line-strong" />
                <i className="size-2 rounded-full bg-line-strong" />
                <i className="size-2 rounded-full bg-line-strong" />
              </span>
              <span className="flex h-5 flex-1 items-center rounded-full bg-white px-2.5 font-mono text-[0.625rem] text-muted">yourbusiness.com</span>
              <Tag className="text-blue-ink">Website</Tag>
            </div>
            <div className="relative">
              <Photo photo={photos.teamOffice} sizes="(min-width: 1024px) 380px, 90vw" priority decorative wash="strong" className="aspect-[16/10] sm:aspect-[16/9]" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <span className="block h-2.5 w-3/5 rounded-full bg-white/90" />
                <span className="mt-2 block h-2.5 w-2/5 rounded-full bg-white/55" />
                <span className="mt-3.5 inline-flex h-7 items-center gap-1.5 rounded-full bg-orange px-3.5 text-[0.6875rem] font-semibold text-navy">
                  Book a consultation <ArrowRight className="size-3" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2.5 p-3.5 sm:p-4">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg border border-line p-2.5">
                  <span className={cn("block size-5 rounded-md", i === 1 ? "bg-cyan-wash" : "bg-blue-wash")} />
                  <span className="mt-2 block h-1.5 w-4/5 rounded-full bg-line-strong" />
                  <span className="mt-1.5 block h-1.5 w-3/5 rounded-full bg-line" />
                </div>
              ))}
            </div>
          </div>

          {/* What an AI answer looks like when you are in it */}
          <div className="absolute -top-6 -right-2 hidden w-48 rounded-2xl border border-white/15 bg-navy-soft/95 p-3 shadow-[0_24px_48px_-20px_rgb(0_0_0/0.7)] backdrop-blur-md motion-safe:animate-float md:block xl:-right-8">
            <Tag className="flex items-center gap-1.5 text-cyan"><Sparkles className="size-3" /> AI answer</Tag>
            <span className="mt-2.5 block h-1.5 w-full rounded-full bg-white/25" />
            <span className="mt-1.5 block h-1.5 w-4/5 rounded-full bg-white/25" />
            <span className="mt-2.5 inline-flex items-center gap-1 rounded-full bg-cyan/15 px-2 py-1 font-mono text-[0.5625rem] text-cyan">
              Source · yourbusiness.com
            </span>
          </div>
        </div>
      </div>

      {/* Conversion and revenue */}
      <div aria-hidden className="relative z-10 mt-4 grid grid-cols-2 gap-3 sm:-mt-10 sm:ml-auto sm:w-[calc(100%-14.5rem)] sm:gap-4">
        <div className="rounded-2xl border border-line bg-white p-3.5 text-ink shadow-[0_30px_60px_-28px_rgb(0_0_0/0.6)] sm:p-4">
          <Tag className="flex items-center gap-1.5 text-blue-ink"><MousePointerClick className="size-3" /> Conversion</Tag>
          <p className="mt-2.5 text-sm leading-tight font-semibold text-navy">New enquiry received</p>
          <ul className="mt-2.5 space-y-1.5">
            {["Source recorded", "Qualified", "Routed to sales"].map((t) => (
              <li key={t} className="flex items-center gap-1.5 text-[0.6875rem] text-muted">
                <span className="flex size-3.5 items-center justify-center rounded-full bg-success/15 text-success-ink"><Check className="size-2.5" strokeWidth={3} /></span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy-soft p-3.5 text-white shadow-[0_30px_60px_-28px_rgb(0_0_0/0.6)] sm:p-4">
          <Tag className="flex items-center gap-1.5 text-orange"><TrendingUp className="size-3" /> Revenue</Tag>
          <p className="mt-2.5 text-sm leading-tight font-semibold">Traced back to its source</p>
          <svg viewBox="0 0 120 44" preserveAspectRatio="none" className="mt-2 h-12 w-full">
            <defs>
              <linearGradient id="hv-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-orange)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--color-orange)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,38 C20,36 28,30 44,29 S70,20 84,15 S108,6 120,4 L120,44 L0,44 Z" fill="url(#hv-area)" />
            <path d="M0,38 C20,36 28,30 44,29 S70,20 84,15 S108,6 120,4" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </svg>
          <p className="font-mono text-[0.5625rem] text-white/45">Illustration, not client data</p>
        </div>
      </div>
    </div>
  );
}
