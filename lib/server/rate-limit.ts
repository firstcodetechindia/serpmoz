/**
 * Minimal fixed-window rate limiter held in process memory.
 * Adequate as a first line of defence on a single instance; on serverless it
 * is per-instance, so pair it with platform-level protection (Vercel Firewall,
 * Cloudflare) or swap this module for a Redis/KV-backed one. The interface is
 * deliberately tiny so that swap is a one-file change.
 */
const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || entry.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    if (hits.size > 5000) for (const [k, v] of hits) if (v.resetAt < now) hits.delete(k);
    return { allowed: true };
  }
  entry.count += 1;
  return { allowed: entry.count <= limit };
}
