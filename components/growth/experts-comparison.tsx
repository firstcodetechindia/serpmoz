import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { CtaLink } from "@/components/ui/cta-link";
import { diyPath, expertQuestions, serpmozPath } from "@/data/growth";
import { cta } from "@/lib/config/site";

export function ExpertsComparison() {
  return (
    <Section aria-labelledby="experts-title" className="border-y border-line bg-surface">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeader
            id="experts-title"
            index="02"
            label="Why businesses still need experts"
            title={["Tools Are Everywhere.", "Expertise Is Not."]}
            lead="Access to AI is now universal. Knowing what to do with it is still the scarce part."
          />
          <Reveal delay={0.1}>
            <p className="label-mono mt-12 text-ink">What an expert brings to the prompt</p>
            <ul className="mt-4 border-b border-line">
              {expertQuestions.map((q) => (
                <li key={q} className="flex items-baseline gap-4 border-t border-line py-3 text-[0.9375rem] text-ink">
                  <span aria-hidden className="size-1 shrink-0 -translate-y-1 rounded-full bg-blue" />
                  {q}
                </li>
              ))}
            </ul>
            <CtaLink href={cta.audit.href} variant="solid" size="lg" className="mt-10">
              Build Your Growth Engine
            </CtaLink>
          </Reveal>
        </div>

        {/* Two paths drawn to the same scale: one stops at output, one continues to revenue */}
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.15}>
          <div className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] gap-4 sm:gap-8">
            <div>
              <p className="label-mono text-muted">DIY AI</p>
              <ol className="mt-5">
                {diyPath.map((step, i) => (
                  <li key={step}>
                    <div className="rounded-control border border-dashed border-line-strong px-4 py-4 text-[0.9375rem] font-medium text-muted">
                      {step}
                    </div>
                    {i < diyPath.length - 1 ? <ArrowDown aria-hidden className="mx-auto my-1.5 size-4 text-line-strong" /> : null}
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Plenty gets produced. Whether any of it moved the business is left unanswered.
              </p>
            </div>

            <div>
              <p className="label-mono text-navy">SERPMOZ</p>
              <ol className="mt-5">
                {serpmozPath.map((s, i) => {
                  const last = i === serpmozPath.length - 1;
                  return (
                    <li key={s.step}>
                      <div
                        className={
                          last
                            ? "rounded-control bg-navy px-4 py-4 text-white"
                            : "rounded-control border border-line bg-canvas px-4 py-3.5"
                        }
                      >
                        <p className="flex items-center justify-between text-[0.9375rem] font-semibold tracking-[-0.01em]">
                          {s.step}
                          {last ? <span aria-hidden className="size-2 rounded-full bg-orange" /> : null}
                        </p>
                        <p className={last ? "mt-0.5 text-[0.8125rem] text-white/70" : "mt-0.5 text-[0.8125rem] text-muted"}>{s.note}</p>
                      </div>
                      {!last ? <ArrowDown aria-hidden className="mx-auto my-1.5 size-4 text-blue" /> : null}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
