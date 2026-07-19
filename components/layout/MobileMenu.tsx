"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { primaryNav, isNavGroup } from "@/lib/data/nav";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 w-10 items-center justify-center rounded-md text-stone-700 hover:bg-stone-100"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-stone-200 bg-white shadow-elevated"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {primaryNav.map((item) =>
                isNavGroup(item) ? (
                  <div key={item.label} className="pt-2">
                    <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-stone-400">
                      {item.label}
                    </p>
                    {item.children.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-brand-50 hover:text-brand-800"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-brand-50 hover:text-brand-800"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="mt-2 flex flex-col gap-2 px-3 pt-2">
                <Button href="/sample-report" variant="secondary" onClick={() => setOpen(false)}>
                  Sample Report
                </Button>
                <Button href="/book-consultation" variant="primary" onClick={() => setOpen(false)}>
                  Book a Consultation
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
