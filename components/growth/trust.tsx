import { Reveal } from "@/components/layout/reveal";
import { Section } from "@/components/layout/section";
import { trustSlots } from "@/data/growth";

/**
 * Proof section. Each slot stays an honest placeholder until real, permissioned
 * assets are added – nothing here is invented.
 */
export function Trust() {
  return (
    <Section aria-labelledby="trust-title" space="tight" className="border-t border-line">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4">
          <p className="label-mono flex items-center gap-3 text-muted">
            <span className="text-ink">13</span>
            <span aria-hidden className="h-px w-8 bg-line-strong" />
            Proof
          </p>
          <h2 id="trust-title" className="mt-5 text-h3 font-semibold text-navy">
            Proof belongs here when it is real.
          </h2>
          <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-muted">
            We do not display logos, badges or quotes we cannot substantiate. These spaces are reserved, and will be filled
            as evidence is earned and cleared for publication.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-8" delay={0.1}>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {trustSlots.map((slot) => (
              <li key={slot.name} className="flex min-h-28 flex-col justify-between rounded-xl border border-dashed border-line-strong p-4">
                <span className="text-[0.9375rem] font-medium text-ink">{slot.name}</span>
                <span className="text-xs leading-snug text-muted">{slot.note}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
