import { Bot, CircleCheck, Clock3 } from "lucide-react";
import { StackedBar, seriesColors } from "@/components/charts/shapes";
import { growthosAttribution, growthosCompetitors, growthosInsights, growthosOpportunities, growthosPlatforms } from "@/data/growthos";
import { cn } from "@/lib/utils";

/* Reusable GrowthOS panels. Each is a self-contained card body; the dashboard decides layout. */

export function PanelCard({ title, meta, children, className }: { title: string; meta?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={cn("rounded-xl border border-line bg-surface p-4 md:p-5", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="label-mono text-muted">{title}</h3>
        {meta ? <span className="label-mono text-[0.5625rem] text-muted/80">{meta}</span> : null}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

const pill = (tone: "high" | "medium" | "low") =>
  cn("label-mono rounded-full px-2 py-0.5 text-[0.5625rem]", tone === "high" ? "bg-orange-wash text-orange-ink" : tone === "medium" ? "bg-blue-wash text-blue-ink" : "bg-line/70 text-muted");

export function SearchOpportunityTable({ limit }: { limit?: number }) {
  const rows = limit ? growthosOpportunities.slice(0, limit) : growthosOpportunities;
  return (
    <PanelCard title="Search opportunities" meta="Ranked by value">
      <div className="-mx-1 overflow-x-auto">
        <table className="w-full min-w-[28rem] text-left text-[0.8125rem]">
          <thead>
            <tr className="label-mono text-[0.5625rem] text-muted">
              <th className="px-1 pb-2 font-normal">Opportunity</th>
              <th className="px-1 pb-2 font-normal">Value</th>
              <th className="px-1 pb-2 font-normal">Effort</th>
              <th className="px-1 pb-2 text-right font-normal">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line/80">
            {rows.map((o) => (
              <tr key={o.topic}>
                <td className="px-1 py-2.5">
                  <span className="block text-ink">{o.topic}</span>
                  <span className="text-xs text-muted">{o.intent}</span>
                </td>
                <td className="px-1 py-2.5 align-top"><span className={pill(o.value === "High" ? "high" : "medium")}>{o.value}</span></td>
                <td className="px-1 py-2.5 align-top text-xs text-muted">{o.effort}</td>
                <td className="px-1 py-2.5 text-right align-top text-xs whitespace-nowrap text-ink">{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PanelCard>
  );
}

export function RevenueAttribution() {
  return (
    <PanelCard title="Revenue attribution" meta="First touch">
      <p className="tabular text-3xl font-semibold tracking-[-0.03em] text-navy">₹42.8L</p>
      <StackedBar className="mt-4 h-3" segments={growthosAttribution.map((a) => ({ value: a.share }))} />
      <ul className="mt-4 divide-y divide-line/80">
        {growthosAttribution.map((a, i) => (
          <li key={a.channel} className="flex items-center gap-2.5 py-2 text-[0.8125rem]">
            <i aria-hidden className="size-2 shrink-0 rounded-full" style={{ background: seriesColors[i] }} />
            <span className="text-ink">{a.channel}</span>
            <span className="tabular ml-auto text-muted">{a.share}%</span>
            <span className="tabular w-16 text-right font-medium text-navy">{a.revenue}</span>
          </li>
        ))}
      </ul>
    </PanelCard>
  );
}

export function CompetitorPanel() {
  return (
    <PanelCard title="Share of voice" meta="Tracked topics">
      <ul className="space-y-3.5">
        {growthosCompetitors.map((c) => {
          const self = "self" in c;
          return (
            <li key={c.name} className="grid grid-cols-[7rem_1fr_2.5rem_2rem] items-center gap-3 text-[0.8125rem]">
              <span className={cn("truncate", self ? "font-semibold text-navy" : "text-ink")}>{c.name}</span>
              <span className="h-2 overflow-hidden rounded-full bg-line/80" aria-hidden>
                <span className={cn("block h-full rounded-full", self ? "bg-blue" : "bg-line-strong")} style={{ width: `${c.sov * 2.4}%` }} />
              </span>
              <span className="tabular text-right text-ink">{c.sov}%</span>
              <span className={cn("tabular text-right text-xs", c.change.startsWith("+") ? "text-success-ink" : "text-muted")}>{c.change}</span>
            </li>
          );
        })}
      </ul>
    </PanelCard>
  );
}

export function PlatformVisibility() {
  return (
    <PanelCard title="AI visibility by environment" meta="Score / 100">
      <ul className="space-y-3.5">
        {growthosPlatforms.map((p) => (
          <li key={p.name} className="grid grid-cols-[9.5rem_1fr_2rem] items-center gap-3 text-[0.8125rem]">
            <span className="truncate text-ink">{p.name}</span>
            <span className="h-2 overflow-hidden rounded-full bg-line/80" aria-hidden>
              <span className="block h-full rounded-full bg-cyan" style={{ width: `${p.value}%` }} />
            </span>
            <span className="tabular text-right text-muted">{p.value}</span>
          </li>
        ))}
      </ul>
    </PanelCard>
  );
}

/** Copilot recommendations. Navy, because this is the one place the product speaks. */
export function AIInsightPanel({ className }: { className?: string }) {
  return (
    <section className={cn("flex flex-col rounded-xl bg-navy p-4 text-white md:p-5", className)}>
      <h3 className="label-mono flex items-center gap-2 text-cyan">
        <Bot aria-hidden className="size-3.5" />
        AI Copilot
      </h3>
      <ul className="mt-4 flex-1 space-y-4">
        {growthosInsights.map((ins) => {
          const approved = ins.status.startsWith("Approved");
          return (
            <li key={ins.title} className="border-t border-white/12 pt-4 first:border-t-0 first:pt-0">
              <p className="text-sm leading-snug font-semibold">{ins.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/65">{ins.body}</p>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-md bg-white/10 px-2 py-1 text-xs font-medium">{ins.action}</span>
                <span className={cn("flex items-center gap-1 text-[0.6875rem]", approved ? "text-[#4ade80]" : "text-white/55")}>
                  {approved ? <CircleCheck aria-hidden className="size-3" /> : <Clock3 aria-hidden className="size-3" />}
                  {ins.status}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
