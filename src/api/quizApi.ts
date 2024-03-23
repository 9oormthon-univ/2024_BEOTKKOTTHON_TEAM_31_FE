import { GradeRequestItemType } from '../data/type';
import { baseAxios } from './axiosInstance';

export const getQuizListApi = async (category: string, memberId: string) => {
  console.log('category', category);
  return baseAxios.get(`/members/${memberId}/quizzes/${category}`);
};

export const postTotalGradeApi = async (category: string, memberId: string, request: GradeRequestItemType[]) => {
  console.log('category', category);
  console.log('memberId', memberId);
  console.log('request', request);
  return baseAxios.post(`/members/${memberId}/quizzes/${category}/grade`, {
    category: category,
    gradeRequests: request,
  });
};

export const postSingleGradeApi = async (memberId: string, quizId: number, choice: number, category: string) => {
  return baseAxios.post(`/members/${memberId}/quiz/${quizId}/grade`, {
    id: quizId,
    category: category,
    choice: choice.toString(),
  });
};

export const getSingleQuizExplainApi = async (memberId: string, quizId: number) => {
  return baseAxios.get(`/members/${memberId}/quiz/${quizId}/answer`);
};

export const getWrongQuizListApi = async (memberId: string, category: string) => {
  return baseAxios.get(`/members/${memberId}/quiz/wrong/${category}`);
};
