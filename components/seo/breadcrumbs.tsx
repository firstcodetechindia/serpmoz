import Link from "next/link";
import { HomeLink } from "@/components/navigation/home-link";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { cn } from "@/lib/utils";
import type { Crumb } from "@/types";

/** Visible breadcrumb trail plus matching BreadcrumbList schema. */
export function Breadcrumbs({ crumbs, tone = "light" }: { crumbs: Crumb[]; tone?: "light" | "dark" }) {
  const trail = [{ name: "Home", href: "/" }, ...crumbs];
  const dark = tone === "dark";
  return (
    <nav aria-label="Breadcrumb">
      <ol className={cn("label-mono flex flex-wrap items-center gap-x-2 gap-y-1", dark ? "text-white/55" : "text-muted")}>
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className={dark ? "text-white" : "text-ink"}>{c.name}</span>
              ) : (
                (() => {
                  const cls = cn("transition-colors", dark ? "hover:text-white" : "hover:text-ink");
                  return c.href === "/" ? <HomeLink className={cls}>{c.name}</HomeLink> : <Link href={c.href} className={cls}>{c.name}</Link>;
                })()
              )}
              {!last ? <span aria-hidden className={dark ? "text-white/30" : "text-line-strong"}>/</span> : null}
            </li>
          );
        })}
      </ol>
      <JsonLd data={breadcrumbSchema(trail)} />
    </nav>
  );
}
