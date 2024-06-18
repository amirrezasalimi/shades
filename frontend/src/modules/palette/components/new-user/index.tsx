import React, { FC } from "react";

import { Color } from "../types";

interface Props {
  color: Color;
}
const NewUser: FC<Props> = ({ color }) => {
  const textColor500 = color?.text?.[500];
  const textColor400 = color?.text?.[400];
  const primary200 = color?.primary?.[200];
  const primary500 = color?.primary?.[500];
  const secondary500 = color?.secondary?.[500];
  const borderNeutral200 = color?.neutral?.[200];
  const background500 = color?.background?.[500];
  return (
    <div
      style={{ backgroundColor: background500, borderColor: borderNeutral200 }}
      className="bg-white p-5 rounded-2xl max-[420px]:p-3 max-[420px]:w-full w-72 h-fit flex justify-between items-center"
    >
      <div>
        <div style={{ color: textColor400 }} className="text-xs">
          New users
        </div>
        <div style={{ color: textColor500 }} className="text-2xl font-bold">
          78k
        </div>
        <div style={{ color: secondary500 }} className="text-sm">
          24.42%
        </div>
      </div>
      <div className="flex items-end space-x-1">
        <div
          style={{
            backgroundColor: primary200,
          }}
          className="rounded-full h-10 bg-opacity-15 w-5"
        ></div>
        <div
          style={{
            backgroundColor: primary500,
          }}
          className="rounded-full h-24 w-5"
        ></div>
        <div
          style={{
            backgroundColor: primary200,
          }}
          className="rounded-full h-14 w-5 bg-opacity-15"
        ></div>
        <div
          style={{
            backgroundColor: primary200,
          }}
          className="rounded-full h-20 w-5 bg-opacity-15"
        ></div>
        <div
          style={{
            backgroundColor: primary200,
          }}
          className="rounded-full h-16 w-5 bg-opacity-15"
        ></div>
      </div>
    </div>
  );
};

export default NewUser;
