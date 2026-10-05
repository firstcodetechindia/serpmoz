import { HeroDashboard } from "@/components/hero/hero-dashboard";
import { Reveal } from "@/components/layout/reveal";
import { CtaLink } from "@/components/ui/cta-link";
import { promise } from "@/data/growth";
import { cta } from "@/lib/config/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-32 md:pt-44">
      <div aria-hidden className="grid-lines absolute inset-0 [mask-image:linear-gradient(to_bottom,black_20%,transparent_80%)]" />
      <div aria-hidden className="atmosphere absolute inset-x-0 top-40 bottom-0" />

      <div className="shell relative">
        <p className="label-mono flex items-center gap-3 text-muted">
          <span className="size-1.5 rounded-full bg-orange" aria-hidden />
          AI-Powered Digital Growth Company
        </p>

        <h1 id="hero-title" className="mt-6 text-[clamp(2.6rem,1.2rem+5.2vw,4.75rem)] leading-[0.98] font-semibold tracking-[-0.04em] text-navy">
          <span className="block">AI Can Do the Work.</span>
          <span className="block text-ink/55">Experts Know What Work Matters.</span>
        </h1>

        <div className="mt-10 grid gap-x-8 gap-y-14 lg:mt-14 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:pt-2">
            <p className="max-w-md text-lead text-ink/80">
              SERPMOZ combines AI-powered execution, human expertise and growth intelligence to turn digital visibility into
              qualified demand, customers and measurable revenue.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:max-w-xs lg:flex-col">
              <CtaLink href={cta.audit.href} variant="primary" size="lg">
                {cta.audit.label}
              </CtaLink>
              <CtaLink href="#growth-system" variant="outline" size="lg" arrow={false}>
                See How We Grow Businesses
              </CtaLink>
            </div>
            <p className="mt-8 max-w-xs border-l-2 border-orange pl-4 text-sm text-muted">
              Built for businesses that want measurable growth—not just marketing activity.
            </p>
          </div>

          <Reveal className="lg:col-span-8 xl:-mr-10" y={24}>
            <HeroDashboard />
          </Reveal>
        </div>

        {/* The business promise, set as a single ruled line */}
        <ol aria-label="The SERPMOZ promise" className="mt-20 grid grid-cols-2 border-t border-line sm:grid-cols-5 md:mt-32">
          {promise.map((step, i) => (
            <li
              key={step}
              className="flex items-center justify-between gap-3 border-b border-line py-4 pr-4 last:col-span-2 sm:border-r sm:border-b-0 sm:py-5 sm:pl-4 sm:first:pl-0 sm:last:col-span-1 sm:last:border-r-0"
            >
              <span className="flex items-baseline gap-3">
                <span className="label-mono text-muted">0{i + 1}</span>
                <span className={i === promise.length - 1 ? "font-semibold text-navy" : "font-medium text-ink"}>{step}</span>
              </span>
              {i < promise.length - 1 ? (
                <span aria-hidden className="text-line-strong">→</span>
              ) : (
                <span aria-hidden className="size-2 rounded-full bg-orange" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
