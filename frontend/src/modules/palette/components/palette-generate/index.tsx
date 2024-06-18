"use client";
import React from "react";
import { baseColorsKeys } from "~/shared/constants/keys";
import { TbCopy } from "react-icons/tb";
import { colorContrast } from "~/shared/utils/color";
import { copyClipboard } from "~/shared/utils/copy-clipboard";

type FullData = Record<string, Record<string, string>>;
interface PaletteGenerateProps {
  fullData: FullData;
}

const PaletteGenerate: React.FC<PaletteGenerateProps> = ({ fullData }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium">Base Colors</h2>
        <div className="flex flex-col gap-4">
          {baseColorsKeys.map((name, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm"
            >
              <h2 className="text-xl font-medium">{name}</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5 lg:grid-cols-11">
                {Object.entries(fullData?.[name] ?? {})
                  .reverse()
                  .map(([key, value]: [string, string]) => (
                    <div
                      key={value}
                      style={{
                        backgroundColor: value,
                        color: colorContrast(value),
                      }}
                      onClick={() => copyClipboard(value)}
                      className={`group flex h-16 cursor-pointer items-center justify-center rounded-lg p-4`}
                    >
                      <div className="flex flex-col">
                        <span className="text-medium font-medium opacity-70 group-hover:hidden">
                          {key}
                        </span>
                        <span className="text-xs font-medium opacity-70 group-hover:hidden">
                          {value}
                        </span>
                      </div>
                      <TbCopy
                        size={24}
                        className="opacity-0 group-hover:opacity-100"
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaletteGenerate;
