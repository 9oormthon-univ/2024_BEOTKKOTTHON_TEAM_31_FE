import React from 'react';
import LogoutPage from '../components/mainPage/LogoutPage';
// import LoginPage from '../components/mainPage/LoginPage';

const MainPage = () => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-start overflow-hidden">
      <LogoutPage />
      {/* <LoginPage /> */}
    </div>
  );
};

export default MainPage;
