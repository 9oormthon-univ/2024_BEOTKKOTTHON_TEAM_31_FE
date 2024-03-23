import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo/logo_original.svg';
import DisabledButton from '../common/DisabledButton';
import AbledButton from '../common/AbledButton';
import { useMutation } from 'react-query';
import { tempLoginApi } from '../../api/userApi';
import { setMemberId, setMemberNickname } from '../../api/localStorage';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const slideRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const { mutate: tempLogin } = useMutation(() => tempLoginApi(id), {
    onSuccess: (data) => {
      console.log(data);
      setMemberId(data.data.result.id);
      setMemberNickname(data.data.result.entryCode);
      navigate('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex === 2) {
        setSlideIndex(0);
      } else {
        setSlideIndex(slideIndex + 1);
      }
      slideRef.current?.scrollTo({
        left: slideRef.current.clientWidth * slideIndex,
        behavior: 'smooth',
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-start overflow-hidden">
      <div className="flex w-full flex-col items-center justify-start rounded-b-12 bg-main px-[30px] pb-[50px] pt-[24px]">
        <div className="mt-[24px] flex w-full items-center justify-center px-[38px]">
          <Logo className="h-auto w-full" />
        </div>
        <div className="mt-[24px] text-18 font-semibold text-white">과자처럼 언제 어디서나 간편하게!!</div>
        <div className="mt-[20px] w-full whitespace-pre text-wrap text-center text-14 font-normal text-white sm:text-12">
          {`반가워요!!\n취준생을 위한 인적성 검사 준비 서비스 `}
          <span className="font-bold">{`“브레인스낵”`}</span> {` 입니다\n서비스를 시작해 볼까요??`}
        </div>
      </div>
      <div className="flex w-full -translate-y-[25px] flex-col gap-y-4 px-4">
        <input
          className="w-full rounded-8 border border-sub_100 bg-white px-4 py-4 text-center text-16 font-bold outline-none transition-all duration-200 ease-in-out placeholder:text-gray-300 focus:border-sub_200"
          placeholder="아이디를 입력하세요"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        {id === '' ? (
          <DisabledButton text="서비스 시작하기" />
        ) : (
          <AbledButton
            text="서비스 시작하기"
            onClick={() => {
              tempLogin();
            }}
          />
        )}
      </div>
      <div className="mx-4 mt-[24px] w-full">
        <div className="w-full overflow-hidden" ref={slideRef}>
          <div className="flex items-center justify-start">
            <div className="flex w-full shrink-0 items-center justify-center">
              <img className="m-auto w-[302px]" src="img/img_phone_1.png" alt="img_phone_1" />
            </div>
            <div className="flex w-full shrink-0 items-center justify-center">
              <img className="m-auto w-[302px]" src="img/img_phone_2.png" alt="img_phone_2" />
            </div>
            <div className="flex w-full shrink-0 items-center justify-center">
              <img className="m-auto w-[302px]" src="img/img_phone_3.png" alt="img_phone_3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
