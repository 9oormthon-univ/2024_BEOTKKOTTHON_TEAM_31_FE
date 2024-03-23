import React from 'react';
import { ReactComponent as Prev } from '../../assets/icon/icon_prev.svg';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/icon/icon_home.svg';

const TitleBar = ({ text, isPrev, isHome }: { text: string; isPrev: boolean; isHome: boolean }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-between text-white">
      {isPrev ? (
        <div className="h-full w-1/3 flex items-center justify-start" onClick={() => navigate(-1)}>
          <Prev className="h-full w-auto cursor-pointer" />
        </div>
      ) : (
        <div className="w-1/3"></div>
      )}
      <div className="shrink-0 text-16 font-extrabold">{text}</div>
      {isHome ? (
        <div className="h-full w-1/3 flex items-center justify-end" onClick={() => navigate('/')}>
          <Home className="h-full w-auto cursor-pointer" />
        </div>
      ) : (
        <div className="w-1/3"></div>
      )}
    </div>
  );
};

export default TitleBar;
