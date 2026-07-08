"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/*
 * Command palette (keeg.in pattern), Pages only — the site is dark-only, so
 * there is no theme control. Opened by the ⌘ button or ⌘K; mounted once in the
 * root layout and triggered via a window event.
 */

const PAGES = [
  { label: "Home", href: "/" },
  { label: "Résumé", href: "/resume" },
  { label: "Cases", href: "/cases" },
  { label: "Transformations", href: "/transformations" },
  { label: "Operating Manual", href: "/operating-manual" },
  { label: "Building", href: "/#building" },
  { label: "Writing", href: "/#writing" },
  { label: "Contact", href: "/#contact" },
];

const PageIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
    <circle cx="12" cy="12" r="7.5" />
  </svg>
);
const SearchIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="h-4 w-4 text-sage">
    <circle cx="11" cy="11" r="6.5" />
    <path d="M20 20l-3.5-3.5" />
  </svg>
);

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }
    function onOpen() {
      setOpen(true);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-menu", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-menu", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQ("");
      const t = window.setTimeout(() => inputRef.current?.focus(), 10);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  function go(href: string) {
    setOpen(false);
    if (href.startsWith("http") || href.endsWith(".pdf")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    const hi = href.indexOf("#");
    if (hi >= 0) {
      const path = href.slice(0, hi) || "/";
      const id = href.slice(hi + 1);
      if (window.location.pathname === path) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    router.push(href);
  }

  if (!open) return null;

  const ql = q.trim().toLowerCase();
  const pages = PAGES.filter((p) => p.label.toLowerCase().includes(ql));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command menu"
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 px-4 pt-[16vh] backdrop-blur-[2px]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[520px] overflow-hidden rounded-xl border border-ash bg-paper shadow-2xl"
      >
        <div className="flex items-center gap-2.5 border-b border-ash px-3.5">
          {SearchIcon}
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Type a command or search…"
            className="w-full bg-transparent py-3 text-[14px] text-ink placeholder:text-sage focus:outline-none"
          />
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="text-sage transition-colors hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="h-4 w-4">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-1.5">
          {pages.length > 0 ? (
            <div className="pb-1">
              <div className="px-2.5 pb-1 pt-2 text-[11px] font-medium uppercase tracking-wider text-sage">Pages</div>
              {pages.map((p) => (
                <button
                  key={p.href}
                  type="button"
                  onClick={() => go(p.href)}
                  className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-[14px] text-ink transition-colors hover:bg-bone"
                >
                  <span className="text-lichen">{PageIcon}</span>
                  {p.label}
                </button>
              ))}
            </div>
          ) : (
            <p className="px-3 py-6 text-center text-[13px] text-sage">No results.</p>
          )}
        </div>
      </div>
    </div>
  );
}
