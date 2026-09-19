"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { primaryNav, isNavGroup } from "@/lib/data/nav";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";
import { PLATFORM_ROUTES, platformHref } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-canvas/90 backdrop-blur-md">
      <Container className="relative flex items-center justify-between py-1.5">
        <Link href="/" className="flex min-w-0 items-center gap-0.5">
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={112}
            height={112}
            className="h-7.5 w-7.5 shrink-0 lg:h-16 lg:w-16"
            priority
          />
          <Image
            src="/images/banner-cropped.png"
            alt="YOUnique — be what you are"
            width={609}
            height={216}
            className="h-7.5 w-auto lg:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => {
            if (isNavGroup(item)) {
              const groupActive = item.children.some((c) => c.href === pathname);
              return (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150",
                      groupActive ? "text-brand-800" : "text-stone-600 hover:text-brand-800"
                    )}
                  >
                    {item.label}
                    <ChevronDown size={14} className="transition-transform duration-150 group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-0 top-full w-56 rounded-xl border border-stone-200 bg-white p-2 opacity-0 shadow-elevated transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {item.children.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150",
                          pathname === link.href
                            ? "bg-brand-50 text-brand-800"
                            : "text-stone-600 hover:bg-brand-50 hover:text-brand-800"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150",
                  active ? "text-brand-800" : "text-stone-600 hover:text-brand-800"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Sprint 8.10 — the header's job is the new-vs-existing customer
            fork. "Get Started" (primary) is the acquisition CTA and goes to
            the platform's /get-started decision page, where the customer
            picks Assessment vs Counselling and self vs child; "Sign In" is
            explicitly *not* that — it means "I already have an account" and
            goes to /login. "Book a Consultation" keeps its exact existing
            behavior and destination (the local lead-capture form) but steps
            down to secondary, since it is a lead-gen action, not the
            product entry point. It displaced "Sample Report" from the
            header, which stays reachable from the home hero, the FinalCTA
            on every page, and the footer. */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={platformHref(PLATFORM_ROUTES.signIn)}
            className="text-sm font-medium text-stone-600 transition-colors duration-150 hover:text-brand-800"
          >
            Sign In
          </a>
          <div className="flex items-center gap-3">
            <Button href="/book-consultation" variant="secondary" size="md">
              Let&apos;s Talk
            </Button>
            <Button href={platformHref(PLATFORM_ROUTES.getStarted)} variant="primary" size="md">
              Get Started
            </Button>
          </div>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
