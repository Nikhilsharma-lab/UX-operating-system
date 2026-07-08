import type { ReactNode } from "react";
import Link from "next/link";

/*
 * Sub-page shell in the kamran language: a centered reading column with a slim
 * "back to home" affordance at the top (kamran.fyi itself has no nav, so this
 * is the minimal chrome the multi-page routes need). The fixed theme toggle
 * lives in the root layout, so every page has it.
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main id="main" className="mx-auto max-w-[640px] px-6 pb-24 pt-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-[13px] text-lichen transition-colors hover:text-ink"
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-3.5 w-3.5"
        >
          <path d="M10 3L5 8l5 5" />
        </svg>
        Nikhil Sharma
      </Link>
      <div className="mt-10">{children}</div>
    </main>
  );
}
