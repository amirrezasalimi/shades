import { useState } from "react";
import useView from "./hooks/view";
import GeneratePalette from "./components/generate";
import Header from "../../shared/components/header";
import MenuTab from "@ui/shared/components/menu-tab";
import ColorWheel from "./components/color-wheel";
import Setting from "@ui/shared/components/setting-bottom-sheet";
import useBottomsheet from "../../../store/useBottomsheet";

const Home = () => {
  const [activeTab, setActiveTab] = useState("aiColors");
  useView();
  const { toggleBottomSheet, setToggleBottomSheet } = useBottomsheet();
  return (
    <div className="pt-[9.5rem] w-full h-full relative">
      <div className="top-0 z-20 fixed inset-x-0 bg-white bg-opacity-80 backdrop-blur-xl px-6 pt-6 border-[#E9E9E9] border-b-2 w-full">
        <Header />
        <MenuTab tab={activeTab} setTab={setActiveTab} />
      </div>
      {activeTab === "aiColors" && <GeneratePalette />}
      {activeTab === "colorWheel" && <ColorWheel style="mt-0" />}
      <Setting
        isOpen={toggleBottomSheet}
        showBottomSheet={setToggleBottomSheet}
      />
    </div>
  );
};

export default Home;
