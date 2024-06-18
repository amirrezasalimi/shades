import React, { FC } from "react";
import { FaArrowRight, FaEye } from "react-icons/fa6";
import { Color } from "../types";

interface Props {
  color: Color;
}
const BuyTicket: FC<Props> = ({ color }) => {
  const textColor500 = color?.text?.[500];
  const primary500 = color?.primary?.[500];
  const primary100 = color?.primary?.[100];
  const background400 = color?.background?.[400];
  const borderNeutral200 = color?.neutral?.[200];
  return (
    <div
      style={{
        borderColor: borderNeutral200,
        backgroundImage: `linear-gradient(to right bottom, ${primary100}, ${primary500})`,
      }}
      className="h-fit max-[420px]:p-4 p-5 rounded-2xl max-[420px]:w-full w-64 flex flex-col"
    >
      <div
        style={{ color: textColor500 }}
        className="flex space-x-2 items-center"
      >
        <FaEye size={16} />
        <div className="font-semibold text-lg">300 people attending</div>
      </div>
      <div
        style={{ color: textColor500 }}
        className="flex flex-col font-bold mt-4"
      >
        <div className="text-lg">We will bring together</div>
        <div className="">industry experts to</div>
        <div className="opacity-80">explore the latest</div>
        <div className="opacity-70">trends in fintech</div>
      </div>
      <div className="rounded-lg bg-white bg-opacity-15 backdrop-blur-xl flex items-center justify-between p-3 mt-20">
        <span style={{ color: textColor500 }}>Buy tickets</span>
        <FaArrowRight
          style={{ color: textColor500, background: background400 }}
          size={18}
          className="p-1 rounded-full"
        />
      </div>
    </div>
  );
};

export default BuyTicket;
