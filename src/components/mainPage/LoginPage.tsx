import { ReactComponent as Logo } from '../../assets/logo/logo_original.svg';
import { ReactComponent as User } from '../../assets/illust/illust_user.svg';
import { ReactComponent as Books } from '../../assets/illust/illust_books.svg';
import { ReactComponent as StartBtnSqu } from '../../assets/illust/illust_start_btn_square.svg';
import { ReactComponent as CorrectBulb } from '../../assets/illust/illust_correct_bulb.svg';
import { ReactComponent as IncorrectBulb } from '../../assets/illust/illust_incorrect_bulb.svg';
import Category from './Category';
import Footer from '../common/Footer';
import { useNavigate } from 'react-router-dom';
import { getMemberId, getMemberNickname } from '../../api/localStorage';
import { getUserMainApi } from '../../api/mainApi';
import { useQuery } from 'react-query';
import { useEffect } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const nickname = getMemberNickname();
  const memberId = getMemberId() || '';

  const { data } = useQuery('memberMain', () => getUserMainApi(memberId));

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-start overflow-hidden">
      <div className="flex w-full flex-col items-center justify-start rounded-b-12 bg-main px-[12px] pb-[24px] pt-[24px]">
        <div className="flex w-full justify-between">
          <Logo className="h-auto w-auto" />
          <div className="flex w-auto items-center gap-2 ">
            <User className="h-auto w-auto" />
            <span className="text-14 font-normal text-white">{nickname}</span>
          </div>
        </div>
        <div className="mt-[24px] flex h-auto w-full justify-between">
          <div className="whitespace-pre text-wrap text-14 font-normal leading-6 text-white">
            {`${nickname}님은 브레인스낵과`}
            <span className="text-16 font-bold">{`\n총 ${!data ? '100' : data.data.result.totalQuizCounts}문제를 함께 했어요`}</span>
            <div className="mt-4 whitespace-nowrap">오늘도 함께 인적성 검사를 연습해 볼까요??</div>
          </div>
          <Books className="mt-[-30px] h-auto w-[132px]" />
        </div>
      </div>
      <div className="mx-4 mt-[24px] w-full">
        <div className="w-full overflow-hidden">
          <div className="flex items-center justify-start">
            <div className="flex w-full shrink-0 items-center justify-center">
              <Category />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 w-full">
        <div className="mx-4 flex flex-row justify-between gap-4">
          <div className="relative flex h-[171px] w-full items-center justify-center rounded-[4px] border-[1px] border-sub_200 cursor-pointer">
            <div className="z-0 flex flex-col items-center justify-center gap-y-4 whitespace-pre text-wrap text-center">
              <div className="text-16 font-bold leading-none text-gray_600">내가 맞춘 문제</div>
              <div className="text-12 font-medium leading-4 text-gray_600 ">
                {`맞춘 문제라도 방심 못하죠. \n복습을 시작해볼까요?`}
              </div>
              <StartBtnSqu className="w-full" />
            </div>
            <div className=" absolute bottom-0 right-0">
              <CorrectBulb />
            </div>
          </div>
          <div
            onClick={() => navigate('/retry')}
            className="relative flex h-[171px] w-full items-center justify-center rounded-[4px] border-[1px] border-sub_200 cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center gap-y-4 whitespace-pre text-wrap text-center">
              <div className="text-16 font-bold leading-none text-gray_600">내가 틀린 문제</div>
              <div className="text-12 font-medium leading-4 text-gray_600 ">
                {`유사 문제를 통하여 지속적으로 \n문제를 연습해보세요.`}
              </div>
              <StartBtnSqu className="w-full" />
            </div>
            <div className="absolute bottom-0 left-0">
              <IncorrectBulb />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
