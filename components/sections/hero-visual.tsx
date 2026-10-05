import Link from "next/link";
import { ArrowUpRight, Globe, LineChart, MapPin, MousePointerClick, PenLine, Search, Sparkles, Workflow, type LucideIcon } from "lucide-react";
import { Photo } from "@/components/ui/photo";
import { promise } from "@/data/growth";
import { photos } from "@/data/images";
import { cn } from "@/lib/utils";

export const serviceIcons: Record<string, LucideIcon> = {
  "/seo-services/": Search,
  "/ai-seo-services/": Sparkles,
  "/local-seo-services/": MapPin,
  "/ppc-management/": MousePointerClick,
  "/social-media-marketing/": PenLine,
  "/cro/": LineChart,
  "/marketing-automation/": Workflow,
  "/web-development/": Globe,
};

const lead = [
  { label: "SEO & Search", href: "/seo-services/" },
  { label: "AI Search", href: "/ai-seo-services/" },
  { label: "Performance Marketing", href: "/ppc-management/" },
  { label: "Social & Content", href: "/social-media-marketing/" },
  { label: "CRO & Conversion", href: "/cro/" },
  { label: "Web & Digital", href: "/web-development/" },
];

/**
 * Hero composition for a services company: the people doing the work, with
 * what they do and what it is for layered over the photograph.
 */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <Photo
        photo={photos.teamOffice}
        sizes="(min-width: 1024px) 560px, 100vw"
        priority
        wash="soft"
        className="aspect-[4/3] rounded-[1.5rem] shadow-[0_40px_90px_-30px_rgb(0_0_0/0.7)] sm:aspect-[16/11] lg:ml-16 lg:aspect-[4/5] xl:aspect-[5/6]"
      />

      {/* What we do */}
      <nav
        aria-label="Core services"
        className="relative z-10 -mt-10 mx-3 rounded-2xl border border-white/60 bg-white p-4 text-ink shadow-[0_30px_70px_-28px_rgb(0_0_0/0.6)] sm:mx-6 lg:absolute lg:bottom-10 lg:left-0 lg:mx-0 lg:mt-0 lg:w-[17.5rem]"
      >
        <p className="label-mono px-1 text-muted">What we do</p>
        <ul className="mt-2 grid grid-cols-2 gap-x-2 lg:grid-cols-1">
          {lead.map((s) => {
            const Icon = serviceIcons[s.href];
            return (
              <li key={s.href}>
                <Link href={s.href} className="group flex items-center gap-2.5 rounded-lg px-1 py-2 text-sm font-medium transition-colors hover:bg-canvas">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-wash text-blue-ink transition-colors group-hover:bg-navy group-hover:text-white">
                    <Icon aria-hidden className="size-3.5" />
                  </span>
                  <span className="min-w-0 flex-1 truncate">{s.label}</span>
                  <ArrowUpRight aria-hidden className="hidden size-3.5 text-line-strong transition-colors group-hover:text-navy lg:block" />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* What it is for */}
      <div className="absolute top-5 right-4 hidden rounded-2xl border border-white/12 bg-navy-soft/90 p-4 text-white shadow-[0_24px_48px_-20px_rgb(0_0_0/0.7)] backdrop-blur-md motion-safe:animate-float-slow sm:block lg:-right-4 xl:-right-10">
        <p className="label-mono text-white/60">What it is for</p>
        <ol className="mt-3 space-y-2.5">
          {promise.map((p, i) => {
            const last = i === promise.length - 1;
            return (
              <li key={p} className="flex items-center gap-2.5 text-sm">
                <span aria-hidden className={cn("size-2 rounded-full", last ? "bg-orange ring-4 ring-orange/25" : "border border-cyan")} />
                <span className={last ? "font-semibold" : "text-white/80"}>{p}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
