import { ReactComponent as HomeBtn } from '../assets/illust/illust_home_btn.svg';
import { ReactComponent as Notes } from '../assets/illust/illust_notes.svg';
import { ReactComponent as CorrectIcon } from '../assets/illust/illust_correct_icon.svg';
import { ReactComponent as IncorrectIcon } from '../assets/illust/illust_incorrect_icon.svg';
import { ReactComponent as ArrowIcon } from '../assets/illust/illust_arrow_icon.svg';
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';

const ResultPage = () => {
  const ArrTest = [
    { num: 1, userRight: true },
    { num: 2, userRight: true },
    { num: 3, userRight: false },
    { num: 4, userRight: true },
    { num: 5, userRight: false },
    { num: 6, userRight: false },
    { num: 7, userRight: true },
    { num: 8, userRight: true },
    { num: 9, userRight: false },
    { num: 10, userRight: true },
  ];

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-start overflow-hidden font-family">
      <div className="flex w-full flex-col items-center justify-start rounded-b-12 bg-main px-4 pb-6 pt-6">
        <div className="flex w-full items-center justify-between">
          <div className="w-[14px]"></div>
          <p className="text-white text-16 font-extrabold pl-[10px]">벚꽃신입생님의 언어영역</p>
          <Link to="/">
            <HomeBtn className="shrink-0 cursor-pointer" onClick={() => {}} />
          </Link>
        </div>
        <div className="flex w-full h-auto mt-4 justify-between p-0">
          <div className="flex flex-col  text-white h-auto items-start justify-center">
            <span className="text-14 font-normal">{`벚꽃신입생님은 언어영역에서`}</span>
            <span className="text-16 font-extrabold leading-7">{`총 10개 중 5개를 틀렸어요!!`}</span>
          </div>
          <div className="">
            <Notes className="w-[120px] h-auto shrink-0 " />
          </div>
        </div>
        <div className="w-full">
          <div className="text-14 font-normal text-white items-start ">부족한 부분의 풀이를 다시 확인해볼까요? </div>
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
                  <Link to="/answer" className="flex items-center">
                    <span className="text-10 font-normal leading-none cur" onClick={() => {}}>
                      해설 바로가기
                    </span>
                    <ArrowIcon className="mr-6 ml-2" />
                  </Link>
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
                  <Link to="/answer" className="flex items-center">
                    <span className="text-10 font-normal leading-none cur" onClick={() => {}}>
                      해설 바로가기
                    </span>
                    <ArrowIcon className="mr-6 ml-2" />
                  </Link>
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

export default ResultPage;
