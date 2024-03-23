import { useEffect, useState } from 'react';
// import Footer from '../components/common/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
// import TitleBar from '../components/common/TitleBar';
// import QuizBox from '../components/questionPage/QuizBox';
import { CategoryType, GradeRequestItemType, QuizType } from '../data/type';
// import PrimaryButton from '../components/questionPage/PrimaryButton';
// import StrokeButton from '../components/questionPage/StrokeButton';
// import { useQuery } from 'react-query';
// import { getQuizListApi } from '../api/quizApi';
import { categoryEngToKor, dummyQuestion } from '../data/variable';
import TitleBar from '../components/common/TitleBar';
import QuizBox from '../components/questionPage/QuizBox';
import PrimaryButton from '../components/questionPage/PrimaryButton';
import Footer from '../components/common/Footer';
import Popup from '../components/similarPage/Popup';

const SimilarPage = () => {
  const navigate = useNavigate();
  const { category } = useLocation().state as { category: string };
  const [realCategory, setRealCategory] = useState<CategoryType>('LANG');
  const [similarQuiz, setSimilarQuiz] = useState<QuizType | null>(null);
  const [currentSelectedNum, setCurrentSelectedNum] = useState<number | null>(null);
  const [isAbleToNext, setIsAbleToNext] = useState(false);
  // const { data, isLoading, error } = useQuery('categoryQuiz', () => getQuizListApi(category), {
  //   onError: (error) => console.log(error),
  // });

  useEffect(() => {
    setSimilarQuiz(dummyQuestion);
  }, []);

  useEffect(() => {
    setRealCategory(
      category === 'LANG' ? 'LANG' : category === 'MATH' ? 'MATH' : category === 'DEDUCE' ? 'DEDUCE' : 'SPATIAL',
    );
  }, [category]);

  // useEffect(() => {
  //   if (data) {
  //     setQuizList(data.data.result.quizzes);
  //   }
  // }, [data]);

  const nextHandler = () => {
    console.log('nextHandler');
    if (similarQuiz === null || currentSelectedNum === null) return;
    const gradeReauest: GradeRequestItemType = {
      id: similarQuiz.quizId,
      category: realCategory,
      isSimilar: true,
      choice: currentSelectedNum,
    };
    navigate('/similar/explain', { state: { category: realCategory, explainRequest: gradeReauest } });
  };

  if (!similarQuiz) {
    return (
      <div className="w-full h-full flex items-center justify-center text-20 text-black">
        <div>로딩 중 ...</div>
      </div>
    );
  }

  return (
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
          type="quiz"
          setSelected={setCurrentSelectedNum}
          selected={currentSelectedNum}
        />
      </div>
      <div className="relative w-full flex items-center justify-center">
        <PrimaryButton text="채점하기" onClick={nextHandler} isAble={isAbleToNext} />
      </div>
      <Footer />
      <Popup category={realCategory} />
    </div>
  );

  // return isLoading || realCategory === '' ? (
  //   <div className="w-full h-full flex items-center justify-center text-20 text-black">
  //     <div>로딩 중 ...</div>
  //   </div>
  // ) : error ? (
  //   <div className="w-full h-full flex items-center justify-center text-20 text-black">
  //     <div>에러 발생</div>
  //   </div>
  // ) : data ? (
  //   <div className="relative w-full flex min-h-full flex-col items-center justify-start">
  //     <div className="relative w-full flex flex-col gap-y-7 bg-main rounded-b-xl px-4 pt-7 pb-32">
  //       <TitleBar
  //         text={`${numberConverter(currentQuizIdx + 1)} of ${data.data.result.size}`}
  //         isPrev={true}
  //         isHome={true}
  //       />
  //       <div className="w-full mt-6">
  //         <div className="relative h-2 bg-white rounded-lg overflow-hidden">
  //           <div
  //             className={`absolute top-0 left-0 h-full bg-[#80F756] rounded-2`}
  //             style={{ width: `${((currentQuizIdx + 1) / data.data.result.size) * 100}%` }}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //     <div className="relative w-full -translate-y-24 px-4">
  //       <QuizBox
  //         quiz={quizList[currentQuizIdx]}
  //         setIsAbleToNext={setIsAbleToNext}
  //         type="quiz"
  //         setSelected={setCurrentSelectedNum}
  //         selected={currentSelectedNum}
  //       />
  //     </div>
  //     <div className="relative w-full flex items-center justify-center px-4">
  //       {currentQuizIdx === 0 ? (
  //         <PrimaryButton text="다음 문제" onClick={nextWithAdded} isAble={isAbleToNext} />
  //       ) : (
  //         <div className="w-full flex items-center justify-center gap-x-4">
  //           <StrokeButton
  //             text={'이전문제'}
  //             onClick={() => setCurrentQuizIdx(currentQuizIdx - 1)}
  //             isAble={currentQuizIdx !== 0}
  //           />
  //           <PrimaryButton
  //             text={currentQuizIdx === quizList.length - 1 ? '채점하기' : '다음 문제'}
  //             onClick={nextWithAdded}
  //             isAble={isAbleToNext}
  //           />
  //         </div>
  //       )}
  //     </div>
  //     <Footer />
  //   </div>
  // ) : (
  //   <div className="w-full h-full flex items-center justify-center">데이터가 없습니다.</div>
  // );
};

export default SimilarPage;
