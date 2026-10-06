"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "radix-ui";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";
import { HomeLink } from "@/components/navigation/home-link";
import { Logo } from "@/components/navigation/logo";
import { NavIcon, NavTile } from "@/components/navigation/nav-icons";
import { CtaLink } from "@/components/ui/cta-link";
import { cta, headerNavigation as navigation, site } from "@/lib/config/site";
import { activeGroup, isCurrent } from "@/lib/nav-active";
import { cn } from "@/lib/utils";

/** Icon tile colours, used in turn down a list. */
const tints = ["bg-blue-tint text-blue-ink", "bg-cyan-tint text-navy", "bg-orange-tint text-orange-ink"];
const cardClass =
  "flex h-full w-full items-center gap-3.5 rounded-2xl border border-line bg-surface p-2.5 text-left shadow-[0_1px_2px_rgb(11_31_58/0.04)] transition-[background-color,transform] duration-150 active:scale-[0.985] active:bg-blue-tint/50";

/** A small tag on the section or page the visitor is on. */
const Here = () => <span className="rounded-full bg-orange/15 px-2 py-0.5 text-[0.6875rem] font-semibold text-orange-ink">You are here</span>;

/**
 * One row of the menu. Every level uses it, so a section, a discipline and a
 * page all look and behave the same: tile, name, one line, arrow.
 */
function Item({
  tile,
  label,
  description,
  here = false,
  compact = false,
  href,
  external = false,
  onSelect,
}: {
  tile: ReactNode;
  label: string;
  description?: string;
  /** The visitor is on this page or inside this section */
  here?: boolean;
  /** Half-width card for long lists: smaller, no arrow */
  compact?: boolean;
  /** A page to go to. Without it the row opens the next screen. */
  href?: string;
  external?: boolean;
  onSelect: () => void;
}) {
  const className = cn(cardClass, compact && "gap-2.5 p-2.5", here && "border-blue/40 bg-blue-tint");
  const inner = (
    <>
      {tile}
      <span className="min-w-0 flex-1">
        <span className={cn("flex flex-wrap items-center gap-x-2 font-semibold text-navy", compact ? "text-sm leading-tight" : "text-base")}>
          {label}
          {here && !compact ? <Here /> : null}
        </span>
        {description ? <span className={cn("mt-0.5 line-clamp-1 text-muted", compact ? "text-xs" : "text-[0.8125rem]")}>{description}</span> : null}
      </span>
      {compact ? null : external ? <ArrowUpRight aria-hidden className="size-4 shrink-0 text-muted" /> : <ChevronRight aria-hidden className="size-5 shrink-0 text-muted" />}
    </>
  );
  return href ? (
    <Link href={href} onClick={onSelect} aria-current={here ? "page" : undefined} className={className}>{inner}</Link>
  ) : (
    <button type="button" onClick={onSelect} className={cn(className, "cursor-pointer")}>{inner}</button>
  );
}

/** A square icon tile for a section or discipline. */
const IconTile = ({ name, tint, on, small }: { name: string; tint: number; on?: boolean; small?: boolean }) => (
  <span aria-hidden className={cn("flex shrink-0 items-center justify-center", small ? "size-9 rounded-xl" : "size-10 rounded-xl", on ? "bg-navy text-white" : tints[tint % tints.length])}>
    <NavIcon name={name} className={small ? "size-4" : "size-5"} />
  </span>
);

const AllLink = ({ href, label, close }: { href: string; label: string; close: () => void }) => (
  <Link href={href} onClick={close} className="mt-3 flex items-center justify-between rounded-2xl bg-navy px-4 py-3.5 text-[0.9375rem] font-semibold text-white active:bg-navy-deep">
    {label}
    <ArrowRight aria-hidden className="size-4" />
  </Link>
);

