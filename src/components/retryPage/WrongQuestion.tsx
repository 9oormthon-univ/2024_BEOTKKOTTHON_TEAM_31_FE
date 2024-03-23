import React from 'react';
import { ReactComponent as Next } from '../../assets/icon/icon_next_main.svg';
import { useNavigate } from 'react-router-dom';
import { CategoryType } from '../../data/type';

const WrongQuestion = ({
  category,
  id,
  quizNum,
  didSimilar,
}: {
  category: CategoryType;
  id: number;
  quizNum: number;
  didSimilar: boolean;
}) => {
  // console.log(id);
  const navigate = useNavigate();

  return (
    <div className="w-full rounded-lgx border border-solid border-main bg-white px-6 py-4 flex flex-col gap-y-[18px]">
      <div className="w-full flex items-center justify-between">
        <div className="text-14 font-semibold text-black">{quizNum}번 문제</div>
        <div
          onClick={() => navigate(`/explain/${category}/${id}`, { state: { category: category } })}
          className="text-main text-10 font-normal flex items-center justify-center gap-x-2 cursor-pointer"
        >
          <div>해설 바로가기</div>
          <Next className="h-full w-auto" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-x-6">
        <div
          onClick={() => navigate('/similar', { state: { category: category, id: id } })}
          className="grow flex items-center justify-center rounded-2xl bg-main text-white font-semibold text-12 py-[9px] cursor-pointer"
        >
          유사문제 풀기
        </div>
        <div
          onClick={() => navigate(`/similar/grade/${category}/${id}`)}
          className={`grow flex items-center justify-center rounded-2xl bg-main text-white font-semibold text-12 py-[9px] ${didSimilar ? 'bg-main cursor-pointer' : 'bg-sub_100 cursor-not-allowed'}`}
        >
          풀었던 유사문제
        </div>
      </div>
    </div>
  );
};

export default WrongQuestion;
