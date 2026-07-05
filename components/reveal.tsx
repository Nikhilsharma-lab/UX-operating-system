"use client";

import { useEffect, useRef, type ReactNode } from "react";

/*
 * Below-fold section entrance (calm, structural). SSR ships the element
 * fully visible; on mount we hide it only when it is genuinely below the
 * fold, IntersectionObserver exists, and the reader has not asked for
 * reduced motion. Headless renderers, no-JS readers, and reduced-motion
 * readers therefore always see finished content. Every exit path restores
 * visibility so a re-run effect (strict mode, fast refresh) can never
 * strand the element hidden.
 */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.remove("reveal-pending");

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      el.getBoundingClientRect().top < window.innerHeight * 0.92
    ) {
      show();
      return;
    }

    el.classList.add("reveal-pending");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          show();
          el.classList.add("reveal-in");
          io.disconnect();
        }
      },
      // The huge top margin keeps elements "intersecting" once they are
      // above the viewport, so an instant anchor jump that skips past a
      // section still reveals it (the observer never sees a below→above
      // transition otherwise).
      { rootMargin: "100000px 0px -8% 0px" },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      show();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
