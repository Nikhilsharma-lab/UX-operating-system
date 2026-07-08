"use client";

/*
 * The ⌘ trigger (keeg.in pattern): a bare command glyph placed at the top-right
 * of a page's header row. It just dispatches an event; the global CommandMenu
 * (mounted in the root layout) owns the modal and the ⌘K shortcut, so this
 * button works anywhere without prop-drilling.
 */
export function CommandButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      aria-label="Open command menu (⌘K)"
      title="Command menu (⌘K)"
      onClick={() => window.dispatchEvent(new Event("open-command-menu"))}
      className={`inline-grid h-8 w-8 place-items-center rounded-md text-lichen transition-colors hover:bg-bone hover:text-ink ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className="h-[18px] w-[18px]">
        <path d="M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
