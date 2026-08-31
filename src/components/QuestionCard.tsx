import { CATEGORY_META } from "@/lib/types";
import type { Category } from "@/lib/types";

const OPTION_LETTERS = ["A", "B", "C", "D"] as const;

interface QuestionCardProps {
  category: Category;
  questionText: string;
  options: readonly [string, string, string, string];
  selectedOption: 0 | 1 | 2 | 3 | undefined;
  onSelect: (index: 0 | 1 | 2 | 3) => void;
}

export default function QuestionCard({ category, questionText, options, selectedOption, onSelect }: QuestionCardProps) {
  return (
    <div>
      <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
        {CATEGORY_META[category].label}
      </span>

      <h2 className="mt-4 text-lg font-semibold leading-snug text-slate-900 sm:text-xl">{questionText}</h2>

      <div role="radiogroup" aria-label="Answer options" className="mt-6 flex flex-col gap-3">
        {options.map((option, index) => {
          const isSelected = selectedOption === index;
          return (
            <button
              key={index}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(index as 0 | 1 | 2 | 3)}
              className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors sm:text-base ${
                isSelected
                  ? "border-indigo-600 bg-indigo-50 text-indigo-900 ring-1 ring-indigo-600"
                  : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-slate-50"
              }`}
            >
              <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                  isSelected ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-300 text-slate-500"
                }`}
              >
                {OPTION_LETTERS[index]}
              </span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
