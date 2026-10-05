import { CtaLink } from "@/components/ui/cta-link";
import { SignalField } from "@/components/visuals/signal-field";

type Props = {
  title?: string;
  body?: string;
  /** Where the primary button goes. On the audit page itself this is the form anchor. */
  href?: string;
  /** Hide the secondary "talk to a strategist" link */
  single?: boolean;
  /** Analytics location label */
  location: string;
};

/** Closing call to action that points at the growth audit request page. */
export function AuditCta({
  title = "Start with a growth audit.",
  body = "Tell us about the business and what is holding growth back. A strategist will review your situation and show you where the highest-impact opportunities are.",
  href = "/growth-audit/",
  single,
  location,
}: Props) {
  return (
    <section aria-labelledby="audit-cta-title" className="bg-surface px-3 pb-3 md:px-5 md:pb-5">
      <div className="stage relative overflow-hidden rounded-[1.75rem] text-white">
        <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:radial-gradient(70%_80%_at_80%_20%,black,transparent)]" />
        <SignalField cx={84} cy={40} className="opacity-70" />
        <div className="shell relative grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <p className="label-mono flex items-center gap-3 text-white/60">
              <span aria-hidden className="size-1.5 rounded-full bg-orange" />
              Start here
            </p>
            <h2 id="audit-cta-title" className="mt-5 text-h2 font-semibold">{title}</h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-lead text-white/75">{body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
              <CtaLink href={href} variant="primary" size="lg" data-cta={`${location}-audit`}>
                Request Your Growth Audit
              </CtaLink>
              {single ? null : (
                <CtaLink href="/contact/" variant="onDark" size="lg" arrow={false} data-cta={`${location}-strategist`}>
                  Talk to a Growth Strategist
                </CtaLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
