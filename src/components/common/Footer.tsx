import { ReactComponent as Github } from '../../assets/illust/illust_github.svg';

const Footer = () => {
  return (
    <>
      <div className="w-full">
        <div className="mx-5 border-[1px] border-gray_300 opacity-50"></div>
      </div>
      <div className="mb-6 w-full">
        <div className="relative mx-5 flex h-[104.5px] items-center justify-start whitespace-pre text-wrap font-[SongMyung] text-12 font-medium leading-[21px] text-gray_400 ">
          {`@BRAINSNACK. All rights Reserved. \n구름톤 유니브. 벚꽃톤 팀 “BRAINSNACK”`}
          <div className="absolute bottom-0 left-0">
            <Github />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
