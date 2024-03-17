import React from 'react';
import { ReactComponent as Math } from '../../../assets/illust/illust_math.svg';
import { ReactComponent as StartBtn } from '../../../assets/illust/illust_start_btn.svg';
function MathBox() {
  return (
    <div className="relative grid h-[144px] w-full grid-flow-row-dense grid-cols-3 overflow-hidden rounded-8 border border-sub_200">
      <div className=" flex items-center justify-center bg-sub_200 ">
        <Math className="h-auto w-auto" />
      </div>
      <div className="col-span-2 w-full">
        <div className="mx-4 mt-6 flex justify-between">
          <div className="text-gray_600">
            <div className="mb-4 text-16 font-bold leading-none">수리영역</div>
            <div className="leading-4">
              <div className="text-12 font-medium">영역 목표</div>
              <div className="text-10 font-normal">수학적 사고 능력과 문제 해결 능력 평가</div>
            </div>
          </div>
          <StartBtn className="w-auto" />
        </div>
        <div className="mx-4 mb-[23px] mt-2 box-border flex w-full justify-start gap-x-2 leading-none ">
          <div className="flex items-center rounded-12 bg-sub_300 px-3 py-[7px] text-center text-10 font-medium text-white ">
            산수
          </div>
          <div className="flex items-center rounded-12 bg-sub_300 px-3 py-[7px] text-center text-10 font-medium text-white ">
            수치 추론
          </div>
          <div className="flex items-center rounded-12 bg-sub_300 px-3 py-[7px] text-center text-10 font-medium text-white ">
            대수 및 기하학
          </div>
        </div>
      </div>
    </div>
  );
}

export default MathBox;
