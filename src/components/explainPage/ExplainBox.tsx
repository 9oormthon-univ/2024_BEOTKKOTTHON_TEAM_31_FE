import React from 'react';

const ExplainBox = ({ text }: { text: string }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-2 rounded-lg bg-gray_200 border border-solid border-gray_300 p-6">
      <div className="w-full flex items-center justify-start text-black text-gray_600 font-semibold text-13">해설</div>
      <div className="w-full text-gray_400 text-13">{text}</div>
    </div>
  );
};

export default ExplainBox;
