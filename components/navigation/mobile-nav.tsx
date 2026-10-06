"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Accordion, Dialog } from "radix-ui";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/navigation/logo";
import { NavTile, navIcon } from "@/components/navigation/nav-icons";
import { CtaLink } from "@/components/ui/cta-link";
import { cta, navigation, site } from "@/lib/config/site";
import { activeGroup, isCurrent } from "@/lib/nav-active";
import { cn } from "@/lib/utils";
import type { NavGroup } from "@/types";

const tile = "flex size-11 shrink-0 items-center justify-center rounded-2xl";
/** Icon tile colours for the section cards, in turn. */
const tints = ["bg-blue-tint text-blue-ink", "bg-cyan-tint text-navy", "bg-orange-tint text-orange-ink"];
const card = "flex w-full items-center gap-3.5 rounded-2xl border border-line bg-surface p-3 text-left shadow-[0_1px_2px_rgb(11_31_58/0.04)] transition-[background-color,transform] duration-150 active:scale-[0.985] active:bg-blue-tint/50";

/** A small tag on the section or page the visitor is on. */
const Here = () => <span className="rounded-full bg-orange/15 px-2 py-0.5 text-[0.6875rem] font-semibold text-orange-ink">You are here</span>;

const allLink = "mt-3 flex items-center justify-between rounded-2xl bg-navy px-4 py-3.5 text-[0.9375rem] font-semibold text-white";

/**
 * Solutions: every discipline is visible at once as a row. Opening one shows
 * its services as a compact grid, so nothing is hidden off to the side.
 */