/**
 * Navigation for small screens: a drawer that slides in from the right.
 * Screens stack three deep (sections, then a section's contents, then a
 * discipline's services) and each one slides in the same way, with a back
 * button to the screen before it.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  /** Where the visitor is in the menu: [] | [section] | [section, discipline] */
  const [path, setPath] = useState<string[]>([]);
  const [forward, setForward] = useState(true);
  const pathname = usePathname();
  const active = activeGroup(pathname, navigation);

  const close = () => setOpen(false);
  const push = (key: string) => { setForward(true); setPath((p) => [...p, key]); };
  const back = () => { setForward(false); setPath((p) => p.slice(0, -1)); };

  const group = navigation.find((g) => g.label === path[0]);
  const column = group?.columns?.find((c) => c.id === path[1]);
  const hereColumn = group?.columns?.find((c) => c.links.some((l) => isCurrent(pathname, l.href)));

  const title = column?.title ?? group?.label;
  const line = column ? `${column.description}.` : group?.summary;
  const backLabel = column ? group!.label : "Menu";

  let screen: ReactNode;
  if (column && group) {
    // Level 3: the services of one discipline
    screen = (
      <>
        <ul className="grid gap-2">
          {column.links.map((l, i) => (
            <li key={l.href}>
              <Item tile={<IconTile name={column.id} tint={i} on={isCurrent(pathname, l.href)} />} label={l.label} description={l.description} here={isCurrent(pathname, l.href)} href={l.href} onSelect={close} />
            </li>
          ))}
        </ul>
        <AllLink href={group.href} label={group.all ?? group.label} close={close} />
      </>
    );
  } else if (group?.columns) {
    // Level 2 for Solutions: its disciplines, each opening its own screen
    screen = (
      <>
        <ul className="grid gap-2">
          {group.columns.map((c, i) => (
            <li key={c.id}>
              <Item tile={<IconTile name={c.id} tint={i} on={c.id === hereColumn?.id} />} label={c.title} description={c.description} here={c.id === hereColumn?.id} onSelect={() => push(c.id)} />
            </li>
          ))}
        </ul>
        <AllLink href={group.href} label={group.all ?? group.label} close={close} />
      </>
    );
  } else if (group) {
    // Level 2 for every other section: its pages. Long lists become two columns.
    const links = group.links ?? [];
    const compact = links.length > 6;
    screen = (
      <>
        <ul className={cn("grid gap-2", compact && "grid-cols-2")}>
          {links.map((l) => {
            const on = isCurrent(pathname, l.href);
            return (
              <li key={l.href + l.label}>
                <Item
                  tile={<NavTile link={l} className={cn(compact ? "size-9 rounded-xl max-[359px]:hidden" : "size-10 rounded-xl", on && "border-blue bg-blue text-white")} />}
                  label={l.label}
                  description={compact && !l.badge ? undefined : l.description}
                  here={on}
                  compact={compact}
                  href={l.href}
                  onSelect={close}
                />
              </li>
            );
          })}
        </ul>
        <AllLink href={group.href} label={group.all ?? group.label} close={close} />
      </>
    );
  } else {
    // Level 1: the sections
    screen = (
      <>
        <ul className="grid gap-2">
          {navigation.map((g, i) => (
            <li key={g.label}>
              <Item
                tile={<IconTile name={g.label} tint={i} on={active === g.label} />}
                label={g.label}
                description={g.summary}
                here={active === g.label}
                href={g.links ? undefined : g.href}
                external={!g.links}
                onSelect={g.links ? () => push(g.label) : close}
              />
            </li>
          ))}
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
      </>
    );
  }

  // Each screen slides in from the side it comes from: forward from the right, back from the left.
  // The first screen arrives with the drawer itself, so it only fades.
  const slide = !path.length && forward
    ? "motion-safe:animate-fade-in"
    : forward
      ? "motion-safe:animate-[screen-next_320ms_var(--ease-out-quint)_both]"
      : "motion-safe:animate-[screen-prev_320ms_var(--ease-out-quint)_both]";
  const screenKey = path.join("/") || "root";

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (next) { setPath([]); setForward(true); }
      }}
    >
      <Dialog.Trigger
        className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full text-[var(--hd-fg)] transition-colors hover:bg-[var(--hd-line)] lg:hidden"
        aria-label="Open menu"
      >
        <Menu aria-hidden className="size-5" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[69] bg-navy-deep/60 motion-safe:data-[state=closed]:animate-[fade-out_260ms_ease-in_both] motion-safe:data-[state=open]:animate-[fade-in_260ms_ease-out_both] lg:hidden" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed inset-y-0 right-0 z-[70] flex w-full flex-col overflow-hidden bg-navy-deep shadow-[-30px_0_80px_-20px_rgb(0_0_0/0.6)] will-change-transform motion-safe:data-[state=closed]:animate-[drawer-out_280ms_cubic-bezier(0.4,0,1,1)_both] motion-safe:data-[state=open]:animate-[drawer-in_380ms_var(--ease-out-quint)_both] sm:max-w-[26rem] lg:hidden"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <div aria-hidden className="glow pointer-events-none absolute -top-24 -right-20 size-72 bg-blue/45" />
          <div aria-hidden className="glow pointer-events-none absolute top-10 -left-24 size-56 bg-cyan/20" />

          {/* Top bar: logo on the first screen, otherwise back to the screen before */}
          <div className="relative flex h-14 shrink-0 items-center justify-between gap-3 px-4 pt-1 text-white">
            {group ? (
              <button type="button" onClick={back} className="-ml-1 inline-flex h-10 cursor-pointer items-center gap-2 rounded-full bg-white/10 pr-4 pl-3 text-sm font-medium active:bg-white/20">
                <ArrowLeft aria-hidden className="size-4" />
                {backLabel}
              </button>
            ) : (
              <HomeLink aria-label="SERPMOZ home" onClick={close} className="pl-1">
                <Logo tone="dark" tagline />
              </HomeLink>
            )}
            <Dialog.Close className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/10 active:bg-white/20" aria-label="Close menu">
              <X aria-hidden className="size-5" />
            </Dialog.Close>
          </div>

          {/* The name of this screen and one line about it, centred */}
          <div className="relative shrink-0 overflow-hidden px-5 pb-4 text-center text-white">
            <div key={screenKey} className={slide}>
              <p aria-live="polite" className="text-xl leading-tight font-semibold tracking-[-0.02em]">{title ?? "Where would you like to go?"}</p>
              <p className="mt-1 text-[0.8125rem] text-white/65">{title ? line : "Pick a section to see everything inside it."}</p>
            </div>
          </div>

          <nav key={screenKey} aria-label="Mobile" className="relative flex-1 overflow-x-hidden overflow-y-auto overscroll-contain rounded-t-[1.75rem] bg-canvas px-4 pt-4 pb-5">
            <div className={slide}>{screen}</div>
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
