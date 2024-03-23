import { QuizAnswerType } from '../data/type';
import { baseAxios } from './axiosInstance';

export const getSimilarSingleQuizApi = async (baseQuizId: number) => {
  return baseAxios.get(`/quiz/${baseQuizId}/similar-quiz`);
};

export const postSimilarSingleGradeApi = async (memberId: string, baseQuizId: number, quizAnswer: QuizAnswerType) => {
  return baseAxios.post(`/members/${memberId}/similar-quiz/${baseQuizId}/grade`, quizAnswer);
};

export const getMySimilarApi = async (memberId: string, baseQuizId: string, category: string) => {
  return baseAxios.get(`/members/${memberId}/similar-quiz/${baseQuizId}/${category}`);
};

export const getSimilarSingleExplainApi = async (memberId: string, quizId: number) => {
  return baseAxios.get(`/members/${memberId}/similar-quiz/${quizId}/answer`);
};
