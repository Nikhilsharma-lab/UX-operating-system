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
  "font-geometric-mono text-[12px] font-medium uppercase tracking-[0.06em] text-olive-char transition-colors hover:text-ink";

/*
 * The authentic New Yorker masthead (DESIGN.md, Decision 032): white field,
 * the wordmark set in Irvin in black, a 1px black hairline rule beneath,
 * nav in Graphik uppercase. This ships the documented revert from the
 * earlier solid-dark bar.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-paper">
      <div className="page-shell relative flex items-center justify-center py-4 md:flex-col md:gap-3">
        <Link
          href="/"
          className="font-heading-serif text-[24px] leading-none tracking-[0.01em] text-ink"
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
          className="absolute right-6 top-1/2 -translate-y-1/2 rounded-sm px-2 py-1 font-geometric-mono text-[12px] font-medium uppercase tracking-[0.08em] text-olive-char transition-colors hover:text-ink md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-ash bg-paper md:hidden"
        >
          <ul className="page-shell flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-ash last:border-b-0">
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
