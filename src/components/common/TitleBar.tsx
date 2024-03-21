import React from 'react';
import { ReactComponent as Prev } from '../../assets/icon/icon_prev.svg';
import { useNavigate } from 'react-router-dom';

const TitleBar = ({ text }: { text: string }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-between text-white">
      <div className="h-full w-1/3 flex items-center justify-start" onClick={() => navigate(-1)}>
        <Prev className="h-full w-auto cursor-pointer" />
      </div>
      <div className="text-16 font-extrabold">{text}</div>
      <div className="w-1/3"></div>
    </div>
  );
};

export default TitleBar;
