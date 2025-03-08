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

  const [isImporting, setIsImporting] = useState(false);

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

  const fork = async () => {
    if (data && paletteId) {
      await forker.forkToFigma(paletteId, data);
    }
  };

  const handleImportToFigma = async () => {
    setIsImporting(true);
    await fork();
    setTimeout(() => {
      setIsImporting(false);
    }, 1500);
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
                "-top-96 right-0 left-0 fixed flex justify-between items-center bg-white bg-opacity-80 backdrop-blur-xl border-[#e9e9e9] border-b h-16 transition-all duration-300",
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
                <div className="flex justify-center items-center border border-gray-300 rounded-2xl w-10 h-10 cursor-pointer">
                  <img width={20} src={info} alt="" />
                </div>
              </a>
            </div>

            <div
              className={clsx(
                "mt-28 pt-4 h-full overflow-y-auto scrollbar-custom",
                isOpen && colorPaletteState && "!pt-20 !mt-0"
              )}
            >
              <Shades data={data} />
            </div>

            <div
              className={clsx(
                "-bottom-96 left-1/2 fixed flex items-center rounded-2xl w-[calc(100%_-_48px)] h-[50px] overflow-hidden transition-all -translate-x-1/2 duration-300",
                isOpen ? "bottom-5" : "-bottom-96"
              )}
            >
              <div
                onClick={handleImportToFigma}
                className="flex justify-center items-center space-x-2 bg-[#232323] w-[calc(100%_-_50px)] h-full text-white cursor-pointer"
              >
                {isImporting ? (
                  <div className="border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <img width={22} src={figma} alt="" />
                    <span>Import to figma</span>
                  </>
                )}
              </div>
              <div
                className="flex justify-center items-center bg-white border border-gray-100 rounded-r-2xl w-[50px] h-full cursor-pointer"
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
