import {
  BookOpen, Bot, Briefcase, Building2, ChartColumn, CodeXml, Cloud, Factory, FileText, Globe, GraduationCap, Handshake,
  HeartPulse, Home, Hotel, Landmark, LayoutGrid, Lightbulb, MessageSquare, PenLine, Route, Scale, Search, ShoppingBag, Sparkles,
  Store, Target, Users, Workflow, Wrench, type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

/** Icons for menu entries, keyed by the entry's label, link or discipline id. */
const icons: Record<string, LucideIcon> = {
  // Top level
  Solutions: LayoutGrid, Industries: Building2, Locations: Globe, "Case Studies": ChartColumn, Resources: BookOpen, Company: Users,
  // Disciplines
  "search-ai": Search, performance: Target, "content-social": PenLine, "conversion-automation": Workflow, "web-digital": CodeXml,
  // Industries
  "/industries/saas/": Cloud, "/industries/ecommerce/": ShoppingBag, "/industries/healthcare/": HeartPulse, "/industries/real-estate/": Home,
  "/industries/finance/": Landmark, "/industries/education/": GraduationCap, "/industries/legal/": Scale, "/industries/manufacturing/": Factory,
  "/industries/hospitality/": Hotel, "/industries/home-services/": Wrench, "/industries/b2b/": Briefcase, "/industries/local-business/": Store,
  // Resources and company
  Insights: Lightbulb, Guides: BookOpen, Reports: FileText, "AI Search Resources": Bot,
  About: Building2, Methodology: Route, "Engagement Models": Handshake, Careers: Briefcase, Contact: MessageSquare, GrowthOS: Sparkles,
};

export const navIcon = (key: string): LucideIcon => icons[key] ?? Sparkles;

/** The square at the start of a menu row: a country code when the link has one, otherwise its icon. */
export function NavTile({ link, className }: { link: Pick<NavLink, "label" | "href" | "badge">; className?: string }) {
  const Icon = icons[link.href] ?? icons[link.label] ?? Sparkles;
  return (
    <span aria-hidden className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl border border-line bg-canvas text-navy transition-colors", className)}>
      {link.badge ? <span className="font-mono text-[0.6875rem] font-semibold tracking-wider">{link.badge}</span> : <Icon className="size-[1.125rem]" strokeWidth={1.75} />}
    </span>
  );
}

/** The icon for a menu entry, by label, link or discipline id. */
export function NavIcon({ name, className, strokeWidth = 1.75 }: { name: string; className?: string; strokeWidth?: number }) {
  const Icon = icons[name] ?? Sparkles;
  return <Icon aria-hidden className={className} strokeWidth={strokeWidth} />;
}
