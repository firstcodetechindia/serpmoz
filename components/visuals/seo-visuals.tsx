import { Check, MapPin, Search, Sparkles, Star } from "lucide-react";
import { Photo } from "@/components/ui/photo";
import { photos } from "@/data/images";
import { cn } from "@/lib/utils";

const health = ["Crawlable", "Indexed", "Fast on mobile", "Structured data"];

/**
 * SEO hero: a results page with the places a brand can appear (AI answer,
 * organic result with sitelinks, map listing) and the technical checks behind
 * it. A drawing of the format; it shows no real query data.
 */
export function SeoHeroVisual({ className }: { className?: string }) {
  return (
    <div role="img" aria-label="A search results page showing a brand in the AI answer, the top organic result and the map listing, beside a list of technical checks that passed." className={cn("relative pb-8 sm:pb-12", className)}>
      <div aria-hidden className="glow absolute inset-x-4 top-8 bottom-8 rounded-full bg-blue/30" />
      <Photo photo={photos.analystScreens} sizes="(min-width: 1024px) 420px, 90vw" priority decorative wash="strong" className="relative ml-auto aspect-[5/4] w-[78%] rounded-[1.75rem] border border-white/10 shadow-[0_40px_90px_-30px_rgb(0_0_0/0.75)]" />

      {/* Results page */}
      <div aria-hidden className="absolute top-8 left-0 w-[80%] overflow-hidden rounded-2xl border border-line bg-white text-ink shadow-[0_40px_80px_-30px_rgb(0_0_0/0.7)] sm:w-[72%]">
        <div className="flex items-center gap-2 border-b border-line bg-canvas px-3.5 py-2.5">
          <Search className="size-3.5 text-muted" />
          <span className="flex-1 truncate font-mono text-[0.6875rem] text-ink">the service your customers search for</span>
        </div>
        <div className="space-y-2.5 p-3.5">
          <div className="rounded-xl bg-cyan-wash/80 p-3">
            <p className="label-mono flex items-center gap-1.5 text-[0.5625rem] text-navy"><Sparkles className="size-3" /> AI overview</p>
            <p className="mt-1.5 text-[0.75rem] leading-snug">Several providers are recommended, including <mark className="rounded bg-cyan/30 px-1 font-semibold text-navy">Your brand</mark>.</p>
          </div>
          <div className="rounded-xl border-2 border-blue/40 bg-blue-wash/60 p-3">
            <p className="font-mono text-[0.5625rem] text-muted">yourbrand.com › services</p>
            <p className="mt-0.5 text-[0.8125rem] font-semibold text-blue-ink">Your service page, written for this search</p>
            <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[0.625rem] text-blue-ink/80"><span>Pricing</span><span>How it works</span><span>Case studies</span></p>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-line p-3">
            <p className="flex items-center gap-2 text-[0.75rem] font-medium"><MapPin className="size-3.5 text-orange" /> Your brand, nearest location</p>
            <span className="flex items-center gap-0.5 text-orange"><Star className="size-3 fill-current" /><Star className="size-3 fill-current" /><Star className="size-3 fill-current" /><Star className="size-3 fill-current" /><Star className="size-3 fill-current" /></span>
          </div>
          <div className="rounded-xl border border-line p-3 opacity-60">
            <span className="block h-1.5 w-2/5 rounded-full bg-line-strong" />
            <span className="mt-1.5 block h-1.5 w-4/5 rounded-full bg-line" />
          </div>
        </div>
      </div>

      {/* What sits underneath */}
      <div aria-hidden className="absolute right-0 bottom-0 w-44 rounded-2xl border border-white/15 bg-navy-soft p-3.5 text-white shadow-[0_30px_60px_-28px_rgb(0_0_0/0.7)] motion-safe:animate-float-slow sm:w-48">
        <p className="label-mono text-[0.5625rem] text-cyan">Technical foundations</p>
        <ul className="mt-2.5 space-y-2">
          {health.map((h) => (
            <li key={h} className="flex items-center gap-2 text-[0.75rem]">
              <span className="flex size-4 items-center justify-center rounded-full bg-success/25 text-[#5fe08a]"><Check className="size-2.5" strokeWidth={3} /></span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
