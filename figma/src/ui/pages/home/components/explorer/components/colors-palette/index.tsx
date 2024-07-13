import { FC, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@ui/shared/utils/trpc-client";
import PaletteFull from "@common/models/palette-full";
import Spinner from "@ui/shared/components/spinner";
import info from "@ui/assets/info-circle.svg";
import figma from "@ui/assets/figma.svg";
import angleLeft from "@ui/assets/angle-left.svg";
import settings from "@ui/assets/settings.svg";
import useFork from "@ui/pages/home/hooks/fork";
import Shades from "./components/shades";
import Setting from "./components/setting-bottom-sheet";

interface Toggle {
  isOpen: boolean;
  showModal: (isOpen: boolean) => void;
  paletteId: string;
}

const ColorPalette: FC<Toggle> = ({
  paletteId,
  isOpen,
  showModal = () => {},
}) => {
  const fork = useFork();
  const { data, isLoading, refetch } = useQuery({
    queryFn: async () => {
      return (await api.figma.getPalette.query({
        id: paletteId,
      })) as unknown as PaletteFull;
    },
    queryKey: ["palette", paletteId],
    enabled: !!paletteId,
  });
  const [toggleBottomSheet, setToggleBottomSheet] = useState(false);

  useEffect(() => {
    if (paletteId) {
      refetch();
    }
  }, [paletteId, refetch]);

  return (
    <>
      {isOpen && (
        <div className="z-20 overflow-y-auto left-0 bg-white fixed top-0 right-0 h-screen">
          {isLoading ? (
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-90 w-full h-full">
              <div className="w-10 h-10">
                <Spinner />
              </div>
            </div>
          ) : (
            <div className="mb-20">
              <div className="h-20 bg-white bg-opacity-80 backdrop-blur-xl border-b border-gray-100 flex items-center justify-between fixed top-0 right-0 left-0">
                <div className="ml-6 flex items-center space-x-4">
                  <div
                    className="cursor-pointer"
                    onClick={() => showModal(false)}
                  >
                    <img width={24} src={angleLeft} alt="" />
                  </div>
                  <p className="truncate text-xl max-w-56">{data?.prompt}</p>
                </div>

                <a href="" target="_blank" className="mr-6">
                  <div className="border border-gray-300 flex items-center justify-center rounded-2xl w-14 h-14 cursor-pointer">
                    <img width={22} src={info} alt="" />
                  </div>
                </a>
              </div>

              <div className="mt-4 h-full mx-6 pt-20">
                <Shades data={data} />
              </div>

              <div className="fixed bottom-5 flex items-center w-[calc(100%_-_48px)] left-1/2 -translate-x-1/2 h-[50px] overflow-hidden rounded-2xl">
                <div
                  onClick={() => fork.forkToFigma(paletteId)}
                  className="flex items-center h-full cursor-pointer space-x-2 justify-center text-white from-primary bg-gradient-to-r to-[#EC681D] w-[calc(100%_-_50px)]"
                >
                  <img width={22} src={figma} alt="" />
                  <span>Import to figma</span>
                </div>
                <div
                  className="w-[50px] bg-white h-full border-gray-100 cursor-pointer rounded-r-2xl border flex items-center justify-center"
                  onClick={() => setToggleBottomSheet(true)}
                >
                  <img width={24} src={settings} alt="" />
                </div>
              </div>
              <Setting
                isOpen={toggleBottomSheet}
                showBottomSheet={setToggleBottomSheet}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ColorPalette;
