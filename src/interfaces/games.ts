export interface GamesOptions {
  name: string;
  route: string;
}

export interface QuizOptions {
  type: string;
  quizs: QuizOption[];
}

export interface QuizOption {
  id: number;
  title: string;
  stepsCurrent: number;
  stepsTotals: number;
}