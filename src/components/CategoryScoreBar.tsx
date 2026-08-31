import { CATEGORY_META } from "@/lib/types";
import type { CategoryScore } from "@/lib/types";

export default function CategoryScoreBar({ score }: { score: CategoryScore }) {
  const meta = CATEGORY_META[score.category];
  const rounded = Math.round(score.percentage);
  const isCritical = score.percentage < 40;

  const barColor =
    isCritical
      ? "bg-rose-600"
      : rounded >= 75
        ? "bg-emerald-600"
        : "bg-indigo-600";

  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-800">{meta.label}</span>

        <span
          className={`font-semibold ${
            isCritical ? "text-rose-700" : "text-slate-700"
          }`}
        >
          {rounded}% ({score.correct}/{score.total})
        </span>
      </div>

      <div
        role="progressbar"
        aria-valuenow={rounded}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${meta.label} score`}
        className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-slate-200"
      >
        <div
          className={`h-full rounded-full ${barColor}`}
          style={{ width: `${rounded}%` }}
        />
      </div>

      {isCritical && (
        <p className="mt-1 text-xs font-semibold text-rose-700">
          Critical Development Area
        </p>
      )}
    </div>
  );
}