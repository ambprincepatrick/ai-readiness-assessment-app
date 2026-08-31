export type Category =
  | "foundations"
  | "criticalThinking"
  | "promptingCommunication"
  | "practicalApplication"
  | "responsibleUse"
  | "problemSolving";

export type Difficulty = "Foundation" | "Intermediate" | "Advanced";

export interface Question {
  id: string;
  category: Category;
  difficulty: Difficulty;
  type: string;
  question: string;
  options: [string, string, string, string];
  correctAnswer: 0 | 1 | 2 | 3;
  explanation: string;
}

/** A question after it has been drawn into a live assessment attempt. */
export interface SelectedQuestion extends Question {
  /** True for exactly 12 of the 36 selected questions (2 per category), assigned per attempt. */
  confidenceCheck: boolean;
}

export type ConfidenceLevel = "guessing" | "slightlyConfident" | "confident" | "veryConfident";

export interface CategoryMeta {
  code: string;
  label: string;
  weight: number; // percentage points out of 100
  recommendation: string;
}

export const CATEGORY_META: Record<Category, CategoryMeta> = {
  foundations: {
    code: "AI-F",
    label: "AI Foundations",
    weight: 15,
    recommendation:
      "Focus on understanding how generative AI works, its capabilities and limitations, hallucinations, context, and the difference between AI confidence and accuracy.",
  },
  criticalThinking: {
    code: "AI-CT",
    label: "AI Critical Thinking",
    weight: 20,
    recommendation:
      "Focus on verifying AI-generated claims, evaluating sources, recognising unsupported information, understanding uncertainty, and avoiding confirmation bias.",
  },
  promptingCommunication: {
    code: "AI-PC",
    label: "Prompting and Communication",
    weight: 15,
    recommendation:
      "Focus on defining clear objectives, providing relevant context, setting useful constraints, specifying the desired output, and improving results through iteration.",
  },
  practicalApplication: {
    code: "AI-PA",
    label: "Practical AI Application",
    weight: 15,
    recommendation:
      "Focus on identifying useful AI opportunities, selecting the right tool for the task, combining AI with human expertise, and measuring whether AI is genuinely improving results.",
  },
  responsibleUse: {
    code: "AI-RA",
    label: "Responsible AI Use",
    weight: 20,
    recommendation:
      "Focus on privacy, confidential information, personal data, bias, accountability, appropriate human oversight, transparency, and responsible decision-making.",
  },
  problemSolving: {
    code: "AI-PS",
    label: "AI Problem-Solving",
    weight: 15,
    recommendation:
      "Focus on defining problems clearly, deciding whether AI is appropriate, gathering relevant information, testing solutions, managing risk, and improving workflows based on evidence.",
  },
};

export const CATEGORY_ORDER: Category[] = [
  "foundations",
  "criticalThinking",
  "promptingCommunication",
  "practicalApplication",
  "responsibleUse",
  "problemSolving",
];

export interface Answer {
  questionId: string;
  selectedOption: 0 | 1 | 2 | 3;
}

export interface ConfidenceResponse {
  questionId: string;
  level: ConfidenceLevel;
}

export interface CategoryScore {
  category: Category;
  correct: number;
  total: number;
  percentage: number; // 0-100, unrounded
}

export type CalibrationResult = "wellCalibrated" | "overconfident" | "underconfident";

export interface AssessmentResults {
  overallScore: number; // 0-100 rounded
  level: string;
  levelDescription: string;
  categoryScores: CategoryScore[];
  strongestAreas: Category[];
  priorityAreas: Category[];
  criticalAreas: Category[];
  calibration: {
    result: CalibrationResult;
    explanation: string;
  };
  recommendedCategories: Category[];
  insight: string;
}
