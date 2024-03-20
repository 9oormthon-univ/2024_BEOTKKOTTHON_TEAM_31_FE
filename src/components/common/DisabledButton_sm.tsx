import React from 'react';

const DisabledButton_sm = ({ text }: { text: string }) => {
  //how to put style props in the className of the div  ?

  return (
    <div className="rounded bg-sub_100 py-1 px-3 text-center leading-[15px] text-10 font-bold text-white whitespace-nowrap">
      {text}
    </div>
  );
};

export default DisabledButton_sm;
