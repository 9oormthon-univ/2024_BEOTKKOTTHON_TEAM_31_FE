import { useEffect, useState } from 'react';
// import Footer from '../components/common/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
// import TitleBar from '../components/common/TitleBar';
// import QuizBox from '../components/questionPage/QuizBox';
import { GradeRequestItemType, QuizType } from '../data/type';
// import PrimaryButton from '../components/questionPage/PrimaryButton';
// import StrokeButton from '../components/questionPage/StrokeButton';
import { useQuery } from 'react-query';
import { getQuizListApi } from '../api/quizApi';
import { dummyQuestions } from '../data/variable';
import TitleBar from '../components/common/TitleBar';
import QuizBox from '../components/questionPage/QuizBox';
import PrimaryButton from '../components/questionPage/PrimaryButton';
import StrokeButton from '../components/questionPage/StrokeButton';
import Footer from '../components/common/Footer';

const QuestionPage = () => {
  const navigate = useNavigate();
  const { category } = useLocation().state as { category: string };
  const [realCategory, setRealCategory] = useState<string>('');
  const [quizList, setQuizList] = useState<QuizType[]>([]);
  const [gradeRequestList, setGradeRequestList] = useState<GradeRequestItemType[]>([]);
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [currentSelectedNum, setCurrentSelectedNum] = useState<number | null>(null);
  const [isAbleToNext, setIsAbleToNext] = useState(false);
  const { data, isLoading, error } = useQuery('categoryQuiz', () => getQuizListApi(category), {
    onError: (error) => console.log(error),
  });

  const nextWithAdded = () => {
    const added: GradeRequestItemType = {
      id: quizList[currentQuizIdx].quizId,
      category: quizList[currentQuizIdx].category,
      isSimilar: false,
      choice: currentSelectedNum!,
    };

    setGradeRequestList([...gradeRequestList, added]);

    if (currentQuizIdx !== quizList.length - 1) {
      setCurrentQuizIdx(currentQuizIdx + 1);
    }
    console.log('채점용 added ---> ', added);
  };

  useEffect(() => {
    setRealCategory(category);
  }, [category]);

  useEffect(() => {
    if (data) {
      // console.log('데이터입니다');
      // console.log(data);
      setQuizList(data.data.result.quizzes);
    }
  }, [data]);

  useEffect(() => {
    console.log('채점용 리스트 ---> ', gradeRequestList);
    if (quizList.length > 0 && gradeRequestList.length === quizList.length) {
      navigate('/grade', { state: { category: category, gradeRequestList: gradeRequestList } });
    }
  }, [gradeRequestList]);

  useEffect(() => {
    console.log('채점용 저장 ---> ', gradeRequestList);
  }, [currentQuizIdx]);

  useEffect(() => {
    setQuizList(dummyQuestions);
  }, []);

  useEffect(() => {
    setCurrentQuizIdx(0);
    setIsAbleToNext(false);
    setCurrentSelectedNum(null);
  }, [quizList]);

  useEffect(() => {
    isAbleToNext && setIsAbleToNext(false);
    setCurrentSelectedNum(null);
  }, [currentQuizIdx]);

  const numberConverter = (num: number) => {
    if (num < 10) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  };

  return isLoading || realCategory === '' ? (
    <div className="w-full h-full flex items-center justify-center text-20 text-black">
      <div>로딩 중 ...</div>
    </div>
  ) : error ? (
    <div className="w-full h-full flex items-center justify-center text-20 text-black">
      <div>에러 발생</div>
    </div>
  ) : data ? (
    <div className="relative w-full flex min-h-full flex-col items-center justify-start">
      <div className="relative w-full flex flex-col gap-y-7 bg-main rounded-b-xl px-4 pt-7 pb-32">
        <TitleBar
          text={`${numberConverter(currentQuizIdx + 1)} of ${data.data.result.size}`}
          isPrev={true}
          isHome={true}
        />
        <div className="w-full mt-6">
          <div className="relative h-2 bg-white rounded-lg overflow-hidden">
            <div
              className={`absolute top-0 left-0 h-full bg-[#80F756] rounded-2`}
              style={{ width: `${((currentQuizIdx + 1) / data.data.result.size) * 100}%` }}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full -translate-y-24 px-4">
        <QuizBox
          quiz={quizList[currentQuizIdx]}
          setIsAbleToNext={setIsAbleToNext}
          type="quiz"
          setSelected={setCurrentSelectedNum}
          selected={currentSelectedNum}
        />
      </div>
      <div className="relative w-full flex items-center justify-center px-4">
        {currentQuizIdx === 0 ? (
          <PrimaryButton text="다음 문제" onClick={nextWithAdded} isAble={isAbleToNext} />
        ) : (
          <div className="w-full flex items-center justify-center gap-x-4">
            <StrokeButton
              text={'이전문제'}
              onClick={() => setCurrentQuizIdx(currentQuizIdx - 1)}
              isAble={currentQuizIdx !== 0}
            />
            <PrimaryButton
              text={currentQuizIdx === quizList.length - 1 ? '채점하기' : '다음 문제'}
              onClick={nextWithAdded}
              isAble={isAbleToNext}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  ) : (
    <div className="w-full h-full flex items-center justify-center">데이터가 없습니다.</div>
  );
};

export default QuestionPage;
