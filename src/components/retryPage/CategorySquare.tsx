import React from 'react';
import { ReactComponent as Language } from '../../assets/illust/illust_language.svg';
import { ReactComponent as LanguageWhite } from '../../assets/illust/illust_language_white.svg';
import { ReactComponent as Math } from '../../assets/illust/illust_math.svg';
import { ReactComponent as MathWjote } from '../../assets/illust/illust_math_white.svg';
import { ReactComponent as Reasoning } from '../../assets/illust/illust_reasoning.svg';
import { ReactComponent as ReasoningWjote } from '../../assets/illust/illust_reasoning_white.svg';
import { ReactComponent as Space } from '../../assets/illust/illust_space.svg';
import { ReactComponent as SpaceWhite } from '../../assets/illust/illust_space_white.svg';

const CategorySquare = ({
  category,
  isClicked,
  onClick,
}: {
  category: string;
  isClicked: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`grow flex flex-col items-center justify-center gap-y-2.5 px-5 py-4 rounded-lg text-12 font-bold cursor-pointer ${isClicked ? 'bg-main text-white' : 'bg-sub_100 text-main'}`}
      onClick={onClick}
    >
      <div className="w-full px-4 flex items-center justify-center grow">
        {category === 'language' ? (
          isClicked ? (
            <LanguageWhite className="w-full h-auto" />
          ) : (
            <Language className="w-full h-auto" />
          )
        ) : category === 'math' ? (
          isClicked ? (
            <MathWjote className="w-full h-auto" />
          ) : (
            <Math className="w-full h-auto" />
          )
        ) : category === 'reasoning' ? (
          isClicked ? (
            <ReasoningWjote className="w-full h-auto" />
          ) : (
            <Reasoning className="w-full h-auto" />
          )
        ) : isClicked ? (
          <SpaceWhite className="w-full h-auto" />
        ) : (
          <Space className="w-full h-auto" />
        )}
      </div>
      <div className="shrink-0">
        {category === 'language'
          ? '언어'
          : category === 'math'
            ? '수리'
            : category === 'reasoning'
              ? '추리'
              : '공간지각'}
        영역
      </div>
    </div>
  );
};

export default CategorySquare;
