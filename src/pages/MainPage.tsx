import React, { useEffect, useState } from 'react';
import LogoutPage from '../components/mainPage/LogoutPage';
import { getMemberId, getMemberNickname } from '../api/localStorage';
import LoginPage from '../components/mainPage/LoginPage';
// import LoginPage from '../components/mainPage/LoginPage';

const MainPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const memberId = getMemberId();
    const memberNickname = getMemberNickname();

    if (memberId === null || memberNickname === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-start justify-start">
      {isLogin ? <LoginPage /> : <LogoutPage />}
    </div>
  );
};

export default MainPage;
