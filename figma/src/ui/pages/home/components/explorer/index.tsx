import ListResponse from "@common/models/list-response";
import { ColorPalette } from "@common/models/palette";
import PaletteFull from "@common/models/palette-full";
import { useQuery } from "@tanstack/react-query";
import { api } from "@ui/shared/utils/trpc-client";
import { useEffect, useState } from "react";
import useFork from "../../hooks/fork";
import clsx from "clsx";

const Explorer = () => {
  const fork = useFork();

  const [page, setPage] = useState(1);
  const [palettes, setPalettes] = useState<PaletteFull[]>([]);

  const data = useQuery<ListResponse<PaletteFull>>({
    queryKey: ["palettes"],
    queryFn: async () => {
      return (await api.figma.recentPalettes.query({
        page,
      })) as unknown as ListResponse<PaletteFull>;
    },
  });
  useEffect(() => {
    if (data.data) {
      setPalettes((prev) => [...prev, ...data.data.items]);
    }
  }, [data.data]);

  const baseColors = ["primary", "secondary", "neutral", "background", "text"];

  return (
    <div className="flex flex-col divide-y">
      {data.isLoading && <div>Loading...</div>}
      {palettes.map((palette) => {
        return (
          <div
            key={palette.id}
            className={clsx(
              "flex items-center h-[88px]",
              "cursor-pointer",
              fork.forkingId === palette.id && "bg-gray-100"
            )}
            onClick={() => fork.forkToFigma(palette.id)}
          >
            <div className="w-1/2">
              <h2 className="text-md font-medium text-gray-800">
                {palette.prompt}
              </h2>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center">
              <div className="w-full flex rounded-lg overflow-hidden h-2/4">
                {baseColors.map((color) => {
                  return (
                    <div
                      style={{ backgroundColor: palette.colors[color] }}
                      className="w-1/5 h-full"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
      {/* fetching */}
      {data.isFetching && <div>Fetching...</div>}
    </div>
  );
};

export default Explorer;
