import React from 'react';
import { ReactComponent as Num1 } from '../../assets/illust/illust_num1.svg';
import { ReactComponent as Num2 } from '../../assets/illust/illust_num2.svg';
import { ReactComponent as Num3 } from '../../assets/illust/illust_num3.svg';
import { ReactComponent as Num4 } from '../../assets/illust/illust_num4.svg';
import { ReactComponent as Num5 } from '../../assets/illust/illust_num5.svg';
import { ReactComponent as Num1Selection } from '../../assets/illust/illust_num1_selection.svg';
import { ReactComponent as Num2Selection } from '../../assets/illust/illust_num2_selection.svg';
import { ReactComponent as Num3Selection } from '../../assets/illust/illust_num3_selection.svg';
import { ReactComponent as Num4Selection } from '../../assets/illust/illust_num4_selection.svg';
import { ReactComponent as Num5Selection } from '../../assets/illust/illust_num5_selection.svg';

const ChoiceItem = ({
  order,
  text,
  isSelected,
  onSelected,
  bgColor,
}: {
  order: number;
  text: string;
  isSelected: boolean;
  onSelected: () => void;
  bgColor: string;
}) => {
  // console.log('ChoiceItem', order, text, isSelected, bgColor);
  const makeUnderline = (srt: string) => {
    const arr = srt.split('*');

    return arr.length === 1 ? (
      <div className={`grow text-14 font-semibold ${isSelected ? 'text-white' : 'text-gray_600'}`}>{arr[0]}</div>
    ) : (
      <div className={`grow text-14 font-semibold ${isSelected ? 'text-white' : 'text-gray_600'}`}>
        {arr[0]}
        <span className="underline">{arr[1]}</span>
        {arr[2]}
      </div>
    );
  };
  return (
    <div
      className={`w-full p-4 flex items-center justify-start gap-x-10 rounded-lgx cursor-pointer ${
        isSelected
          ? bgColor === 'quiz'
            ? 'bg-main'
            : bgColor === 'true'
              ? 'bg-[#2AE45E] border border-solid border-[#80F756]'
              : bgColor === 'false'
                ? 'bg-[#FF5151] border border-solid border-[#FF8484]'
                : 'bg-gray_200'
          : 'bg-gray_100'
      }`}
      onClick={onSelected}
    >
      {isSelected ? (
        order === 1 ? (
          <Num1Selection className="w-4 h-auto shrink-0" />
        ) : order === 2 ? (
          <Num2Selection className="w-4 h-auto shrink-0" />
        ) : order === 3 ? (
          <Num3Selection className="w-4 h-auto shrink-0" />
        ) : order === 4 ? (
          <Num4Selection className="w-4 h-auto shrink-0" />
        ) : (
          <Num5Selection className="w-4 h-auto shrink-0" />
        )
      ) : order === 1 ? (
        <Num1 className="w-4 h-auto shrink-0" />
      ) : order === 2 ? (
        <Num2 className="w-4 h-auto shrink-0" />
      ) : order === 3 ? (
        <Num3 className="w-4 h-auto shrink-0" />
      ) : order === 4 ? (
        <Num4 className="w-4 h-auto shrink-0" />
      ) : (
        <Num5 className="w-4 h-auto shrink-0" />
      )}
      {makeUnderline(text)}
    </div>
  );
};

export default ChoiceItem;
