import React, { useEffect, useState } from 'react';
import { CategoryType, GradeItemType, GradeRequestItemType } from '../data/type';
import TitleBar from '../components/common/TitleBar';
import { categoryEngToKor, dummyGradeItems } from '../data/variable';
import { ReactComponent as Notes } from '../assets/illust/illust_notes.svg';
import GradeItem from '../components/questionPage/GradeItem';
import { useLocation } from 'react-router-dom';
import Footer from '../components/common/Footer';
import { getMemberId, getMemberNickname } from '../api/localStorage';
import { useMutation } from 'react-query';
import { postTotalGradeApi } from '../api/quizApi';

const GradePage = () => {
  const { category, gradeRequests } = useLocation().state as {
    category: CategoryType;
    gradeRequests: GradeRequestItemType[];
  };
  const memberNickname = getMemberNickname() || '';
  const memberId = getMemberId() || '';
  const [gradeList, setGradeList] = useState<GradeItemType[]>([]);
  const [gradeInfo, setGradeInfo] = useState({ total: 0, wrong: 0 });
  const { mutate: postGrade } = useMutation('postGrade', () => postTotalGradeApi(category, memberId, gradeRequests), {
    onSuccess: (data) => {
      console.log(data);
      setGradeList(data.data.result.resultList);
      setGradeInfo({ total: data.data.result.totalQuizCounts, wrong: data.data.result.wrongQuizCounts });
    },
    onError: (error) => {
      console.log(error);
      setGradeList(dummyGradeItems);
    },
  });

  useEffect(() => {
    console.log('머지');
  }, []);

  useEffect(() => {
    if (category && memberId !== '' && gradeRequests && gradeRequests.length > 0) {
      console.log('postGrade');
      postGrade();
    }
  }, [category, memberId, gradeRequests]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <div className="w-full bg-main text-white px-4 py-7 rounded-b-xl">
        <TitleBar text={`${memberNickname}님의 ${categoryEngToKor[category]}영역`} isPrev={false} isHome={true} />
        <div className="w-full flex items-center justify-between mt-6">
          <div className="grow flex flex-col items-start justify-start shrink-0 ">
            <div className="text-14">{`${memberNickname}님은 언어영역에서`}</div>
            <div className="text-16 font-extrabold mt-0.5">{`총 ${gradeInfo.total}개 중 ${gradeInfo.wrong}개를 틀렸어요!`}</div>
            <div className="text-14 mt-4">부족한 부분의 풀이를 다시 확인해볼까요?</div>
          </div>
          <div className="sm:w-[80px] md:w-[120px] lg:w-[130px] h-auto flex items-center justify-center">
            <Notes className="w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="grow w-full flex flex-col justify-start items-center gap-y-4 px-5 py-7">
        {gradeList.length > 0 &&
          gradeList.map((gradeItem, idx) => (
            <GradeItem
              key={idx}
              quizId={gradeItem.id}
              quizNum={gradeItem.quizNum}
              category={category}
              isCorrect={gradeItem.isCorrect}
              isSimilar={false}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default GradePage;
