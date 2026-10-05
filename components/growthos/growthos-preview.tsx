"use client";

import { useState } from "react";
import {
  BarChart3, Bot, CalendarDays, ChevronDown, FileText, Gauge, LayoutGrid, MapPin, MousePointerClick, Search, SlidersHorizontal, Sparkles, Swords, Users, Wallet,
  type LucideIcon,
} from "lucide-react";
import { TrendChart } from "@/components/charts/trend-chart";
import { AIInsightPanel, CompetitorPanel, PanelCard, PlatformVisibility, RevenueAttribution, SearchOpportunityTable } from "@/components/growthos/panels";
import { LogoMark } from "@/components/navigation/logo";
import { SampleBadge } from "@/components/ui/badge";
import { growthosMetrics, growthosModules, growthosNav } from "@/data/growthos";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  overview: LayoutGrid, seo: Search, "ai-search": Sparkles, local: MapPin, competitors: Swords, content: FileText,
  ppc: MousePointerClick, leads: Users, cro: Gauge, revenue: Wallet, copilot: Bot,
};

/** The panel that sits beside a module's chart, where one adds something specific. */
const extras: Partial<Record<string, () => React.ReactNode>> = {
  seo: () => <SearchOpportunityTable limit={4} />,
  "ai-search": () => <PlatformVisibility />,
  competitors: () => <CompetitorPanel />,
  revenue: () => <RevenueAttribution />,
  copilot: () => <AIInsightPanel />,
};

const ranges = [
  { id: "4w", label: "4 weeks", points: 5 },
  { id: "12w", label: "12 weeks", points: 12 },
] as const;

/**
 * GrowthOS product preview: a working shell (module navigation, date range,
 * period comparison) around sample data. Assembled from the panels in
 * components/growthos so the real product can reuse them.
 */
