import { baseAxios } from './axiosInstance';

export const tempLoginApi = async (nickname: string) => {
  return baseAxios.post(`/login/${nickname}`);
};
