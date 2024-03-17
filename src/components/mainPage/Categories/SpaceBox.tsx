import React from 'react';
import { ReactComponent as Space } from '../../../assets/illust/illust_space.svg';
import { ReactComponent as UnableStartBtn } from '../../../assets/illust/illust_unable_start_btn.svg';

function SpaceBox() {
  return (
    <div className="relative grid h-[144px] w-full grid-flow-row-dense grid-cols-3 overflow-hidden rounded-8 border border-sub_200">
      <div className=" flex items-center justify-center bg-sub_200 ">
        <Space className="h-auto w-auto" />
      </div>
      <div className="col-span-2 w-full">
        <div className="mx-4 mt-6 flex justify-between">
          <div className=" text-gray_600">
            <div className="mb-4 text-16 font-bold leading-none">공간지각영역</div>
            <div className="leading-4">
              <div className="text-12 font-medium">영역 목표</div>
              <div className="text-10 font-normal">공간적 이해와 조작 능력을 평가</div>
            </div>
          </div>
          <UnableStartBtn className="w-auto" />
        </div>
        <div className="mx-4 mb-[23px] mt-2 box-border flex w-full justify-start gap-x-2 leading-none ">
          <div className="flex items-center rounded-12 bg-sub_300 px-3 py-[7px] text-center text-10 font-bold text-white ">
            COMING SOON
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaceBox;
