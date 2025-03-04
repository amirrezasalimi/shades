import { useEffect, useState, useRef } from "react";
import { HexColorPicker } from "react-colorful";
import { Popover } from "react-tiny-popover";
import clsx from "clsx";
import {
  generateColorHarmony,
  HarmonyType,
  isValidColor,
} from "../../../../../common/utils/color-wheel";
import { generateShades } from "../../../../../common/utils/color";
import toast from "react-hot-toast";

const ColorWheel = ({ style }: { style?: string }) => {
  const [color, setColor] = useState("#6366f1"); // Default indigo color
  const [harmonyType, setHarmonyType] = useState<HarmonyType>("complementary");
  const [outputColors, setOutputColors] = useState<string[]>([]);
  const [shadesMap, setShadesMap] = useState<
    Record<string, Record<number, string>>
  >({});

  // Popover state
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  // Generate output colors when color or harmony type changes
  useEffect(() => {
    if (isValidColor(color)) {
      const harmonyColors = generateColorHarmony(color, harmonyType);
      setOutputColors(harmonyColors);

      // Generate shades for each color in the harmony
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
    { value: "monochromatic", label: "Monochromatic" },
    { value: "complementary", label: "Complementary" },
    { value: "analogous", label: "Analogous" },
    { value: "triadic", label: "Triadic" },
    { value: "split-complementary", label: "Split Complementary" },
    { value: "square", label: "Square" },
  ];

  return (
    <div className={clsx("mx-auto w-full max-w-4xl", style)}>
      <div className="flex lg:flex-row flex-col gap-6">
        {/* Color picker and controls section */}
        <div className="flex flex-col gap-4 min-w-64">
          <h2 className="font-semibold text-xl">Select a Color</h2>

          {/* Color input and square button with popover */}
          <div className="mt-2">
            <div className="flex items-center">
              <input
                type="text"
                value={color}
                onChange={(e) =>
                  isValidColor(e.target.value) && setColor(e.target.value)
                }
                className="p-2 border rounded w-full text-center"
                placeholder="Enter color hex..."
              />

              <Popover
                isOpen={isPickerOpen}
                positions={["right", "bottom"]} // Preferred positions in order
                padding={10}
                onClickOutside={() => setIsPickerOpen(false)}
                content={
                  <div className="bg-white shadow-lg p-1 border border-gray-200 rounded-lg">
                    <HexColorPicker
                      color={color}
                      onChange={(newColor) => {
                        setColor(newColor);
                      }}
                    />
                  </div>
                }
              >
                <div
                  className="flex-shrink-0 hover:shadow-md ml-2 border border-gray-300 rounded w-10 h-10 transition-shadow cursor-pointer"
                  style={{ backgroundColor: color }}
                  onClick={() => setIsPickerOpen(!isPickerOpen)}
                  title="Click to open color picker"
                />
              </Popover>
            </div>
          </div>

          <div className="mt-2">
            <label className="block mb-1 font-medium text-sm">
              Harmony Type
            </label>
            <select
              value={harmonyType}
              onChange={(e) => setHarmonyType(e.target.value as HarmonyType)}
              className="bg-white p-2 border rounded w-full"
            >
              {harmonyOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Generated colors display section */}
        <div className="flex-1 overflow-auto">
          <h2 className="mb-4 font-semibold text-xl">Generated Palettes</h2>

          {/* Base colors from harmony */}
          <div className="flex flex-wrap gap-3 mb-6">
            {outputColors.map((outputColor, index) => (
              <div
                key={`${outputColor}-${index}`}
                className="flex flex-col items-center"
                onClick={() => copyToClipboard(outputColor)}
              >
                <div
                  className="shadow-sm border border-gray-200 rounded-full w-10 h-10 cursor-pointer"
                  style={{ backgroundColor: outputColor }}
                  title={outputColor}
                ></div>
                <span className="mt-1 text-xs">
                  {outputColor.toUpperCase()}
                </span>
              </div>
            ))}
          </div>

          {/* Shades for each harmony color */}
          <div className="space-y-8">
            {outputColors.map((outputColor, colorIndex) => (
              <div
                key={`shades-${outputColor}-${colorIndex}`}
                className="bg-white shadow-sm p-4 rounded-lg"
              >
                <h3 className="flex items-center gap-2 mb-3 font-medium">
                  <div
                    className="rounded-full w-4 h-4"
                    style={{ backgroundColor: outputColor }}
                  ></div>
                  <span>Shades for {outputColor.toUpperCase()}</span>
                </h3>

                <div className="gap-1 grid grid-cols-11">
                  {/* Shade labels */}
                  {[950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50].map(
                    (shade) => (
                      <div
                        key={`label-${shade}`}
                        className="font-mono text-gray-600 text-xs text-center"
                      >
                        {shade}
                      </div>
                    )
                  )}

                  {/* Shade colors */}
                  {shadesMap[outputColor] &&
                    Object.entries(shadesMap[outputColor])
                      .sort(([a], [b]) => Number(b) - Number(a))
                      .map(([shade, shadeColor]) => (
                        <div
                          key={`${outputColor}-${shade}`}
                          className="rounded h-8 hover:scale-105 transition-transform cursor-pointer"
                          style={{ backgroundColor: shadeColor }}
                          onClick={() => copyToClipboard(shadeColor)}
                          title={`${shadeColor} (${shade})`}
                        ></div>
                      ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorWheel;
