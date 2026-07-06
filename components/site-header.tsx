"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Cases", href: "/cases" },
  { label: "Transformations", href: "/transformations" },
  { label: "Manual", href: "/operating-manual" },
  { label: "Thinking", href: "/#thinking" },
  { label: "Building", href: "/#building" },
  { label: "Contact", href: "/#contact" },
];

const linkClass =
  "font-geometric-mono text-[12px] font-medium uppercase tracking-[0.06em] text-paper/65 transition-colors hover:text-paper";

/*
 * Masthead matched to the feature-opener hero (Decision 057): the same
 * near-black field as the hero plate section, wordmark in Irvin white,
 * nav in muted paper — the bar and the hero read as one surface.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#050505]">
      <div className="page-shell relative flex items-center justify-center py-4 md:flex-col md:gap-3">
        <Link
          href="/"
          className="font-heading-serif text-[24px] leading-none tracking-[0.01em] text-paper"
        >
          Nikhil Sharma
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="absolute right-6 top-1/2 -translate-y-1/2 rounded-sm px-2 py-1 font-geometric-mono text-[12px] font-medium uppercase tracking-[0.08em] text-paper/80 transition-colors hover:text-paper md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-paper/15 bg-[#050505] md:hidden"
        >
          <ul className="page-shell flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-paper/10 last:border-b-0">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`${linkClass} block py-3`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
