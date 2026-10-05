import { Reveal } from "@/components/layout/reveal";
import { CtaLink } from "@/components/ui/cta-link";
import { cta } from "@/lib/config/site";

type Props = {
  title?: string[];
  body?: string;
};

/** Closing call to action. The one deliberately dark surface on the site. */
export function FinalCta({
  title = ["Stop Buying Marketing Activity.", "Start Building a Growth Engine."],
  body = "Tell us where you are today, where you want to go and what is holding growth back. We’ll identify the highest-impact opportunities.",
}: Props) {
  return (
    <section aria-labelledby="final-cta-title" className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-navy">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(70%_80%_at_80%_20%,black,transparent)]" />
        <div aria-hidden className="absolute -top-40 right-0 size-[36rem] rounded-full bg-blue/25 blur-[120px]" />
        <div className="shell relative py-20 md:py-28 lg:py-36">
          <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-8">
              <p className="label-mono flex items-center gap-3 text-white/60">
                <span aria-hidden className="size-1.5 rounded-full bg-orange" />
                Start here
              </p>
              <h2 id="final-cta-title" className="mt-5 text-h2 font-semibold text-white">
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
                <CtaLink href={cta.audit.href} variant="primary" size="lg">
                  {cta.audit.label}
                </CtaLink>
                <CtaLink href={cta.strategist.href} variant="onDark" size="lg" arrow={false}>
                  {cta.strategist.label}
                </CtaLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
