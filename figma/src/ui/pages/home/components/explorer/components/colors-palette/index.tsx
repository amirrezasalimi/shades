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
import { TOOLSTACK } from "@ui/shared/constants/constants";
import clsx from "clsx";
import useBottomsheet from "../../../../../../../store/useBottomsheet";

interface Toggle {
  isOpen: boolean;
  showModal: (isOpen: boolean) => void;
  paletteId: string | null;
  colorPaletteState?: boolean;
  setColorPaletteState?: (colorPaletteState: boolean) => void;
}

const ColorPalette: FC<Toggle> = ({
  paletteId,
  isOpen,
  showModal,
  colorPaletteState,
  setColorPaletteState,
}) => {
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

  const { setToggleBottomSheet } = useBottomsheet();

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
    if (data && paletteId) {
      forker.forkToFigma(paletteId, data);
    }
  };

  return (
    <>
      <div
        className={clsx(
          "top-0 right-0 z-20 fixed bg-white h-screen overflow-y-auto transition-all duration-300",
          isOpen ? "left-0" : "left-full"
        )}
      >
        {isLoading ? (
          <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-90 w-full h-full">
            <div className="w-10 h-10">
              <Spinner />
            </div>
          </div>
        ) : (
          <div>
            <div
              className={clsx(
                "h-16 bg-white bg-opacity-80 backdrop-blur-xl border-b transition-all duration-300 border-gray-100 flex items-center justify-between fixed -top-96 right-0 left-0",
                isOpen ? "top-[3.13rem] z-50" : "-top-96",
                colorPaletteState && "!top-0 z-30"
              )}
            >
              <div className="flex items-center space-x-4 ml-6">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    showModal(false);
                    setColorPaletteState && setColorPaletteState(false);
                  }}
                >
                  <img width={24} src={angleLeft} alt="" />
                </div>
                <p className="max-w-56 text-lg truncate">{data?.prompt}</p>
              </div>
              <a
                href={`${TOOLSTACK}/p/${paletteId}`}
                target="_blank"
                className="mr-6"
              >
                <div className="flex justify-center items-center border-gray-300 border rounded-2xl w-10 h-10 cursor-pointer">
                  <img width={20} src={info} alt="" />
                </div>
              </a>
            </div>

            <div
              className={clsx(
                "mt-28 pt-4 h-full overflow-y-auto scrollbar-custom",
                isOpen && colorPaletteState && "!mt-16"
              )}
            >
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
                className="flex justify-center items-center space-x-2 bg-[#232323] w-[calc(100%_-_50px)] h-full text-white cursor-pointer"
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
          </div>
        )}
      </div>
    </>
  );
};

export default ColorPalette;
