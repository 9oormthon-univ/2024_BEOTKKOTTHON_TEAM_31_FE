import React from 'react';

const ExampleBox = ({ text }: { text: string }) => {
  const makeUnderline = (str: string) => {
    const arr = str.split('*');

    if (arr.length === 1) {
      return <div className="w-full flex items-center justify-center flex-wrap">{arr[0]}</div>;
    } else {
      const content = arr.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <span key={index} className="whitespace-pre">
              {' '}
              {item}
            </span>
          );
        } else {
          return (
            <span key={index} className="underline whitespace-pre">
              {item}
            </span>
          );
        }
      });

      return <div className="w-full flex items-center justify-center flex-wrap">{content}</div>;
    }
  };

  return (
    <div className="w-full flex items-center justify-center text-black text-16 font-medium border border-solid border-sub_300 rounded-lgx py-16 px-10 mt-4">
      {makeUnderline(text)}
    </div>
  );
};

export default ExampleBox;
