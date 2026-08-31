/**
 * Temporary text-based brand mark for PrinceByte Innovations.
 * Replace with the official logo image once supplied — swap the JSX below
 * for an <Image> tag pointing at the logo asset; no other files need to change.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-sm font-bold text-white">
        PB
      </span>
      <span className="text-sm font-semibold tracking-wide text-slate-700">PrinceByte Innovations</span>
    </div>
  );
}
