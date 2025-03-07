import { useEffect, useState, useRef } from "react";
import { HexColorPicker } from "react-colorful";
import { Popover } from "react-tiny-popover";
import settings from "@ui/assets/settings.svg";
import figma from "@ui/assets/figma.svg";
import clsx from "clsx";
import angleLeft from "@ui/assets/angle-left.svg";
import {
  generateColorHarmony,
  HarmonyType,
  isValidColor,
} from "../../../../../common/utils/color-wheel";
import { generateShades } from "../../../../../common/utils/color";
import toast from "react-hot-toast";
import Setting from "./components/setting-bottom-sheet";
import useBottomsheet from "../../../../../store/useBottomsheet";

const ColorWheel = ({ style }: { style?: string }) => {
  const [color, setColor] = useState("#6366f1");
  const [harmonyType, setHarmonyType] = useState<HarmonyType>("complementary");
  const [outputColors, setOutputColors] = useState<string[]>([]);
  const [value, setValue] = useState<string>(color || "6366f1");
  const [shadesMap, setShadesMap] = useState<
    Record<string, Record<number, string>>
  >({});

  const [isPickerOpen, setIsPickerOpen] = useState(false);

  useEffect(() => {
    if (isValidColor(color)) {
      const harmonyColors = generateColorHarmony(color, harmonyType);

      setOutputColors(harmonyColors);

      const newShadesMap: Record<string, Record<number, string>> = {};
      harmonyColors.forEach((harmonyColor) => {
        newShadesMap[harmonyColor] = generateShades(harmonyColor);
      });
      setShadesMap(newShadesMap);
    }
  }, [color, harmonyType]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success("Copied to clipboard!"))
      .catch(() => toast.error("Failed to copy"));
  };

  const harmonyOptions: { value: HarmonyType; label: string }[] = [
    { value: "complementary", label: "Complementary" },
    { value: "monochromatic", label: "Monochromatic" },
    { value: "analogous", label: "Analogous" },
    { value: "triadic", label: "Triadic" },
    { value: "split-complementary", label: "Split Complementary" },
    { value: "square", label: "Square" },
  ];

  const colorValue = (colorValue: string) => {
    const sanitizedColor = colorValue.replace("#", "");
    setValue(sanitizedColor);
    isValidColor(sanitizedColor) && setColor(sanitizedColor);
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getTextColor = (bgColor: string) => {
    const hex = bgColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "black" : "white";
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const { setToggleBottomSheet } = useBottomsheet();

  return (
    <div className={clsx(style)}>
      <div className="flex lg:flex-row flex-col relative pb-10">
        <div className="flex flex-col gap-4 mx-6">
          <div className="">
            <div className="flex items-center h-12 relative">
              <input
                type="text"
                maxLength={7}
                value={value.replace("#", "")}
                onChange={(e) => colorValue(e.target.value)}
                className="p-2 border-[0.5px] border-[#b0b0b0] rounded-2xl w-full h-full pl-[3.7rem] focus:outline-none"
              />
              <span className="text-[#808080] absolute top-1/2 -translate-y-1/2 left-12">
                #
              </span>
              <span className="text-[#b0b0b0] font-light text-sm absolute -bottom-[1.9rem] left-0">
                Select layer or paste Hex code
              </span>

              <Popover
                isOpen={isPickerOpen}
                positions={["right", "bottom"]}
                padding={10}
                onClickOutside={() => setIsPickerOpen(false)}
                content={
                  <div className="bg-white shadow-lg p-1 border-[0.5px] border-[#b0b0b0] rounded-lg absolute -bottom-60">
                    <HexColorPicker
                      color={color}
                      onChange={(newColor) => {
                        const sanitizedColor = newColor.replace("#", "");
                        setColor(newColor);
                        setValue(sanitizedColor);
                      }}
                    />
                  </div>
                }
              >
                <div
                  className="flex-shrink-0 hover:shadow-md rounded-lg transition-shadow cursor-pointer absolute top-1/2 -translate-y-1/2 left-3 h-6 w-6"
                  style={{ backgroundColor: color }}
                  onClick={() => setIsPickerOpen(!isPickerOpen)}
                />
              </Popover>
            </div>
          </div>

          <div className="mt-7 z-10">
            <label className="block mb-2 font-light text-sm">
              Color Combination
            </label>
            <div className="relative w-full" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="bg-white p-3 border-[0.5px] border-[#b0b0b0] h-12 rounded-2xl w-full flex items-center justify-between transition font-light text-sm"
              >
                {
                  harmonyOptions.find((option) => option.value === harmonyType)
                    ?.label
                }
                <span className="text-gray-500">
                  <img
                    width={16}
                    className={clsx(
                      "transition-transform",
                      isOpen ? "rotate-90" : "-rotate-90"
                    )}
                    src={angleLeft}
                    alt=""
                  />
                </span>
              </button>

              <div
                className={`absolute left-0 top-full my-2 w-full py-2 bg-white border-[0.5px] border-[#b0b0b0] shadow-lg rounded-xl overflow-hidden transition-all duration-200 ${
                  isOpen ? "opacity-100 max-h-[15.5rem]" : "opacity-0 max-h-0"
                }`}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
              >
                {harmonyOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => {
                      setHarmonyType(option.value);
                      setIsOpen(false);
                    }}
                    className="px-3 py-2 mx-2.5 mt-0.5 text-gray-700 hover:bg-[#F3F3F3] cursor-pointer transition rounded-xl text-sm"
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto mt-3">
          <div className="flex rounded-t-xl overflow-hidden mx-6">
            {outputColors.map((outputColor, index) => (
              <div
                key={`${outputColor}-${index}`}
                className="flex items-center w-full"
                onClick={() => copyToClipboard(outputColor)}
              >
                <div
                  className="w-full cursor-pointer h-[104px] relative"
                  style={{
                    backgroundColor: outputColor,
                    color: getTextColor(outputColor),
                  }}
                  title={outputColor}
                >
                  <span className="mt-1 text-xs absolute top-7 left-1/2 -translate-x-1/2">
                    {outputColor.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8 bg-white bg-opacity-80 relative -translate-y-[2.1rem]">
            {outputColors.map((outputColor, colorIndex) => (
              <div
                key={`shades-${outputColor}-${colorIndex}`}
                className={clsx(
                  "shadow-sm px-6 py-4 rounded-lg",
                  colorIndex === 0 && "bg-opacity-80 backdrop-blur-[12px]"
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="flex items-center gap-2 font-medium">
                    <span className="text-[#191919] font-light">
                      <span className="font-medium">Primary</span> -{" "}
                      {outputColor.replace("#", "").toUpperCase()}
                    </span>
                  </h3>

                  <div className="flex items-center gap-4">
                    <span className="text-[#808080] text-sm font-light">
                      {Object.entries(shadesMap[outputColor]).length} Colors
                    </span>
                    <span className="text-[#46B235] text-sm">Primary</span>
                  </div>
                </div>
                <div className="gap-1 grid grid-cols-5">
                  {/* Shade labels */}
                  {/* {[950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50].map(
                    (shade) => (
                      <div
                        key={`label-${shade}`}
                        className="font-mono text-gray-600 text-xs text-center"
                      >
                        {shade}
                      </div>
                    )
                  )} */}

                  {/* Shade colors */}
                  {shadesMap[outputColor] &&
                    Object.entries(shadesMap[outputColor])
                      .sort(([a], [b]) => Number(b) - Number(a))
                      .map(([shade, shadeColor]) => (
                        <div
                          key={`${outputColor}-${shade}`}
                          className="rounded-xl h-16 w-16 mb-12"
                          style={{ backgroundColor: shadeColor }}
                          onClick={() => copyToClipboard(shadeColor)}
                          title={`${shadeColor} (${shade})`}
                        >
                          <div className="pt-[70px] flex flex-col">
                            <span className="text-xs text-[#191919] font-medium">
                              {shade}
                            </span>
                            <span className="text-xs text-[#808080] font-light">
                              {shadeColor}
                            </span>
                          </div>
                        </div>
                      ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={clsx(
            "fixed -bottom-96 flex items-center w-[calc(100%_-_48px)] left-1/2 -translate-x-1/2 transition-all duration-300 h-[50px] overflow-hidden rounded-2xl",
            isOpen ? "bottom-5" : "bottom-4"
          )}
        >
          <div
            // onClick={fork}
            className="flex justify-center items-center space-x-2 bg-[#232323] w-[calc(100%_-_50px)] h-full text-white cursor-pointer"
          >
            <img width={22} src={figma} alt="" />
            <span>Import to figma</span>
          </div>
          <div
            className="flex justify-center items-center border-gray-100 bg-white border rounded-r-2xl w-[50px] h-full cursor-pointer"
            onClick={() => setToggleBottomSheet(true)}
          >
            <img width={24} src={settings} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorWheel;
