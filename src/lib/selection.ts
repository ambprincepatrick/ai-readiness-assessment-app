import { questions as questionBank } from "@/data/questions";
import { CATEGORY_ORDER } from "./types";
import type { Category, Question, SelectedQuestion } from "./types";

/** Fisher-Yates shuffle. Returns a new array; does not mutate the input. */
export function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Builds one assessment attempt:
 * 1. Randomly draw 6 questions from each of the 6 categories (36 total).
 * 2. Within each category's 6 draws, flag 2 as confidence-check questions
 *    (exactly 12 confidence checks per attempt, 2 per category).
 * 3. Shuffle the combined 36 questions into a random presentation order.
 *
 * Each call is an independent random draw, so retakes naturally vary
 * without needing explicit history tracking.
 */
export function buildAssessment(): SelectedQuestion[] {
  const selected: SelectedQuestion[] = [];

  for (const category of CATEGORY_ORDER) {
    const pool = questionBank.filter((q: Question) => q.category === category);
    const drawn = shuffle(pool).slice(0, 6);
    const confidenceCheckIds = new Set(drawn.slice(0, 2).map((q) => q.id));

    for (const q of drawn) {
      selected.push({ ...q, confidenceCheck: confidenceCheckIds.has(q.id) });
    }
  }

  return shuffle(selected);
}

export function questionCategoryCounts(selected: SelectedQuestion[]): Record<Category, number> {
  const counts: Record<Category, number> = {
    foundations: 0,
    criticalThinking: 0,
    promptingCommunication: 0,
    practicalApplication: 0,
    responsibleUse: 0,
    problemSolving: 0,
  };
  for (const q of selected) counts[q.category]++;
  return counts;
}
