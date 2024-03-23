export const setMemberId = (memberId: string) => {
  localStorage.setItem('memberId', memberId);
};

export const getMemberId = () => {
  return localStorage.getItem('memberId');
};

export const removeMemberId = () => {
  localStorage.removeItem('memberId');
};

export const setMemberNickname = (memberNickname: string) => {
  localStorage.setItem('memberNickname', memberNickname);
};

export const getMemberNickname = () => {
  return localStorage.getItem('memberNickname');
};

export const removeMemberNickname = () => {
  localStorage.removeItem('memberNickname');
};
