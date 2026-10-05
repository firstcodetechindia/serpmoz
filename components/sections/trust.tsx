import { BadgeCheck, FileCheck2, GitCommitHorizontal, Link2, ShieldCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { SampleBadge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const principles: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: GitCommitHorizontal, title: "A baseline before any work", body: "Every metric we intend to move is recorded at the start, with its source and date range." },
  { icon: Link2, title: "Numbers from your systems", body: "Results are read from your analytics, ad accounts and CRM, not from our own tools." },
  { icon: FileCheck2, title: "A change log you can audit", body: "What shipped, when and why, so an outcome can be traced to the work behind it." },
  { icon: ShieldCheck, title: "Published only with permission", body: "No logo, quote or figure appears on this site without written approval from the client." },
];

/* How a claim is recorded. Field names and states only – deliberately no figures. */
const ledger = [
  { claim: "Qualified leads", source: "CRM", baseline: "Recorded at kickoff", status: "Reconciled" },
  { claim: "Non-brand organic visibility", source: "Search Console", baseline: "Recorded at kickoff", status: "Reconciled" },
  { claim: "AI share of recommendation", source: "Prompt panel", baseline: "First 30-day range", status: "Reported as range" },
  { claim: "Revenue influenced", source: "CRM + analytics", baseline: "Prior period", status: "Method stated" },
  { claim: "Customer acquisition cost", source: "Finance + ad accounts", baseline: "Prior period", status: "Awaiting data" },
];

/**
 * Evidence. There are no client logos, badges or testimonials here because
 * none have been verified for publication yet – so the section shows how proof
 * is produced instead. Add real, permissioned assets to data when they exist.
 */
export function Trust() {
  return (
    <Section aria-labelledby="trust-title" className="border-t border-line bg-surface">
      <div className="shell grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeader
            id="trust-title"
            index="13"
            label="Evidence"
            title={["Proof, Produced", "the Hard Way."]}
            lead="We do not display logos, badges or quotes we cannot substantiate. Until our first results are cleared for publication, this is how they are being documented."
          />
          <ul className="mt-10 space-y-6">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.05} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-wash text-blue-ink">
                  <p.icon aria-hidden className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold tracking-[-0.01em] text-navy">{p.title}</h3>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="lg:sticky lg:top-28 lg:col-span-7 lg:self-start" y={24} delay={0.1}>
          <div className="overflow-hidden rounded-panel border border-line bg-canvas shadow-soft">
            <div className="flex items-center justify-between gap-3 border-b border-line bg-surface px-5 py-3.5">
              <p className="flex items-center gap-2 text-sm font-semibold text-navy">
                <BadgeCheck aria-hidden className="size-4 text-blue-ink" />
                Evidence ledger
              </p>
              <SampleBadge>Example format</SampleBadge>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[34rem] text-left text-[0.8125rem]">
                <thead>
                  <tr className="label-mono text-[0.5625rem] text-muted">
                    <th className="px-5 py-3 font-normal">Claim</th>
                    <th className="px-3 py-3 font-normal">Source of truth</th>
                    <th className="px-3 py-3 font-normal">Baseline</th>
                    <th className="px-5 py-3 text-right font-normal">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line bg-surface">
                  {ledger.map((r) => (
                    <tr key={r.claim}>
                      <td className="px-5 py-3.5 font-medium text-navy">{r.claim}</td>
                      <td className="px-3 py-3.5 text-ink">{r.source}</td>
                      <td className="px-3 py-3.5 text-muted">{r.baseline}</td>
                      <td className="px-5 py-3.5 text-right">
                        <span className={cn("label-mono rounded-full px-2 py-1 text-[0.5625rem] whitespace-nowrap", r.status === "Awaiting data" ? "bg-orange-wash text-orange-ink" : r.status === "Reconciled" ? "bg-success/10 text-success-ink" : "bg-blue-wash text-blue-ink")}>
                          {r.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-line px-5 py-3.5 text-xs leading-relaxed text-muted">
              Client logos, certifications, technology partnerships and testimonials will be shown here once each has been
              verified and cleared. Nothing on this page is invented to fill the space.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
