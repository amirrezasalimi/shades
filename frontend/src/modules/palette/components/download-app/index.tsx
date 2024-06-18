import React, { FC } from "react";

import { Color } from "../types";

interface Props {
  color: Color;
}
const DownloadApp: FC<Props> = ({ color }) => {
  const primary500 = color?.primary?.[500];
  const borderNeutral200 = color?.neutral?.[200];
  const background500 = color?.background?.[500];
  const background50 = color?.background?.[50];
  return (
    <div
      style={{ backgroundColor: background500, borderColor: borderNeutral200 }}
      className="max-[420px]:w-full border w-60 h-fit rounded-xl flex items-center justify-center flex-col max-[420px]:py-7 max-[420px]:px-4 py-10 px-6 gap-8"
    >
      <div
        style={{ backgroundColor: primary500 }}
        className="rounded-full w-14 min-h-14 flex items-center justify-center"
      >
        {":)"}
      </div>
      <div style={{ color: primary500 }} className="text-sm text-center">
        <span>Create, save and</span>
        <span>share perfect palettes</span>
        <span>in seconds.</span>
      </div>
      <button
        style={{ backgroundColor: primary500, color: background50 }}
        className="text-sm py-3 px-4 rounded-xl"
      >
        Download App
      </button>
    </div>
  );
};

export default DownloadApp;
