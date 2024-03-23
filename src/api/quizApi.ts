import { GradeRequestItemType } from '../data/type';
import { baseAxios } from './axiosInstance';

export const getQuizListApi = async (category: string) => {
  console.log('category', category);
  return baseAxios.get(`/quiz/${category}`);
};

export const postTotalGradeApi = async (category: string, memberId: string, request: GradeRequestItemType[]) => {
  console.log('category', category);
  console.log('memberId', memberId);
  console.log('request', request);
  return baseAxios.post(`/members/${memberId}/quizzes/${category}/grade`, {
    category: category,
    gradeRequestList: request,
  });
};
