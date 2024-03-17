import React from 'react';
import { ReactComponent as Reasoning } from '../../../assets/illust/illust_reasoning.svg';
import { ReactComponent as StartBtn } from '../../../assets/illust/illust_start_btn.svg';

function ReasoningBox() {
  return (
    <div className="relative flex h-[144px] w-full overflow-hidden rounded-8 border border-sub_200">
      <div className="flex shrink-0 basis-1/3 items-center justify-center bg-sub_200 ">
        <Reasoning className="h-auto w-auto" />
      </div>
      <div className="flex grow flex-col items-start px-4 py-6">
        <div className="flex w-full justify-start">
          <div className="grow text-gray_600">
            <div className="mb-4 text-16 font-bold leading-none">추리영역</div>
            <div className="leading-4">
              <div className="text-12 font-medium ">영역 목표</div>
              <div className="whitespace-nowrap text-10 font-normal">
                논리적 사고, 분석 능력 및 결론 도출 능력을 평가
              </div>
            </div>
          </div>
          <StartBtn className="w-[32px] shrink-0" />
        </div>
        <div className="mb-[23px] mt-2 box-border flex w-full justify-start gap-x-2 leading-none ">
          <div className="flex items-center rounded-12 bg-sub_300 px-3 py-[7px] text-center text-10 font-medium text-white ">
            논리 추리
          </div>
          <div className="flex items-center rounded-12 bg-sub_300 px-3 py-[7px] text-center text-10 font-medium text-white ">
            상황적 추리
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReasoningBox;
