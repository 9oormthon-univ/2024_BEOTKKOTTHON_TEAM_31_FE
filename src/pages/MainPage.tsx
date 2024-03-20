import React from 'react';
// import SimilarQuestion from '../components/questionPage/SimilarQuestion';
// import Result from '../components/questionPage/Result';
// import LogoutPage from '../components/mainPage/LogoutPage';
// import LoginPage from '../components/mainPage/LoginPage';
// import Question from '../components/questionPage/Question';
import Question from '../components/questionPage/Question';
// import Answer from '../components/questionPage/Answer';

const MainPage = () => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-start">
      {/* <LogoutPage /> */}
      {/* <LoginPage /> */}
      <Question />
      {/* <Answer /> */}
      {/* <Result /> */}
      {/* <SimilarQuestion /> */}
    </div>
  );
};

export default MainPage;
