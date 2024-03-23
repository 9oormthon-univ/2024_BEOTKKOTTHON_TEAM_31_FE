import React, { useEffect, useState } from 'react';
import TitleBar from '../components/common/TitleBar';
import { ReactComponent as RetryBooks } from '../assets/illust/illust_retry_books.svg';
import CategorySquare from '../components/retryPage/CategorySquare';
import WrongQuestion from '../components/retryPage/WrongQuestion';
import Footer from '../components/common/Footer';
import { CategoryType, WrongQuizItemType } from '../data/type';
import { dummyWrongQuizItems } from '../data/variable';

const RetryPage = () => {
  const [clickedCategory, setClickedCategory] = useState<CategoryType>('LANG');
  const [wrongList, setWrongList] = useState<WrongQuizItemType[] | null>(null);

  useEffect(() => {
    setWrongList(dummyWrongQuizItems);
  }, []);

  useEffect(() => {
    if (!clickedCategory) return;
    if (clickedCategory === 'SPATIAL') {
      setWrongList(null);
    }
    console.log(clickedCategory);
  }, [clickedCategory]);

  return (
    <div className="w-full flex flex-col items-center justify-start">
      <div className="w-full bg-main py-6 px-4 rounded-b-xl flex flex-col items-center justify-start">
        <TitleBar text="내가 틀린 문제" isPrev={true} isHome={false} />
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-y-4 text-white">
            <div className="flex flex-col gap-y-0.5">
              <div className="font-normal text-14 leading-4">틀린 문제에 대해서</div>
              <div className="font-extrabold text-16 leading-[1.75]">유사문제를 생성하여 연습해 봐요!</div>
            </div>
            <div className="font-normal text-14 leading-[1.75]">반복을 통해 취약한 부분을 보완해 볼까요?</div>
          </div>
          <div className="grow flex items-center justify-end">
            <RetryBooks className="sm:h-[132px] md:h-[200px] lg:h-[230px] w-auto" />
          </div>
        </div>
      </div>
      <div className="w-full flex gap-x-2 p-4">
        <CategorySquare
          category="LANG"
          isClicked={clickedCategory === 'LANG'}
          onClick={() => {
            setClickedCategory('LANG');
          }}
        />
        <CategorySquare
          category="MATH"
          isClicked={clickedCategory === 'MATH'}
          onClick={() => {
            setClickedCategory('MATH');
          }}
        />
        <CategorySquare
          category="DEDUCE"
          isClicked={clickedCategory === 'DEDUCE'}
          onClick={() => {
            setClickedCategory('DEDUCE');
          }}
        />
        <CategorySquare category="SPATIAL" isClicked={clickedCategory === 'SPATIAL'} onClick={() => {}} />
      </div>
      <div className="w-full pt-2 pb-6 px-4 flex flex-col gap-y-4">
        {wrongList === null ? (
          <div>틀린 문제가 없습니다,</div>
        ) : (
          wrongList.map((item, idx) => {
            return (
              <WrongQuestion
                key={idx}
                id={item.quizId}
                title={item.title}
                didSimilar={item.didSimilar}
                category={clickedCategory}
              />
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RetryPage;
