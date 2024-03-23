import React from 'react';

const AbledButton = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <div
      className="w-full rounded-8 bg-main p-4 text-center text-16 font-bold text-white cursor-pointer"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default AbledButton;
