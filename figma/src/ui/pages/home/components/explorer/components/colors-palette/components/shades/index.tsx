import PaletteFull from "@common/models/palette-full";

const colorsKeys = [
  "primary",
  "secondary",
  "neutral",
  "background",
  "text",
  "info",
  "error",
  "success",
  "warning",
];

interface ColorShades {
  [shade: string]: string;
}

const Shades = ({ data }: { data: PaletteFull | undefined }) => {
  return (
    <>
      {data?.fullColors &&
        colorsKeys.map((key: string) => {
          const fullColors = data?.fullColors;
          if (fullColors && fullColors[key]) {
            const shadesColor: ColorShades = fullColors[key].shades;
            const lengthShades = Object.keys(shadesColor).length;

            return (
              <div className="flex flex-col border-t border-gray-100 first:border-t-0 first:pt-0 first:mt-0 pt-3 mt-3 last:pb-24">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-[#191919]">
                    {fullColors && fullColors[key].name}
                  </div>
                  <div className="text-sm flex items-center space-x-3">
                    <span className="text-gray-500">{lengthShades} Colors</span>
                    <div className="text-[#46B235]">{key}</div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2 mt-5">
                  {Object.keys(shadesColor).map((keyShade) => {
                    const keyShadeColor = shadesColor[keyShade];
                    return (
                      <div className="flex flex-col space-y-1">
                        <div
                          style={{
                            background: `${keyShadeColor}`,
                          }}
                          className="w-16 h-16 rounded-xl"
                        ></div>
                        <span
                          className="text-[#191919] text-xs font-medium"
                        >
                          {keyShade}
                        </span>
                        <span className="text-gray-500 text-xs font-light">
                          {fullColors[key].hex}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
    </>
  );
};

export default Shades;
