import React from "react";
import Image from "next/image";
type InfoCardProps = {
  image: string;
  title: string;
  btn: string;
  info: string;
  action: string;
  className?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  image,
  btn,
  info,
  action,
  className,
}) => {
  return (
    <div
      className={`${className} px-5 my-3 py-10 bg-offwhite_10 flex flex-col gap-5 items-center max-w-[30rem]  whitespace-nowrap `}
    >
      <Image src={image} height={150} width={150} alt="icon" />
      <h1 className="text-xl font-medium leading-5">{title}</h1>
      <span className="bg-yallow_60 py-2 px-3 text-yallow_300 bg-yallow_70  text-xs leading-5">
        {btn}
      </span>
      <p className="text-sm leading-[20px] text-offwhite_100 ">{info}</p>
      <span className="text-sm leading-[21px] text-yallow_400 cursor-pointer font-medium hover:opacity-80">
        {action}
      </span>
    </div>
  );
};
export default InfoCard;
