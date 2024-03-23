import React, { useEffect, useState } from 'react';
import { CategoryType, ExplainItemType, GradeItemType } from '../data/type';
import { categoryEngToKor, dummyCorrectExplain, dummyIncorrectExplain } from '../data/variable';
import QuizBox from '../components/questionPage/QuizBox';
import ExplainBox from '../components/explainPage/ExplainBox';
import Footer from '../components/common/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/questionPage/PrimaryButton';
import TitleBar from '../components/common/TitleBar';

const SimilarExplainPage = () => {
  const navigate = useNavigate();
  const { category, explainRequest } = useLocation().state as { category: string; explainRequest: GradeItemType };
  const [realCategory, setRealCategory] = useState<CategoryType>('LANG');
  const [explain, setExplain] = useState<ExplainItemType | null>(dummyCorrectExplain);

  useEffect(() => {
    setRealCategory(
      category === 'LANG' ? 'LANG' : category === 'MATH' ? 'MATH' : category === 'DEDUCE' ? 'DEDUCE' : 'SPATIAL',
    );
  }, [category]);

  useEffect(() => {
    console.log('category', category);
    console.log('explainRequest', explainRequest);
    setExplain(dummyIncorrectExplain);
  }, []);

  useEffect(() => {
    console.log('explain', explain);
  }, [explain]);

  if (!explain) return <div>로딩중...</div>;

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <div className="w-full px-4 pt-6 pb-40 flex items-center justify-between bg-main rounded-xl">
        <TitleBar
          text={`${categoryEngToKor[realCategory]} ${explain.quiz.quizNum}번 유사문제 해설`}
          isPrev={true}
          isHome={true}
        />
      </div>
      <div className="w-full px-4 py-6 flex flex-col items-center justify-start -translate-y-40">
        <div className="w-full flex flex-col items-center justify-start">
          <QuizBox
            quiz={explain.quiz}
            setIsAbleToNext={() => {}}
            userAnswer={explain.selected}
            correctAnswer={explain.answer}
            type={explain.answer === explain.selected ? 'true' : 'false'}
            selected={null}
            setSelected={() => {}}
          />
        </div>
        <div className="mt-6 w-full flex flex-col items-center justify-start gap-y-2">
          <ExplainBox
            text={
              '제시문은 상하 관계를 나타낸다. 중학생은 학생에 포함되며 전철은 대중교통에 포함된다. 따라서 학생 : 중학생 = 대중교통 : 전철이 답이다.'
            }
          />
        </div>
        <div className="w-full pt-6">
          <PrimaryButton
            text="다른 유사문제 생성하기"
            onClick={() => navigate('/similar', { state: { category: category } })}
            isAble={true}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SimilarExplainPage;
