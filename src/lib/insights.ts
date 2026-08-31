import { CATEGORY_META } from "./types";
import type { CalibrationResult, Category, CategoryScore } from "./types";

function categoryLabel(category: Category): string {
  return CATEGORY_META[category].label;
}

function listLabels(categories: Category[]): string {
  const labels = categories.map(categoryLabel);
  if (labels.length === 1) return labels[0];
  if (labels.length === 2) return `${labels[0]} and ${labels[1]}`;
  return `${labels.slice(0, -1).join(", ")}, and ${labels[labels.length - 1]}`;
}

const CALIBRATION_PHRASE: Record<CalibrationResult, string> = {
  wellCalibrated: "your confidence in your own answers generally matched how well you actually performed",
  overconfident: "you were often more confident than your accuracy justified, which is worth watching in real AI use",
  underconfident: "you performed better than your confidence suggested, so you can trust your judgement a little more",
};

export function generateInsight(params: {
  overallScore: number;
  level: string;
  categoryScores: CategoryScore[];
  strongestAreas: Category[];
  priorityAreas: Category[];
  criticalAreas: Category[];
  calibrationResult: CalibrationResult;
}): string {
  const { overallScore, level, strongestAreas, priorityAreas, criticalAreas, calibrationResult } = params;

  const sentences: string[] = [];

  sentences.push(
    `Your overall AI Readiness Score of ${overallScore}/100 places you at the "${level}" level.`
  );

  sentences.push(
    `Your strongest area is ${listLabels(strongestAreas)}, while ${listLabels(priorityAreas)} is your priority for development.`
  );

  if (criticalAreas.length > 0) {
    sentences.push(
      `Importantly, ${listLabels(criticalAreas)} scored below the 40% critical threshold, so this should be addressed before relying heavily on AI in sensitive or high-impact situations, regardless of your overall score.`
    );
  }

  sentences.push(`On confidence calibration, ${CALIBRATION_PHRASE[calibrationResult]}.`);

  return sentences.join(" ");
}
