import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import angleLeft from "@ui/assets/angle-left.svg";
import Explorer from "../explorer";

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

  return (
    <>
      <div
        className={clsx(
          "top-0 right-0 z-20 fixed bg-white h-screen overflow-y-auto transition-all duration-300",
          isOpen ? "left-0" : "left-full"
        )}
      >
        <div>
          {!showPaletteModal ? (
            <div
              className={clsx(
                "-top-96 right-0 left-0 z-10 fixed flex justify-between items-center bg-white bg-opacity-80 backdrop-blur-xl border-[#e9e9e9] border-b h-16 transition-all duration-300",
                isOpen ? "top-0 z-30" : "-top-96"
              )}
            >
              <div className="flex items-center space-x-4 ml-6">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    if (activeTab === "colorWheel") {
                      setActiveTab("aiColors");
                      setAiColorVisible(true);
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
                    "-top-96 right-0 left-0 z-10 fixed flex justify-between items-center bg-white bg-opacity-80 backdrop-blur-xl border-[#e9e9e9] border-b h-16 transition-all duration-300",
                    isOpen ? "top-[3.13rem] z-30" : "-top-96"
                  )}
                >
                  <div className="flex items-center space-x-4 ml-6">
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        showModal(false);
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
      </div>
    </>
  );
};

export default Recent;
