import React, { useEffect, useState } from 'react';
import { CategoryType, QuizType } from '../data/type';
import { categoryEngToKor } from '../data/variable';
import QuizBox from '../components/questionPage/QuizBox';
import ExplainBox from '../components/explainPage/ExplainBox';
import Footer from '../components/common/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import PrimaryButton from '../components/questionPage/PrimaryButton';
import TitleBar from '../components/common/TitleBar';
import { useQuery } from 'react-query';
import { getSimilarSingleExplainApi } from '../api/similarApi';
import { getMemberId } from '../api/localStorage';

const SimilarExplainRecordPage = () => {
  const navigate = useNavigate();
  const memberId = getMemberId() || '';
  const { category, id } = useParams();
  const [realCategory, setRealCategory] = useState<CategoryType>('LANG');
  const [quiz, setQuiz] = useState<QuizType | null>(null);
  const [explain, setExplain] = useState({ selected: 0, answer: 0, isCorrect: false, solution: '' });
  const { data, isLoading, error } = useQuery(
    'explainQuizRecord',
    () => getSimilarSingleExplainApi(memberId, Number(id)),
    {
      onSuccess: (data) => {
        console.log(data);
        setQuiz({
          id: data.data.result.id,
          quizNum: data.data.result.quizNum,
          category: realCategory,
          choiceFirst: data.data.result.choiceFirst,
          choiceSecond: data.data.result.choiceSecond,
          choiceThird: data.data.result.choiceThird,
          choiceFourth: data.data.result.choiceFourth,
          choiceFifth: data.data.result.choiceFifth,
          example: data.data.result.example,
          title: data.data.result.title,
        });
        setExplain({
          selected: data.data.result.userChoice,
          answer: data.data.result.answer,
          isCorrect: data.data.result.isCorrect,
          solution: data.data.result.solution,
        });
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  useEffect(() => {
    setRealCategory(
      category === 'LANG' ? 'LANG' : category === 'MATH' ? 'MATH' : category === 'DEDUCE' ? 'DEDUCE' : 'SPATIAL',
    );
  }, [category]);

  if (!quiz) return <div>로딩중...</div>;

  return isLoading ? (
    <div>로딩 중...</div>
  ) : error ? (
    <div>에러가 발생하였습니다.</div>
  ) : data && quiz ? (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <div className="w-full px-4 pt-6 pb-40 flex items-center justify-between bg-main rounded-xl">
        <TitleBar
          text={`${categoryEngToKor[realCategory]} ${quiz.quizNum}번 유사문제 해설`}
          isPrev={true}
          isHome={true}
        />
      </div>
      <div className="w-full px-4 py-6 flex flex-col items-center justify-start -translate-y-40">
        <div className="w-full flex flex-col items-center justify-start">
          <QuizBox
            quiz={quiz}
            setIsAbleToNext={() => {}}
            userAnswer={explain.selected}
            correctAnswer={explain.answer}
            type={explain.isCorrect ? 'true' : 'false'}
            selected={null}
            setSelected={() => {}}
          />
        </div>
        <div className="mt-6 w-full flex flex-col items-center justify-start gap-y-2">
          <ExplainBox text={explain.solution} />
        </div>
        <div className="w-full pt-6">
          <PrimaryButton
            text="다른 유사문제 생성하기"
            onClick={() => navigate('/similar', { state: { category: category, id: data.data.result.baseQuizId } })}
            isAble={true}
          />
        </div>
        <Footer />
      </div>
    </div>
  ) : (
    <div>데이터가 없습니다.</div>
  );
};

export default SimilarExplainRecordPage;
