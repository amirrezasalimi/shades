import ListResponse from "@common/models/list-response";
import PaletteFull from "@common/models/palette-full";
import { useQuery } from "@tanstack/react-query";
import { api } from "@ui/shared/utils/trpc-client";
import { useEffect, useState } from "react";
import useFork from "../../hooks/fork";
import { useInView } from "react-intersection-observer";
import arrowImport from "@ui/assets/arrow-import.svg";

const Explorer = () => {
  const fork = useFork();

  const [page, setPage] = useState(1);
  const [palettes, setPalettes] = useState<PaletteFull[]>([]);

  const recent = useQuery<ListResponse<PaletteFull>>({
    queryKey: ["recent-palettes", page],
    queryFn: async () => {
      return (await api.figma.recentPalettes.query({
        page,
      })) as unknown as ListResponse<PaletteFull>;
    },
  });
  const data = recent.data;

  useEffect(() => {
    if (data) {
      setPalettes((prev) => [...prev, ...data.items]);
    }
  }, [data]);

  const canLoadMore = data?.page !== recent.data?.totalPages;
  const next = async () => {
    if (recent.isLoading || !canLoadMore) return;
    const nextPage = (recent.data?.page ?? 1) + 1;
    console.log("nextPage", nextPage);
    setPage(nextPage);
  };

  const { ref, inView, entry } = useInView({
    delay: 100,
  });
  useEffect(() => {
    next();
  }, [inView]);
  const baseColors = ["primary", "secondary", "neutral", "background", "text"];

  return (
    <div className="flex flex-col mt-5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(() => (
        <div className="hover:bg-[#F3F3F3]">
          <div className="flex items-center justify-between py-2 border-b border-gray-100 cursor-pointer mx-6">
            <div className="flex flex-col space-y-1">
              <p
                title="cyberpunk landing page cyberpunk landing page"
                className="text-[13px] max-w-36 truncate"
              >
                cyberpunk landing page cyberpunk landing page
              </p>
              <div className="flex items-center text-[#999999] space-x-1">
                <img width={12} src={arrowImport} />
                <span className="text-xs">798</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden h-10 flex items-center">
              <div className="w-9 bg-fuchsia-200 h-full"></div>
              <div className="w-9 bg-fuchsia-300 h-full"></div>
              <div className="w-9 bg-fuchsia-400 h-full"></div>
              <div className="w-9 bg-fuchsia-500 h-full"></div>
              <div className="w-9 bg-fuchsia-600 h-full"></div>
            </div>
          </div>
        </div>
      ))}

      {/* {recent.isLoading && <div>Loading...</div>}
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
      <span ref={ref} className="w-full h-2 bg-transparent" /> */}
      {/* fetching */}
      {/* {page > 1 && recent.isFetching && <div>Fetching...</div>} */}
    </div>
  );
};

export default Explorer;
