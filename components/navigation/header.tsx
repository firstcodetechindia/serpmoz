"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu, Tabs } from "radix-ui";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { NavTile, navIcon } from "@/components/navigation/nav-icons";
import { HomeLink } from "@/components/navigation/home-link";
import { Logo } from "@/components/navigation/logo";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { CtaLink } from "@/components/ui/cta-link";
import { useScrolled } from "@/hooks/use-scrolled";
import { cta, headerNavigation as navigation } from "@/lib/config/site";
import { activeGroup, isCurrent } from "@/lib/nav-active";
import { cn } from "@/lib/utils";
import type { NavGroup, NavLink } from "@/types";

const triggerClass =
  "group relative flex h-9 items-center gap-1.5 rounded-full px-3.5 text-[0.9375rem] whitespace-nowrap font-medium text-[var(--hd-soft)] transition-colors duration-200 hover:bg-[var(--hd-line)] hover:text-[var(--hd-fg)] data-[state=open]:bg-[var(--hd-line)] data-[state=open]:text-[var(--hd-fg)] data-[current]:font-semibold data-[current]:text-[var(--hd-fg)]";

/** The dot that marks the section the visitor is in. */
const CurrentDot = () => <span aria-hidden className="size-1.5 rounded-full bg-orange" />;

/** Marks the link for the page being viewed. */
const current = (pathname: string, href: string) => (isCurrent(pathname, href) ? ("page" as const) : undefined);

const rowClass =
  "group/item flex items-center gap-3.5 rounded-2xl p-2.5 transition-colors duration-200 hover:bg-canvas aria-[current=page]:bg-blue-tint";

/** One destination: tile, name, one line of description. */
function Row({ link, pathname }: { link: NavLink; pathname: string }) {
  return (
    <NavigationMenu.Link asChild>
      <Link href={link.href} aria-current={current(pathname, link.href)} className={rowClass}>
        <NavTile link={link} className="group-hover/item:border-navy group-hover/item:bg-navy group-hover/item:text-white group-aria-[current=page]/item:border-blue group-aria-[current=page]/item:bg-blue group-aria-[current=page]/item:text-white" />
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-1.5 text-[0.9375rem] font-semibold text-navy">
            {link.label}
            <ArrowRight aria-hidden className="size-3.5 -translate-x-1 text-blue-ink opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
          </span>
          {link.description ? <span className="mt-0.5 line-clamp-1 text-[0.8125rem] text-muted">{link.description}</span> : null}
        </span>
      </Link>
    </NavigationMenu.Link>
  );
}

/** The dark card at the end of every panel: what the section is, and the next step. */
function Feature({ eyebrow, title, link, label }: { eyebrow: string; title: string; link: string; label: string }) {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-navy p-6 text-white">
      <div aria-hidden className="glow absolute -top-16 -right-16 size-56 bg-blue/50" />
      <div aria-hidden className="glow absolute -bottom-20 -left-10 size-48 bg-cyan/25" />
      <div className="relative">
        <p className="label-mono text-[0.6875rem] text-cyan">{eyebrow}</p>
        <p className="mt-3 text-xl leading-snug font-semibold tracking-[-0.02em]">{title}</p>
        <NavigationMenu.Link asChild>
          <Link href={link} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-orange">
            {label}
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </NavigationMenu.Link>
      </div>
      <div className="relative mt-8 border-t border-white/15 pt-5">
        <p className="text-[0.8125rem] leading-relaxed text-white/70">Not sure where to start? The growth audit finds the work that matters first.</p>
        <NavigationMenu.Link asChild>
          <Link href={cta.audit.href} className="mt-3 inline-flex h-10 items-center gap-2 rounded-control bg-orange px-4 text-sm font-semibold text-navy-deep transition-colors hover:bg-orange/90">
            {cta.audit.label}
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </NavigationMenu.Link>
      </div>
    </div>
  );
}

