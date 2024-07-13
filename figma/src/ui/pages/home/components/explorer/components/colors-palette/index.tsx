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
  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="top-0 right-0 left-0 z-20 fixed bg-white h-screen overflow-y-auto">
          {isLoading ? (
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-90 w-full h-full">
              <div className="w-10 h-10">
                <Spinner />
              </div>
            </div>
          ) : (
            <div className="mb-20">
              <div className="top-0 right-0 left-0 fixed flex justify-between items-center border-gray-100 bg-white bg-opacity-80 backdrop-blur-xl border-b h-20">
                <div className="flex items-center space-x-4 ml-6">
                  <div
                    className="cursor-pointer"
                    onClick={() => showModal(false)}
                  >
                    <img width={24} src={angleLeft} alt="" />
                  </div>
                  <p className="max-w-56 text-xl truncate">{data?.prompt}</p>
                </div>

                <a href="" target="_blank" className="mr-6">
                  <div className="flex justify-center items-center border-gray-300 border rounded-2xl w-14 h-14 cursor-pointer">
                    <img width={22} src={info} alt="" />
                  </div>
                </a>
              </div>

              <div className="mx-6 mt-4 pt-20 h-full">
                <Shades data={data} />
              </div>

              <div className="bottom-5 left-1/2 fixed flex items-center rounded-2xl w-[calc(100%_-_48px)] h-[50px] -translate-x-1/2 overflow-hidden">
                <div
                  onClick={() => fork.forkToFigma(paletteId)}
                  className="flex justify-center items-center space-x-2 bg-gradient-to-r from-primary to-[#EC681D] w-[calc(100%_-_50px)] h-full text-white cursor-pointer"
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
