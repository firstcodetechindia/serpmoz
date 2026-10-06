import type { NavGroup } from "@/types";

const hrefs = (group: NavGroup) => [...(group.links ?? []), ...(group.columns ?? []).flatMap((c) => [{ href: c.href }, ...c.links])].map((l) => l.href.split("#")[0]);

/** True when `href` is the page being viewed. */
export const isCurrent = (pathname: string, href: string) => href.split("#")[0] === pathname;

/** The top-level menu a page belongs to: its own section, or the menu that lists it. */
export function activeGroup(pathname: string, groups: NavGroup[]) {
  if (pathname === "/") return undefined;
  const section = groups.find((g) => g.href !== "/" && pathname.startsWith(g.href));
  if (section) return section.label;
  const listed = groups.find((g) => hrefs(g).some((h) => h === pathname));
  if (listed) return listed.label;
  // Deeper pages (an article, a case study) belong to the longest listed parent.
  const parents = groups.flatMap((g) => hrefs(g).filter((h) => h !== "/" && pathname.startsWith(h)).map((h) => ({ label: g.label, h })));
  return parents.sort((a, b) => b.h.length - a.h.length)[0]?.label;
}
