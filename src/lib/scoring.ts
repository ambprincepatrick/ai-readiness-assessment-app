import { CATEGORY_META, CATEGORY_ORDER } from "./types";
import type { Answer, Category, CategoryScore, SelectedQuestion } from "./types";

const QUESTIONS_PER_CATEGORY = 6;
const CRITICAL_THRESHOLD = 40; // percent

/** Category score = correct answers / 6 * 100, kept unrounded for weighting precision. */
export function calculateCategoryScores(
  selected: SelectedQuestion[],
  answers: Record<string, Answer>
): CategoryScore[] {
  return CATEGORY_ORDER.map((category) => {
    const categoryQuestions = selected.filter((q) => q.category === category);
    const correct = categoryQuestions.filter((q) => {
      const answer = answers[q.id];
      return answer && answer.selectedOption === q.correctAnswer;
    }).length;

    return {
      category,
      correct,
      total: QUESTIONS_PER_CATEGORY,
      percentage: (correct / QUESTIONS_PER_CATEGORY) * 100,
    };
  });
}

/** Weighted sum of category percentages using CATEGORY_META weights, rounded to a whole number. */
export function calculateOverallScore(categoryScores: CategoryScore[]): number {
  const weightedSum = categoryScores.reduce((sum, cs) => {
    const weight = CATEGORY_META[cs.category].weight / 100;
    return sum + cs.percentage * weight;
  }, 0);
  return Math.round(weightedSum);
}

export interface ReadinessLevel {
  level: string;
  description: string;
}

const LEVEL_BANDS: { min: number; max: number; level: string; description: string }[] = [
  {
    min: 0,
    max: 24,
    level: "Not Yet Ready",
    description:
      "You currently have significant gaps in AI understanding and practical use. Focus on building a stronger foundation before relying heavily on AI for important tasks.",
  },
  {
    min: 25,
    max: 44,
    level: "AI Aware",
    description:
      "You understand some basic AI concepts but need to strengthen your practical competence, judgement, and ability to use AI effectively and responsibly.",
  },
  {
    min: 45,
    max: 59,
    level: "AI Developing",
    description: "You have a growing AI foundation but still have important gaps in practical application and decision-making.",
  },
  {
    min: 60,
    max: 74,
    level: "AI Capable",
    description: "You can use AI effectively in many situations, but some areas still require further development.",
  },
  {
    min: 75,
    max: 89,
    level: "AI Proficient",
    description: "You demonstrate strong AI knowledge, judgement, practical application, and responsible use.",
  },
  {
    min: 90,
    max: 100,
    level: "AI Advanced",
    description:
      "You demonstrate consistently strong AI competence across understanding, critical thinking, practical application, responsible use, and problem-solving.",
  },
];

export function getReadinessLevel(overallScore: number): ReadinessLevel {
  const band = LEVEL_BANDS.find((b) => overallScore >= b.min && overallScore <= b.max);
  return band ? { level: band.level, description: band.description } : LEVEL_BANDS[0];
}

/** Categories scoring below 40% — flagged regardless of how strong the overall score is. */
export function getCriticalAreas(categoryScores: CategoryScore[]): Category[] {
  return categoryScores.filter((cs) => cs.percentage < CRITICAL_THRESHOLD).map((cs) => cs.category);
}

/** Returns all categories tied for the highest score. */
export function getStrongestAreas(categoryScores: CategoryScore[]): Category[] {
  const max = Math.max(...categoryScores.map((cs) => cs.percentage));
  return categoryScores.filter((cs) => cs.percentage === max).map((cs) => cs.category);
}

/** Returns all categories tied for the lowest score. */
export function getPriorityAreas(categoryScores: CategoryScore[]): Category[] {
  const min = Math.min(...categoryScores.map((cs) => cs.percentage));
  return categoryScores.filter((cs) => cs.percentage === min).map((cs) => cs.category);
}

/**
 * Recommendation set = the two lowest-scoring categories, plus any category
 * below the critical threshold that isn't already among them. Sorted ascending
 * by score so the weakest guidance appears first.
 */
export function getRecommendedCategories(categoryScores: CategoryScore[]): Category[] {
  const sorted = [...categoryScores].sort((a, b) => a.percentage - b.percentage);
  const lowestTwo = sorted.slice(0, 2).map((cs) => cs.category);
  const critical = getCriticalAreas(categoryScores);

  const combined = new Set<Category>([...lowestTwo, ...critical]);
  return sorted.map((cs) => cs.category).filter((c) => combined.has(c));
}
