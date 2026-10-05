import { BadgeCheck, Bot, Check, FileSearch, Gauge, MapPin, MousePointerClick, Sparkles, Target, UserRoundCheck, Workflow } from "lucide-react";
import { HeroScene } from "@/components/sections/hero-scene";
import { HeroSlider, type HeroSlide } from "@/components/sections/hero-slider";
import { HeroVisual } from "@/components/sections/hero-visual";
import { CapabilityVisual } from "@/components/visuals/capability-visual";
import { SignalField } from "@/components/visuals/signal-field";
import { platforms } from "@/data/growth";
import { photos } from "@/data/images";
import { cta } from "@/lib/config/site";

const difference = [
  { icon: Target, title: "Strategy first", body: "Nothing is produced before it has been prioritised." },
  { icon: Bot, title: "AI accelerated", body: "Research and production in hours, not weeks." },
  { icon: UserRoundCheck, title: "Expert approved", body: "A specialist signs off everything that ships." },
];

const slides: HeroSlide[] = [
  {
    key: "who",
    label: "Who we are",
    eyebrow: "AI-Powered Digital Growth Company",
    title: ["AI Can Do the Work.", "Experts Know What Work Matters."],
    body: "SERPMOZ combines AI-powered execution, human expertise and growth strategy to turn digital visibility into qualified demand, customers and measurable revenue.",
    cta: { label: cta.audit.label, href: cta.audit.href },
    more: { label: "Explore Our Services", href: "#services" },
    visual: <HeroVisual />,
  },
  {
    key: "search",
    label: "Search & AI",
    eyebrow: "SEO · AI Search · Local",
    title: ["Be the Answer,", "Wherever Customers Search."],
    body: "Google, AI assistants, maps and marketplaces now share the buying journey. We make sure your brand is found, named and trusted in each of them.",
    cta: { label: "Explore Search & AI", href: "/seo-services/" },
    more: { label: "How AI Search Works", href: "/ai-seo-services/" },
    visual: (
      <HeroScene photo={photos.analystScreens} chips={[{ icon: Sparkles, text: "Cited in AI answers" }, { icon: MapPin, text: "Visible on the map" }]}>
        <CapabilityVisual category="search-ai" />
      </HeroScene>
    ),
  },
  {
    key: "performance",
    label: "Paid media",
    eyebrow: "Google Ads · Meta · LinkedIn",
    title: ["Pay for Customers,", "Not for Clicks."],
    body: "Paid campaigns managed against qualified leads, acquisition cost and return, with the wasted spend found and removed first.",
    cta: { label: "Explore Performance Marketing", href: "/ppc-management/" },
    more: { label: "Lead Generation", href: "/lead-generation/" },
    visual: (
      <HeroScene flip photo={photos.analystDesk} chips={[{ icon: MousePointerClick, text: "Qualified leads tracked" }, { icon: Gauge, text: "Spend tied to return" }]}>
        <CapabilityVisual category="performance" />
      </HeroScene>
    ),
  },
  {
    key: "different",
    label: "Why we differ",
    eyebrow: "What makes SERPMOZ different",
    title: ["Others Sell Activity.", "We Are Accountable for Growth."],
    body: "Most agencies report on what they did. We start from what the business needs, decide what is worth doing, and show how the work connects to revenue.",
    cta: { label: "See Our Methodology", href: "/methodology/" },
    more: { label: "About SERPMOZ", href: "/about/" },
    visual: (
      <HeroScene photo={photos.teamMeeting} chips={[{ icon: BadgeCheck, text: "One accountable team" }, { icon: FileSearch, text: "Every figure sourced" }]}>
        <div className="rounded-2xl border border-line bg-white p-5 text-ink shadow-[0_30px_60px_-28px_rgb(0_0_0/0.6)]">
          <p className="label-mono text-[0.625rem] text-blue-ink">How we work</p>
          <ul className="mt-3 space-y-3.5">
            {difference.map((d) => (
              <li key={d.title} className="flex gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-wash text-blue-ink"><d.icon className="size-4" /></span>
                <span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-navy">{d.title} <Check className="size-3.5 text-success" strokeWidth={3} /></span>
                  <span className="mt-0.5 block text-xs leading-snug text-muted">{d.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </HeroScene>
    ),
  },
  {
    key: "web",
    label: "Web & conversion",
    eyebrow: "Web · CRO · Automation",
    title: ["Turn Visits", "Into Revenue."],
    body: "Fast websites, tested landing pages and follow-up that answers in minutes, so the demand you earn does not leak away after the click.",
    cta: { label: "Explore Web & Digital", href: "/web-development/" },
    more: { label: "Conversion & Automation", href: "/cro/" },
    visual: (
      <HeroScene flip photo={photos.strategyWhiteboard} chips={[{ icon: Gauge, text: "Built for speed" }, { icon: Workflow, text: "Follow-up automated" }]}>
        <CapabilityVisual category="conversion-automation" />
      </HeroScene>
    ),
  },
];

export function Hero() {
  return (
    <section data-hero="dark" aria-labelledby="hero-title" className="stage relative overflow-hidden text-white">
      <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black_10%,transparent_75%)]" />
      <SignalField className="hidden lg:block" cx={70} cy={42} />
      <div aria-hidden className="glow absolute -bottom-40 -left-40 size-[32rem] rounded-full bg-blue/20" />

      <HeroSlider slides={slides} />

      {/* Platform strip: names only, with an explicit label so nothing reads as an endorsement */}
      <div className="relative border-t border-white/10 bg-navy-deep/40">
        <div className="shell flex flex-col gap-4 py-5 md:flex-row md:items-center md:gap-10">
          <p className="label-mono shrink-0 text-white/50">Platforms we work across</p>
          <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <ul className="flex w-max gap-10 motion-safe:animate-marquee" aria-label="Platforms we work across">
              {[...platforms, ...platforms].map((name, i) => (
                <li key={`${name}-${i}`} aria-hidden={i >= platforms.length} className="text-[0.9375rem] font-medium whitespace-nowrap text-white/65">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
