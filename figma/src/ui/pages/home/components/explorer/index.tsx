import ListResponse from "@common/models/list-response";
import PaletteFull from "@common/models/palette-full";
import { useQuery } from "@tanstack/react-query";
import { api } from "@ui/shared/utils/trpc-client";
import { useEffect, useState } from "react";
import useFork from "../../hooks/fork";
import { useInView } from "react-intersection-observer";
import arrowImport from "@ui/assets/arrow-import.svg";
import ColorPalette from "./components/colors-palette";

const Item = ({
  id,
  title,
  fork_count,
  colors,
  onClick,
}: {
  id: string;
  title: string;
  fork_count: number;
  colors: string[];
  onClick: () => void;
}) => {
  return (
    <div
      className="group relative hover:bg-[#F3F3F3] transition-colors"
      onClick={onClick}
    >
      <div
        className={
          "flex items-center justify-between py-2 border-b border-gray-100 cursor-pointer mx-6"
        }
      >
        <div className="flex flex-col space-y-1">
          <p
            title={title}
            className="group-hover:text-primary max-w-36 text-[13px] truncate transition-colors"
          >
            {title}
          </p>
          <div className="flex items-center space-x-1 text-[#999999]">
            <img width={12} src={arrowImport} />
            <span className="text-xs">{fork_count}</span>
          </div>
        </div>
        <div className="flex items-center rounded-xl h-10 overflow-hidden">
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
const SkeletonItem = () => (
  <div className="flex justify-between items-center mx-6 py-2 border-gray-100 border-b animate-pulse">
    <div className="flex flex-col space-y-1">
      <div className="bg-slate-200 rounded w-36 h-5"></div>
      <div className="bg-slate-200 rounded w-10 h-5"></div>
    </div>
    <div className="flex items-center bg-slate-200 rounded-xl w-44 h-10 overflow-hidden"></div>
  </div>
);

const Explorer = ({
  showPaletteModal,
  setShowColorModal,
}: {
  showPaletteModal: boolean;
  setShowColorModal: (value: boolean) => void;
}) => {
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
    setPage(nextPage);
  };

  const { ref, inView } = useInView({
    delay: 200,
  });
  useEffect(() => {
    next();
  }, [inView]);

  const baseColors = ["primary", "secondary", "neutral", "background", "text"];

  const [selectedPaletteId, setSelectedPaletteId] = useState<string>("");

  const openItem = (paletteId: string) => {
    setSelectedPaletteId(paletteId);
    setShowColorModal(true);
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-custom pt-[7.5rem]">
      <ColorPalette
        showModal={setShowColorModal}
        isOpen={showPaletteModal}
        paletteId={selectedPaletteId}
      />
      {recent.isLoading && (
        <>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <SkeletonItem />
          ))}
        </>
      )}
      {palettes.map((palette) => {
        const colors = baseColors.map((color) => palette.colors[color]);
        return (
          <Item
            id={palette.id}
            title={palette.prompt}
            fork_count={palette.fork_count}
            colors={colors}
            onClick={() => {
              openItem(palette.id);
            }}
          />
        );
      })}
      {recent.isFetching && (
        <>
          {[1, 2, 3].map(() => (
            <SkeletonItem />
          ))}
        </>
      )}
      <span ref={ref} className="bg-transparent w-full h-2" />
    </div>
  );
};

export default Explorer;
