import React from 'react';

const StrokeButton = ({ text, onClick, isAble }: { text: string; onClick: () => void; isAble: boolean }) => {
  return (
    <div
      onClick={onClick}
      className={`text-16 font-bold rounded-lg p-4 grow flex items-center justify-center bg-white border border-solid ${isAble ? 'border-main text-main' : 'border-sub_100 text-sub_100'}`}
    >
      {text}
    </div>
  );
};

export default StrokeButton;
