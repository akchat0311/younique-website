// ─── Sprint 9.0A — lead-form abuse control ──────────────────────────────────
//
// A deliberate, self-contained copy of the platform's own
// files/apps/web/src/lib/rateLimit.ts rather than a shared package. The two
// apps are separate deployables on different Next.js majors with no shared
// build, and introducing a workspace package to share ~60 lines would be a
// larger architectural change than this sprint's scope allows. The limitation
// is recorded in docs/LOCAL_PRODUCTION_READINESS_REPORT.md so the duplication
// is a known, reviewed decision rather than drift.
//
// SAME CAVEATS AS THE PLATFORM COPY: in-process and in-memory, so the limit is
// per Node instance and is lost on restart. Adequate for the single-process
// deployment this ships as today; NOT a distributed limiter.
//
// What it protects: /api/consultation and /api/sample-report are the only two
// unauthenticated write endpoints in this app, they both persist to the shared
// production database, and they are the business's entire lead pipeline. An
// automated flood costs nothing to send and poisons the one dataset the sales
// process depends on.

export interface RateLimitResult {
  ok: boolean;
  retryAfter: number;
}

interface Bucket {
  count: number;
  expiresAt: number;
}

const buckets = new Map<string, Bucket>();
const MAX_KEYS = 5_000;

/** Generous: a school office or a college lab behind one NAT is a real caller. */
export const LEAD_FORM_LIMIT = { limit: 12, windowSeconds: 900 } as const;

export function checkRateLimit(key: string, limit: number, windowSeconds: number): RateLimitResult {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.expiresAt <= now) {
    if (buckets.size >= MAX_KEYS) {
      for (const [k, b] of buckets) if (b.expiresAt <= now) buckets.delete(k);
    }
    // Fails open if still full — a memory ceiling must not become an outage on
    // the endpoints that capture revenue.
    if (buckets.size < MAX_KEYS) buckets.set(key, { count: 1, expiresAt: now + windowSeconds * 1000 });
    return { ok: true, retryAfter: 0 };
  }

  existing.count += 1;
  const retryAfter = Math.max(1, Math.ceil((existing.expiresAt - now) / 1000));
  return existing.count > limit ? { ok: false, retryAfter } : { ok: true, retryAfter: 0 };
}

/**
 * `x-forwarded-for` is client-controlled unless a trusted reverse proxy
 * overwrites it — a deployment-time requirement this code cannot enforce.
 */
export function clientIdentifier(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  return first || request.headers.get("x-real-ip")?.trim() || "unknown";
}

/** Test-only. */
export function __resetRateLimits(): void {
  buckets.clear();
}
