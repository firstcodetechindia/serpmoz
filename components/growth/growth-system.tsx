import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { growthSystem } from "@/data/growth";
import { cn } from "@/lib/utils";

/** Nine stages on a horizontal rail. Scrolls sideways on every screen size. */
export function GrowthSystem() {
  return (
    <Section id="growth-system" aria-labelledby="growth-system-title" className="overflow-hidden">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <SectionHeader
            id="growth-system-title"
            index="05"
            label="The SERPMOZ growth system"
            title={["From Visibility", "to Revenue."]}
            className="lg:col-span-6"
          />
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-12" delay={0.1}>
            <p className="text-lead text-muted">
              We don’t optimize marketing channels in isolation. We connect them to the customer’s journey and the business
              outcome.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-14 lg:mt-20">
        <ol
          tabIndex={0}
          aria-label="Nine stages of the SERPMOZ growth system. Scroll horizontally."
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-px-5 px-5 pb-2 md:scroll-px-10 md:px-10 xl:scroll-px-[max(2.5rem,calc((100vw-82rem)/2+2.5rem))] xl:px-[max(2.5rem,calc((100vw-82rem)/2+2.5rem))]"
        >
          {growthSystem.map((stage, i) => {
            const last = i === growthSystem.length - 1;
            const revenue = i === 7;
            return (
              <li key={stage.name} className="w-[17rem] shrink-0 snap-start pr-8 md:w-[19rem]">
                <div className="flex items-center gap-3">
                  <span className={cn("size-2.5 shrink-0 rounded-full", revenue ? "bg-orange" : "bg-navy")} aria-hidden />
                  <span className={cn("h-px flex-1", last ? "bg-gradient-to-r from-line-strong to-transparent" : "bg-line-strong")} aria-hidden />
                </div>
                <p className="tabular mt-7 text-6xl leading-none font-semibold tracking-[-0.05em] text-ink/15">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-h3 font-semibold text-navy">{stage.name}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{stage.body}</p>
              </li>
            );
          })}
        </ol>
        <p className="shell label-mono mt-8 flex items-center gap-3 text-muted" aria-hidden>
          Scroll <span className="h-px w-10 bg-line-strong" /> 09 stages
        </p>
      </Reveal>
    </Section>
  );
}
