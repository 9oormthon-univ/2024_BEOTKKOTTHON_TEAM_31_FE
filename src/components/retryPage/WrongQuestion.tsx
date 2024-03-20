import React from 'react';
import { ReactComponent as Next } from '../../assets/icon/icon_next_main.svg';

const WrongQuestion = ({ id, title }: { id: number; title: string }) => {
  console.log(id);

  return (
    <div className="w-full rounded-lgx border border-solid border-main bg-white px-6 py-4 flex flex-col gap-y-[18px]">
      <div className="w-full flex items-center justify-between">
        <div className="text-14 font-semibold text-black">{title}</div>
        <div className="text-main text-10 font-normal flex items-center justify-center gap-x-2">
          <div>해설 바로가기</div>
          <Next className="h-full w-auto" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-x-6">
        <div className="grow flex items-center justify-center rounded-2xl bg-main text-white font-semibold text-12 py-[9px]">
          유사문제 풀기
        </div>
        <div className="grow flex items-center justify-center rounded-2xl bg-main text-white font-semibold text-12 py-[9px]">
          풀었던 유사문제
        </div>
      </div>
    </div>
  );
};

export default WrongQuestion;
