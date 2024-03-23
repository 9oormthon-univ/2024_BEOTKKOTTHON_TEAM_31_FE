import React, { useEffect, useState } from 'react';
import { QuizType } from '../../data/type';
import { categoryEngToKor } from '../../data/variable';
import ExampleBox from './ExampleBox';
import ChoiceItem from './ChoiceItem';
import { useMutation } from 'react-query';
import { postSingleGradeApi } from '../../api/quizApi';
import { getMemberId } from '../../api/localStorage';
import ExplainBox from '../explainPage/ExplainBox';

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
  type: 'quiz' | 'true' | 'false' | 'similar';
  userAnswer?: number;
  correctAnswer?: number;
  selected: number | null;
  setSelected: (selected: number | null) => void;
}) => {
  // console.log(type);
  const memberId = getMemberId() || '';
  const [realType, setRealType] = useState<'quiz' | 'true' | 'false' | 'similar'>(type);
  const [realUserAnswer, setRealUserAnswer] = useState<number | undefined>(userAnswer);
  const [realCorrectAnswer, setRealCorrectAnswer] = useState<number | undefined>(correctAnswer);
  const [explain, setExplain] = useState<{ explain: string; total: number; person: number; percent: number } | null>(
    null,
  );
  const { mutate: postSingleGrade } = useMutation(
    () => postSingleGradeApi(memberId, quiz.id, selected || 0, quiz.category),
    {
      onSuccess: (data) => {
        console.log(data);
        setSelected(null);
        setRealType(data.data.result.isCorrect ? 'true' : 'false');
        setRealUserAnswer(data.data.result.userChoice);
        setRealCorrectAnswer(data.data.result.answer);
        setExplain({
          explain: data.data.result.solution,
          total: data.data.result.quizParticipantsCounts,
          person: data.data.result.correctAnswerCounts,
          percent: data.data.result.ratioOfCorrect,
        });
        setIsAbleToNext(true);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  useEffect(() => {
    if (selected !== null) {
      setIsAbleToNext(true);
    } else if (explain === null) {
      setIsAbleToNext(false);
    }
  }, [selected]);

  useEffect(() => {
    setSelected(null);
    setExplain(null);
    setRealType(type);
    if (type === 'quiz') {
      setRealUserAnswer(undefined);
      setRealCorrectAnswer(undefined);
    }
  }, [quiz]);

  const singleGradeHandler = () => {
    if (selected === null || type !== 'quiz') return;
    postSingleGrade();
  };

  return (
    <div className="w-full flex flex-col items-center justify-start">
      <div className="w-full bg-white border border-sub_200 rounded-lg px-4 py-7 flex flex-col items-center justify-start z-10">
        <div className="w-full flex items-center justify-between">
          <div className="text-gray_400 font-semibold">{categoryEngToKor[quiz.category]}영역</div>
          {realType !== 'similar' && (
            <div
              onClick={singleGradeHandler}
              className={`text-10 font-bold leading-normal py-[5px] px-[12px] text-white rounded cursor-pointer ${
                selected !== null
                  ? 'bg-main'
                  : realType === 'true'
                    ? 'bg-[#80F756] border border-solid border-[#80F756]'
                    : realType === 'false'
                      ? 'bg-[#FF5C5C] border border-solid border-[#FF5C5C]'
                      : 'bg-sub_100'
              }`}
            >
              {realType === 'quiz' ? '해당 문제 채점' : realType === 'true' ? '정답입니다!' : '오답입니다!'}
            </div>
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-start mt-2">
          <div className="text-main text-20 font-semibold">{`Q${quiz.quizNum}.`}</div>
          <div className="text-black text-16 font-bold mt-2">{quiz.title}</div>
          {quiz.example !== 'X' && <ExampleBox text={quiz.example} />}
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-y-3 pt-7">
          {realUserAnswer !== undefined && realCorrectAnswer !== undefined ? (
            <>
              {quiz.choiceFirst !== 'X' && (
                <ChoiceItem
                  key={1}
                  order={1}
                  text={quiz.choiceFirst}
                  isSelected={realUserAnswer === 1 || realCorrectAnswer === 1}
                  onSelected={() => {}}
                  bgColor={
                    realUserAnswer === realCorrectAnswer
                      ? realUserAnswer === 1
                        ? 'true'
                        : 'quiz'
                      : realUserAnswer === 1
                        ? 'false'
                        : realCorrectAnswer === 1
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
                  isSelected={realUserAnswer === 2 || realCorrectAnswer === 2}
                  onSelected={() => {}}
                  bgColor={
                    realUserAnswer === realCorrectAnswer
                      ? realUserAnswer === 2
                        ? 'true'
                        : 'quiz'
                      : realUserAnswer === 2
                        ? 'false'
                        : realCorrectAnswer === 2
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
                  isSelected={realUserAnswer === 3 || realCorrectAnswer === 3}
                  onSelected={() => {}}
                  bgColor={
                    realUserAnswer === realCorrectAnswer
                      ? realUserAnswer === 3
                        ? 'true'
                        : 'quiz'
                      : realUserAnswer === 3
                        ? 'false'
                        : realCorrectAnswer === 3
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
                  isSelected={realUserAnswer === 4 || realCorrectAnswer === 4}
                  onSelected={() => {}}
                  bgColor={
                    realUserAnswer === realCorrectAnswer
                      ? realUserAnswer === 4
                        ? 'true'
                        : 'quiz'
                      : realUserAnswer === 4
                        ? 'false'
                        : realCorrectAnswer === 4
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
                  isSelected={realUserAnswer === 5 || realCorrectAnswer === 5}
                  onSelected={() => {}}
                  bgColor={
                    realUserAnswer === realCorrectAnswer
                      ? realUserAnswer === 5
                        ? 'true'
                        : 'quiz'
                      : realUserAnswer === 5
                        ? 'false'
                        : realCorrectAnswer === 5
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
      {explain && (
        <div className="mt-6 w-full flex flex-col items-center justify-start gap-y-2">
          <div className="w-full flex items-center justify-between">
            <div className="text-12 text-gray_400 text-light">{`${explain.total}명 중 ${explain.person}명이 맞췄어요 😊`}</div>
            <div className="text-10 text-gray_300 text-light">{`정답률 ${explain.percent}%`}</div>
          </div>
          <ExplainBox text={explain.explain} />
        </div>
      )}
    </div>
  );
};

export default QuizBox;
