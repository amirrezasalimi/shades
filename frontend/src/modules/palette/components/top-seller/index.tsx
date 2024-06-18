import React, { FC } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import avatar from "public/avatar-1.png";
import avatarTwo from "public/avatar-2.png";
import { Color } from "../types";

interface Props {
  color: Color;
}
const TopSeller: FC<Props> = ({ color }) => {
  const textColor500 = color?.text?.[500];
  const textColor400 = color?.text?.[400];
  const primary200 = color?.primary?.[200];
  const primary500 = color?.primary?.[500];
  const secondary500 = color?.secondary?.[500];
  const borderNeutral200 = color?.neutral?.[200];
  const background500 = color?.background?.[500];
  return (
    <div
      style={{
        backgroundColor: background500,
        borderColor: borderNeutral200,
      }}
      className="p-5 max-[420px]:p-3 h-fit rounded-2xl max-[420px]:w-full w-72 flex flex-col"
    >
      <h3 style={{ color: secondary500 }} className="text-lg font-semibold">
        Top Sellers
      </h3>
      <div className="flex flex-col space-y-3 mt-4">
        <div className="flex items-center justify-between">
          <div className="space-x-3 flex">
            <div className="rounded-full w-12 h-12 relative">
              <Image alt="avatar" src={avatarTwo} />
              <FaCheck
                style={{ backgroundColor: primary500 }}
                className="absolute text-white rounded-full p-1 bottom-0 right-0 border border-white"
                size={18}
              />
            </div>
            <div className="flex flex-col">
              <div style={{ color: textColor500 }} className="font-semibold">
                A. Salimi
              </div>
              <div style={{ color: textColor400 }} className="text-sm">
                $4278
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: primary200,
              color: primary500,
            }}
            className="rounded-lg p-2 text-xs"
          >
            Sales
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-x-3 flex">
            <div className="rounded-full w-12 h-12 relative">
              <Image alt="avatar" src={avatar} />
              <FaCheck
                style={{ backgroundColor: primary500 }}
                className="absolute text-white rounded-full p-1 bottom-0 right-0 border border-white"
                size={18}
              />
            </div>
            <div className="flex flex-col">
              <div style={{ color: textColor500 }} className="font-semibold">
                A. Nikfarjam
              </div>
              <div
                style={{ color: textColor400 }}
                className="text-gray-400 text-sm"
              >
                $4278
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: primary200,
              color: primary500,
            }}
            className="rounded-lg p-2 text-xs bg-opacity-15"
          >
            Sales
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
