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
  const [showPaletteModal, setShowColorModal] = useState(false);

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
  const [colorWheelVisible, setColorWheelVisible] = useState(false);

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
        setShowColorModal(false);
        setColorWheelVisible(true);
      }
    }, 300);
  };

  return (
    <>
      <div
        className={clsx(
          "top-0 right-0 z-20 fixed bg-white h-screen overflow-y-auto transition-all duration-300 pt-[7.5rem]",
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
          <div
            className={clsx(
              "border-b z-20 border-[#e9e9e9] h-[50px] bg-opacity-80 backdrop-blur-xl bg-white",
              isOpen && "fixed top-0 left-0 right-0 z-30"
            )}
          >
            <div className="px-6">
              <MenuTab
                tab={activeTab}
                setTab={handleTabChange}
                style={clsx(
                  "!mt-0 transition-all duration-300 h-full !pb-0",
                  isOpen && "fixed top-0 left-0 right-0"
                )}
              />
            </div>
          </div>
          {!showPaletteModal ? (
            <div
              className={clsx(
                "h-16 bg-white bg-opacity-80 backdrop-blur-xl border-b transition-all duration-300 border-gray-100 flex items-center justify-between fixed -top-96 right-0 left-0 z-10",
                isOpen ? "top-[3.13rem] z-30" : "-top-96"
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
          ) : (
            <>
              {activeTab === "colorWheel" && (
                <div
                  className={clsx(
                    "h-16 bg-white bg-opacity-80 backdrop-blur-xl border-b transition-all duration-300 border-gray-100 flex items-center justify-between fixed -top-96 right-0 left-0 z-10",
                    isOpen ? "top-[3.13rem] z-30" : "-top-96"
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
                    <p className="max-w-56 text-base truncate">
                      Recent Generated
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        {aiColorVisible && (
          <Explorer
            showPaletteModal={showPaletteModal}
            setShowColorModal={setShowColorModal}
          />
        )}
        {colorWheelVisible && <ColorWheel style="mt-2" />}
      </div>
    </>
  );
};

export default Recent;
