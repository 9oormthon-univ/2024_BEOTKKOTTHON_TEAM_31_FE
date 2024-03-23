import React from 'react';

const PrimaryButton = ({ text, onClick, isAble }: { text: string; onClick: () => void; isAble: boolean }) => {
  const clickHandler = () => {
    if (isAble) {
      onClick();
    }
  };

  return (
    <div
      onClick={clickHandler}
      className={`rounded-lg p-4 grow flex items-center justify-center text-16 font-bold text-white ${isAble ? 'bg-main cursor-pointer' : 'bg-sub_100 cursor-not-allowed'}`}
    >
      {text}
    </div>
  );
};

export default PrimaryButton;
