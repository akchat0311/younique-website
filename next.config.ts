import type { NextConfig } from "next";

// ─── Sprint 9.0A — security headers ─────────────────────────────────────────
//
// This site previously sent none. It is a fully public marketing site with no
// authentication, so the threat model is narrower than the platform's — but
// two of its pages POST customer PII (name, email, phone) to /api/consultation
// and /api/sample-report, and every "Get Started" / "Sign In" button navigates
// into the authenticated platform. Both of those are worth protecting.
//
// Kept deliberately identical in shape to files/apps/web/next.config.ts so the
// two apps do not drift into having different security postures.
const isProduction = process.env.NODE_ENV === "production";

const securityHeaders = [
  // Clickjacking. A framed copy of this site could overlay the real lead
  // forms — the two places a customer types their phone number.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Also stops the full marketing URL (which carries the sourcePage attribution
  // this site records on every lead) leaking to third-party origins.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
];

if (isProduction) {
  securityHeaders.push({
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  });
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
