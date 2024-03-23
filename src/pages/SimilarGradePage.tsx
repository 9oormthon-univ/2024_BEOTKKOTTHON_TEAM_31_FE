import React, { useEffect, useState } from 'react';
import { CategoryType, GradeItemType } from '../data/type';
import TitleBar from '../components/common/TitleBar';
import { categoryEngToKor } from '../data/variable';
import { ReactComponent as Notes } from '../assets/illust/illust_notes.svg';
import GradeItem from '../components/questionPage/GradeItem';
import { useParams } from 'react-router-dom';
import Footer from '../components/common/Footer';
import { getMemberId, getMemberNickname } from '../api/localStorage';
import { useQuery } from 'react-query';
import { getMySimilarApi } from '../api/similarApi';

const SimilarGradePage = () => {
  const { category, baseQuizId } = useParams();
  const memberId = getMemberId() || '';
  const memberNickname = getMemberNickname();
  const [realCategory, setRealCategory] = useState<CategoryType | null>(null);
  const [gradeList, setGradeList] = useState<GradeItemType[]>([]);
  const { data, isLoading, error, refetch } = useQuery(
    'similarGradeList',
    () => getMySimilarApi(memberId, baseQuizId || '', realCategory || 'LANG'),
    {
      onSuccess: (data) => {
        console.log(data);
        setGradeList(data.data.result.memberQuizList);
      },
      onError: (error) => {
        console.log(error);
      },
      enabled: false,
    },
  );

  useEffect(() => {
    setRealCategory(
      category === 'LANG' ? 'LANG' : category === 'MATH' ? 'MATH' : category === 'DEDUCE' ? 'DEDUCE' : 'SPATIAL',
    );
  }, [category]);

  useEffect(() => {
    if (!realCategory || !memberId || !baseQuizId) return;
    refetch();
  }, [realCategory, memberId, baseQuizId]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <div className="w-full bg-main text-white px-4 py-7 rounded-b-xl">
        <TitleBar
          text={`${memberNickname}님의 ${realCategory ? categoryEngToKor[realCategory] : '언어'}영역`}
          isPrev={true}
          isHome={true}
        />
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center text-20 text-black">
            <div>로딩 중 ...</div>
          </div>
        ) : error ? (
          <div className="w-full h-full flex items-center justify-center text-20 text-black"></div>
        ) : data ? (
          <div className="w-full flex items-center justify-between mt-6">
            <div className="grow flex flex-col items-start justify-start shrink-0 ">
              <div className="text-14">{`${memberNickname}님은 ${realCategory ? categoryEngToKor[realCategory] : '언어'}영역 ${data.data.result.quizNum}번에 대해`}</div>
              <div className="text-16 font-extrabold mt-0.5">{`총 ${data.data.result.createSimilarQuizCount}개의 유사문제를 생성하였어요!`}</div>
            </div>
            <div className="sm:w-[80px] md:w-[120px] lg:w-[130px] h-auto flex items-center justify-center">
              <Notes className="w-full h-auto" />
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-20 text-black">
            <div>데이터가 없습니다.</div>
          </div>
        )}
      </div>
      <div className="grow w-full flex flex-col justify-start items-center gap-y-4 px-5 py-7">
        {isLoading ? (
          <div>로딩 중...</div>
        ) : error ? (
          <div className="w-full grow flex items-center justify-center">에러가 발생하였습니다.</div>
        ) : data && gradeList.length > 0 ? (
          gradeList.map((gradeItem, idx) => (
            <GradeItem
              key={idx}
              category={realCategory || 'LANG'}
              quizId={gradeItem.id}
              quizNum={gradeItem.quizNum}
              isCorrect={gradeItem.isCorrect}
              isSimilar={true}
            />
          ))
        ) : (
          <div className="w-full grow h-full flex items-center justify-center">생성한 유사문제가 없어요.</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SimilarGradePage;
