"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import CategoryScoreBar from "@/components/CategoryScoreBar";
import ScoreGauge from "@/components/ScoreGauge";
import { useAssessment } from "@/context/AssessmentContext";
import { CATEGORY_META } from "@/lib/types";

const CALIBRATION_LABEL: Record<string, string> = {
  wellCalibrated: "Well-Calibrated",
  overconfident: "Overconfident",
  underconfident: "Underconfident",
};

function labelList(categories: string[]): string {
  const labels = categories.map((c) => CATEGORY_META[c as keyof typeof CATEGORY_META].label);
  return labels.join(", ");
}

export default function ResultsPage() {
  const router = useRouter();
  const { questions, finalConfirmed, getResults, retake } = useAssessment();

  const results = useMemo(() => getResults(), [getResults]);

  useEffect(() => {
    if (questions.length === 0 || !finalConfirmed) {
      router.replace("/");
    }
  }, [questions.length, finalConfirmed, router]);

  if (!results) return null;

  const handleRetake = () => {
    retake();
    router.push("/assessment/session");
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">Your AI Readiness Results</h1>

      <div className="mt-8 flex justify-center">
        <ScoreGauge score={results.overallScore} level={results.level} />
      </div>
      <p className="mx-auto mt-4 max-w-lg text-center text-sm text-slate-600">{results.levelDescription}</p>
      <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
  <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 text-center">
    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
      Overall Score
    </p>
    <p className="mt-2 text-3xl font-bold text-indigo-950">
      {results.overallScore}%
    </p>
  </div>

  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center">
    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
      Strongest Area
    </p>
    <p className="mt-2 text-sm font-semibold text-emerald-900">
      {labelList(results.strongestAreas)}
    </p>
  </div>

  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
    <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
      Priority Area
    </p>
    <p className="mt-2 text-sm font-semibold text-amber-900">
      {labelList(results.priorityAreas)}
    </p>
  </div>
</section>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Category Scores</h2>
        <div className="mt-5 flex flex-col gap-5">
          {results.categoryScores.map((score) => (
            <CategoryScoreBar key={score.category} score={score} />
          ))}
        </div>
      </section>

      

      {results.criticalAreas.length > 0 && (
        <section className="mt-4 rounded-2xl border border-rose-300 bg-rose-50 p-5">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-rose-700">Critical Development Area</h3>
          <p className="mt-2 text-base font-semibold text-rose-900">{labelList(results.criticalAreas)}</p>
          <p className="mt-2 text-sm text-rose-800">
            Your overall performance may still be strong, but this area represents a significant weakness that
            should be addressed before relying heavily on AI in sensitive or high-impact situations.
          </p>
        </section>
      )}

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Confidence Calibration</h2>
        <p className="mt-2 text-lg font-semibold text-slate-900">{CALIBRATION_LABEL[results.calibration.result]}</p>
        <p className="mt-2 text-sm text-slate-600">{results.calibration.explanation}</p>
      </section>

      <section className="mt-8 rounded-2xl border border-indigo-200 bg-indigo-50 p-6 sm:p-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Personalised Insight</h2>
        <p className="mt-3 text-sm leading-relaxed text-indigo-950 sm:text-base">{results.insight}</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Development Recommendations</h2>
        <div className="mt-5 flex flex-col gap-5">
          {results.recommendedCategories.map((category) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-slate-900">{CATEGORY_META[category].label}</h3>
              <p className="mt-1 text-sm text-slate-600">{CATEGORY_META[category].recommendation}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 flex justify-center">
        <Button variant="secondary" onClick={handleRetake}>
          Retake Assessment
        </Button>
      </div>
    </div>
  );
}