export function GrowthosPreview({ className, initialModule = "overview" }: { className?: string; initialModule?: string }) {
  const [active, setActive] = useState(initialModule);
  const [range, setRange] = useState<(typeof ranges)[number]["id"]>("12w");
  const [compare, setCompare] = useState(true);

  const mod = growthosModules.find((x) => x.id === active) ?? growthosModules[0];
  const points = ranges.find((r) => r.id === range)!.points;
  const series = mod.series.slice(-points);
  const previous = compare ? series.map((v, i) => v * (0.74 + (i / series.length) * 0.08)) : undefined;
  const Extra = extras[mod.id];

  const select = (id: string) => {
    setActive(id);
    track({ event: "growthos_module_view", module: id });
  };

  return (
    <div className={cn("overflow-hidden rounded-[1.25rem] border border-white/60 bg-canvas text-ink shadow-[0_50px_110px_-40px_rgb(0_0_0/0.7)]", className)}>
      <div className="grid grid-cols-1 md:grid-cols-[13rem_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className="hidden flex-col border-r border-line bg-surface md:flex">
          <div className="flex h-14 items-center gap-2 border-b border-line px-4 text-navy">
            <LogoMark className="size-5" />
            <span className="text-sm font-semibold tracking-[-0.01em]">GrowthOS</span>
          </div>
          <nav aria-label="GrowthOS modules" className="flex-1 space-y-4 p-3">
            {growthosNav.map((g) => (
              <div key={g.group}>
                <p className="label-mono px-2.5 pb-1.5 text-[0.5625rem] text-muted/80">{g.group}</p>
                {g.ids.map((id) => {
                  const m = growthosModules.find((x) => x.id === id)!;
                  const Icon = icons[id] ?? BarChart3;
                  const on = id === active;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => select(id)}
                      aria-current={on ? "page" : undefined}
                      className={cn("flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left text-[0.8125rem] font-medium transition-colors", on ? "bg-navy text-white" : "text-muted hover:bg-canvas hover:text-navy")}
                    >
                      <Icon aria-hidden className="size-4" />
                      {m.name}
                    </button>
                  );
                })}
              </div>
            ))}
          </nav>
          <div className="border-t border-line p-3">
            <div className="flex items-center gap-2.5 rounded-lg bg-canvas px-2.5 py-2">
              <span className="flex size-6 items-center justify-center rounded-md bg-navy text-[0.625rem] font-semibold text-white">SC</span>
              <span className="min-w-0">
                <span className="block truncate text-xs font-medium text-ink">Sample Co.</span>
                <span className="block text-[0.625rem] text-muted">Demo workspace</span>
              </span>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          {/* Top bar */}
          <div className="flex min-h-14 flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-line bg-surface px-4 py-2.5">
            <p className="flex items-center gap-2 text-sm font-semibold text-navy">
              <LogoMark className="size-4 md:hidden" />
              {mod.name}
              <span className="hidden font-normal text-muted sm:inline">· Sample Co.</span>
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <div role="group" aria-label="Date range" className="flex items-center rounded-lg border border-line p-0.5">
                <CalendarDays aria-hidden className="mx-1.5 size-3.5 text-muted" />
                {ranges.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    aria-pressed={range === r.id}
                    onClick={() => setRange(r.id)}
                    className={cn("rounded-md px-2 py-1 text-xs font-medium transition-colors", range === r.id ? "bg-navy text-white" : "text-muted hover:text-navy")}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                aria-pressed={compare}
                onClick={() => setCompare((c) => !c)}
                className={cn("hidden items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors sm:flex", compare ? "border-blue/40 bg-blue-wash text-blue-ink" : "border-line text-muted hover:text-navy")}
              >
                <SlidersHorizontal aria-hidden className="size-3.5" />
                Compare
              </button>
              <span className="hidden items-center gap-1 rounded-lg border border-line px-2.5 py-1.5 text-xs text-muted lg:flex" aria-hidden>
                All segments <ChevronDown className="size-3" />
              </span>
              <SampleBadge />
            </div>
          </div>

          {/* Module switcher for small screens */}
          <div role="tablist" aria-label="GrowthOS modules" className="no-scrollbar flex gap-1 overflow-x-auto border-b border-line bg-surface px-3 py-2 md:hidden">
            {growthosModules.map((m) => {
              const Icon = icons[m.id] ?? BarChart3;
              return (
                <button
                  key={m.id}
                  role="tab"
                  type="button"
                  aria-selected={m.id === active}
                  onClick={() => select(m.id)}
                  className={cn("flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium whitespace-nowrap", m.id === active ? "bg-navy text-white" : "text-muted")}
                >
                  <Icon aria-hidden className="size-3.5" />
                  {m.name}
                </button>
              );
            })}
          </div>

          <div className="space-y-3 p-3 md:space-y-4 md:p-4">
            {/* North-star metrics */}
            <dl className="no-scrollbar flex overflow-x-auto rounded-xl border border-line bg-surface">
              {growthosMetrics.map((m) => {
                const good = m.name === "CAC" ? m.delta.startsWith("−") : true;
                return (
                  <div key={m.name} className="min-w-[7.5rem] flex-1 border-r border-line px-3.5 py-3 last:border-r-0">
                    <dt className="truncate text-[0.6875rem] text-muted">{m.name}</dt>
                    <dd className="mt-1 flex items-baseline gap-1.5">
                      <span className="tabular text-base font-semibold tracking-[-0.02em] text-navy lg:text-lg">{m.value}</span>
                      <span className={cn("tabular text-[0.625rem] font-medium", good ? "text-success-ink" : "text-muted")}>{m.delta}</span>
                    </dd>
                  </div>
                );
              })}
            </dl>

            <div className="grid grid-cols-1 gap-3 md:gap-4 lg:grid-cols-12">
              <PanelCard title={mod.chartLabel} meta={ranges.find((r) => r.id === range)!.label} className="lg:col-span-8">
                <p className="-mt-1 max-w-xl text-[0.9375rem] leading-snug font-medium tracking-[-0.01em] text-navy">{mod.question}</p>
                <TrendChart
                  key={`${mod.id}-${range}-${compare}`}
                  className="mt-4 h-40 md:h-48 lg:h-64"
                  values={series}
                  compare={previous}
                  color={mod.id === "ai-search" || mod.id === "copilot" ? "cyan" : "blue"}
                  summary={`Illustrative chart: ${mod.chartLabel.toLowerCase()} over ${ranges.find((r) => r.id === range)!.label}.`}
                />
              </PanelCard>

              {mod.id === "overview" ? (
                <AIInsightPanel className="lg:col-span-4" />
              ) : (
                <PanelCard title="At a glance" className="lg:col-span-4">
                  <dl className="divide-y divide-line/80">
                    {mod.rows.map((r) => (
                      <div key={r.label} className="flex items-baseline justify-between gap-3 py-2.5 first:pt-0">
                        <dt className="text-[0.8125rem] text-muted">{r.label}</dt>
                        <dd className="tabular text-[0.9375rem] font-semibold text-navy">{r.value}</dd>
                      </div>
                    ))}
                  </dl>
                </PanelCard>
              )}

              {mod.id === "overview" ? (
                <>
                  <div className="lg:col-span-7"><SearchOpportunityTable limit={4} /></div>
                  <div className="lg:col-span-5"><RevenueAttribution /></div>
                </>
              ) : Extra ? (
                <div className="lg:col-span-12">{Extra()}</div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
