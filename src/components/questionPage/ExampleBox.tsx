import React from 'react';

const ExampleBox = ({ text }: { text: string }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-black text-16 font-medium border border-solid border-sub_300 rounded-lgx py-16 px-10 mt-4">
      {text}
    </div>
  );
};

export default ExampleBox;
