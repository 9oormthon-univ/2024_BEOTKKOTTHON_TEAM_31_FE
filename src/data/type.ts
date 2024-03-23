export type CategoryType = 'LANG' | 'MATH' | 'DEDUCE' | 'SPATIAL';

export type CategoryItemType = {
  title: string;
  description: string;
  tags: string[];
};

export type CategoryListType = Record<CategoryType, CategoryItemType>;

export type QuizType = {
  quizId: number;
  quizNum: number;
  category: CategoryType;
  choiceFirst: string;
  choiceSecond: string;
  choiceThird: string;
  choiceFourth: string;
  choiceFifth: string;
  example: string;
  title: string;
};

export type ChoiceType = {
  num: number;
  content: string;
};

export type GradeItemType = {
  category: CategoryType;
  quizId: number;
  title: string;
  isCorrect: boolean;
};

export type ExplainItemType = {
  quiz: QuizType;
  selected: number;
  answer: number;
  totalPeople: number;
  correctPeople: number;
  correctPercentage: number;
  explain: string;
};

export type GradeRequestItemType = {
  id: number;
  category: CategoryType;
  isSimilar: boolean;
  choice: number;
};
