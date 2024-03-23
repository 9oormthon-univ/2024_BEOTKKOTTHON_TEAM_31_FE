import React from 'react';
import { ReactComponent as Language } from '../../assets/illust/illust_language.svg';
import { ReactComponent as LanguageWhite } from '../../assets/illust/illust_language_white.svg';
import { ReactComponent as Math } from '../../assets/illust/illust_math.svg';
import { ReactComponent as MathWjote } from '../../assets/illust/illust_math_white.svg';
import { ReactComponent as Reasoning } from '../../assets/illust/illust_reasoning.svg';
import { ReactComponent as ReasoningWjote } from '../../assets/illust/illust_reasoning_white.svg';
// import { ReactComponent as Space } from '../../assets/illust/illust_space.svg';
import { ReactComponent as SpaceWhite } from '../../assets/illust/illust_space_white.svg';
import { CategoryType } from '../../data/type';

const CategorySquare = ({
  category,
  isClicked,
  onClick,
}: {
  category: CategoryType;
  isClicked: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`grow flex flex-col items-center justify-center gap-y-2.5 px-5 py-4 rounded-lg text-12 font-bold cursor-pointer ${category === 'SPATIAL' ? 'cursor-not-allowed bg-sub_100 text-white' : isClicked ? 'bg-main text-white' : 'bg-sub_100 text-main'}`}
      onClick={onClick}
    >
      <div className="shrink-0 w-full flex items-center justify-center grow">
        {category === 'LANG' ? (
          isClicked ? (
            <LanguageWhite className="lg:w-[70px] md:w-[50px] sm:w-[40px] h-auto" />
          ) : (
            <Language className="lg:w-[70px] md:w-[50px] sm:w-[40px] h-auto" />
          )
        ) : category === 'MATH' ? (
          isClicked ? (
            <MathWjote className="lg:w-[70px] md:w-[50px] sm:w-[40px] h-auto" />
          ) : (
            <Math className="lg:w-[70px] md:w-[50px] sm:w-[40px] h-auto" />
          )
        ) : category === 'DEDUCE' ? (
          isClicked ? (
            <ReasoningWjote className="lg:w-[70px] md:w-[50px] sm:w-[40px] h-auto" />
          ) : (
            <Reasoning className="lg:w-[70px] md:w-[50px] sm:w-[40px] h-auto" />
          )
        ) : (
          <SpaceWhite className="lg:w-[70px] md:w-[50px] sm:w-[40px] h-auto" />
        )}
      </div>
      <div className="shrink-0 sm:text-8">
        {category === 'LANG' ? '언어' : category === 'MATH' ? '수리' : category === 'DEDUCE' ? '추리' : '공간지각'}
        영역
      </div>
    </div>
  );
};

export default CategorySquare;
