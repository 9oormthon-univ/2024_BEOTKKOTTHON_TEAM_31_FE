import React, { useEffect } from 'react';
import { QuizType } from '../../data/type';
import { categoryEngToKor } from '../../data/variable';
import ExampleBox from './ExampleBox';
import ChoiceItem from './ChoiceItem';

const QuizBox = ({
  quiz,
  setIsAbleToNext,
  type,
  userAnswer,
  correctAnswer,
  selected,
  setSelected,
}: {
  quiz: QuizType;
  setIsAbleToNext: (isAble: boolean) => void;
  type: 'quiz' | 'true' | 'false';
  userAnswer?: number;
  correctAnswer?: number;
  selected: number | null;
  setSelected: (selected: number | null) => void;
}) => {
  useEffect(() => {
    if (selected !== null) {
      setIsAbleToNext(true);
    } else {
      setIsAbleToNext(false);
    }
  }, [selected]);

  useEffect(() => {
    setSelected(null);
    // console.log('QUIZ BOX', quiz);
    // console.log('QUIZ BOX', userAnswer, correctAnswer);
  }, [quiz]);

  return (
    <div className="w-full flex flex-col items-center justify-start">
      <div className="w-full bg-white border border-sub_200 rounded-lg px-4 py-7 flex flex-col items-center justify-start z-10">
        <div className="w-full flex items-center justify-between">
          <div className="text-gray_400 font-semibole">{categoryEngToKor[quiz.category]}영역</div>
          <div
            className={`text-10 font-bold leading-normal py-[5px] px-[12px] text-white rounded ${
              selected !== null
                ? 'bg-main'
                : type === 'true'
                  ? 'bg-[#80F756] border border-solid border-[#80F756]'
                  : type === 'false'
                    ? 'bg-[#FF5C5C] border border-solid border-[#FF5C5C]'
                    : 'bg-sub_100'
            }`}
          >
            {type === 'quiz' ? '해당 문제 채점' : type === 'true' ? '정답입니다!' : '오답입니다!'}
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start mt-2">
          <div className="text-main text-20 font-semibold">{`Q${quiz.quizNum}`}</div>
          <div className="text-black text-16 font-bold mt-2">{quiz.title}</div>
          <ExampleBox text={quiz.example} />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-y-3 pt-7">
          {userAnswer !== undefined && correctAnswer !== undefined ? (
            <>
              {quiz.choiceFirst !== 'X' && (
                <ChoiceItem
                  key={1}
                  order={1}
                  text={quiz.choiceFirst}
                  isSelected={userAnswer === 1 || correctAnswer === 1}
                  onSelected={() => {}}
                  bgColor={
                    userAnswer === correctAnswer
                      ? userAnswer === 1
                        ? 'true'
                        : 'quiz'
                      : userAnswer === 1
                        ? 'false'
                        : correctAnswer === 1
                          ? 'true'
                          : 'quiz'
                  }
                />
              )}
              {quiz.choiceSecond !== 'X' && (
                <ChoiceItem
                  key={2}
                  order={2}
                  text={quiz.choiceSecond}
                  isSelected={userAnswer === 2 || correctAnswer === 2}
                  onSelected={() => {}}
                  bgColor={
                    userAnswer === correctAnswer
                      ? userAnswer === 2
                        ? 'true'
                        : 'quiz'
                      : userAnswer === 2
                        ? 'false'
                        : correctAnswer === 2
                          ? 'true'
                          : 'quiz'
                  }
                />
              )}
              {quiz.choiceThird !== 'X' && (
                <ChoiceItem
                  key={3}
                  order={3}
                  text={quiz.choiceThird}
                  isSelected={userAnswer === 3 || correctAnswer === 3}
                  onSelected={() => {}}
                  bgColor={
                    userAnswer === correctAnswer
                      ? userAnswer === 3
                        ? 'true'
                        : 'quiz'
                      : userAnswer === 3
                        ? 'false'
                        : correctAnswer === 3
                          ? 'true'
                          : 'quiz'
                  }
                />
              )}
              {quiz.choiceFourth !== 'X' && (
                <ChoiceItem
                  key={4}
                  order={4}
                  text={quiz.choiceFourth}
                  isSelected={userAnswer === 4 || correctAnswer === 4}
                  onSelected={() => {}}
                  bgColor={
                    userAnswer === correctAnswer
                      ? userAnswer === 4
                        ? 'true'
                        : 'quiz'
                      : userAnswer === 4
                        ? 'false'
                        : correctAnswer === 4
                          ? 'true'
                          : 'quiz'
                  }
                />
              )}
              {quiz.choiceFifth !== 'X' && (
                <ChoiceItem
                  key={5}
                  order={5}
                  text={quiz.choiceFifth}
                  isSelected={userAnswer === 5 || correctAnswer === 5}
                  onSelected={() => {}}
                  bgColor={
                    userAnswer === correctAnswer
                      ? userAnswer === 5
                        ? 'true'
                        : 'quiz'
                      : userAnswer === 5
                        ? 'false'
                        : correctAnswer === 5
                          ? 'true'
                          : 'quiz'
                  }
                />
              )}
            </>
          ) : (
            <>
              {quiz.choiceFirst !== 'X' && (
                <ChoiceItem
                  key={1}
                  order={1}
                  text={quiz.choiceFirst}
                  isSelected={selected === 1}
                  onSelected={() => setSelected(1)}
                  bgColor="quiz"
                />
              )}
              {quiz.choiceSecond !== 'X' && (
                <ChoiceItem
                  key={2}
                  order={2}
                  text={quiz.choiceSecond}
                  isSelected={selected === 2}
                  onSelected={() => setSelected(2)}
                  bgColor="quiz"
                />
              )}
              {quiz.choiceThird !== 'X' && (
                <ChoiceItem
                  key={3}
                  order={3}
                  text={quiz.choiceThird}
                  isSelected={selected === 3}
                  onSelected={() => setSelected(3)}
                  bgColor="quiz"
                />
              )}
              {quiz.choiceFourth !== 'X' && (
                <ChoiceItem
                  key={4}
                  order={4}
                  text={quiz.choiceFourth}
                  isSelected={selected === 4}
                  onSelected={() => setSelected(4)}
                  bgColor="quiz"
                />
              )}
              {quiz.choiceFifth !== 'X' && (
                <ChoiceItem
                  key={5}
                  order={5}
                  text={quiz.choiceFifth}
                  isSelected={selected === 5}
                  onSelected={() => setSelected(5)}
                  bgColor="quiz"
                />
              )}
            </>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-start -translate-y-px">
        <div className="h-4 px-8 w-full">
          <div className="bg-[#C79CFC] rounded-b-lg w-full h-full blur-xs" />
        </div>
        <div className="h-4 px-12 w-full">
          <div className="bg-[#9C61F7] rounded-b-lg w-full h-full blur-xs" />
        </div>
      </div>
    </div>
  );
};

export default QuizBox;
