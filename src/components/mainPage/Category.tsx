import React from 'react';
import LanguageBox from './Categories/LanguageBox';
import MathBox from './Categories/MathBox';
import ReasoningBox from './Categories/ReasoningBox';
import SpaceBox from './Categories/SpaceBox';

const Category = () => {
  return (
    <div className="relative mx-4 mb-5 flex h-auto w-full flex-col gap-y-4">
      <LanguageBox />
      <MathBox />
      <ReasoningBox />
      <SpaceBox />
    </div>
  );
};

export default Category;
