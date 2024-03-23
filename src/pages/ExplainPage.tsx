import React, { useEffect, useState } from 'react';
import { ReactComponent as Close } from '../assets/icon/icon_close.svg';
import QuizBox from '../components/questionPage/QuizBox';
import ExplainBox from '../components/explainPage/ExplainBox';
import Footer from '../components/common/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getSingleQuizExplainApi } from '../api/quizApi';
import { CategoryType, QuizType } from '../data/type';

const ExplainPage = ({ memberId }: { memberId: string }) => {
  const navigate = useNavigate();
  const { category, quizId } = useParams();
  const [realCategory, setRealCategory] = useState<CategoryType>('LANG');
  const [quiz, setQuiz] = useState<QuizType | null>(null);
  const { data, isLoading, error } = useQuery(
    ['explainQuiz', memberId, quizId],
    () => getSingleQuizExplainApi(memberId, Number(quizId)),
    {
      onSuccess: (data) => {
        console.log(data);
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

  useEffect(() => {
    if (data) {
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
    }
  }, [data]);

  return isLoading ? (
    <div>로딩 중...</div>
  ) : error ? (
    <div>에러가 발생하였습니다.</div>
  ) : data && quiz ? (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <div className="w-full px-4 pt-6 pb-40 flex items-center justify-between bg-main rounded-xl">
        <div className="w-full flex items-center justify-between text-white">
          <div className="w-1/3"></div>
          <div className="w-1/3 shrink-0 text-center">{data.data.result.quizNum}번 해설</div>
          <div className="h-full w-1/3 flex items-center justify-end" onClick={() => navigate(-1)}>
            <Close className="h-full w-auto cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-6 flex flex-col items-center justify-start -translate-y-40">
        <div className="w-full flex flex-col items-center justify-start">
          <QuizBox
            quiz={quiz}
            setIsAbleToNext={() => {}}
            userAnswer={data.data.result.userChoice}
            correctAnswer={data.data.result.answer}
            type={data.data.result.isCorrect === true ? 'true' : 'false'}
            selected={null}
            setSelected={() => {}}
          />
        </div>
        <div className="mt-6 w-full flex flex-col items-center justify-start gap-y-2">
          <div className="w-full flex items-center justify-between">
            <div className="text-12 text-gray_400 text-light">{`${data.data.result.quizParticipantsCounts}명 중 ${data.data.result.correctAnswerCounts}명이 맞췄어요 😊`}</div>
            <div className="text-10 text-gray_300 text-light">{`정답률 ${data.data.result.ratioOfCorrect}%`}</div>
          </div>
          <ExplainBox text={data.data.result.solution} />
        </div>
        <Footer />
      </div>
    </div>
  ) : (
    <div>데이터가 없습니다.</div>
  );
};

export default ExplainPage;
