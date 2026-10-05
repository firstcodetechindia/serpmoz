import { CountUp } from "@/components/charts/count-up";
import { Ring, StackedBar, seriesColors } from "@/components/charts/shapes";
import { Sparkline } from "@/components/charts/sparkline";
import { TrendChart } from "@/components/charts/trend-chart";
import { SampleBadge } from "@/components/ui/badge";
import { heroKpis, heroSignals, opportunities, revenueSeries, trafficSources } from "@/data/dashboard";
import { cn } from "@/lib/utils";

/** Small dark glass card that floats beside the dashboard. */
function Signal({ label, caption, className, children, delay = 0 }: { label: string; caption: string; className?: string; children: React.ReactNode; delay?: number }) {
  return (
    <div
      className={cn("rounded-2xl border border-white/12 bg-navy-soft/95 p-3.5 shadow-[0_24px_48px_-20px_rgb(0_0_0/0.7)] backdrop-blur-md motion-safe:animate-float lg:absolute lg:z-20 lg:w-44", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      <p className="label-mono text-[0.625rem] text-white/60">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-3">{children}</div>
      <p className="mt-1 text-[0.6875rem] text-white/55">{caption}</p>
    </div>
  );
}

const signalValue = "tabular text-2xl leading-none font-semibold tracking-[-0.03em] text-white";

/**
 * The hero composition: a compact GrowthOS overview with four context cards
 * orbiting it. Every figure is sample data and labelled as such.
 */
export function HeroDashboard({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)} role="group" aria-label="GrowthOS product preview showing illustrative sample data">
      {/* Main panel */}
      <div className="relative z-10 overflow-hidden rounded-[1.25rem] border border-white/60 bg-white text-ink shadow-[0_40px_90px_-30px_rgb(0_0_0/0.65)] lg:ml-14 lg:max-w-[32rem]">
        <div className="flex h-10 items-center justify-between gap-3 border-b border-line/80 px-4">
          <div className="flex items-center gap-2.5">
            <span aria-hidden className="flex gap-1">
              <i className="size-2 rounded-full bg-line-strong" />
              <i className="size-2 rounded-full bg-line-strong" />
              <i className="size-2 rounded-full bg-line-strong" />
            </span>
            <p className="text-[0.8125rem] font-medium">
              GrowthOS<span className="hidden font-normal text-muted min-[400px]:inline"> / Overview</span>
            </p>
          </div>
          <SampleBadge />
        </div>

        <div className="p-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="label-mono text-[0.625rem] text-muted">Revenue influenced · 90 days vs previous</h3>
              <p className="tabular mt-2 text-[2.5rem] leading-none font-semibold tracking-[-0.04em] text-navy">
                <CountUp value={42.8} prefix="₹" suffix="L" decimals={1} />
              </p>
            </div>
          </div>
          <TrendChart
            className="mt-4 h-28 sm:h-32"
            values={revenueSeries.current}
            compare={revenueSeries.previous}
            summary="Illustrative chart: revenue influenced rising over twelve weeks, ahead of the previous period."
          />
        </div>

        <dl className="grid grid-cols-2 border-t border-line/80 sm:grid-cols-4">
          {heroKpis.map((k, i) => (
            <div key={k.label} className={cn("p-3.5", i > 0 && "sm:border-l sm:border-line/80", i % 2 === 1 && "border-l border-line/80", i > 1 && "border-t border-line/80 sm:border-t-0")}>
              <dt className="truncate text-[0.6875rem] text-muted">{k.label}</dt>
              <dd className="mt-1 flex items-end justify-between gap-1">
                <CountUp value={k.value} prefix={k.prefix} suffix={k.suffix} className="tabular text-lg font-semibold tracking-[-0.02em] text-navy" />
                <Sparkline values={[...k.trend]} tone={k.tone} className="mb-1 h-4 w-9" />
              </dd>
            </div>
          ))}
        </dl>

        <div className="border-t border-line/80 p-4 lg:pb-14">
          <div className="flex items-center justify-between">
            <h3 className="label-mono text-[0.625rem] text-muted">Traffic sources</h3>
            <span className="label-mono text-[0.5625rem] text-muted/80">Share of sessions</span>
          </div>
          <StackedBar className="mt-3" segments={trafficSources.map((t) => ({ value: t.value }))} />
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-4">
            {trafficSources.map((t, i) => (
              <li key={t.name} className="flex items-center gap-1.5 text-[0.6875rem] text-muted">
                <i aria-hidden className="size-1.5 shrink-0 rounded-full" style={{ background: seriesColors[i] }} />
                <span className="truncate">{t.name}</span>
                <span className="tabular ml-auto text-ink">{t.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Context cards: absolutely placed on desktop, a tidy 2×2 on small screens */}
      <div className="mt-3 grid grid-cols-2 gap-3 lg:mt-0 lg:block">
        <Signal label={heroSignals.ai.label} caption={heroSignals.ai.caption} className="lg:-top-[5.5rem] lg:-left-2" delay={0}>
          <span className={signalValue}>
            {heroSignals.ai.value}
            <span className="text-sm font-medium text-white/50">/100</span>
          </span>
          <Ring value={heroSignals.ai.value} size={34} stroke={4} track="rgb(255 255 255 / 0.14)" />
        </Signal>
        <Signal label={heroSignals.google.label} caption={heroSignals.google.caption} className="lg:top-14 lg:-right-4 xl:-right-20" delay={1.4}>
          <span className={signalValue}>{heroSignals.google.value}</span>
          <Sparkline values={[...heroSignals.google.trend]} tone="cyan" className="mb-0.5 h-5 w-14" />
        </Signal>
        <Signal label={heroSignals.leads.label} caption={heroSignals.leads.caption} className="lg:-bottom-12 lg:left-2" delay={2.2}>
          <span className={signalValue}>{heroSignals.leads.value}</span>
          <span className="tabular mb-0.5 text-xs font-medium text-[#4ade80]">+31%</span>
        </Signal>
        <div
          className="col-span-2 rounded-2xl border border-white/12 bg-navy-soft/95 p-3.5 shadow-[0_24px_48px_-20px_rgb(0_0_0/0.7)] backdrop-blur-md motion-safe:animate-float-slow lg:absolute lg:-right-4 lg:-bottom-16 lg:z-20 lg:w-64 xl:-right-10"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="label-mono text-[0.625rem] text-white/60">Search opportunities</p>
          <ul className="mt-2.5 space-y-2">
            {opportunities.map((o) => (
              <li key={o.topic} className="flex items-center gap-2 text-xs text-white/85">
                <i aria-hidden className={cn("size-1.5 shrink-0 rounded-full", o.value === "High" ? "bg-orange" : "bg-white/30")} />
                <span className="truncate">{o.topic}</span>
                <span className="ml-auto shrink-0 text-[0.6875rem] text-white/50">{o.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
