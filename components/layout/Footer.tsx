import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/lib/data/nav";
import { registrations } from "@/lib/data/credentials";
import { Container } from "./Container";

// Client feedback (Sep 2026): the footer sat on the same near-white ground
// as the content above it, so nothing marked "the page ends here". It now
// uses the same brand-950 band as the page heroes, bookending every page
// dark-light-dark. The wordmark is the REAL brand image — banner-footer.png
// is banner-cropped.png with only the black "be what you are" tagline
// pixels recolored to white (the wordmark's magenta/azure and the petal
// marks are untouched), because the original's dark tagline vanishes on
// navy. Regenerate it from banner-cropped.png if the brand art changes.
export function Footer() {
  return (
    <footer className="bg-brand-950">
      <Container className="py-16">
        <div>
          <Link href="/" className="flex items-center gap-0.5">
            {/* sized identically to the Navbar's logo pair so header and
                footer present the brand at the same scale */}
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={128}
              height={128}
              className="h-7.5 w-7.5 shrink-0 lg:h-16 lg:w-16"
            />
            <Image
              src="/images/banner-footer.png"
              alt="YOUnique — be what you are"
              width={609}
              height={216}
              className="h-7.5 w-auto lg:h-16"
            />
          </Link>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
            An Innovative Education &amp; Psychology Academy — career
            counselling, DMIT, memory training, NLP, EFT, and Garbh Sanskar,
            delivered by a counseling psychologist.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-white">{heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => {
                  // Sprint 8.10 — the Account group's hrefs are absolute
                  // URLs into the platform app (see lib/data/nav.ts), so
                  // they get a plain <a>: next/link's client router has no
                  // route to push for another origin.
                  const className =
                    "text-sm text-white/60 transition-colors duration-150 hover:text-accent-200";
                  return (
                    <li key={link.href}>
                      {link.href.startsWith("http") ? (
                        <a href={link.href} className={className}>
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className={className}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} YOUnique — An Innovative Education &amp; Psychology Academy.</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>GEM Reg. {registrations.gem}</span>
            <span>MSME/UDYAM {registrations.msmeUdyam}</span>
            <span>Trade License {registrations.tradeLicense}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
