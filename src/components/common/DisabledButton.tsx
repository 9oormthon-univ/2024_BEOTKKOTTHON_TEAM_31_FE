import React from 'react';

const DisabledButton = ({ text }: { text: string }) => {
  return <div className="rounded-8 w-full bg-sub_100 p-4 text-center text-16 font-bold text-white">{text}</div>;
};

export default DisabledButton;
