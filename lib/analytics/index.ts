/**
 * Vendor-neutral analytics. Events go to `window.dataLayer`, which Google Tag
 * Manager (or any other tag manager) can read. Nothing is sent anywhere unless
 * a container is configured through NEXT_PUBLIC_GTM_ID.
 *
 * Never pass personal data (names, emails, phone numbers) to `track`.
 */
export type AnalyticsEvent =
  | { event: "cta_click"; label: string; location: string }
  | { event: "audit_form_start" }
  | { event: "audit_form_submit"; services: number }
  | { event: "audit_form_error"; reason: "validation" | "server" }
  | { event: "growthos_module_view"; module: string };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(payload: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  (window.dataLayer ??= []).push(payload);
}
