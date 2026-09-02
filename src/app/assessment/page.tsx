"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { useAssessment } from "@/context/AssessmentContext";

const POINTS = [
  "36 questions per attempt, drawn from a bank of 72",
  "Six assessment categories, equally represented",
  "Questions are randomly selected each time you take the assessment",
  "Some questions include a confidence check",
  "All questions must be answered before you can view your results",
  "The assessment measures demonstrated understanding, judgement, and practical AI competence",
];

export default function AssessmentIntroPage() {
  const router = useRouter();
  const { startAssessment } = useAssessment();

  const handleBegin = () => {
    startAssessment();
    router.push("/assessment/session");
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Before you begin</h1>

      <ul className="mt-8 flex flex-col gap-4">
        {POINTS.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm text-slate-700 sm:text-base">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
              ✓
            </span>
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        Please complete this assessment independently, using your own knowledge and judgement, without using AI
        tools or searching online for answers. This is what makes your results meaningful.
      </div>

      <Button
  className="mt-10 w-full px-8 py-3 text-base font-semibold shadow-md hover:shadow-lg sm:w-auto"
  onClick={handleBegin}
>
        Begin Assessment
      </Button>
    </div>
  );
}
