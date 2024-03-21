import { ReactComponent as HomeBtn } from '../assets/illust/illust_home_btn.svg';
import { ReactComponent as Similar } from '../assets/illust/illust_similar.svg';
import { ReactComponent as CorrectIcon } from '../assets/illust/illust_correct_icon.svg';
import { ReactComponent as IncorrectIcon } from '../assets/illust/illust_incorrect_icon.svg';
import { ReactComponent as ArrowIcon } from '../assets/illust/illust_arrow_icon.svg';
import { ReactComponent as PrevBtn } from '../assets/illust/illust_prev_btn.svg';
import Footer from '../components/common/Footer';
import { Link, useNavigate } from 'react-router-dom';

const SimilarQuestionPage = () => {
  const navigate = useNavigate();
  const ArrTest = [
    { num: 1, userRight: true },
    { num: 2, userRight: true },
    { num: 3, userRight: false },
    { num: 4, userRight: false },
    { num: 5, userRight: false },
  ];

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-start overflow-hidden font-family">
      <div className="flex w-full flex-col items-center justify-start rounded-b-12 bg-main px-4 pb-6 pt-6">
        <div className="flex w-full items-center justify-between">
          <PrevBtn
            className="shrink-0 cursor-pointer"
            onClick={() => {
              navigate(-1);
            }}
          />
          <p className="text-white text-16 font-extrabold pl-[10px]">풀었던 유사문제</p>
          <Link to="/" className="shrink-0 cursor-pointer" onClick={() => {}}>
            <HomeBtn />
          </Link>
        </div>
        <div className="flex w-full h-auto mt-4 justify-between p-0">
          <div className="flex flex-col  text-white h-auto items-start justify-center">
            <span className="text-14 font-normal">{`벚꽃신입생님은 언어영역에서`}</span>
            <span className="text-16 font-extrabold leading-7">{`언어영역 2번에 대해`}</span>
            <span className="text-16 font-extrabold leading-7">{`총 4개의 유사문제를 생성하였어요!!`}</span>
          </div>
          <div className="">
            <Similar className="w-[120px] h-auto shrink-0 " />
          </div>
        </div>
      </div>
      <div className="w-full flex mt-6">
        <div className="flex flex-col gap-y-4 mx-5 w-full">
          {ArrTest.map((item, index) => (
            <>
              {item.userRight ? (
                <div
                  key={index}
                  className="h-12 w-full bg-success bg-opacity-50 border-[1px] border-[#80F756] rounded-[10px] flex justify-between"
                >
                  <div className="flex items-center">
                    <CorrectIcon className="ml-6 mr-10" />
                    <span className="text-[15px] font-semibold">{`${item.num}번 문제`}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-10 font-normal leading-none" onClick={() => {}}>
                      해설 바로가기
                    </span>
                    <ArrowIcon className="mr-6 ml-2" />
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="h-12 w-full bg-wrong bg-opacity-50 border-[1px] border-[#FF8484] rounded-[10px] flex justify-between"
                >
                  <div className="flex items-center">
                    <IncorrectIcon className="ml-6 mr-10" />
                    <span className="text-[15px] font-semibold">{`${item.num}번 문제`}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-10 font-normal leading-none" onClick={() => {}}>
                      해설 바로가기
                    </span>
                    <ArrowIcon className="mr-6 ml-2" />
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SimilarQuestionPage;
