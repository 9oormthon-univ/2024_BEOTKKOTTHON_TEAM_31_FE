import React, { useEffect, useState } from 'react';
import { CategoryType, GradeItemType, GradeRequestItemType } from '../data/type';
import TitleBar from '../components/common/TitleBar';
import { categoryEngToKor } from '../data/variable';
import { ReactComponent as Notes } from '../assets/illust/illust_notes.svg';
import GradeItem from '../components/questionPage/GradeItem';
import { useLocation } from 'react-router-dom';
import Footer from '../components/common/Footer';
import { getMemberId } from '../api/localStorage';
import { useMutation } from 'react-query';
import { postTotalGradeApi } from '../api/quizApi';

const GradePage = () => {
  const { category, gradeRequestList } = useLocation().state as {
    category: CategoryType;
    gradeRequestList: GradeRequestItemType[];
  };
  const memberId = getMemberId() || '';
  const [gradeList, setGradeList] = useState<GradeItemType[]>([]);
  const { mutate: postGrade } = useMutation(
    'postGrade',
    () => postTotalGradeApi(category, memberId, gradeRequestList),
    {
      onSuccess: (data) => {
        console.log(data);
        setGradeList(data.data.result.gradeRequestList);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  useEffect(() => {
    if (category && memberId !== '' && gradeRequestList.length > 0) {
      postGrade();
    }
  }, [category, memberId]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <div className="w-full bg-main text-white px-4 py-7 rounded-b-xl">
        <TitleBar text={`벚꽃신입생님의 ${categoryEngToKor[category]}영역`} isPrev={false} isHome={true} />
        <div className="w-full flex items-center justify-between mt-6">
          <div className="grow flex flex-col items-start justify-start shrink-0 ">
            <div className="text-14">{`벚꽃신입생님은 언어영역에서`}</div>
            <div className="text-16 font-extrabold mt-0.5">{`총 10개 중 5개를 틀렸어요!`}</div>
            <div className="text-14 mt-4">부족한 부분의 풀이를 다시 확인해볼까요?</div>
          </div>
          <div className="sm:w-[80px] md:w-[120px] lg:w-[130px] h-auto flex items-center justify-center">
            <Notes className="w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="grow w-full flex flex-col justify-start items-center gap-y-4 px-5 py-7">
        {gradeList.map((gradeItem, idx) => (
          <GradeItem key={idx} quiz={gradeItem} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default GradePage;
