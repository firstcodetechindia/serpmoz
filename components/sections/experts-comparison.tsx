import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { CtaLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { GrowthPath } from "@/components/visuals/growth-path";
import { diyPath, expertQuestions, serpmozPath } from "@/data/growth";
import { photos } from "@/data/images";
import { cta } from "@/lib/config/site";

export function ExpertsComparison() {
  return (
    <Section aria-labelledby="experts-title" className="bg-gradient-to-b from-blue-wash via-surface to-surface">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <SectionHeader
            id="experts-title"
            label="Why businesses still need experts"
            title={["Tools Are Everywhere.", "Expertise Is Not."]}
            className="lg:col-span-7"
          />
          <Reveal className="lg:col-span-5 lg:pt-12" delay={0.1}>
            <p className="text-lead text-muted">
              Access to AI is now universal. Knowing what to do with it is still the scarce part. The same tools produce
              very different outcomes depending on who is asking the questions.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          {/* The journey, drawn to scale */}
          <Reveal className="lg:col-span-8" y={24}>
            <div className="hidden rounded-panel border border-line bg-surface p-8 pt-16 pb-12 shadow-soft md:block lg:p-10 lg:pt-20 lg:pb-14">
              <GrowthPath />
            </div>

            {/* Small screens: the same two journeys as step lists */}
            <div className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] gap-4 md:hidden">
              <div>
                <p className="label-mono text-muted">DIY AI</p>
                <ol className="mt-4">
                  {diyPath.map((step, i) => (
                    <li key={step}>
                      <div className="rounded-control border border-dashed border-line-strong px-3 py-3 text-sm font-medium text-muted">{step}</div>
                      {i < diyPath.length - 1 ? <ArrowDown aria-hidden className="mx-auto my-1 size-4 text-line-strong" /> : null}
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-xs leading-relaxed text-muted">Plenty gets produced. Whether it moved the business is left unanswered.</p>
              </div>
              <div>
                <p className="label-mono text-navy">SERPMOZ</p>
                <ol className="mt-4">
                  {serpmozPath.map((s, i) => {
                    const last = i === serpmozPath.length - 1;
                    return (
                      <li key={s.step}>
                        <div className={last ? "rounded-control bg-navy px-3 py-3 text-white" : "rounded-control border border-line bg-canvas px-3 py-2.5"}>
                          <p className="flex items-center justify-between text-sm font-semibold">
                            {s.step}
                            {last ? <span aria-hidden className="size-2 rounded-full bg-orange" /> : null}
                          </p>
                          <p className={last ? "mt-0.5 text-xs text-white/70" : "mt-0.5 text-xs text-muted"}>{s.note}</p>
                        </div>
                        {!last ? <ArrowDown aria-hidden className="mx-auto my-1 size-4 text-blue" /> : null}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>

            <ol className="mt-6 hidden grid-cols-7 gap-3 md:grid">
              {serpmozPath.map((s, i) => (
                <li key={s.step} className="border-t border-line pt-3">
                  <span className="label-mono text-[0.5625rem] text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-1 text-xs leading-snug text-muted">{s.note}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* The human in the loop */}
          <Reveal className="lg:col-span-4" delay={0.1}>
            <div className="overflow-hidden rounded-panel bg-navy text-white">
              <Photo photo={photos.analystDesk} sizes="(min-width: 1024px) 400px, 100vw" className="aspect-[16/10]" wash="strong" />
              <div className="p-6 md:p-7">
                <h3 className="label-mono text-cyan">What an expert brings to the prompt</h3>
                <ul className="mt-4">
                  {expertQuestions.map((q) => (
                    <li key={q} className="flex items-baseline gap-3 border-t border-white/12 py-2.5 text-[0.9375rem] text-white/90">
                      <span aria-hidden className="size-1 shrink-0 -translate-y-1 rounded-full bg-orange" />
                      {q}
                    </li>
                  ))}
                </ul>
                <CtaLink href={cta.audit.href} variant="primary" size="md" className="mt-6 w-full" data-cta="experts-build-engine">
                  Build Your Growth Engine
                </CtaLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
