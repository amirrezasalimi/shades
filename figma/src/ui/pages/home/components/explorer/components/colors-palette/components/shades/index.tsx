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
              <div className="flex flex-col mx-6 border-gray-100 mt-3 first:mt-0 pt-3 first:pt-0 last:pb-24 border-t first:border-t-0">
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-[#191919] text-lg">
                    {fullColors && fullColors[key].name}
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <span className="text-gray-500">{lengthShades} Colors</span>
                    <div className="text-[#46B235]">{key}</div>
                  </div>
                </div>
                <div className="gap-2 grid grid-cols-5 mt-5">
                  {Object.keys(shadesColor).map((keyShade) => {
                    const keyShadeColor = shadesColor[keyShade];
                    return (
                      <div className="flex flex-col space-y-1">
                        <div
                          style={{
                            background: `${keyShadeColor}`,
                          }}
                          className="rounded-xl w-16 h-16"
                        />
                        <span
                          className="font-medium text-[#191919] text-xs"
                        >
                          {keyShade}
                        </span>
                        <span className="font-light text-gray-500 text-xs">
                          {keyShadeColor}
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
