"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import ConfidenceCheck from "@/components/ConfidenceCheck";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import { useAssessment } from "@/context/AssessmentContext";

export default function AssessmentSessionPage() {
  const router = useRouter();
  const {
    questions,
    currentIndex,
    phase,
    answers,
    confidenceResponses,
    currentQuestion,
    totalQuestions,
    isFirstQuestion,
    finalConfirmed,
    allAnswered,
    selectAnswer,
    setConfidence,
    goNext,
    goPrevious,
    confirmCompletion,
  } = useAssessment();

  const [confirmChecked, setConfirmChecked] = useState(finalConfirmed);

  useEffect(() => {
    if (questions.length === 0) {
      router.replace("/assessment");
    }
  }, [questions.length, router]);

  if (questions.length === 0) return null;

  if (phase === "completed") {
    const handleViewResults = () => {
      confirmCompletion(true);
      router.push("/results");
    };

    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Assessment Complete</h1>
        <p className="mt-4 text-sm text-slate-600 sm:text-base">
          Before viewing your results, please confirm that you completed this assessment based on your own
          knowledge and judgement without using AI or external help.
        </p>

        <label className="mt-8 flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left text-sm text-slate-700">
          <input
            type="checkbox"
            checked={confirmChecked}
            onChange={(e) => setConfirmChecked(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
          />
          I confirm that I completed this assessment independently and did not use AI or external help.
        </label>

        <Button
  className="mt-8 w-full px-8 py-3 text-base font-semibold shadow-md hover:shadow-lg sm:w-auto"
  disabled={!confirmChecked}
  onClick={handleViewResults}
>
  View My Results
</Button>
      </div>
    );
  }

  if (!currentQuestion) return null;

  const questionNumber = currentIndex + 1;
  const currentAnswer = answers[currentQuestion.id]?.selectedOption;
  const currentConfidence = confidenceResponses[currentQuestion.id]?.level;

  const canAdvance = phase === "question" ? currentAnswer !== undefined : currentConfidence !== undefined;

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="flex items-center justify-between text-sm font-medium text-slate-500">
  <span>
    Question {questionNumber} of {totalQuestions}
  </span>

  <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
    {phase === "question" ? "Step 1 of 2: Answer the question" : "Step 2 of 2: Rate your confidence"}
  </span>
</div>
      <div className="mt-3">
        <ProgressBar current={questionNumber} total={totalQuestions} />
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        {phase === "question" ? (
          <QuestionCard
            category={currentQuestion.category}
            questionText={currentQuestion.question}
            options={currentQuestion.options}
            selectedOption={currentAnswer}
            onSelect={selectAnswer}
          />
        ) : (
          <ConfidenceCheck selected={currentConfidence} onSelect={setConfidence} />
        )}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
  <div className="flex justify-start">
    <Button
      variant="secondary"
      onClick={goPrevious}
      disabled={isFirstQuestion && phase === "question"}
    >
      Previous
    </Button>
  </div>

  <div className="flex justify-end">
    <Button onClick={goNext} disabled={!canAdvance}>
      {phase === "confidence" ? "Continue" : "Next"}
    </Button>
  </div>
</div>

      {allAnswered && questionNumber === totalQuestions && phase === "question" && (
        <p className="mt-4 text-center text-xs text-slate-400">All questions answered.</p>
      )}
    </div>
  );
}
