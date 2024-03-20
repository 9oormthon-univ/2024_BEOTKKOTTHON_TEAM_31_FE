const CorrectButton = ({ text }: { text: string }) => {
  return (
    <div className="rounded bg-success py-1 px-3 text-center leading-[15px] text-10 font-bold text-white whitespace-nowrap bg-[1px] bg-">
      {text}
    </div>
  );
};

export default CorrectButton;
