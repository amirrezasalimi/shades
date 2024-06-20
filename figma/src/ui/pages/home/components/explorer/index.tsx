import ListResponse from "@common/models/list-response";
import PaletteFull from "@common/models/palette-full";
import { useQuery } from "@tanstack/react-query";
import { api } from "@ui/shared/utils/trpc-client";
import { useEffect, useState } from "react";
import useFork from "../../hooks/fork";
import { useInView } from "react-intersection-observer";
import arrowImport from "@ui/assets/arrow-import.svg";
import clsx from "clsx";

const Item = ({
  id,
  title,
  fork_count,
  colors,
}: {
  id: string;
  title: string;
  fork_count: number;
  colors: string[];
}) => {
  const fork = useFork();

  return (
    <div
      className="hover:bg-[#F3F3F3]"
      onClick={() => {
        fork.forkToFigma(id);
      }}
    >
      <div className="flex items-center justify-between py-2 border-b border-gray-100 cursor-pointer mx-6">
        <div className="flex flex-col space-y-1">
          <p title={title} className="text-[13px] max-w-36 truncate">
            {title}
          </p>
          <div className="flex items-center text-[#999999] space-x-1">
            <img width={12} src={arrowImport} />
            <span className="text-xs">{fork_count}</span>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden h-10 flex items-center">
          {colors.map((color, index) => {
            return (
              <div className="w-9 h-full" style={{ backgroundColor: color }} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
const Explorer = () => {
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

  const { ref, inView } = useInView({
    delay: 100,
  });
  useEffect(() => {
    next();
  }, [inView]);
  const baseColors = ["primary", "secondary", "neutral", "background", "text"];

  return (
    <div className="flex flex-col">
      {recent.isLoading && <div>Loading...</div>}
      {palettes.map((palette) => {
        const colors = baseColors.map((color) => palette.colors[color]);
        return (
          <Item
            id={palette.id}
            title={palette.prompt}
            fork_count={palette.fork_count}
            colors={colors}
          />
        );
      })}
      <span ref={ref} className="w-full h-2 bg-transparent" />
      {/* fetching */}
      {page > 1 && recent.isFetching && (
        <div className="mx-6 py-2">Loading...</div>
      )}
    </div>
  );
};

export default Explorer;
