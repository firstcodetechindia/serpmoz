"use client";

import Link from "next/link";
import { Tabs } from "radix-ui";
import { ArrowUpRight } from "lucide-react";
import { ArrowLink } from "@/components/ui/cta-link";
import { CapabilityVisual } from "@/components/visuals/capability-visual";
import { serviceCategories } from "@/data/services/catalog";
import { track } from "@/lib/analytics";

/**
 * Service explorer. Five capability groups on the left; choosing one swaps the
 * product illustration and the list of services on the right.
 */
export function ServicesIndex() {
  return (
    <Tabs.Root
      defaultValue={serviceCategories[0].id}
      orientation="vertical"
      onValueChange={(v) => track({ event: "service_explore", category: v })}
      className="grid gap-8 lg:grid-cols-12"
    >
      <Tabs.List
        aria-label="Service categories"
        className="no-scrollbar -mx-5 flex gap-1.5 overflow-x-auto px-5 md:-mx-10 md:px-10 lg:col-span-4 lg:mx-0 lg:block lg:overflow-visible lg:px-0"
      >
        {serviceCategories.map((c, i) => (
          <Tabs.Trigger
            key={c.id}
            value={c.id}
            className="group relative flex shrink-0 items-baseline gap-4 rounded-full border border-line px-4 py-2 text-left transition-colors data-[state=active]:border-navy data-[state=active]:bg-navy lg:w-full lg:rounded-none lg:border-0 lg:border-t lg:border-line lg:px-0 lg:py-5 lg:data-[state=active]:border-line lg:data-[state=active]:bg-transparent"
          >
            <span aria-hidden className="absolute -top-px left-0 hidden h-0.5 w-0 bg-orange transition-[width] duration-500 ease-out-quint group-data-[state=active]:w-full lg:block" />
            <span className="label-mono hidden text-muted lg:inline">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-[0.9375rem] font-medium whitespace-nowrap text-ink/60 transition-colors group-hover:text-navy group-data-[state=active]:text-white lg:text-[clamp(1.375rem,1rem+1.1vw,1.875rem)] lg:leading-none lg:font-semibold lg:tracking-[-0.03em] lg:whitespace-normal lg:text-ink/35 lg:group-data-[state=active]:text-navy">
              {c.label}
            </span>
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {serviceCategories.map((c) => (
        <Tabs.Content key={c.id} value={c.id} className="motion-safe:animate-fade-in lg:col-span-8">
          <div className="grid gap-8 rounded-panel bg-canvas p-5 md:grid-cols-2 md:p-8 lg:gap-10">
            <CapabilityVisual category={c.id} />
            <div className="flex flex-col">
              <p className="text-[1.0625rem] leading-relaxed text-ink">{c.statement}</p>
              <ul className="mt-6 grid grid-cols-2 border-b border-line">
                {c.items.map((item) => (
                  <li key={item.name} className="border-t border-line odd:pr-3">
                    <Link href={item.href ?? c.href} className="group/s flex items-center justify-between gap-2 py-2.5 text-sm text-ink transition-colors hover:text-blue-ink">
                      {item.name}
                      <ArrowUpRight aria-hidden className="size-3.5 shrink-0 text-line-strong transition-colors group-hover/s:text-blue-ink" />
                    </Link>
                  </li>
                ))}
              </ul>
              <ArrowLink href={c.href} className="mt-auto pt-6">
                Explore {c.label}
              </ArrowLink>
            </div>
          </div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
