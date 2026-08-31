import type { Answer, CalibrationResult, ConfidenceLevel, ConfidenceResponse, SelectedQuestion } from "./types";

const HIGH_CONFIDENCE: ConfidenceLevel[] = ["confident", "veryConfident"];
const LOW_CONFIDENCE: ConfidenceLevel[] = ["guessing", "slightlyConfident"];

/**
 * Calibration rule (not specified numerically in the source docs — this is our
 * documented judgement call):
 *
 * Of the 12 confidence-checked questions, count:
 *   - highConfidenceWrong: answered incorrectly while reporting Confident/Very Confident
 *   - lowConfidenceCorrect: answered correctly while reporting Guessing/Slightly Confident
 *
 * A quarter of the 12 checks (3 questions) showing the same mismatch pattern is
 * treated as a meaningful signal rather than noise:
 *   - highConfidenceWrong >= 3  => "Overconfident"
 *   - else lowConfidenceCorrect >= 3 => "Underconfident"
 *   - otherwise => "Well-Calibrated"
 *
 * Overconfidence is checked first because, in an AI-readiness context, unearned
 * confidence is the more consequential failure mode to surface.
 */
const MISMATCH_THRESHOLD = 3;

export interface CalibrationOutcome {
  result: CalibrationResult;
  explanation: string;
  highConfidenceWrong: number;
  lowConfidenceCorrect: number;
  calibratedQuestionCount: number;
}

export function calculateCalibration(
  selected: SelectedQuestion[],
  answers: Record<string, Answer>,
  confidenceResponses: Record<string, ConfidenceResponse>
): CalibrationOutcome {
  const calibratedQuestions = selected.filter((q) => q.confidenceCheck);

  let highConfidenceWrong = 0;
  let lowConfidenceCorrect = 0;

  for (const q of calibratedQuestions) {
    const answer = answers[q.id];
    const confidence = confidenceResponses[q.id];
    if (!answer || !confidence) continue;

    const isCorrect = answer.selectedOption === q.correctAnswer;

    if (!isCorrect && HIGH_CONFIDENCE.includes(confidence.level)) {
      highConfidenceWrong++;
    } else if (isCorrect && LOW_CONFIDENCE.includes(confidence.level)) {
      lowConfidenceCorrect++;
    }
  }

  let result: CalibrationResult;
  let explanation: string;

  if (highConfidenceWrong >= MISMATCH_THRESHOLD) {
    result = "overconfident";
    explanation =
      "You showed high confidence on several answers that turned out to be incorrect. Building in more verification before acting on confident AI-related judgements will reduce this risk.";
  } else if (lowConfidenceCorrect >= MISMATCH_THRESHOLD) {
    result = "underconfident";
    explanation =
      "Your actual performance was stronger than the confidence you reported. Trusting well-reasoned judgements a little more may help you act more decisively.";
  } else {
    result = "wellCalibrated";
    explanation = "Your confidence generally matched your demonstrated performance across the assessment.";
  }

  return {
    result,
    explanation,
    highConfidenceWrong,
    lowConfidenceCorrect,
    calibratedQuestionCount: calibratedQuestions.length,
  };
}
