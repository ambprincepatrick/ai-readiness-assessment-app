import { calculateCalibration } from "./calibration";
import { generateInsight } from "./insights";
import {
  calculateCategoryScores,
  calculateOverallScore,
  getCriticalAreas,
  getPriorityAreas,
  getReadinessLevel,
  getRecommendedCategories,
  getStrongestAreas,
} from "./scoring";
import type { Answer, AssessmentResults, ConfidenceResponse, SelectedQuestion } from "./types";

export function buildResults(
  selected: SelectedQuestion[],
  answers: Record<string, Answer>,
  confidenceResponses: Record<string, ConfidenceResponse>
): AssessmentResults {
  const categoryScores = calculateCategoryScores(selected, answers);
  const overallScore = calculateOverallScore(categoryScores);
  const { level, description } = getReadinessLevel(overallScore);

  const strongestAreas = getStrongestAreas(categoryScores);
  const priorityAreas = getPriorityAreas(categoryScores);
  const criticalAreas = getCriticalAreas(categoryScores);
  const recommendedCategories = getRecommendedCategories(categoryScores);

  const calibrationOutcome = calculateCalibration(selected, answers, confidenceResponses);

  const insight = generateInsight({
    overallScore,
    level,
    categoryScores,
    strongestAreas,
    priorityAreas,
    criticalAreas,
    calibrationResult: calibrationOutcome.result,
  });

  return {
    overallScore,
    level,
    levelDescription: description,
    categoryScores,
    strongestAreas,
    priorityAreas,
    criticalAreas,
    calibration: {
      result: calibrationOutcome.result,
      explanation: calibrationOutcome.explanation,
    },
    recommendedCategories,
    insight,
  };
}
