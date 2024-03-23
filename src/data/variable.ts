import { GradeItemType, QuizType, WrongQuizItemType } from './type';

export const categoryKorToEng = {
  언어: 'LANG',
  수리: 'MATH',
  추리: 'DEDUCE',
  공간: 'SPATIAL',
};

export const categoryEngToKor = {
  LANG: '언어',
  MATH: '수리',
  DEDUCE: '추리',
  SPATIAL: '공간',
};

export const dummyQuestion: QuizType = {
  id: 1,
  quizNum: 1,
  category: 'LANG',
  title: '다음 글을 읽고, 문제를 푸세요.',
  example: '어쩌구저쩌구 예시입니다.',
  choiceFirst: '선택지 1',
  choiceSecond: '선택지 2',
  choiceThird: '선택지 3',
  choiceFourth: '선택지 4',
  choiceFifth: '선택지 5',
};

export const dummyQuestions: QuizType[] = [
  {
    id: 1,
    quizNum: 1,
    category: 'LANG',
    title: '다음 글을 읽고, 문제를 푸세요.',
    example: '어쩌구저쩌구 예시입니다.',
    choiceFirst: '선택지 1',
    choiceSecond: '선택지 2',
    choiceThird: '선택지 3',
    choiceFourth: '선택지 4',
    choiceFifth: '선택지 5',
  },
  {
    id: 2,
    quizNum: 2,
    category: 'MATH',
    title: '다음 수식을 계산하세요.',
    example: '1 + 1 = ?',
    choiceFirst: '선택지 1',
    choiceSecond: '선택지 2',
    choiceThird: '선택지 3',
    choiceFourth: '선택지 4',
    choiceFifth: '선택지 5',
  },
  {
    id: 3,
    quizNum: 3,
    category: 'DEDUCE',
    title: '다음 문장이 사실인지 판단하세요.',
    example: '바다는 파랗다.',
    choiceFirst: '선택지 1',
    choiceSecond: '선택지 2',
    choiceThird: '선택지 3',
    choiceFourth: '선택지 4',
    choiceFifth: '선택지 5',
  },
  {
    id: 4,
    quizNum: 4,
    category: 'SPATIAL',
    title: '다음 그림을 보고, 문제를 푸세요.',
    example: '그림 예시입니다.',
    choiceFirst: '선택지 1',
    choiceSecond: '선택지 2',
    choiceThird: '선택지 3',
    choiceFourth: '선택지 4',
    choiceFifth: '선택지 5',
  },
];

export const dummyGradeItems: GradeItemType[] = [
  { id: 1, quizNum: 1, isCorrect: true },
  { id: 2, quizNum: 2, isCorrect: false },
  { id: 3, quizNum: 3, isCorrect: true },
  { id: 4, quizNum: 4, isCorrect: false },
];

export const dummyCorrectExplain = {
  quiz: dummyQuestion,
  selected: 1,
  answer: 1,
  totalPeople: 100,
  correctPeople: 50,
  correctPercentage: 50,
  explain:
    '제시문은 상하 관계를 나타낸다. 중학생은 학생에 포함되며 전철은 대중교통에 포함된다. 따라서 학생 : 중학생 = 대중교통 : 전철이 답이다.',
};

export const dummyIncorrectExplain = {
  quiz: dummyQuestion,
  selected: 1,
  answer: 2,
  totalPeople: 100,
  correctPeople: 50,
  correctPercentage: 50,
  explain:
    '제시문은 상하 관계를 나타낸다. 중학생은 학생에 포함되며 전철은 대중교통에 포함된다. 따라서 학생 : 중학생 = 대중교통 : 전철이 답이다.',
};

export const dummyWrongQuizItems: WrongQuizItemType[] = [
  {
    id: 7,
    quizNum: 7,
  },
  {
    id: 7,
    quizNum: 7,
  },
  {
    id: 7,
    quizNum: 7,
  },
  {
    id: 7,
    quizNum: 7,
  },
  {
    id: 7,
    quizNum: 7,
  },
];
