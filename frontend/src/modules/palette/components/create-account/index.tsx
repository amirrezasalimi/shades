import React, { FC } from "react";
import { Color } from "../types";
interface Props {
  color: Color;
}
const CreateAccount: FC<Props> = ({ color }) => {
  const textColor500 = color?.text?.[500];
  const textColor400 = color?.text?.[400];
  const primary500 = color?.primary?.[500];
  const borderNeutral200 = color?.neutral?.[200];
  const background500 = color?.background?.[500];
  const background50 = color?.background?.[50];

  return (
    <div
      style={{
        backgroundColor: background500,
        borderColor: borderNeutral200,
      }}
      className="space-y-4 h-fit flex flex-col max-[420px]:w-full w-72 p-3 rounded-2xl"
    >
      <div
        style={{
          backgroundColor: primary500,
          backgroundImage: `url('/Topographic 3.png')`,
        }}
        className="w-full h-28 rounded-xl bg-contain bg-center"
      ></div>
      <div>
        <div className="font-semibold" style={{ color: textColor500 }}>
          Get Started
        </div>
        <div className="text-xs font-light" style={{ color: textColor400 }}>
          Create an account to get started
        </div>
      </div>
      <div className="space-y-2">
        <div
          style={{
            borderColor: primary500,
            color: textColor500,
          }}
          className="h-9 text-xs w-full rounded-md flex items-center px-3 border"
        >
          shades@gmail.com
        </div>
        <div
          style={{
            borderColor: borderNeutral200,
            color: textColor400,
          }}
          className="h-9 text-xs w-full rounded-md flex items-center px-3 bg-opacity-15 border border-gray-200-700"
        >
          Password
        </div>
      </div>
      <button
        style={{
          backgroundColor: primary500,
          color: background50,
        }}
        className="text-center py-3 px-4 rounded-xl"
      >
        Create account
      </button>
    </div>
  );
};

export default CreateAccount;
