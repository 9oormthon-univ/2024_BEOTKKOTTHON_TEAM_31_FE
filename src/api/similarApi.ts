import { baseAxios } from './axiosInstance';

export const getSimilarGradeApi = async (category: string, memberId: string) => {
  console.log('category', category);
  console.log('memberId', memberId);
  return baseAxios.get(`/members/${memberId}/quizzes/similar/${category}/grade`);
};
