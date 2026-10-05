import { Sparkles, TrendingDown, TrendingUp } from "lucide-react";
import { CountUp } from "@/components/dashboard/count-up";
import { AppWindow, BarRow, IllustrativeTag } from "@/components/dashboard/primitives";
import { Sparkline } from "@/components/dashboard/sparkline";
import { TrendChart } from "@/components/dashboard/trend-chart";
import { aiPlatforms, heroKpis, opportunities, revenueSeries, signals } from "@/data/dashboard";
import { cn } from "@/lib/utils";

function PanelTitle({ children, meta }: { children: React.ReactNode; meta?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <h3 className="label-mono text-muted">{children}</h3>
      {meta ? <span className="label-mono text-[0.625rem] text-muted/80">{meta}</span> : null}
    </div>
  );
}

/** The GrowthOS overview shown beside the hero. All figures are sample data. */
export function HeroDashboard({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)} role="group" aria-label="GrowthOS overview preview with illustrative data">
      <AppWindow
        title="GrowthOS"
        crumb="Overview"
        actions={
          <>
            <span className="label-mono hidden rounded-full border border-line px-2 py-1 text-[0.625rem] text-ink sm:inline">Last 90 days</span>
            <IllustrativeTag />
          </>
        }
      >
        <div className="grid lg:grid-cols-12">
          {/* Revenue – the number everything else is in service of */}
          <div className="p-5 sm:p-6 lg:col-span-7 lg:border-r lg:border-line/80">
            <PanelTitle meta="vs previous period">Revenue influenced</PanelTitle>
            <div className="mt-3 flex items-end justify-between gap-4">
              <p className="tabular text-[2.5rem] leading-none font-semibold tracking-[-0.04em] text-navy sm:text-5xl">
                <CountUp value={42.8} prefix="₹" suffix="L" decimals={1} />
              </p>
              <ul className="label-mono flex gap-4 pb-1 text-[0.625rem] text-muted" aria-hidden>
                <li className="flex items-center gap-1.5"><i className="h-0.5 w-3 rounded bg-blue" />Current</li>
                <li className="flex items-center gap-1.5"><i className="h-0.5 w-3 rounded border-t border-dashed border-line-strong" />Previous</li>
              </ul>
            </div>
            <TrendChart
              className="mt-5 h-36 sm:h-44"
              values={revenueSeries.current}
              compare={revenueSeries.previous}
              xLabels={revenueSeries.labels}
              summary="Illustrative chart: revenue influenced rising over twelve weeks, ahead of the previous period."
            />
          </div>

          {/* Leading indicators */}
          <dl className="grid grid-cols-2 border-t border-line/80 lg:col-span-5 lg:border-t-0">
            {heroKpis.map((k, i) => (
              <div
                key={k.label}
                className={cn(
                  "flex flex-col justify-between gap-4 p-4 sm:p-5",
                  i % 2 === 0 && "border-r border-line/80",
                  i < 2 && "border-b border-line/80",
                )}
              >
                <dt className="text-[0.8125rem] leading-tight text-muted">{k.label}</dt>
                <dd className="flex items-end justify-between gap-2">
                  <CountUp
                    value={k.value}
                    prefix={k.prefix}
                    suffix={k.suffix}
                    className="tabular text-2xl font-semibold tracking-[-0.03em] text-navy sm:text-[1.75rem]"
                  />
                  <Sparkline values={[...k.trend]} tone={k.tone} className="mb-1 hidden w-14 min-[420px]:block" />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Detail row – desktop and tablet only; on phones the summary above is the story */}
        <div className="hidden grid-cols-12 border-t border-line/80 md:grid">
          <div className="col-span-4 border-r border-line/80 p-5">
            <PanelTitle>AI visibility by platform</PanelTitle>
            <div className="mt-4 space-y-3">
              {aiPlatforms.map((p, i) => (
                <BarRow key={p.name} label={p.name} value={p.value} tone={i === 0 ? "cyan" : "navy"} />
              ))}
            </div>
          </div>
          <div className="col-span-5 border-r border-line/80 p-5">
            <PanelTitle meta="By value">Search opportunities</PanelTitle>
            <table className="mt-3 w-full text-left text-[0.8125rem]">
              <thead className="sr-only">
                <tr><th>Topic</th><th>Value</th><th>Status</th></tr>
              </thead>
              <tbody className="divide-y divide-line/80">
                {opportunities.map((o) => (
                  <tr key={o.topic}>
                    <td className="py-2 pr-2">
                      <span className="block text-ink">{o.topic}</span>
                      <span className="text-xs text-muted">{o.intent}</span>
                    </td>
                    <td className="py-2 pr-2 align-top">
                      <span className={cn("label-mono text-[0.625rem]", o.value === "High" ? "text-orange-ink" : "text-muted")}>{o.value}</span>
                    </td>
                    <td className="py-2 text-right align-top text-xs whitespace-nowrap text-muted">{o.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-span-3 p-5">
            <PanelTitle>Competitive signals</PanelTitle>
            <ul className="mt-4 space-y-3.5">
              {signals.map((s) => (
                <li key={s.text} className="flex gap-2.5 text-[0.8125rem] leading-snug text-ink">
                  {s.kind === "gain" ? (
                    <TrendingUp aria-hidden className="mt-0.5 size-3.5 shrink-0 text-success-ink" />
                  ) : (
                    <TrendingDown aria-hidden className="mt-0.5 size-3.5 shrink-0 text-orange-ink" />
                  )}
                  {s.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AppWindow>

      {/* Offset note: the human layer on top of the data */}
      <aside className="relative z-10 mx-4 -mt-3 max-w-sm rounded-xl bg-navy p-4 text-white shadow-float sm:absolute sm:-bottom-20 sm:-left-8 sm:mx-0 sm:mt-0 lg:-left-14">
        <p className="label-mono flex items-center gap-2 text-[0.625rem] text-white/60">
          <Sparkles aria-hidden className="size-3 text-cyan" />
          Strategist note · sample
        </p>
        <p className="mt-2 text-sm leading-snug">
          Leads are up, but two thirds come from one topic cluster. Next sprint: build out comparison pages before adding spend.
        </p>
      </aside>
    </div>
  );
}
