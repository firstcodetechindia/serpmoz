import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";
import type { Crumb } from "@/types";

/** Visible breadcrumb trail plus matching BreadcrumbList schema. */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const trail = [{ name: "Home", href: "/" }, ...crumbs];
  return (
    <nav aria-label="Breadcrumb">
      <ol className="label-mono flex flex-wrap items-center gap-x-2 gap-y-1 text-muted">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-ink">{c.name}</span>
              ) : (
                <Link href={c.href} className="transition-colors hover:text-ink">{c.name}</Link>
              )}
              {!last ? <span aria-hidden className="text-line-strong">/</span> : null}
            </li>
          );
        })}
      </ol>
      <JsonLd data={breadcrumbSchema(trail)} />
    </nav>
  );
}
