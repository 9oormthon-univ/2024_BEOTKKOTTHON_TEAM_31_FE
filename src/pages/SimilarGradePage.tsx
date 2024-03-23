import React, { useEffect, useState } from 'react';
import { CategoryType, GradeItemType } from '../data/type';
import TitleBar from '../components/common/TitleBar';
import { categoryEngToKor, dummyGradeItems } from '../data/variable';
import { ReactComponent as Notes } from '../assets/illust/illust_notes.svg';
import GradeItem from '../components/questionPage/GradeItem';
import { useParams } from 'react-router-dom';
import Footer from '../components/common/Footer';
import { getMemberId } from '../api/localStorage';
import { useMutation } from 'react-query';
import { getSimilarGradeApi } from '../api/similarApi';

const SimilarGradePage = () => {
  const { category } = useParams() as { category: string };
  const [realCategory, setRealCategory] = useState<CategoryType | null>(null);
  const memberId = getMemberId() || '';
  const [gradeList, setGradeList] = useState<GradeItemType[]>([]);
  const { mutate: getGrade } = useMutation('postGrade', () => getSimilarGradeApi(realCategory || 'LANG', memberId), {
    onSuccess: (data) => {
      console.log(data);
      setGradeList(data.data.result.gradeRequestList);
    },
    onError: (error) => {
      console.log(error);
      setGradeList(dummyGradeItems);
    },
  });

  useEffect(() => {
    setRealCategory(
      category === 'LANG' ? 'LANG' : category === 'MATH' ? 'MATH' : category === 'DEDUCE' ? 'DEDUCE' : 'SPATIAL',
    );
  }, [category]);

  useEffect(() => {
    if (realCategory && memberId !== '') {
      getGrade();
    }
  }, [realCategory, memberId]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <div className="w-full bg-main text-white px-4 py-7 rounded-b-xl">
        <TitleBar
          text={`벚꽃신입생님의 ${realCategory ? categoryEngToKor[realCategory] : '언어'}영역`}
          isPrev={false}
          isHome={true}
        />
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
          <GradeItem key={idx} category={realCategory || 'LANG'} quiz={gradeItem} isSimiler={true} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SimilarGradePage;