/** Solutions: disciplines down the side, their services beside them. */
function Disciplines({ group, pathname }: { group: NavGroup; pathname: string }) {
  const columns = group.columns!;
  const here = columns.find((c) => c.links.some((l) => isCurrent(pathname, l.href)));
  const [open, setOpen] = useState((here ?? columns[0]).id);

  return (
    <Tabs.Root value={open} onValueChange={setOpen} orientation="vertical" className="grid grid-cols-12">
      <Tabs.List aria-label="Disciplines" className="col-span-3 flex flex-col gap-1 border-r border-line bg-canvas p-3">
        {columns.map((col) => {
          const Icon = navIcon(col.id);
          return (
            <Tabs.Trigger
              key={col.id}
              value={col.id}
              onMouseEnter={() => setOpen(col.id)}
              className="group/tab flex cursor-pointer items-center gap-3 rounded-2xl p-2.5 text-left transition-colors duration-200 hover:bg-white data-[state=active]:bg-white data-[state=active]:shadow-[0_8px_24px_-16px_rgb(11_31_58/0.5)]"
            >
              <span aria-hidden className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-line bg-white text-navy transition-colors group-data-[state=active]/tab:border-navy group-data-[state=active]/tab:bg-navy group-data-[state=active]/tab:text-white">
                <Icon className="size-[1.125rem]" strokeWidth={1.75} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2 text-[0.9375rem] font-semibold text-navy">
                  {col.title}
                  {col.id === here?.id ? <CurrentDot /> : null}
                </span>
                <span className="mt-0.5 line-clamp-2 text-[0.8125rem] leading-snug text-muted">{col.description}</span>
              </span>
              <ChevronRight aria-hidden className="size-4 text-muted opacity-0 transition-opacity group-data-[state=active]/tab:opacity-100" />
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>

      <div className="col-span-6 p-6">
        {columns.map((col) => (
          <Tabs.Content key={col.id} value={col.id} className="motion-safe:animate-fade-in">
            <div className="flex items-center justify-between px-2.5">
              <p className="label-mono text-muted">{col.title}</p>
              <NavigationMenu.Link asChild>
                <Link href="/services/" className="inline-flex items-center gap-1 text-[0.8125rem] font-medium text-blue-ink hover:underline hover:underline-offset-4">
                  {group.all}
                  <ArrowRight aria-hidden className="size-3.5" />
                </Link>
              </NavigationMenu.Link>
            </div>
            <ul className="mt-3 grid grid-cols-2 gap-x-2 gap-y-0.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <NavigationMenu.Link asChild>
                    <Link href={l.href} aria-current={current(pathname, l.href)} className="group/item block rounded-xl px-2.5 py-2.5 transition-colors duration-200 hover:bg-canvas aria-[current=page]:bg-blue-tint">
                      <span className="flex items-center gap-1.5 text-[0.9375rem] font-semibold text-navy group-aria-[current=page]/item:text-blue-ink">
                        {l.label}
                        <ArrowRight aria-hidden className="size-3.5 -translate-x-1 text-blue-ink opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                      </span>
                      {l.description ? <span className="mt-0.5 line-clamp-2 text-[0.8125rem] leading-snug text-muted">{l.description}</span> : null}
                    </Link>
                  </NavigationMenu.Link>
                </li>
              ))}
            </ul>
          </Tabs.Content>
        ))}
      </div>

      <div className="col-span-3 p-3 pl-0">
        <Feature eyebrow={group.label} title={group.summary ?? ""} link={group.href} label={group.all ?? group.label} />
      </div>
    </Tabs.Root>
  );
}

function Panel({ group, pathname }: { group: NavGroup; pathname: string }) {
  if (group.columns) return <Disciplines group={group} pathname={pathname} />;
  const links = group.links ?? [];
  return (
    <div className="grid grid-cols-12">
      <ul className={cn("col-span-9 grid content-start gap-x-2 gap-y-1 p-5", links.length > 8 ? "grid-cols-3" : "grid-cols-2")}>
        {links.map((l) => (
          <li key={l.href + l.label}><Row link={l} pathname={pathname} /></li>
        ))}
      </ul>
      <div className="col-span-3 p-3 pl-0">
        <Feature eyebrow={group.label} title={group.summary ?? ""} link={group.href} label={group.all ?? group.label} />
      </div>
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
        className={cn("shell relative flex items-center justify-between gap-4 transition-[height] duration-300 ease-out-quint lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-6", scrolled ? "h-[4.5rem]" : "h-[5.25rem]")}
      >
        {/* Logo on the left with room around it, the menu centred in the bar, the actions on the right */}
        <HomeLink aria-label="SERPMOZ home" className="justify-self-start rounded-md py-1">
          <Logo tagline className="text-[var(--hd-fg)] transition-colors duration-300" />
        </HomeLink>

        <NavigationMenu.List className="hidden items-center gap-1 lg:flex">
          {navigation.map((group) =>
            group.links ? (
              <NavigationMenu.Item key={group.label}>
                <NavigationMenu.Trigger className={triggerClass} data-current={active === group.label ? "" : undefined}>
                  {active === group.label ? <CurrentDot /> : null}
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
                    {active === group.label ? <CurrentDot /> : null}
                    {group.label}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ),
          )}
        </NavigationMenu.List>

        <div className="flex items-center gap-1.5 justify-self-end">
          <CtaLink href={cta.strategist.href} variant="ghost" size="sm" arrow={false} className="hidden h-10 text-[var(--hd-fg)] hover:bg-[var(--hd-line)] xl:inline-flex">
            Talk to a Strategist
          </CtaLink>
          <CtaLink href={cta.audit.href} variant="primary" size="sm" className="hidden h-10 px-4 sm:inline-flex">
            {cta.audit.label}
          </CtaLink>
          <MobileNav />
        </div>

        <div className="absolute top-full right-5 left-5 flex justify-center pt-2 perspective-[2000px] md:right-10 md:left-10">
          <NavigationMenu.Viewport className="relative h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[0_40px_80px_-30px_rgb(11_31_58/0.45)] transition-[height] duration-300 ease-out-quint motion-safe:data-[state=open]:animate-menu-in" />
        </div>
      </NavigationMenu.Root>
    </header>
  );
}
