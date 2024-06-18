import Image from "next/image";
import React, { type FC } from "react";
import avatar from "public/avatar-1.png";
import avatarTwo from "public/avatar-2.png";
import { Color } from "../types";

interface Props {
  color: Color;
}
const Chat: FC<Props> = ({ color }) => {
  const textColor500 = color?.text?.[500];
  const textColor400 = color?.text?.[400];
  const primary500 = color?.primary?.[500];
  const borderNeutral200 = color?.neutral?.[200];
  const secondary500 = color?.secondary?.[500];
  const background400 = color?.background?.[400];
  const background500 = color?.background?.[500];
  const background50 = color?.background?.[50];

  return (
    <div
      style={{
        backgroundColor: background500,
        borderColor: borderNeutral200,
      }}
      className="border space-y-4 md:mb-0 mb-9 flex flex-col p-4 max-[26.25rem]:p-3 rounded-2xl"
    >
      <h3 style={{ color: secondary500 }} className="font-semibold text-lg">
        Communicate
      </h3>
      <div
        style={{ borderColor: borderNeutral200 }}
        className="flex flex-col border-b"
      >
        <div className="flex">
          <div className="mr-3 max-[26.25rem]:m-1">
            <div className="rounded-full bg-gray-100 max-[26.25rem]:w-10 max-[26.25rem]:h-10 w-12 h-12 relative">
              <Image alt="avatar" src={avatarTwo} />
            </div>
          </div>
          <div className="flex flex-col">
            <div
              style={{ backgroundColor: background400, color: textColor500 }}
              className="rounded-xl rounded-bl-none max-[26.25rem]:text-xs text-sm leading-6 max-[26.25rem]:p-2 p-3"
            >
              I will providing more details on the project in the coming days,
              but in the meantime, start thinking about ideas and approaches you
              would like bring to the table. I can not wait to see what you come
              up with.
            </div>
            <div className="flex items-center text-xs mt-2">
              <span style={{ color: textColor500 }} className="font-semibold">
                Terry Wood
              </span>
              <span
                style={{ color: textColor400 }}
                className="text-gray-400 ps-1"
              >
                • 7 min ago
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse my-5">
          <div className="ml-3 max-[26.25rem]:ml-1">
            <div className="rounded-full bg-gray-100 max-[26.25rem]:w-10 max-[26.25rem]:h-10 w-12 h-12 relative">
              <Image alt="avatar" src={avatar} />
            </div>
          </div>
          <div className="flex flex-col max-[26.25rem]:w-full w-2/3">
            <div
              style={{ backgroundColor: primary500, color: background50 }}
              className=" text-white rounded-br-none rounded-xl max-[26.25rem]:text-xs text-sm leading-6 p-3 "
            >
              Okay great! That is all the information I need to know! Let's do
              it together.
            </div>
            <div className="flex items-center text-xs mt-2">
              <span style={{ color: textColor500 }} className="font-semibold">
                Terry Wood
              </span>
              <span
                style={{ color: textColor400 }}
                className="text-gray-400 ps-1"
              >
                • 7 min ago
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full max-[26.25rem]:h-[2.5rem] h-[3rem]">
        <div
          style={{
            backgroundColor: background400,
            color: textColor400,
            borderColor: borderNeutral200,
          }}
          className="border rounded-md w-full max-[26.25rem]:px-3 max-[26.25rem]:text-xs px-4 h-full mr-2 flex items-center text-sm text-gray-400"
        >
          Enter text here...
        </div>
        <button
          style={{ backgroundColor: primary500, color: background50 }}
          className="rounded-md bg-primary w-20 text-white h-full"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
