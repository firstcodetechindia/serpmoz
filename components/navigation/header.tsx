"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "radix-ui";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Logo } from "@/components/navigation/logo";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { CtaLink } from "@/components/ui/cta-link";
import { useScrolled } from "@/hooks/use-scrolled";
import { cta, navigation } from "@/lib/config/site";
import { activeGroup, isCurrent } from "@/lib/nav-active";
import { cn } from "@/lib/utils";
import type { NavGroup } from "@/types";

const triggerClass =
  "group relative flex h-10 items-center gap-1 rounded-control px-3 text-[0.9375rem] font-medium text-[var(--hd-soft)] transition-colors hover:text-[var(--hd-fg)] data-[state=open]:text-[var(--hd-fg)] after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-orange after:transition-transform after:duration-300 hover:after:scale-x-100 data-[state=open]:after:scale-x-100 data-[current]:font-semibold data-[current]:text-[var(--hd-fg)] data-[current]:after:scale-x-100";

const itemClass = "group/item block rounded-control px-3 py-2 transition-colors hover:bg-canvas aria-[current=page]:bg-blue-tint";

/** Marks the link for the page being viewed. */
const current = (pathname: string, href: string) => (isCurrent(pathname, href) ? ("page" as const) : undefined);

function Columns({ group, pathname }: { group: NavGroup; pathname: string }) {
  return (
    <div className="p-7">
      <div className="grid grid-cols-5 gap-6">
        {group.columns!.map((col) => (
          <div key={col.title}>
            <NavigationMenu.Link asChild>
              <Link href={col.href} aria-current={current(pathname, col.href)} className="label-mono block border-b border-line px-3 pb-3 text-navy hover:text-blue-ink aria-[current=page]:border-orange aria-[current=page]:text-blue-ink">
                {col.title}
              </Link>
            </NavigationMenu.Link>
            <ul className="mt-2">
              {col.links.map((l) => (
                <li key={l.href}>
                  <NavigationMenu.Link asChild>
                    <Link href={l.href} aria-current={current(pathname, l.href)} className={cn(itemClass, "text-[0.9375rem] text-ink/85 hover:text-navy aria-[current=page]:font-semibold aria-[current=page]:text-blue-ink")}>
                      {l.label}
                    </Link>
                  </NavigationMenu.Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-line px-3 pt-5">
        <p className="text-sm text-muted">{group.summary}</p>
        <NavigationMenu.Link asChild>
          <Link href={group.href} className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-ink hover:underline hover:underline-offset-4">
            {group.all}
            <ArrowUpRight aria-hidden className="size-4" />
          </Link>
        </NavigationMenu.Link>
      </div>
    </div>
  );
}

function Panel({ group, pathname }: { group: NavGroup; pathname: string }) {
  if (group.columns) return <Columns group={group} pathname={pathname} />;
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
            {group.all ?? group.label}
            <ArrowUpRight aria-hidden className="size-4" />
          </Link>
        </NavigationMenu.Link>
      </div>
      <ul className={cn("col-span-8 grid content-start gap-x-6", dense ? "grid-cols-3 gap-y-0.5" : "grid-cols-2 gap-y-1")}>
        {links.map((l) => (
          <li key={l.href + l.label}>
            <NavigationMenu.Link asChild>
              <Link href={l.href} aria-current={current(pathname, l.href)} className={itemClass}>
                <span className="flex items-center justify-between text-[0.9375rem] font-medium text-ink group-aria-[current=page]/item:font-semibold group-aria-[current=page]/item:text-blue-ink">
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
  const pathname = usePathname();
  const active = activeGroup(pathname, navigation);
  return (
    <header
      data-scrolled={scrolled ? "" : undefined}
      className={cn(
        "site-header fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        scrolled ? "border-line bg-white shadow-[0_10px_30px_-18px_rgb(11_31_58/0.35)]" : "border-[var(--hd-line)] bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-control focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <NavigationMenu.Root
        delayDuration={80}
        aria-label="Primary"
        className={cn("shell relative flex items-center justify-between transition-[height] duration-300 ease-out-quint", scrolled ? "h-16" : "h-20")}
      >
        <Link href="/" aria-label="SERPMOZ home" className="rounded-md">
          <Logo className="text-[var(--hd-fg)] transition-colors duration-300" />
        </Link>

        <NavigationMenu.List className="hidden items-center xl:flex">
          {navigation.map((group) =>
            group.links ? (
              <NavigationMenu.Item key={group.label}>
                <NavigationMenu.Trigger className={triggerClass} data-current={active === group.label ? "" : undefined}>
                  {group.label}
                  {active === group.label ? <span className="sr-only"> (current section)</span> : null}
                  <ChevronDown aria-hidden className="size-3.5 opacity-60 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="w-full motion-safe:animate-fade-in">
                  <Panel group={group} pathname={pathname} />
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ) : (
              <NavigationMenu.Item key={group.label}>
                <NavigationMenu.Link asChild>
                  <Link href={group.href} className={triggerClass} data-current={active === group.label ? "" : undefined} aria-current={isCurrent(pathname, group.href) ? "page" : undefined}>
                    {group.label}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ),
          )}
        </NavigationMenu.List>

        <div className="flex items-center gap-1.5">
          <CtaLink href={cta.strategist.href} variant="ghost" size="sm" arrow={false} className="hidden h-10 text-[var(--hd-fg)] hover:bg-[var(--hd-line)] min-[1400px]:inline-flex">
            Talk to a Strategist
          </CtaLink>
          <CtaLink href={cta.audit.href} variant="primary" size="sm" className="hidden h-10 px-4 sm:inline-flex">
            {cta.audit.label}
          </CtaLink>
          <MobileNav />
        </div>

        <div className="absolute top-full right-5 left-5 flex justify-center pt-2 perspective-[2000px] md:right-10 md:left-10">
          <NavigationMenu.Viewport className="relative h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top overflow-hidden rounded-2xl border border-line bg-surface shadow-float transition-[height] duration-300 ease-out-quint motion-safe:data-[state=open]:animate-menu-in" />
        </div>
      </NavigationMenu.Root>
    </header>
  );
}
