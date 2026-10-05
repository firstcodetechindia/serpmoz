"use client";

import { useState } from "react";
import { Tabs } from "radix-ui";
import {
  BarChart3, Bot, FileText, Gauge, LayoutGrid, MapPin, MousePointerClick, Search, Sparkles, Swords, Users, Wallet,
  type LucideIcon,
} from "lucide-react";
import { AppWindow, IllustrativeTag } from "@/components/dashboard/primitives";
import { TrendChart } from "@/components/dashboard/trend-chart";
import { growthosMetrics, growthosModules } from "@/data/growthos";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  overview: LayoutGrid,
  seo: Search,
  "ai-search": Sparkles,
  local: MapPin,
  competitors: Swords,
  content: FileText,
  ppc: MousePointerClick,
  leads: Users,
  cro: Gauge,
  revenue: Wallet,
  copilot: Bot,
};

/** Interactive product preview. Module navigation is real; the numbers are sample data. */
export function GrowthosPreview({ className }: { className?: string }) {
  const [active, setActive] = useState(growthosModules[0].id);

  return (
    <AppWindow
      className={className}
      title="GrowthOS"
      crumb={growthosModules.find((m) => m.id === active)?.name}
      actions={
        <>
          <span className="label-mono hidden rounded-full border border-line px-2 py-1 text-[0.625rem] text-ink sm:inline">This quarter</span>
          <IllustrativeTag />
        </>
      }
    >
      {/* North-star metrics stay visible in every module */}
      <dl className="no-scrollbar flex overflow-x-auto border-b border-line/80">
        {growthosMetrics.map((m) => {
          const good = m.name === "CAC" ? m.delta.startsWith("−") : true;
          return (
            <div key={m.name} className="min-w-[8.25rem] flex-1 border-r border-line/80 px-4 py-4 last:border-r-0">
              <dt className="truncate text-xs text-muted">{m.name}</dt>
              <dd className="mt-1.5 flex items-baseline gap-2">
                <span className="tabular text-lg font-semibold tracking-[-0.02em] text-navy">{m.value}</span>
                <span className={cn("tabular text-[0.6875rem] font-medium", good ? "text-success-ink" : "text-muted")}>{m.delta}</span>
              </dd>
            </div>
          );
        })}
      </dl>

      <Tabs.Root
        value={active}
        onValueChange={(v) => {
          setActive(v);
          track({ event: "growthos_module_view", module: v });
        }}
        orientation="vertical"
        className="grid md:grid-cols-[12.5rem_1fr]"
      >
        <Tabs.List
          aria-label="GrowthOS modules"
          className="no-scrollbar flex gap-1 overflow-x-auto border-b border-line/80 p-2 md:block md:space-y-0.5 md:border-r md:border-b-0 md:p-3"
        >
          {growthosModules.map((m) => {
            const Icon = icons[m.id] ?? BarChart3;
            return (
              <Tabs.Trigger
                key={m.id}
                value={m.id}
                className="flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2 text-[0.8125rem] font-medium text-muted transition-colors hover:text-navy data-[state=active]:bg-navy data-[state=active]:text-white md:w-full"
              >
                <Icon aria-hidden className="size-4" />
                {m.name}
              </Tabs.Trigger>
            );
          })}
        </Tabs.List>

        {growthosModules.map((m) => (
          <Tabs.Content key={m.id} value={m.id} className="min-w-0 motion-safe:animate-fade-in data-[state=active]:flex">
            <div className="grid w-full lg:grid-cols-12">
              <div className="p-5 sm:p-6 lg:col-span-8 lg:border-r lg:border-line/80">
                <p className="label-mono text-[0.625rem] text-muted">The question this module answers</p>
                <p className="mt-2 max-w-xl text-lg leading-snug font-medium tracking-[-0.015em] text-navy sm:text-xl">{m.question}</p>
                <div className="mt-7 flex items-baseline justify-between">
                  <h3 className="label-mono text-muted">{m.chartLabel}</h3>
                  <span className="label-mono text-[0.625rem] text-muted/80">12 weeks</span>
                </div>
                <TrendChart
                  key={m.id}
                  className="mt-3 h-40 sm:h-48 md:h-64"
                  values={m.series}
                  color={m.id === "ai-search" || m.id === "copilot" ? "cyan" : "blue"}
                  summary={`Illustrative chart: ${m.chartLabel.toLowerCase()} trending upward over twelve weeks.`}
                />
              </div>
              <div className="border-t border-line/80 p-5 sm:p-6 lg:col-span-4 lg:border-t-0">
                <h3 className="label-mono text-muted">At a glance</h3>
                <dl className="mt-3 divide-y divide-line/80">
                  {m.rows.map((r) => (
                    <div key={r.label} className="flex items-baseline justify-between gap-3 py-3">
                      <dt className="text-[0.8125rem] text-muted">{r.label}</dt>
                      <dd className="tabular text-[0.9375rem] font-semibold text-navy">{r.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </AppWindow>
  );
}
