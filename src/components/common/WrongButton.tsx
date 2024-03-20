const WrongButton = ({ text }: { text: string }) => {
  return (
    <div className="rounded bg-wrong py-1 px-3 text-center leading-[15px] text-10 font-bold text-white whitespace-nowrap">
      {text}
    </div>
  );
};

export default WrongButton;
