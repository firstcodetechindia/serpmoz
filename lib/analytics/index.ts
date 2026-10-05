/**
 * Vendor-neutral analytics. Events go to `window.dataLayer`, which Google Tag
 * Manager (or any other tag manager) can read. Nothing is sent anywhere unless
 * a container is configured through NEXT_PUBLIC_GTM_ID.
 *
 * Never pass personal data (names, emails, phone numbers) to `track`.
 */
export type AnalyticsEvent =
  | { event: "cta_click"; label: string; location: string }
  | { event: "audit_form_start"; form?: "contact" | "audit" }
  | { event: "audit_form_submit"; form?: "contact" | "audit"; services?: number; channels?: number }
  | { event: "audit_form_error"; form?: "contact" | "audit"; reason: "validation" | "server" }
  | { event: "nav_click"; label: string; location: string }
  | { event: "scroll_depth"; percent: number; location: string }
  | { event: "service_explore"; category: string }
  | { event: "interaction"; component: string; value: string };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(payload: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  (window.dataLayer ??= []).push(payload);
}
