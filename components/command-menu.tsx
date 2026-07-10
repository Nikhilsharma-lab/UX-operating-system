"use client";

import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/*
 * Command palette, proof-first. The site is dark-only, so there is no theme
 * control. Opened by the Menu button or ⌘K; mounted once in the root layout.
 */

const GROUPS = [
  {
    label: "Recommended",
    items: [
      { label: "Start here", href: "/#start" },
      { label: "Leadership proof", href: "/transformations/building-design-organization" },
      { label: "Resume", href: "/resume" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    label: "Explore",
    items: [
      { label: "Case evidence", href: "/cases" },
      { label: "Builder proof", href: "/#building" },
      { label: "Operating manual", href: "/operating-manual" },
      { label: "Writing", href: "/#writing" },
    ],
  },
];

const PageIcon = (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
    <circle cx="12" cy="12" r="7.5" />
  </svg>
);
const SearchIcon = (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="h-4 w-4 text-lichen">
    <circle cx="11" cy="11" r="6.5" />
    <path d="M20 20l-3.5-3.5" />
  </svg>
);

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const searchId = useId();

  const openMenu = useCallback(() => {
    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
    window.setTimeout(() => previouslyFocusedRef.current?.focus(), 0);
  }, []);

  useEffect(() => {
    function onKey(e: globalThis.KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) {
          closeMenu();
        } else {
          openMenu();
        }
      } else if (e.key === "Escape" && open) {
        closeMenu();
      }
    }
    function onOpen() {
      openMenu();
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-menu", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-menu", onOpen);
    };
  }, [closeMenu, open, openMenu]);

  useEffect(() => {
    if (open) {
      setQ("");
      const t = window.setTimeout(() => inputRef.current?.focus(), 10);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  function onPanelKeyDown(e: ReactKeyboardEvent<HTMLDivElement>) {
    if (e.key !== "Tab") return;

    const focusable = Array.from(
      panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) ?? [],
    ).filter((el) => el.offsetParent !== null);

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function go(href: string) {
    closeMenu();
    if (href.startsWith("http") || href.endsWith(".pdf")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    const hi = href.indexOf("#");
    if (hi >= 0) {
      const path = href.slice(0, hi) || "/";
      const id = href.slice(hi + 1);
      if (window.location.pathname === path) {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        document.getElementById(id)?.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
        return;
      }
    }
    router.push(href);
  }

  if (!open) return null;

  const ql = q.trim().toLowerCase();
  const groups = GROUPS.map((group) => ({
    ...group,
    items: group.items.filter((p) => p.label.toLowerCase().includes(ql)),
  })).filter((group) => group.items.length > 0);

  return (
    <div
      onClick={closeMenu}
      className="fixed inset-0 z-50 flex items-start justify-center bg-vellum/90 px-4 pt-[16vh]"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onKeyDown={onPanelKeyDown}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[520px] overflow-hidden rounded-xl border border-rule-dark bg-paper"
      >
        <h2 id={titleId} className="sr-only">
          Command menu
        </h2>
        <div className="flex items-center gap-2.5 border-b border-ash px-2.5">
          {SearchIcon}
          <label htmlFor={searchId} className="sr-only">
            Search proof, resume, contact
          </label>
          <input
            id={searchId}
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search proof, resume, contact…"
            className="w-full bg-transparent py-3 text-[14px] text-ink placeholder:text-lichen focus:outline-none"
          />
          <button
            type="button"
            aria-label="Close"
            onClick={closeMenu}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-md text-sage transition-colors hover:bg-bone hover:text-ink"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="h-4 w-4">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-1.5">
          {groups.length > 0 ? (
            groups.map((group) => (
              <div key={group.label} className="pb-1">
                <div className="px-2.5 pb-1 pt-2 text-[11px] font-medium uppercase tracking-wider text-sage">{group.label}</div>
                {group.items.map((p) => (
                  <button
                    key={p.href}
                    type="button"
                    onClick={() => go(p.href)}
                    className="flex min-h-11 w-full items-center gap-2.5 rounded-md px-2.5 py-2.5 text-left text-[14px] text-ink transition-colors hover:bg-bone"
                  >
                    <span className="text-lichen">{PageIcon}</span>
                    {p.label}
                  </button>
                ))}
              </div>
            ))
          ) : (
            <p className="px-3 py-6 text-center text-[13px] text-sage">No results.</p>
          )}
        </div>
      </div>
    </div>
  );
}
