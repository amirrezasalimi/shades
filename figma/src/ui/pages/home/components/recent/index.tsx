import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import angleLeft from "@ui/assets/angle-left.svg";
import MenuTab from "@ui/shared/components/menu-tab";
import Explorer from "../explorer";
import ColorWheel from "../color-wheel";

interface Toggle {
  isOpen: boolean;
  showModal: (isOpen: boolean) => void;
}

const Recent: FC<Toggle> = ({ isOpen, showModal }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  const [activeTab, setActiveTab] = useState("aiColors");
  const [aiColorVisible, setAiColorVisible] = useState(true);
  const [colorWheelVisible, setColorWheelVisible] = useState(true);

  const handleTabChange = (tab: string) => {
    if (tab !== "colorWheel") {
      //   showModal(false);
    }
    setTimeout(() => {
      setActiveTab(tab);
      if (tab === "aiColors") {
        setAiColorVisible(true);
        setColorWheelVisible(false);
      } else {
        setAiColorVisible(false);
        setColorWheelVisible(true);
      }
    }, 300);
  };
  return (
    <>
      <div
        className={clsx(
          "top-0 right-0 z-20 fixed bg-white h-screen overflow-y-auto transition-all duration-300",
          isOpen ? "left-0" : "left-full"
        )}
      >
        {/* {isLoading ? (
          <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-90 w-full h-full">
            <div className="w-10 h-10">
              <Spinner />
            </div>
          </div>
        ) : ( */}
        <div>
          <div className="px-6">
            <MenuTab tab={activeTab} setTab={handleTabChange} style="!mt-3" />
          </div>
          <div
            className={clsx(
              "h-20 bg-white bg-opacity-80 backdrop-blur-xl border-b transition-all duration-300 border-gray-100 flex items-center justify-between fixed -top-96 right-0 left-0",
              isOpen ? "top-10" : "-top-96"
            )}
          >
            <div className="flex items-center space-x-4 ml-6">
              <div
                className="cursor-pointer"
                onClick={() => {
                  if (activeTab === "colorWheel") {
                    setActiveTab("aiColors");
                    setAiColorVisible(true);
                    setColorWheelVisible(false);
                  } else {
                    showModal(false);
                  }
                }}
              >
                <img width={24} src={angleLeft} alt="" />
              </div>
              <p className="max-w-56 text-base truncate">Recent Generated</p>
            </div>
          </div>
        </div>
        {aiColorVisible && <Explorer />}
        {colorWheelVisible && <ColorWheel style="mt-24" />}
      </div>
    </>
  );
};

export default Recent;
