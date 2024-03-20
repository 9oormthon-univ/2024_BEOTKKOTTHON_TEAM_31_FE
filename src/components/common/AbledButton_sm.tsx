import React from 'react';

const AbledButton_sm = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <div
      className="rounded bg-main py-1 px-3 leading-[15px] text-center text-10 font-bold text-white whitespace-nowrap cursor-pointer"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default AbledButton_sm;
