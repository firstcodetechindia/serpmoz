"use client";

import Link from "next/link";
import { Tabs } from "radix-ui";
import { ArrowUpRight } from "lucide-react";
import { ArrowLink } from "@/components/ui/cta-link";
import { serviceCategories } from "@/data/services/catalog";

/** Category switcher: five jobs on the left, the capabilities for each on the right. */
export function ServicesIndex() {
  return (
    <Tabs.Root defaultValue={serviceCategories[0].id} orientation="vertical" className="grid gap-8 lg:grid-cols-12">
      <Tabs.List
        aria-label="Service categories"
        className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto px-5 lg:col-span-5 lg:mx-0 lg:block lg:overflow-visible lg:px-0"
      >
        {serviceCategories.map((c, i) => (
          <Tabs.Trigger
            key={c.id}
            value={c.id}
            className="group flex shrink-0 items-baseline gap-4 rounded-full border border-line px-4 py-2 text-left transition-colors data-[state=active]:border-navy data-[state=active]:bg-navy lg:w-full lg:rounded-none lg:border-0 lg:border-t lg:border-line lg:px-0 lg:py-5 lg:data-[state=active]:border-line lg:data-[state=active]:bg-transparent"
          >
            <span className="label-mono hidden text-muted lg:inline">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-[0.9375rem] font-medium whitespace-nowrap text-ink/60 transition-colors group-hover:text-navy group-data-[state=active]:text-white lg:text-[clamp(1.5rem,1.1rem+1.4vw,2.25rem)] lg:leading-none lg:font-semibold lg:tracking-[-0.035em] lg:text-ink/35 lg:group-data-[state=active]:text-navy">
              {c.label}
            </span>
            <span aria-hidden className="ml-auto hidden size-2 self-center rounded-full bg-orange opacity-0 transition-opacity group-data-[state=active]:opacity-100 lg:block" />
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {serviceCategories.map((c) => (
        <Tabs.Content key={c.id} value={c.id} className="motion-safe:animate-fade-in lg:col-span-6 lg:col-start-7 lg:pt-5">
          <p className="max-w-lg text-lead text-ink">{c.statement}</p>
          <ul className="mt-8 grid grid-cols-2 border-b border-line">
            {c.items.map((item) => (
              <li key={item.name} className="border-t border-line odd:pr-4">
                <Link
                  href={item.href ?? c.href}
                  className="group/s flex items-center justify-between py-3 text-[0.9375rem] text-ink transition-colors hover:text-blue-ink"
                >
                  {item.name}
                  <ArrowUpRight aria-hidden className="size-3.5 text-line-strong transition-colors group-hover/s:text-blue-ink" />
                </Link>
              </li>
            ))}
          </ul>
          <ArrowLink href={c.href} className="mt-8">
            Explore {c.label}
          </ArrowLink>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
