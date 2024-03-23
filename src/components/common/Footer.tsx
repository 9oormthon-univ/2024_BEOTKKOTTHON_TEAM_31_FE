import { ReactComponent as Github } from '../../assets/illust/illust_github.svg';

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start py-7">
      <div className="w-full flex flex-col items-center justify-start border-t border-solid border-gray_300 bg-gray_400 h-px " />
      <div className="w-full flex flex-col items-start justify-start gap-y-4 py-7">
        <div className="text-12 text-gray_400 font-medium whitespace-pre-line">{`@BRAINSNACK. All rights Reserved.\n구름톤 유니브. 벚꽃톤 팀 “BRAINSNACK”`}</div>
        <div className="w-4 h-auto">
          <Github className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
