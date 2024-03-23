import React from 'react';
import { ReactComponent as Correct } from '../../assets/icon/icon_correct.svg';
import { ReactComponent as Incorrect } from '../../assets/icon/icon_incorrect.svg';
import { ReactComponent as Next } from '../../assets/icon/icon_next.svg';
import { GradeItemType } from '../../data/type';
import { useNavigate } from 'react-router-dom';

const GradeItem = ({ quiz }: { quiz: GradeItemType }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/explain/${quiz.quizId}`, { state: { category: quiz.category } })}
      className={`w-full rounded-lgx flex items-center justify-center px-6 py-4 gap-x-10 text-black text-gray_600 font-semibold cursor-pointer border border-solid ${quiz.isCorrect ? 'bg-[#2AE45E]/50 border-[#80F756]' : 'bg-[#FF5151]/50 border-[#FF8484]'}`}
    >
      {quiz.isCorrect ? (
        <Correct className="sm:w-3 md:w-4 lg:w-6 h-auto" />
      ) : (
        <Incorrect className="sm:w-3 md:w-4 lg:w-6 h-auto" />
      )}
      <div className="grow flex items-center justify-start">{quiz.title}</div>
      <div className="flex items-center justify-center gap-x-2 text-10 text-gray_600">
        <div>해설 바로가기</div>
        <Next />
      </div>
    </div>
  );
};

export default GradeItem;
