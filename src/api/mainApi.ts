import { baseAxios } from './axiosInstance';

export const getUserMainApi = async (memberId: string) => {
  return baseAxios.get(`/members/${memberId}`, {});
};
