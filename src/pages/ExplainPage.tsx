import React, { useEffect, useState } from 'react';
import { ExplainItemType } from '../data/type';
import { dummyCorrectExplain, dummyIncorrectExplain } from '../data/variable';
import { ReactComponent as Close } from '../assets/icon/icon_close.svg';
import QuizBox from '../components/questionPage/QuizBox';
import ExplainBox from '../components/explainPage/ExplainBox';
import Footer from '../components/common/Footer';
import { useNavigate, useParams } from 'react-router-dom';

const ExplainPage = () => {
  const navigate = useNavigate();
  const { quizId } = useParams();
  console.log('quizId', quizId);
  const [explain, setExplain] = useState<ExplainItemType | null>(dummyCorrectExplain);

  useEffect(() => {
    setExplain(dummyIncorrectExplain);
  }, []);

  useEffect(() => {
    console.log('explain', explain);
  }, [explain]);

  if (!explain) return <div>로딩중...</div>;

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <div className="w-full px-4 pt-6 pb-40 flex items-center justify-between bg-main rounded-xl">
        <div className="w-full flex items-center justify-between text-white">
          <div className="w-1/3"></div>
          <div className="w-1/3 shrink-0 text-center">{explain.quiz.quizNum}번 해설</div>
          <div className="h-full w-1/3 flex items-center justify-end" onClick={() => navigate(-1)}>
            <Close className="h-full w-auto cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-6 flex flex-col items-center justify-start -translate-y-40">
        <div className="w-full flex flex-col items-center justify-start">
          <QuizBox
            quiz={explain.quiz}
            setIsAbleToNext={() => {}}
            userAnswer={explain.selected}
            correctAnswer={explain.answer}
            type={explain.answer === explain.selected ? 'true' : 'false'}
            selected={explain.selected}
            setSelected={() => {}}
          />
        </div>
        <div className="mt-6 w-full flex flex-col items-center justify-start gap-y-2">
          <div className="w-full flex items-center justify-between">
            <div className="text-12 text-gray_400 text-light">{`${explain.totalPeople}명 중 ${explain.correctPeople}명이 맞췄어요 😊`}</div>
            <div className="text-10 text-gray_300 text-light">{`정답률 ${explain.correctPercentage}%`}</div>
          </div>
          <ExplainBox
            text={
              '제시문은 상하 관계를 나타낸다. 중학생은 학생에 포함되며 전철은 대중교통에 포함된다. 따라서 학생 : 중학생 = 대중교통 : 전철이 답이다.'
            }
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ExplainPage;
