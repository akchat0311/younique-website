import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/lib/data/nav";
import { registrations } from "@/lib/data/credentials";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-canvas-raised">
      <Container className="py-16">
        <div>
          <Link href="/" className="flex items-center gap-0.5">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={128}
              height={128}
              className="h-12 w-12 md:h-24 md:w-24"
            />
            <Image
              src="/images/banner-cropped.png"
              alt="YOUnique — be what you are"
              width={609}
              height={216}
              className="h-12 w-auto md:h-24"
            />
          </Link>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-stone-600">
            An Innovative Education &amp; Psychology Academy — career
            counselling, DMIT, memory training, NLP, EFT, and Garbh Sanskar,
            delivered by a counseling psychologist.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-stone-900">{heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-600 transition-colors duration-150 hover:text-brand-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-stone-200 pt-8 text-xs text-stone-500 md:flex-row md:items-center md:justify-between">
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
