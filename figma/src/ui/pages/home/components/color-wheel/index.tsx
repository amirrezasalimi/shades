import { useEffect, useMemo, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Popover } from "react-tiny-popover";
import settings from "@ui/assets/settings.svg";
import figma from "@ui/assets/figma.svg";
import clsx from "clsx";
import {
  generateColorHarmony,
  HarmonyType,
  isValidColor,
} from "../../../../../common/utils/color-wheel";
import {
  generateShades,
  getNeutralColor,
} from "../../../../../common/utils/color";
import useBottomsheet from "../../../../../store/useBottomsheet";
import colorNamer from "color-namer";
import { copyClipboard } from "@ui/shared/hooks/copy-clipboard";
import { NetworkMessages } from "@common/network/messages";
import { ColorPalette } from "@common/models/palette";
import Dropdown from "@ui/shared/components/dropdown";

const ColorWheel = ({ className }: { className?: string }) => {
  const [color, setColor] = useState("#6366f1");
  const [harmonyType, setHarmonyType] = useState<HarmonyType>("complementary");
  const [outputColors, setOutputColors] = useState<string[]>([]);
  const [shadesMap, setShadesMap] = useState<
    Record<string, Record<number, string>>
  >({});
  const [shadeCount, setShadeCount] = useState<number>(10);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [isImporting, setIsImporting] = useState(false);

  const shadeOptions = [
    { value: 3, label: "3 Shades" },
    { value: 6, label: "6 Shades" },
    { value: 8, label: "8 Shades" },
    { value: 10, label: "10 Shades" },
  ];
  const neutralColor = useMemo(() => {
    const neutral = getNeutralColor(color);
    return neutral;
  }, [color]);

  const getColorName = (_color: string) => {
    _color = _color.replace("#", "");

    const _neutralColor = neutralColor.replace("#", "").toLowerCase();
    // primary, neutral or actual name
    if (_color.toLowerCase() == _neutralColor) {
      return "neutral";
    }
    if (_color.toLowerCase() == color.toLowerCase()) {
      return "primary";
    }

    return colorNamer(_color).ntc?.[0]?.name ?? `#${_color}`;
  };

  useEffect(() => {
    if (isValidColor(color)) {
      const harmonyColors = generateColorHarmony(color, harmonyType);
      const colors = [...harmonyColors, neutralColor].sort((a, b) => {
        const name = getColorName(a);
        const name2 = getColorName(b);
        if (name === "primary") return -1;
        if (name2 === "primary") return 1;

        if (name === "neutral") return -1;
        if (name2 === "neutral") return 1;

        return a.localeCompare(b);
      });

      // primary, neutral, ...
      setOutputColors(colors);

      const newShadesMap: Record<string, Record<number, string>> = {};
      colors.forEach((harmonyColor) => {
        newShadesMap[harmonyColor] = generateShades(harmonyColor, shadeCount);
      });
      setShadesMap(newShadesMap);
    }
  }, [color, harmonyType, shadeCount]);

  const harmonyOptions: { value: HarmonyType; label: string }[] = [
    { value: "complementary", label: "Complementary" },
    { value: "monochromatic", label: "Monochromatic" },
    { value: "analogous", label: "Analogous" },
    { value: "triadic", label: "Triadic" },
    { value: "split-complementary", label: "Split" },
    { value: "square", label: "Square" },
  ];

  const colorValue = (colorValue: string) => {
    const sanitizedColor = colorValue.replace("#", "");
    setColor(sanitizedColor);
    isValidColor(sanitizedColor) && setColor(sanitizedColor);
  };

  const getTextColor = (bgColor: string) => {
    const hex = bgColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "black" : "white";
  };

  const { setToggleBottomSheet } = useBottomsheet();

  const importToFigma = async () => {
    const fullColors: ColorPalette = outputColors.reduce(
      (acc, _color, index) => {
        const colorName =
          colorNamer(_color).ntc?.[0]?.name ?? `Color ${index + 1}`;
        const cname = getColorName(_color);
        acc[cname] = {
          name: colorName,
          hex: _color,
          shades: shadesMap[_color],
        };
        return acc;
      },
      {} as ColorPalette
    );
    const sortedFullColorsMap = Object.entries(fullColors)
      .sort(([a], [b]) => {
        // primary, neutral, ...
        if (a === "primary") return -1;
        if (b === "primary") return 1;
        if (a === "neutral") return -1;
        if (b === "neutral") return 1;

        return a.localeCompare(b);
      })
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {} as ColorPalette);

    const primaryColor = fullColors["primary"].name;
    const uniqueId = Object.values(fullColors)
      .map((color) => color.hex)
      .join(",");
    NetworkMessages.CREATE_PALETTE.send({
      palette: {
        colors: Object.fromEntries(
          Object.entries(sortedFullColorsMap).map(([color, data]) => [
            color,
            data?.name,
          ])
        ),
        description: `This color palette is based on the ${primaryColor} color, providing a vibrant and harmonious set of colors for a modern and sophisticated design. The palette includes a range of ${harmonyType} hues that work well together across various UI elements.`,
        fork_count: 0,
        id: uniqueId,
        prompt: "",
        fullColors: sortedFullColorsMap,
        keyAsLabel: true,
        addToStyles: true,
      },
    });
  };

  const handleImportToFigma = async () => {
    setIsImporting(true);
    await importToFigma();
    setTimeout(() => {
      setIsImporting(false);
    }, 1500);
  };

  const headColors = useMemo(() => {
    const colors = outputColors.filter((color) => color !== neutralColor);
    return colors;
  }, [outputColors, neutralColor]);

  return (
    <div className={className}>
      <div className="relative flex lg:flex-row flex-col pb-10">
        <div className="flex flex-col gap-4 mx-6">
          <div>
            <div className="relative flex items-center h-12">
              <input
                type="text"
                maxLength={7}
                value={color.replace("#", "")}
                onChange={(e) => colorValue(e.target.value)}
                className="p-2 pl-[3.7rem] border-[#b0b0b0] border-[0.5px] rounded-2xl focus:outline-none w-full h-full"
              />
              <span className="top-1/2 left-12 absolute text-[#808080] -translate-y-1/2">
                #
              </span>
              <span className="-bottom-[1.9rem] left-0 absolute font-light text-[#b0b0b0] text-sm">
                Select layer or paste Hex code
              </span>

              <Popover
                isOpen={isPickerOpen}
                positions={["bottom"]}
                padding={10}
                onClickOutside={() => setIsPickerOpen(false)}
                containerClassName="z-[200] !left-48 !-top-16"
                content={
                  <div className="bg-white shadow-lg p-1 border-[#b0b0b0] border-[0.5px] rounded-lg">
                    <HexColorPicker
                      className="!size-[150px]"
                      color={`#${color}`}
                      onChange={(newColor) => {
                        const sanitizedColor = newColor.replace("#", "");
                        setColor(newColor);
                        setColor(sanitizedColor);
                      }}
                    />
                  </div>
                }
              >
                <div
                  className="top-1/2 left-3 absolute flex-shrink-0 hover:shadow-md rounded-lg w-6 h-6 transition-shadow -translate-y-1/2 cursor-pointer"
                  style={{ backgroundColor: color }}
                  onClick={() => setIsPickerOpen(!isPickerOpen)}
                />
              </Popover>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Dropdown
              label="Shade Count"
              value={shadeCount}
              options={shadeOptions}
              onChange={setShadeCount}
            />

            <Dropdown
              label="Color Combination"
              value={harmonyType}
              options={harmonyOptions}
              onChange={setHarmonyType}
            />
          </div>
        </div>

        <div className="flex-1 mt-3">
          <div className="flex mx-6 rounded-t-xl overflow-hidden">
            {headColors.map((outputColor, index) => (
              <div
                key={`${outputColor}-${index}`}
                className="flex items-center w-full cursor-pointer"
                onClick={() => copyClipboard(outputColor)}
              >
                <div
                  className="relative w-full h-[104px] cursor-pointer"
                  style={{
                    backgroundColor: outputColor,
                    color: getTextColor(outputColor),
                  }}
                  title={outputColor}
                >
                  <span className="top-7 left-1/2 absolute mt-1 text-xs -translate-x-1/2">
                    {outputColor.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="relative space-y-8 bg-white bg-opacity-80 -translate-y-[2.1rem]">
            {outputColors.map((outputColor, colorIndex) => (
              <div
                key={`shades-${outputColor}-${colorIndex}`}
                className={clsx(
                  "shadow-sm px-6 py-4 rounded-lg",
                  colorIndex === 0 && "bg-opacity-80 backdrop-blur-[12px]"
                )}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3
                    className="flex items-center gap-2 font-medium cursor-pointer"
                    onClick={() => copyClipboard(outputColor)}
                  >
                    <span className="font-light text-[#191919]">
                      <span className="font-medium">
                        {getColorName(outputColor)}
                      </span>{" "}
                      - {outputColor.replace("#", "").toUpperCase()}
                    </span>
                  </h3>

                  <div className="flex items-center gap-4">
                    <span className="font-light text-[#808080] text-sm">
                      {Object.entries(shadesMap[outputColor]).length} Colors
                    </span>
                  </div>
                </div>
                <div className="gap-1 grid grid-cols-5">
                  {/* Shade colors */}
                  {shadesMap[outputColor] &&
                    Object.entries(shadesMap[outputColor])
                      .sort(([a], [b]) => Number(b) - Number(a))
                      .map(([shade, shadeColor]) => (
                        <div
                          key={`${outputColor}-${shade}`}
                          className="mb-12 rounded-xl size-16 cursor-pointer"
                          style={{ backgroundColor: shadeColor }}
                          onClick={() => copyClipboard(shadeColor)}
                          title={`${shadeColor} (${shade})`}
                        >
                          <div className="flex flex-col pt-[70px]">
                            <span className="font-medium text-[#191919] text-xs">
                              {shade}
                            </span>
                            <span className="font-light text-[#808080] text-xs">
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
            "-bottom-96 left-1/2 fixed flex items-center rounded-2xl w-[calc(100%_-_48px)] h-[50px] overflow-hidden transition-all -translate-x-1/2 duration-300",
            "bottom-5"
          )}
        >
          <div
            onClick={handleImportToFigma}
            className="flex justify-center items-center space-x-2 bg-[#232323] w-[calc(100%_-_50px)] h-full text-white cursor-pointer"
          >
            {isImporting ? (
              <div className="border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin" />
            ) : (
              <>
                <img width={22} src={figma} alt="" />
                <span>Import to figma</span>
              </>
            )}
          </div>
          <div
            className="flex justify-center items-center bg-white border border-gray-100 rounded-r-2xl w-[50px] h-full cursor-pointer"
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
