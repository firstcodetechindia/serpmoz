"use client";

import { CtaLink } from "@/components/ui/cta-link";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

/** Phone-only action bar that appears once the hero has been scrolled past. */
export function StickyCta({ label, href, note }: { label: string; href: string; note: string }) {
  const show = useScrolled(520);
  return (
    <div
      data-sticky-cta
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_30px_-18px_rgb(11_31_58/0.4)] transition-transform duration-300 ease-out-quint lg:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
      inert={!show}
    >
      <div className="flex items-center gap-3">
        <p className="min-w-0 flex-1 text-xs leading-snug text-muted">{note}</p>
        <CtaLink href={href} variant="primary" size="md" className="shrink-0" data-cta="sticky-service">{label}</CtaLink>
      </div>
    </div>
  );
}
