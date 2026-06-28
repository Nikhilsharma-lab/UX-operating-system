import type { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center font-geometric-mono text-[14px] font-medium tracking-[-0.02em] px-4 py-2 rounded-sm transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-carbon text-paper hover:bg-ink",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-paper",
  ghost:
    "px-0 py-0 text-lichen underline-offset-4 hover:text-ink hover:underline",
};

export function CtaLink({
  href,
  children,
  variant = "secondary",
  pendingLabel = "Link pending",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  pendingLabel?: string;
}) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        title={pendingLabel}
        className={`${base} ${variants[variant]} cursor-not-allowed opacity-50`}
      >
        {children}
      </span>
    );
  }

  const className = `${base} ${variants[variant]}`;

  // internal route → client navigation; hash/mailto/external → plain anchor
  if (href.startsWith("/") && !href.startsWith("/#")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
