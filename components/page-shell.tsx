import type { ReactNode } from "react";
import Link from "next/link";

/*
 * Sub-page shell in the kamran language: a centered reading column with a slim
 * "back to home" affordance at the top. This keeps the multi-page routes in the
 * same quiet, dark, single-column system without adding navigation chrome.
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main id="main" className="mx-auto max-w-[640px] px-6 pb-24 pt-16">
      <Link
        href="/"
        className="-ml-2 inline-flex min-h-11 items-center gap-1.5 rounded-md px-2 text-[13px] text-lichen transition-colors hover:bg-bone hover:text-ink"
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
