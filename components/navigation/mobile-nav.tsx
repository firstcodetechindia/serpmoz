"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "radix-ui";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/navigation/logo";
import { NavTile, navIcon } from "@/components/navigation/nav-icons";
import { CtaLink } from "@/components/ui/cta-link";
import { cta, navigation, site } from "@/lib/config/site";
import { activeGroup, isCurrent } from "@/lib/nav-active";
import { cn } from "@/lib/utils";
import type { NavGroup } from "@/types";

const tile = "flex size-11 shrink-0 items-center justify-center rounded-2xl";
const card = "flex w-full items-center gap-3.5 rounded-2xl border border-line bg-surface p-3 text-left transition-colors active:bg-canvas";

/** A small tag on the section or page the visitor is on. */
const Here = () => <span className="rounded-full bg-orange/15 px-2 py-0.5 text-[0.6875rem] font-semibold text-orange-ink">You are here</span>;

/** The links of one section. Solutions adds a row of discipline tabs. */
function Section({ group, pathname, close }: { group: NavGroup; pathname: string; close: () => void }) {
  const columns = group.columns;
  const here = columns?.find((c) => c.links.some((l) => isCurrent(pathname, l.href)));
  const [tab, setTab] = useState((here ?? columns?.[0])?.id);
  const column = columns?.find((c) => c.id === tab);
  const links = column?.links ?? group.links ?? [];

  return (
    <div className="motion-safe:animate-[panel-in_240ms_var(--ease-out-quint)_both]">
      {columns ? (
        <div role="tablist" aria-label="Disciplines" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {columns.map((c) => {
            const Icon = navIcon(c.id);
            const on = c.id === tab;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setTab(c.id)}
                className={cn(
                  "flex h-10 shrink-0 cursor-pointer items-center gap-2 rounded-full border px-3.5 text-sm font-medium transition-colors",
                  on ? "border-navy bg-navy text-white" : "border-line bg-surface text-ink",
                )}
              >
                <Icon aria-hidden className="size-4" strokeWidth={1.75} />
                {c.title}
                {c.id === here?.id && !on ? <span aria-hidden className="size-1.5 rounded-full bg-orange" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}

      {column ? <p className="mt-4 text-sm text-muted">{column.description}.</p> : null}

      <ul key={tab} className={cn("grid gap-2 motion-safe:animate-fade-in", columns ? "mt-3" : "mt-1")}>
        {links.map((l) => {
          const on = isCurrent(pathname, l.href);
          return (
            <li key={l.href + l.label}>
              <Link href={l.href} onClick={close} aria-current={on ? "page" : undefined} className={cn(card, on && "border-blue/40 bg-blue-tint")}>
                {columns ? null : <NavTile link={l} className={cn("size-11 rounded-2xl", on && "border-blue bg-blue text-white")} />}
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2 text-base font-semibold text-navy">
                    {l.label}
                    {on ? <Here /> : null}
                  </span>
                  {l.description ? <span className="mt-0.5 line-clamp-2 text-[0.8125rem] leading-snug text-muted">{l.description}</span> : null}
                </span>
                <ChevronRight aria-hidden className="size-4 shrink-0 text-muted" />
              </Link>
            </li>
          );
        })}
      </ul>

      <Link href={group.href} onClick={close} className="mt-3 flex items-center justify-between rounded-2xl bg-navy px-4 py-3.5 text-[0.9375rem] font-semibold text-white">
        {group.all ?? group.label}
        <ArrowRight aria-hidden className="size-4" />
      </Link>
    </div>
  );
}

/**
 * Full-screen navigation for small screens. The first screen lists the
 * sections; choosing one opens its links, with a back button to return.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const pathname = usePathname();
  const active = activeGroup(pathname, navigation);
  const group = navigation.find((g) => g.label === section);
  const close = () => setOpen(false);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (next) setSection(null);
      }}
    >
      <Dialog.Trigger
        className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full text-[var(--hd-fg)] transition-colors hover:bg-[var(--hd-line)] xl:hidden"
        aria-label="Open menu"
      >
        <Menu aria-hidden className="size-5" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content aria-describedby={undefined} className="fixed inset-0 z-[70] flex flex-col bg-canvas motion-safe:animate-sheet-in xl:hidden">
          <Dialog.Title className="sr-only">Menu</Dialog.Title>

          {/* Top bar: logo on the first screen, back and section name inside a section */}
          <div className="flex h-16 shrink-0 items-center justify-between gap-3 border-b border-line bg-surface px-4">
            {group ? (
              <button type="button" onClick={() => setSection(null)} className="-ml-1 inline-flex h-10 cursor-pointer items-center gap-2 rounded-full pr-3 pl-2 text-[0.9375rem] font-medium text-navy active:bg-canvas">
                <ArrowLeft aria-hidden className="size-5" />
                Menu
              </button>
            ) : (
              <Link href="/" aria-label="SERPMOZ home" onClick={close} className="pl-1">
                <Logo />
              </Link>
            )}
            {group ? <p aria-live="polite" className="absolute left-1/2 -translate-x-1/2 text-[0.9375rem] font-semibold text-navy">{group.label}</p> : null}
            <Dialog.Close className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-canvas text-navy active:bg-line" aria-label="Close menu">
              <X aria-hidden className="size-5" />
            </Dialog.Close>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-x-hidden overflow-y-auto overscroll-contain px-5 pt-5 pb-8">
            {group ? (
              <Section key={group.label} group={group} pathname={pathname} close={close} />
            ) : (
              <div className="motion-safe:animate-fade-in">
                <p className="label-mono px-1 text-muted">Browse</p>
                <ul className="mt-3 grid gap-2">
                  {navigation.map((g) => {
                    const Icon = navIcon(g.label);
                    const on = active === g.label;
                    const inner = (
                      <>
                        <span aria-hidden className={cn(tile, on ? "bg-navy text-white" : "bg-blue-tint text-blue-ink")}>
                          <Icon className="size-5" strokeWidth={1.75} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-2 text-[1.0625rem] font-semibold tracking-[-0.01em] text-navy">
                            {g.label}
                            {on ? <Here /> : null}
                          </span>
                          {g.summary ? <span className="mt-0.5 line-clamp-2 text-[0.8125rem] leading-snug text-muted">{g.summary}</span> : null}
                        </span>
                      </>
                    );
                    return (
                      <li key={g.label}>
                        {g.links ? (
                          <button type="button" onClick={() => setSection(g.label)} className={cn(card, "cursor-pointer", on && "border-navy/25")}>
                            {inner}
                            <ChevronRight aria-hidden className="size-5 shrink-0 text-muted" />
                          </button>
                        ) : (
                          <Link href={g.href} onClick={close} aria-current={isCurrent(pathname, g.href) ? "page" : undefined} className={cn(card, on && "border-navy/25")}>
                            {inner}
                            <ArrowUpRight aria-hidden className="size-4 text-muted" />
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <p className="label-mono mt-7 px-1 text-muted">Popular</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {popular.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} onClick={close} className="inline-flex h-9 items-center rounded-full border border-line bg-surface px-3.5 text-sm font-medium text-ink active:bg-canvas">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 px-1 text-sm text-muted">{site.tagline}</p>
              </div>
            )}
          </nav>

          {/* A tap on either action closes the menu as the page changes */}
          <div onClick={close} className="grid shrink-0 grid-cols-2 gap-2.5 border-t border-line bg-surface px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <CtaLink href={cta.strategist.href} variant="outline" size="lg" className="w-full px-3 text-sm" arrow={false}>
              Talk to a Strategist
            </CtaLink>
            <CtaLink href={cta.audit.href} variant="primary" size="lg" className="w-full px-3 text-sm" arrow={false}>
              Get Growth Audit
            </CtaLink>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

/** Shortcuts on the first screen to the pages people ask for most. */
const popular = [
  { label: "SEO", href: "/seo-services/" },
  { label: "AI SEO", href: "/ai-seo-services/" },
  { label: "Google Ads", href: "/google-ads/" },
  { label: "Local SEO", href: "/local-seo-services/" },
  { label: "Web Development", href: "/web-development/" },
  { label: "Methodology", href: "/methodology/" },
];
