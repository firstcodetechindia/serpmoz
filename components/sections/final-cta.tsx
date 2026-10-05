import { Reveal } from "@/components/layout/reveal";
import { CtaLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { photos } from "@/data/images";
import { cta } from "@/lib/config/site";

type Props = {
  title?: string[];
  body?: string;
  /** Label for the primary button */
  action?: string;
};

const next = [
  { title: "You tell us where you are", body: "A short form about the business, its goals and what is holding growth back." },
  { title: "A strategist reviews it", body: "Search, AI visibility, paid media, content and conversion, read together." },
  { title: "You get the priorities", body: "The highest-impact opportunities, in order, with the reasoning shown." },
];

/** Closing call to action: the ask on the left, what happens next on the right. */
export function FinalCta({
  title = ["Stop Buying Marketing Activity.", "Start Building a Growth Engine."],
  body = "Tell us where you are today, where you want to go and what is holding growth back. We’ll identify the highest-impact opportunities.",
  action = cta.audit.label,
}: Props) {
  return (
    <section aria-labelledby="final-cta-title" className="bg-surface px-3 pb-3 md:px-5 md:pb-5">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-navy-deep text-white">
        <Photo photo={photos.skyline} sizes="100vw" decorative wash="none" className="absolute inset-0 opacity-45" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy/40" />
        <div aria-hidden className="absolute -bottom-40 -left-20 size-[34rem] rounded-full bg-blue/30 blur-[120px]" />
        <div aria-hidden className="absolute -top-32 right-10 size-[26rem] rounded-full bg-orange/20 blur-[110px]" />

        <div className="shell relative grid grid-cols-1 gap-12 py-14 md:py-20 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-24">
          <Reveal className="lg:col-span-7">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pr-4 pl-2.5 text-[0.8125rem] font-medium text-white/85 backdrop-blur-sm">
              <span aria-hidden className="size-2 rounded-full bg-orange" />
              Start with a growth audit
            </p>
            <h2 id="final-cta-title" className="mt-6 text-h2 font-semibold">
              {title.map((line, i) => (
                <span key={line} className={i === title.length - 1 && title.length > 1 ? "block bg-gradient-to-r from-cyan to-white bg-clip-text text-transparent" : "block"}>
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-6 max-w-xl text-lead text-white/75">{body}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={cta.audit.href} variant="primary" size="lg" data-cta="final-audit">{action}</CtaLink>
              <CtaLink href={cta.strategist.href} variant="onDark" size="lg" arrow={false} data-cta="final-strategist">{cta.strategist.label}</CtaLink>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1} y={24}>
            <div className="glass-dark rounded-panel p-6 md:p-7">
              <p className="label-mono text-cyan">What happens next</p>
              <ol className="mt-5">
                {next.map((s, i) => (
                  <li key={s.title} className="relative grid grid-cols-[2rem_1fr] gap-x-4 pb-6 last:pb-0">
                    {i < next.length - 1 ? <span aria-hidden className="absolute top-8 left-[0.9375rem] h-[calc(100%-2rem)] w-px bg-white/15" /> : null}
                    <span className={i === next.length - 1 ? "tabular flex size-8 items-center justify-center rounded-full bg-orange text-sm font-semibold text-navy" : "tabular flex size-8 items-center justify-center rounded-full border border-white/25 text-sm font-semibold"}>{i + 1}</span>
                    <div>
                      <h3 className="font-semibold tracking-[-0.01em]">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-white/12 pt-4 text-xs leading-relaxed text-white/50">No obligation, and no guaranteed outcomes promised. Just an honest read of where you stand.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
