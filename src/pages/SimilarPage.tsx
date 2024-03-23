import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CategoryType, QuizAnswerType, QuizType } from '../data/type';
import { categoryEngToKor } from '../data/variable';
import TitleBar from '../components/common/TitleBar';
import QuizBox from '../components/questionPage/QuizBox';
import PrimaryButton from '../components/questionPage/PrimaryButton';
import Footer from '../components/common/Footer';
import Popup from '../components/similarPage/Popup';
import { useQuery } from 'react-query';
import { getSimilarSingleQuizApi } from '../api/similarApi';

const SimilarPage = () => {
  const navigate = useNavigate();
  const { category, id } = useLocation().state as { category: string; id: number };
  const [realCategory, setRealCategory] = useState<CategoryType>('LANG');
  const [similarQuiz, setSimilarQuiz] = useState<QuizType | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<QuizAnswerType | null>(null);
  const [currentSelectedNum, setCurrentSelectedNum] = useState<number | null>(null);
  const [isAbleToNext, setIsAbleToNext] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const { data, isLoading, error, refetch } = useQuery('categoryQuiz', () => getSimilarSingleQuizApi(id), {
    onSuccess: (data) => {
      console.log(data);
      if (data.data.result.answer < 1 || data.data.result.answer > 5) {
        setPopupVisible(true);
        return;
      }

      setSimilarQuiz({
        id: id,
        quizNum: data.data.result.quizNum,
        category: data.data.result.category,
        title: data.data.result.title,
        choiceFirst: data.data.result.choiceFirst,
        choiceSecond: data.data.result.choiceSecond,
        choiceThird: data.data.result.choiceThird,
        choiceFourth: data.data.result.choiceFourth,
        choiceFifth: data.data.result.choiceFifth,
        example: data.data.result.example,
      });
      setQuizAnswer({
        quizNum: data.data.result.quizNum,
        category: data.data.result.category,
        isSimilar: true,
        choice: 0,
        title: data.data.result.title,
        example: data.data.result.example,
        choiceFirst: data.data.result.choiceFirst,
        choiceSecond: data.data.result.choiceSecond,
        choiceThird: data.data.result.choiceThird,
        choiceFourth: data.data.result.choiceFourth,
        choiceFifth: data.data.result.choiceFifth,
        answer: data.data.result.answer,
        solution: data.data.result.solution,
      });
      setPopupVisible(false);
    },
    onError: (error) => {
      console.log(error);
      setPopupVisible(true);
    },
    enabled: false,
  });

  useEffect(() => {
    console.log(id);
    id && refetch();
  }, [id]);

  useEffect(() => {
    setRealCategory(
      category === 'LANG' ? 'LANG' : category === 'MATH' ? 'MATH' : category === 'DEDUCE' ? 'DEDUCE' : 'SPATIAL',
    );
  }, [category]);

  useEffect(() => {
    if (!currentSelectedNum || !quizAnswer) return;
    setQuizAnswer({ ...quizAnswer, choice: currentSelectedNum });
  }, [currentSelectedNum]);

  useEffect(() => {
    console.log(similarQuiz);
  }, [similarQuiz]);

  const nextHandler = () => {
    console.log('nextHandler');
    if (similarQuiz === null || currentSelectedNum === null || quizAnswer === null) return;
    navigate('/similar/explain', { state: { category: realCategory, baseQuizId: id, quizAnswer: quizAnswer } });
  };

  return isLoading ? (
    <div className="w-full h-screen flex items-center justify-center text-20 text-black">
      <div>로딩 중 ...</div>
    </div>
  ) : error ? (
    <div className="w-full h-screen flex items-center justify-center text-20 text-black">
      <div>에러 발생 ...</div>
    </div>
  ) : data && similarQuiz ? (
    <div className="relative w-full flex min-h-full flex-col items-center justify-start">
      <div className="relative w-full flex flex-col gap-y-7 bg-main rounded-b-xl px-4 pt-7 pb-32">
        <TitleBar
          text={`${categoryEngToKor[realCategory]}영역 ${similarQuiz.quizNum}번 유사문제`}
          isPrev={true}
          isHome={true}
        />
      </div>
      <div className="relative w-full -translate-y-24 px-4">
        <QuizBox
          quiz={similarQuiz}
          setIsAbleToNext={setIsAbleToNext}
          type="similar"
          setSelected={setCurrentSelectedNum}
          selected={currentSelectedNum}
        />
      </div>
      <div className="relative w-full flex items-center justify-center px-4">
        <PrimaryButton text="채점하기" onClick={nextHandler} isAble={isAbleToNext} />
      </div>
      <Footer />
      <Popup isVisible={popupVisible} category={realCategory} />
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center text-20 text-black animate-pulse">
      <div>로딩 중 ...</div>
    </div>
  );
};

export default SimilarPage;
