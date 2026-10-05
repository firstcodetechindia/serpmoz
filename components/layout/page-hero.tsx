import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { cn } from "@/lib/utils";
import type { Crumb } from "@/types";

type Props = {
  crumbs: Crumb[];
  label: string;
  title: string;
  lead?: React.ReactNode;
  children?: React.ReactNode;
  /** Optional content for the right column on large screens */
  aside?: React.ReactNode;
  className?: string;
};

/** Opening block for every inner page: breadcrumb, label, H1, lead. */
export function PageHero({ crumbs, label, title, lead, children, aside, className }: Props) {
  return (
    <header className={cn("relative overflow-hidden border-b border-line pt-32 pb-16 md:pt-40 md:pb-24", className)}>
      <div aria-hidden className="grid-lines absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div aria-hidden className="atmosphere absolute inset-0 opacity-70" />
      <div className="shell relative grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
          <Breadcrumbs crumbs={crumbs} />
          <p className="label-mono mt-10 text-blue-ink">{label}</p>
          <h1 className="mt-4 text-[clamp(2.25rem,1.4rem+3.6vw,4.25rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-navy">
            {title}
          </h1>
          {lead ? <div className="mt-6 max-w-2xl text-lead text-muted">{lead}</div> : null}
          {children ? <div className="mt-9 flex flex-wrap items-center gap-3">{children}</div> : null}
        </div>
        {aside ? <div className="lg:col-span-5 lg:pl-6">{aside}</div> : null}
      </div>
    </header>
  );
}
