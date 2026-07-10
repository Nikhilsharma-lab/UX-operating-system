/* Shared kamran-language primitives used across the site. */

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-3.5 w-3.5 ${className}`}
    >
      <path d="M5 11L11 5M6 5h5v5" />
    </svg>
  );
}

export function Mono({ label }: { label: string }) {
  return (
    <span
      aria-hidden="true"
      className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-ash bg-bone text-[9px] font-semibold tracking-tight text-lichen"
    >
      {label}
    </span>
  );
}
