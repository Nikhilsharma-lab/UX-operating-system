/**
 * Visible, intentional image placeholder. Renders a hairline-framed slot in
 * the ledger vocabulary until a real, approved asset replaces it. No stock,
 * no generated stand-ins (evidence discipline).
 */
export function ImageSlot({
  label,
  note,
  ratio = "4/5",
  className = "",
}: {
  label: string;
  note: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <figure
      className={`flex flex-col justify-between rounded-lg border border-ash bg-bone p-5 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span className="font-geometric-mono text-[11px] font-medium uppercase tracking-[0.07em] text-lichen">
        {label}
      </span>
      <figcaption className="t-body-sm max-w-[300px] text-sage">
        {note}
      </figcaption>
    </figure>
  );
}