function Disciplines({ group, pathname, close }: { group: NavGroup; pathname: string; close: () => void }) {
  const columns = group.columns!;
  const here = columns.find((c) => c.links.some((l) => isCurrent(pathname, l.href)));

  return (
    <div className="motion-safe:animate-[panel-in_240ms_var(--ease-out-quint)_both]">
      <p className="label-mono px-1 text-muted">Tap an area to see its services</p>
      <Accordion.Root type="single" collapsible defaultValue={here?.id} className="mt-3 grid gap-2">
        {columns.map((c) => {
          const Icon = navIcon(c.id);
          return (
            <Accordion.Item key={c.id} value={c.id} className="overflow-hidden rounded-2xl border border-line bg-surface data-[state=open]:border-navy/30">
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full cursor-pointer items-center gap-3 p-2.5 text-left">
                  <span aria-hidden className={cn(tile, "size-10 rounded-xl bg-blue-tint text-blue-ink transition-colors group-data-[state=open]:bg-navy group-data-[state=open]:text-white")}>
                    <Icon className="size-[1.125rem]" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2 text-base font-semibold text-navy">
                      {c.title}
                      {c.id === here?.id ? <Here /> : null}
                    </span>
                    <span className="line-clamp-1 text-[0.8125rem] text-muted">{c.description}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-1.5 text-xs text-muted">
                    {c.links.length}
                    <ChevronDown aria-hidden className="size-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <ul className="grid grid-cols-2 gap-1.5 border-t border-line bg-canvas p-2.5">
                  {c.links.map((l) => {
                    const on = isCurrent(pathname, l.href);
                    return (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={close}
                          aria-current={on ? "page" : undefined}
                          className={cn("flex min-h-11 items-center rounded-xl border px-3 py-2 text-sm leading-tight font-medium", on ? "border-blue bg-blue text-white" : "border-line bg-surface text-navy active:bg-blue-tint")}
                        >
                          {l.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
      <Link href={group.href} onClick={close} className={allLink}>
        {group.all ?? group.label}
        <ArrowRight aria-hidden className="size-4" />
      </Link>
    </div>
  );
}

/** The links of one section. Long lists become a two-column grid so they fit one screen. */
function Section({ group, pathname, close }: { group: NavGroup; pathname: string; close: () => void }) {
  if (group.columns) return <Disciplines group={group} pathname={pathname} close={close} />;
  const links = group.links ?? [];
  const compact = links.length > 6;

  return (
    <div className="motion-safe:animate-[panel-in_240ms_var(--ease-out-quint)_both]">
      <ul className={cn("grid gap-2", compact && "grid-cols-2")}>
        {links.map((l) => {
          const on = isCurrent(pathname, l.href);
          return (
            <li key={l.href + l.label}>
              <Link href={l.href} onClick={close} aria-current={on ? "page" : undefined} className={cn(card, "h-full", compact ? "gap-2.5 p-2.5" : links.length > 4 && "p-2.5", on && "border-blue/40 bg-blue-tint")}>
                <NavTile link={l} className={cn(compact ? "size-9 rounded-xl max-[359px]:hidden" : "size-11 rounded-2xl", on && "border-blue bg-blue text-white")} />
                <span className="min-w-0 flex-1">
                  <span className={cn("flex flex-wrap items-center gap-x-2 font-semibold text-navy", compact ? "text-sm leading-tight" : "text-base")}>
                    {l.label}
                    {on && !compact ? <Here /> : null}
                  </span>
                  {l.description && !compact ? <span className={cn("mt-0.5 text-[0.8125rem] leading-snug text-muted", links.length > 4 ? "line-clamp-1" : "line-clamp-2")}>{l.description}</span> : null}
                  {l.description && compact && l.badge ? <span className="mt-0.5 line-clamp-1 text-xs text-muted">{l.description}</span> : null}
                </span>
                {compact ? null : <ChevronRight aria-hidden className="size-4 shrink-0 text-muted" />}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href={group.href} onClick={close} className={allLink}>
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
        <Dialog.Overlay className="fixed inset-0 z-[69] bg-navy-deep/60 motion-safe:data-[state=closed]:animate-[fade-out_260ms_ease-in_both] motion-safe:data-[state=open]:animate-[fade-in_260ms_ease-out_both] xl:hidden" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed inset-y-0 right-0 z-[70] flex w-full flex-col bg-navy-deep shadow-[-30px_0_80px_-20px_rgb(0_0_0/0.6)] will-change-transform motion-safe:data-[state=closed]:animate-[drawer-out_280ms_cubic-bezier(0.4,0,1,1)_both] motion-safe:data-[state=open]:animate-[drawer-in_380ms_var(--ease-out-quint)_both] sm:max-w-[26rem] xl:hidden"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <div aria-hidden className="glow pointer-events-none absolute -top-24 -right-20 size-72 bg-blue/45" />
          <div aria-hidden className="glow pointer-events-none absolute top-10 -left-24 size-56 bg-cyan/20" />

          {/* Top bar: logo on the first screen, back and section name inside a section */}
          <div className="relative flex h-16 shrink-0 items-center justify-between gap-3 px-4 text-white">
            {group ? (
              <button type="button" onClick={() => setSection(null)} className="-ml-1 inline-flex h-10 cursor-pointer items-center gap-2 rounded-full bg-white/10 pr-4 pl-3 text-sm font-medium active:bg-white/20">
                <ArrowLeft aria-hidden className="size-4" />
                Menu
              </button>
            ) : (
              <Link href="/" aria-label="SERPMOZ home" onClick={close} className="pl-1">
                <Logo tone="dark" />
              </Link>
            )}
            {group ? <p aria-live="polite" className="absolute left-1/2 -translate-x-1/2 text-base font-semibold tracking-[-0.01em]">{group.label}</p> : null}
            <Dialog.Close className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/10 active:bg-white/20" aria-label="Close menu">
              <X aria-hidden className="size-5" />
            </Dialog.Close>
          </div>

          {/* The first screen says what to do; inside a section the bar above already names it */}
          {group ? (
            <p key={group.label} className="relative shrink-0 px-5 pb-4 text-[0.8125rem] text-white/65 motion-safe:animate-[panel-in_240ms_var(--ease-out-quint)_both]">{group.summary}</p>
          ) : (
            <div className="relative shrink-0 px-5 pt-1 pb-5 text-white motion-safe:animate-fade-in">
              <p className="text-xl leading-tight font-semibold tracking-[-0.02em]">Where would you like to go?</p>
              <p className="mt-1 text-[0.8125rem] text-white/65">Pick a section to see everything inside it.</p>
            </div>
          )}

          <nav key={section ?? "root"} aria-label="Mobile" className="relative flex-1 overflow-x-hidden overflow-y-auto overscroll-contain rounded-t-[1.75rem] bg-canvas px-4 pt-5 pb-6">
            {group ? (
              <Section key={group.label} group={group} pathname={pathname} close={close} />
            ) : (
              <div className="motion-safe:animate-fade-in">
                <ul className="grid gap-2">
                  {navigation.map((g, i) => {
                    const Icon = navIcon(g.label);
                    const on = active === g.label;
                    const inner = (
                      <>
                        <span aria-hidden className={cn(tile, on ? "bg-navy text-white" : tints[i % tints.length])}>
                          <Icon className="size-5" strokeWidth={1.75} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-2 text-[1.0625rem] font-semibold tracking-[-0.01em] text-navy">
                            {g.label}
                            {on ? <Here /> : null}
                          </span>
                          {g.summary ? <span className="mt-0.5 line-clamp-1 text-[0.8125rem] text-muted">{g.summary}</span> : null}
                        </span>
                      </>
                    );
                    return (
                      <li key={g.label} className="motion-safe:animate-[rise-in_420ms_var(--ease-out-quint)_both]" style={{ animationDelay: `${120 + i * 45}ms` }}>
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

                <p className="label-mono mt-6 px-1 text-muted">Popular</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {popular.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} onClick={close} className="inline-flex h-9 items-center rounded-full border border-line bg-surface px-3.5 text-sm font-medium text-ink active:bg-canvas">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 px-1 text-sm text-muted">{site.tagline}</p>
              </div>
            )}
          </nav>

          {/* A tap on either action closes the menu as the page changes */}
          <div onClick={close} className="relative grid shrink-0 grid-cols-2 gap-2.5 border-t border-line bg-surface px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_30px_-20px_rgb(11_31_58/0.35)]">
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
