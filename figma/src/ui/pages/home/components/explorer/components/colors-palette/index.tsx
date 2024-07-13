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
import { TOOLSTACK } from "@ui/shared/constants/constants";
import clsx from "clsx";

interface Toggle {
  isOpen: boolean;
  showModal: (isOpen: boolean) => void;
  paletteId: string;
}

const ColorPalette: FC<Toggle> = ({ paletteId, isOpen, showModal }) => {
  const forker = useFork();
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

  const fork = () => {
    if (data) {
      forker.forkToFigma(paletteId, data);
    }
  };
  return (
    <>
      <div
        className={clsx(
          "top-0 right-0 z-20 fixed bg-white h-screen overflow-y-auto transition-all duration-300",
          isOpen ? "left-0" : "left-96"
        )}
      >
        {isLoading ? (
          <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-90 w-full h-full">
            <div className="w-10 h-10">
              <Spinner />
            </div>
          </div>
        ) : (
          <div className="mb-20">
            <div
              className={clsx(
                "h-20 bg-white bg-opacity-80 backdrop-blur-xl border-b transition-all duration-300 border-gray-100 flex items-center justify-between fixed -top-96 right-0 left-0",
                isOpen ? "top-0" : "-top-96"
              )}
            >
              <div className="flex items-center space-x-4 ml-6">
                <div
                  className="cursor-pointer"
                  onClick={() => showModal(false)}
                >
                  <img width={24} src={angleLeft} alt="" />
                </div>
                <p className="max-w-56 text-xl truncate">{data?.prompt}</p>
              </div>
              <a
                href={`${TOOLSTACK}/p/${paletteId}`}
                target="_blank"
                className="mr-6"
              >
                <div className="flex justify-center items-center border-gray-300 border rounded-2xl w-14 h-14 cursor-pointer">
                  <img width={22} src={info} alt="" />
                </div>
              </a>
            </div>

            <div className="mx-6 mt-4 pt-20 h-full">
              <Shades data={data} />
            </div>

            <div
              className={clsx(
                "fixed -bottom-96 flex items-center w-[calc(100%_-_48px)] left-1/2 -translate-x-1/2 transition-all duration-300 h-[50px] overflow-hidden rounded-2xl",
                isOpen ? "bottom-5" : "-bottom-96"
              )}
            >
              <div
                onClick={fork}
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
    </>
  );
};

export default ColorPalette;
