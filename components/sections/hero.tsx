import { HeroVisual } from "@/components/sections/hero-visual";
import { CtaLink } from "@/components/ui/cta-link";
import { SignalField } from "@/components/visuals/signal-field";
import { platforms } from "@/data/dashboard";
import { cta } from "@/lib/config/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="stage relative overflow-hidden text-white">
      <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black_10%,transparent_75%)]" />
      <SignalField className="hidden lg:block" cx={72} cy={50} />

      <div className="shell relative grid gap-x-8 gap-y-14 pt-32 pb-16 md:pt-40 lg:grid-cols-12 lg:items-center lg:pb-24">
        <div className="lg:col-span-6">
          <p className="label-mono flex items-center gap-3 text-white/60">
            <span className="size-1.5 rounded-full bg-orange" aria-hidden />
            AI-Powered Digital Growth Company
          </p>

          <h1 id="hero-title" className="mt-6 text-[clamp(2.5rem,1.4rem+3.4vw,3.75rem)] leading-[0.98] font-semibold tracking-[-0.04em]">
            <span className="block">AI Can Do the Work.</span>
            <span className="block text-white/55">Experts Know What Work Matters.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lead text-white/75">
            SERPMOZ combines AI-powered execution, human expertise and growth intelligence to turn digital visibility into
            qualified demand, customers and measurable revenue.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={cta.audit.href} variant="primary" size="lg" data-cta="hero-audit">
              {cta.audit.label}
            </CtaLink>
            <CtaLink href="#what-we-do-title" variant="onDark" size="lg" arrow={false} data-cta="hero-services">
              Explore Our Services
            </CtaLink>
          </div>

          <p className="mt-9 max-w-sm border-l-2 border-orange pl-4 text-sm text-white/60">
            Built for businesses that want measurable growth—not just marketing activity.
          </p>
        </div>

        <div className="lg:col-span-6 lg:py-6">
          <HeroVisual />
        </div>
      </div>

      {/* Platform strip: names only, with an explicit label so nothing reads as an endorsement */}
      <div className="relative border-t border-white/10">
        <div className="shell flex flex-col gap-4 py-6 md:flex-row md:items-center md:gap-10">
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
