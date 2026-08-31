import type { ConfidenceLevel } from "@/lib/types";

const CONFIDENCE_OPTIONS: { level: ConfidenceLevel; label: string }[] = [
  { level: "guessing", label: "Guessing" },
  { level: "slightlyConfident", label: "Slightly Confident" },
  { level: "confident", label: "Confident" },
  { level: "veryConfident", label: "Very Confident" },
];

interface ConfidenceCheckProps {
  selected: ConfidenceLevel | undefined;
  onSelect: (level: ConfidenceLevel) => void;
}

export default function ConfidenceCheck({ selected, onSelect }: ConfidenceCheckProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">How confident are you in your answer?</h2>
      <p className="mt-1 text-sm text-slate-500">
        This is recorded separately and does not change your AI Readiness Score.
      </p>

      <div role="radiogroup" aria-label="Confidence level" className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CONFIDENCE_OPTIONS.map(({ level, label }) => {
          const isSelected = selected === level;
          return (
            <button
              key={level}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(level)}
              className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors sm:text-base ${
                isSelected
                  ? "border-indigo-600 bg-indigo-50 text-indigo-900 ring-1 ring-indigo-600"
                  : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-slate-50"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
