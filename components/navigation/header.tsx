"use client";

import Link from "next/link";
import { NavigationMenu } from "radix-ui";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Logo } from "@/components/navigation/logo";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { CtaLink } from "@/components/ui/cta-link";
import { useScrolled } from "@/hooks/use-scrolled";
import { cta, navigation } from "@/lib/config/site";
import { cn } from "@/lib/utils";
import type { NavGroup } from "@/types";

const triggerClass =
  "group flex h-10 items-center gap-1 rounded-control px-2.5 text-[0.9375rem] font-medium text-ink/80 transition-colors hover:text-navy data-[state=open]:text-navy";

function Panel({ group }: { group: NavGroup }) {
  const links = group.links ?? [];
  const dense = links.length > 9;
  return (
    <div className="grid grid-cols-12 gap-8 p-7">
      <div className="col-span-4 flex flex-col justify-between border-r border-line pr-8">
        <div>
          <p className="label-mono text-muted">{group.label}</p>
          <p className="mt-3 text-[1.375rem] leading-tight font-semibold tracking-[-0.02em] text-navy">{group.summary}</p>
        </div>
        <NavigationMenu.Link asChild>
          <Link href={group.href} className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-blue-ink hover:underline hover:underline-offset-4">
            {group.label === "Solutions" ? "Start with SEO & Search" : `All ${group.label.toLowerCase()}`}
            <ArrowUpRight aria-hidden className="size-4" />
          </Link>
        </NavigationMenu.Link>
      </div>
      <ul className={cn("col-span-8 grid gap-x-6", dense ? "grid-cols-3 gap-y-0.5" : "grid-cols-2 gap-y-1")}>
        {links.map((l) => (
          <li key={l.href + l.label}>
            <NavigationMenu.Link asChild>
              <Link href={l.href} className="group/item block rounded-control px-3 py-2.5 transition-colors hover:bg-canvas">
                <span className="flex items-center justify-between text-[0.9375rem] font-medium text-ink">
                  {l.label}
                  <ArrowUpRight aria-hidden className="size-3.5 -translate-x-1 text-muted opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                </span>
                {l.description ? <span className="mt-0.5 block text-[0.8125rem] leading-snug text-muted">{l.description}</span> : null}
              </Link>
            </NavigationMenu.Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Header() {
  const scrolled = useScrolled();
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-control focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <NavigationMenu.Root
        delayDuration={80}
        aria-label="Primary"
        className={cn(
          "glass relative mx-auto flex h-16 !bg-white/92 max-w-[80rem] items-center justify-between rounded-2xl pr-2.5 pl-5 transition-shadow duration-300",
          scrolled ? "shadow-float" : "shadow-soft",
        )}
      >
        <Link href="/" aria-label="SERPMOZ home" className="rounded-md">
          <Logo />
        </Link>

        <NavigationMenu.List className="hidden items-center xl:flex">
          {navigation.map((group) =>
            group.links ? (
              <NavigationMenu.Item key={group.label}>
                <NavigationMenu.Trigger className={triggerClass}>
                  {group.label}
                  <ChevronDown aria-hidden className="size-3.5 text-muted transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="w-full motion-safe:animate-fade-in">
                  <Panel group={group} />
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ) : (
              <NavigationMenu.Item key={group.label}>
                <NavigationMenu.Link asChild>
                  <Link href={group.href} className={triggerClass}>
                    {group.label}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ),
          )}
        </NavigationMenu.List>

        <div className="flex items-center gap-1.5">
          <CtaLink href={cta.strategist.href} variant="ghost" size="sm" arrow={false} className="hidden h-10 min-[1400px]:inline-flex">
            Talk to a Strategist
          </CtaLink>
          <CtaLink href={cta.audit.href} variant="primary" size="sm" className="hidden h-10 px-4 sm:inline-flex">
            {cta.audit.label}
          </CtaLink>
          <MobileNav />
        </div>

        <div className="absolute top-full left-0 flex w-full justify-center pt-2 perspective-[2000px]">
          <NavigationMenu.Viewport className="relative h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top overflow-hidden rounded-2xl border border-line bg-surface shadow-float transition-[height] duration-300 ease-out-quint motion-safe:data-[state=open]:animate-menu-in" />
        </div>
      </NavigationMenu.Root>
    </header>
  );
}
