import React from 'react';

const AbledButton = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <div className="rounded-8 w-full bg-main p-4 text-center text-16 font-bold text-white" onClick={onClick}>
      {text}
    </div>
  );
};

export default AbledButton;
