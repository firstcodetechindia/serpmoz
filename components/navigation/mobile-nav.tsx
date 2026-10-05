"use client";

import { useState } from "react";
import Link from "next/link";
import { Accordion, Dialog } from "radix-ui";
import { Menu, Plus, X } from "lucide-react";
import { Logo } from "@/components/navigation/logo";
import { CtaLink } from "@/components/ui/cta-link";
import { cta, navigation, site } from "@/lib/config/site";

/** Full-screen navigation for small screens. Groups open one at a time. */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className="inline-flex size-10 items-center justify-center rounded-control text-[var(--hd-fg)] transition-colors hover:bg-[var(--hd-line)] xl:hidden"
        aria-label="Open menu"
      >
        <Menu aria-hidden className="size-5" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed inset-0 z-[70] flex flex-col bg-canvas motion-safe:animate-sheet-in xl:hidden"
        >
          <div className="flex h-[4.75rem] shrink-0 items-center justify-between px-5 pt-3">
            <Dialog.Title className="sr-only">Menu</Dialog.Title>
            <Link href="/" aria-label="SERPMOZ home" onClick={() => setOpen(false)}>
              <Logo />
            </Link>
            <Dialog.Close className="inline-flex size-10 items-center justify-center rounded-control text-navy hover:bg-navy/5" aria-label="Close menu">
              <X aria-hidden className="size-5" />
            </Dialog.Close>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain px-5 pb-6">
            <Accordion.Root type="single" collapsible className="border-t border-line">
              {navigation.map((group, i) =>
                group.links ? (
                  <Accordion.Item key={group.label} value={group.label} className="border-b border-line">
                    <Accordion.Header>
                      <Accordion.Trigger className="group flex w-full items-center justify-between py-5 text-left">
                        <span className="flex items-baseline gap-4">
                          <span className="label-mono text-muted">0{i + 1}</span>
                          <span className="text-2xl font-semibold tracking-[-0.03em] text-navy">{group.label}</span>
                        </span>
                        <Plus aria-hidden className="size-5 text-muted transition-transform duration-300 ease-out-quint group-data-[state=open]:rotate-45" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="pb-5 pl-9">
                        {(group.columns ?? [{ title: "", href: group.href, links: group.links }]).map((col) => (
                          <div key={col.title} className="mb-3 last:mb-0">
                            {col.title ? <p className="label-mono pt-2 pb-1 text-muted">{col.title}</p> : null}
                            <ul className="grid grid-cols-2 gap-x-4">
                              {col.links.map((l) => (
                                <li key={l.href + l.label}>
                                  <Link href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-[0.9375rem] text-ink/85">
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Link href={group.href} onClick={() => setOpen(false)} className="mt-2 inline-block py-2 text-[0.9375rem] font-medium text-blue-ink">
                          {group.all ?? group.label}
                        </Link>
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ) : (
                  <div key={group.label} className="border-b border-line">
                    <Link href={group.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-5">
                      <span className="label-mono text-muted">0{i + 1}</span>
                      <span className="text-2xl font-semibold tracking-[-0.03em] text-navy">{group.label}</span>
                    </Link>
                  </div>
                ),
              )}
            </Accordion.Root>
            <p className="mt-8 max-w-xs text-sm text-muted">{site.tagline}</p>
          </nav>

          <div className="grid shrink-0 gap-2.5 border-t border-line bg-surface px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <CtaLink href={cta.audit.href} variant="primary" size="lg" className="w-full">
              {cta.audit.label}
            </CtaLink>
            <CtaLink href={cta.strategist.href} variant="outline" size="lg" className="w-full" arrow={false}>
              {cta.strategist.label}
            </CtaLink>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
