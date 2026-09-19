/**
 * Build-time environment gate for the marketing site — `npm run check:env`.
 *
 * Plain .mjs, not TypeScript: this repo has no tsx/ts-node dependency and
 * adding one so a 40-line pre-build check can be written in TypeScript would
 * be the wrong trade. It is run by Node directly, before `next build`.
 *
 * Why this exists at all: every variable here is NEXT_PUBLIC_*, which Next
 * inlines into the client bundle at build time. A wrong value is compiled
 * into the JavaScript that ships — there is no runtime at which the server
 * could notice or correct it. `lib/site.ts` also gives each one a silent
 * production fallback:
 *
 *     platformUrl = process.env.NEXT_PUBLIC_PLATFORM_URL ?? "https://app.younique.in"
 *
 * That URL is a placeholder that has never been confirmed with the client
 * (see its own TODO). Without this check, a production build with the
 * variable unset succeeds, looks correct, and ships a site whose every
 * "Get Started" and "Sign In" button points at a domain that may not exist.
 *
 * Prints variable names and reasons only — never values.
 */

const RULES = [
  {
    name: 'NEXT_PUBLIC_SITE_URL',
    fix: 'https://www.example.com  (no trailing slash)',
    check: (v) => absoluteUrl(v),
  },
  {
    name: 'NEXT_PUBLIC_PLATFORM_URL',
    fix: 'https://app.example.com  (no trailing slash) — the platform app, confirmed with the client',
    check: (v) => {
      const bad = absoluteUrl(v)
      if (bad) return bad
      if (v === 'https://app.younique.in') {
        return 'is still the unconfirmed placeholder from lib/site.ts; confirm the real platform domain before building for production'
      }
      return null
    },
  },
  {
    name: 'DATABASE_URL',
    fix: 'postgresql://USER:PASSWORD@HOST:PORT/DATABASE — the same database the platform uses',
    check: (v) => {
      if (!v || !v.trim()) return 'is not set, so every consultation and sample-report lead would fail to persist'
      if (!/^postgres(ql)?:\/\//.test(v)) return 'is not a postgres:// or postgresql:// URL'
      return null
    },
  },
]

function absoluteUrl(v) {
  if (!v || !v.trim()) return 'is not set'
  if (!/^https?:\/\//.test(v)) return 'is not an absolute http(s) URL'
  if (v.endsWith('/')) return 'has a trailing slash, which produces double-slashed cross-app links'
  return null
}

const isProduction = process.env.NODE_ENV === 'production' || process.env.APP_ENV === 'production'
if (!isProduction) {
  console.log('[check:env] NODE_ENV/APP_ENV is not production — skipping (nothing to enforce).')
  process.exit(0)
}

const issues = RULES.map((r) => ({ r, reason: r.check(process.env[r.name]) })).filter((x) => x.reason)

if (issues.length > 0) {
  console.error(`Refusing to build: ${issues.length} production environment problem${issues.length === 1 ? '' : 's'}.`)
  for (const { r, reason } of issues) {
    console.error(`  • ${r.name} ${reason}`)
    console.error(`      set it to: ${r.fix}`)
  }
  console.error('\nSee .env.local.example. No values are printed here by design.')
  process.exit(1)
}

console.log(`[check:env] ok — all ${RULES.length} production-critical variables present and well-formed: ${RULES.map((r) => r.name).join(', ')}`)
