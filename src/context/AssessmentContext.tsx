"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { buildAssessment } from "@/lib/selection";
import { buildResults } from "@/lib/results";
import type {
  Answer,
  AssessmentResults,
  ConfidenceLevel,
  ConfidenceResponse,
  SelectedQuestion,
} from "@/lib/types";

export type AssessmentPhase = "idle" | "question" | "confidence" | "completed";

interface AssessmentState {
  questions: SelectedQuestion[];
  currentIndex: number;
  phase: AssessmentPhase;
  answers: Record<string, Answer>;
  confidenceResponses: Record<string, ConfidenceResponse>;
  finalConfirmed: boolean;
}

interface AssessmentContextValue extends AssessmentState {
  currentQuestion: SelectedQuestion | undefined;
  totalQuestions: number;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  allAnswered: boolean;
  startAssessment: () => void;
  selectAnswer: (optionIndex: 0 | 1 | 2 | 3) => void;
  setConfidence: (level: ConfidenceLevel) => void;
  goNext: () => void;
  goPrevious: () => void;
  confirmCompletion: (confirmed: boolean) => void;
  getResults: () => AssessmentResults | null;
  retake: () => void;
}

const AssessmentContext = createContext<AssessmentContextValue | null>(null);

const initialState: AssessmentState = {
  questions: [],
  currentIndex: 0,
  phase: "idle",
  answers: {},
  confidenceResponses: {},
  finalConfirmed: false,
};

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AssessmentState>(initialState);

  const startAssessment = useCallback(() => {
    setState({
      ...initialState,
      questions: buildAssessment(),
      phase: "question",
    });
  }, []);

  const currentQuestion = state.questions[state.currentIndex];

  const selectAnswer = useCallback(
    (optionIndex: 0 | 1 | 2 | 3) => {
      if (!currentQuestion) return;
      setState((prev) => ({
        ...prev,
        answers: {
          ...prev.answers,
          [currentQuestion.id]: { questionId: currentQuestion.id, selectedOption: optionIndex },
        },
      }));
    },
    [currentQuestion]
  );

  const setConfidence = useCallback(
    (level: ConfidenceLevel) => {
      if (!currentQuestion) return;
      setState((prev) => ({
        ...prev,
        confidenceResponses: {
          ...prev.confidenceResponses,
          [currentQuestion.id]: { questionId: currentQuestion.id, level },
        },
      }));
    },
    [currentQuestion]
  );

  const goNext = useCallback(() => {
    setState((prev) => {
      const question = prev.questions[prev.currentIndex];
      if (!question) return prev;

      // After answering a question, route through the confidence check first if required.
      if (prev.phase === "question" && question.confidenceCheck) {
        return { ...prev, phase: "confidence" };
      }

      const isLast = prev.currentIndex === prev.questions.length - 1;
      if (isLast) {
        return { ...prev, phase: "completed" };
      }

      return { ...prev, currentIndex: prev.currentIndex + 1, phase: "question" };
    });
  }, []);

  const goPrevious = useCallback(() => {
  setState((prev) => {
    if (prev.phase === "confidence") {
      return { ...prev, phase: "question" };
    }

    if (prev.currentIndex === 0) return prev;

    const previousIndex = prev.currentIndex - 1;
    const previousQuestion = prev.questions[previousIndex];

    if (previousQuestion?.confidenceCheck && prev.confidenceResponses[previousQuestion.id]) {
      return { ...prev, currentIndex: previousIndex, phase: "confidence" };
    }

    return { ...prev, currentIndex: previousIndex, phase: "question" };
  });
}, []);

  const confirmCompletion = useCallback((confirmed: boolean) => {
    setState((prev) => ({ ...prev, finalConfirmed: confirmed }));
  }, []);

  const getResults = useCallback((): AssessmentResults | null => {
    if (state.questions.length === 0) return null;
    return buildResults(state.questions, state.answers, state.confidenceResponses);
  }, [state.questions, state.answers, state.confidenceResponses]);

  const retake = useCallback(() => {
    setState({
      ...initialState,
      questions: buildAssessment(),
      phase: "question",
    });
  }, []);

  const allAnswered = useMemo(
    () => state.questions.length > 0 && state.questions.every((q) => state.answers[q.id] !== undefined),
    [state.questions, state.answers]
  );

  const value: AssessmentContextValue = {
    ...state,
    currentQuestion,
    totalQuestions: state.questions.length,
    isFirstQuestion: state.currentIndex === 0,
    isLastQuestion: state.currentIndex === state.questions.length - 1,
    allAnswered,
    startAssessment,
    selectAnswer,
    setConfidence,
    goNext,
    goPrevious,
    confirmCompletion,
    getResults,
    retake,
  };

  return <AssessmentContext.Provider value={value}>{children}</AssessmentContext.Provider>;
}

export function useAssessment(): AssessmentContextValue {
  const ctx = useContext(AssessmentContext);
  if (!ctx) throw new Error("useAssessment must be used within an AssessmentProvider");
  return ctx;
}
