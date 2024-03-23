import React, { useEffect, useState } from 'react';
import TitleBar from '../components/common/TitleBar';
import { ReactComponent as RetryBooks } from '../assets/illust/illust_retry_books.svg';
import CategorySquare from '../components/retryPage/CategorySquare';
import WrongQuestion from '../components/retryPage/WrongQuestion';
import Footer from '../components/common/Footer';
import { CategoryType, WrongQuizItemType } from '../data/type';
import { useQuery } from 'react-query';
import { getWrongQuizListApi } from '../api/quizApi';

const RetryPage = ({ memberId }: { memberId: string }) => {
  const [clickedCategory, setClickedCategory] = useState<CategoryType>('LANG');
  const { data, isLoading, error, refetch } = useQuery(
    'wrongQuizList',
    () => getWrongQuizListApi(memberId, clickedCategory),
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
      enabled: false,
    },
  );

  useEffect(() => {
    refetch();
  }, [clickedCategory]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
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
      <div className="w-full grow pt-2 pb-6 px-4 flex flex-col gap-y-4">
        {isLoading ? (
          <div>로딩 중...</div>
        ) : error ? (
          <div>에러가 발생하였습니다.</div>
        ) : data ? (
          data.data.result.length === 0 ? (
            <div className="w-full grow flex items-center justify-center">아직 틀린 문제가 없어요!</div>
          ) : (
            data.data.result.map((item: WrongQuizItemType, idx: number) => {
              return (
                <WrongQuestion
                  key={idx}
                  id={item.id}
                  quizNum={item.quizNum}
                  category={clickedCategory}
                  didSimilar={true}
                />
              );
            })
          )
        ) : (
          <div>데이터 없음</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RetryPage;
