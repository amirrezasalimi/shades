import { useState } from "react";
import Explorer from "./components/explorer";
import useView from "./hooks/view";
import GeneratePalette from "./components/generate";
import MagicoonWhite from "@ui/assets/magicoon-white";
import { clsx } from "clsx";
import Header from "../../shared/components/header";
import MenuTab from "@ui/shared/components/menu-tab";
import Recent from "./components/recent";
import ColorWheel from "./components/color-wheel";

const Home = () => {
  const [activeTab, setActiveTab] = useState("aiColors");
  useView();
  return (
    <div className="pt-40 w-full h-full">
      <div className="top-0 z-10 inset-x-0 fixed bg-white bg-opacity-80 backdrop-blur-xl px-6 pt-6 w-full border-b-2 border-[#E9E9E9]">
        <Header />
        <MenuTab tab={activeTab} setTab={setActiveTab} />
      </div>
      {activeTab === "colorWheel" && <ColorWheel style="mt-0" />}
      {activeTab === "aiColors" && <GeneratePalette />}
    </div>
  );
};

export default Home;
