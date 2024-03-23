import React from 'react';
import { ReactComponent as Snack } from '../../assets/illust/illust_snack.svg';
import { useNavigate } from 'react-router-dom';
import { CategoryType } from '../../data/type';

const Popup = ({ category }: { category: CategoryType }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed w-full h-screen overflow-hidden top-0 left-0 flex items-center justify-center bg-black/50">
      <div className="px-10 py-6 rounded bg-white flex flex-col items-center justify-center gap-y-4">
        <div className="w-full flex flex-col items-center justify-center">
          <Snack className="sm:w-7 md:w-8 lg:w-9 h-auto" />
          <div className="font-bole text-14 text-gray_600 pt-4">유사문제를 생성하지 못했어요</div>
          <div className="whitespace-pre text-10 font-medium text-gray_400 pt-2">{`예상치 못한 오류가 일어났어요!\n다시 유사문제를 생성해 볼까요?`}</div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-y-2">
          <div
            onClick={() => navigate('/similar', { state: { category: category } })}
            className="bg-main text-white text-semibold text-12 rounded-2xl px-4 py-2.5 cursor-pointer"
          >
            유사문제 다시 생성하기
          </div>
          <div className="text-main text-10 font-semibold cursor-pointer">틀린문제로 돌아가기</div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
