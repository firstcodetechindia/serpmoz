import { Reveal } from "@/components/layout/reveal";
import { CtaLink } from "@/components/ui/cta-link";
import { SignalField } from "@/components/visuals/signal-field";
import { promise } from "@/data/growth";
import { cta } from "@/lib/config/site";

type Props = {
  title?: string[];
  body?: string;
};

/** Closing call to action on the navy stage. */
export function FinalCta({
  title = ["Stop Buying Marketing Activity.", "Start Building a Growth Engine."],
  body = "Tell us where you are today, where you want to go and what is holding growth back. We’ll identify the highest-impact opportunities.",
}: Props) {
  return (
    <section aria-labelledby="final-cta-title" className="bg-surface px-3 pb-3 md:px-5 md:pb-5">
      <div className="stage relative overflow-hidden rounded-[1.75rem] text-white">
        <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:radial-gradient(70%_80%_at_80%_20%,black,transparent)]" />
        <SignalField cx={84} cy={40} className="opacity-70" />
        <div className="shell relative py-20 md:py-28 lg:py-36">
          <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-8">
              <p className="label-mono flex items-center gap-3 text-white/60">
                <span aria-hidden className="size-1.5 rounded-full bg-orange" />
                Start here
              </p>
              <h2 id="final-cta-title" className="mt-5 text-h2 font-semibold">
                {title.map((line, i) => (
                  <span key={line} className={i === title.length - 1 && title.length > 1 ? "block text-white/55" : "block"}>
                    {line}
                  </span>
                ))}
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-lead text-white/75">{body}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
                <CtaLink href={cta.audit.href} variant="primary" size="lg" data-cta="final-audit">
                  {cta.audit.label}
                </CtaLink>
                <CtaLink href={cta.strategist.href} variant="onDark" size="lg" arrow={false} data-cta="final-strategist">
                  {cta.strategist.label}
                </CtaLink>
              </div>
            </div>
          </Reveal>

          <ol aria-label="The SERPMOZ promise" className="label-mono mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/12 pt-6 text-white/55 lg:mt-24">
            {promise.map((p, i) => (
              <li key={p} className="flex items-center gap-3">
                <span className={i === promise.length - 1 ? "text-orange" : undefined}>{p}</span>
                {i < promise.length - 1 ? <span aria-hidden>→</span> : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
