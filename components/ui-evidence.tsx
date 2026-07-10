"use client";

import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

/*
 * Password-gated "UI evidence" card. A full-width hero image, with a centered
 * heading + subheading and a CTA beneath it. Clicking the image or the CTA opens
 * a password prompt; the correct password opens the protected Figma journey in a
 * new tab.
 *
 * SECURITY NOTE: this is a client-side gate - the password and link ship in the
 * page bundle, so it only deters casual access. For real protection, also turn
 * on Figma's own link password on the prototype.
 */

function Lock({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
    </svg>
  );
}

export function UiEvidence({
  image,
  heading,
  subheading,
  href,
  password,
  cta = "View the UI",
}: {
  image?: string;
  heading: string;
  subheading: string;
  href: string;
  password: string;
  cta?: string;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const panelRef = useRef<HTMLFormElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const passwordId = useId();
  const errorId = useId();

  useEffect(() => {
    // Catch images already cached/complete before React attached onLoad.
    // A missing/404 image reports naturalWidth 0, so it correctly stays hidden.
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  const openGate = useCallback(() => {
    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setValue("");
    setError(false);
    window.setTimeout(() => previouslyFocusedRef.current?.focus(), 0);
  }, []);

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, open]);

  function onPanelKeyDown(e: ReactKeyboardEvent<HTMLFormElement>) {
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

  function unlock(e: React.FormEvent) {
    e.preventDefault();
    if (value.trim() === password) {
      window.open(href, "_blank", "noopener,noreferrer");
      close();
    } else {
      setError(true);
    }
  }

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-ash bg-paper">
        <button
          type="button"
          onClick={openGate}
          aria-label={`${cta} (password protected)`}
          className="group relative block w-full"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-bone">
            {/* Placeholder sits behind the image; a missing file just stays hidden
                (opacity-0 until it actually loads), so there's no broken-image icon. */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-sage">
              <Lock className="h-5 w-5" />
              <span className="text-[12.5px]">Hero image</span>
            </div>
            {image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                ref={imgRef}
                src={image}
                alt=""
                onLoad={() => setLoaded(true)}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:scale-[1.015] ${loaded ? "opacity-100" : "opacity-0"}`}
              />
            )}
          </div>
        </button>

        <div className="px-6 py-6 text-center">
          <h3 className="text-[17px] font-semibold tracking-tight text-ink">{heading}</h3>
          <p className="mx-auto mt-1.5 max-w-[48ch] text-[13.5px] leading-[1.55] text-lichen">{subheading}</p>
          <button
            type="button"
            onClick={openGate}
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-accent-blue/40 bg-accent-blue/10 px-4 py-2 text-[13px] font-medium text-accent-blue transition-colors hover:bg-accent-blue/[0.16]"
          >
            <Lock className="h-3.5 w-3.5" /> {cta}
          </button>
        </div>
      </div>

      {open && (
        <div
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-vellum/90 px-4"
        >
          <form
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onPanelKeyDown}
            onSubmit={unlock}
            className="w-full max-w-[380px] rounded-xl border border-rule-dark bg-paper p-5"
          >
            <div className="flex items-center gap-2 text-ink">
              <Lock />
              <h4 id={titleId} className="text-[15px] font-semibold">Protected prototype</h4>
            </div>
            <p id={descriptionId} className="mt-1.5 text-[13px] leading-[1.5] text-lichen">
              Enter the password to open the full Figma journey.
            </p>
            <label htmlFor={passwordId} className="sr-only">
              Prototype password
            </label>
            <input
              id={passwordId}
              autoFocus
              type="password"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              placeholder="Password"
              aria-invalid={error}
              aria-describedby={error ? errorId : descriptionId}
              className="mt-3 min-h-11 w-full rounded-md border border-ash bg-bone px-3 py-2 text-[14px] text-ink placeholder:text-lichen focus:border-rule-dark focus:outline-none"
            />
            {error && <p id={errorId} role="alert" className="mt-2 text-[12.5px] text-accent-blue">Incorrect password. Please try again.</p>}
            <div className="mt-4 flex justify-end gap-2">
              <button type="button" onClick={close} className="min-h-11 rounded-md px-3 text-[13px] text-lichen transition-colors hover:bg-bone hover:text-ink">
                Cancel
              </button>
              <button type="submit" disabled={!value.trim()} className="min-h-11 rounded-md bg-accent-blue px-3.5 text-[13px] font-medium text-vellum transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-40">
                Open Figma
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
