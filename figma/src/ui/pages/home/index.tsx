import { useState } from "react";
import Explorer from "./components/explorer";
import useView from "./hooks/view";
import logo from "@ui/assets/shades.png";
import Link from "@ui/assets/link.svg";
import discord from "@ui/assets/discord.svg";
import { clsx } from "clsx";
import GeneratePalette from "./components/generate";
import { TOOLSTACK } from "@ui/shared/constants/constants";
import MagicoonWhite from "@ui/assets/magicoon-white";
import ColorWheel from "@ui/assets/color-wheel";

const Home = () => {
  const [activeTab, setActiveTab] = useState("aiColors");
  useView();
  return (
    <div className="pt-40 w-full h-full">
      <div className="top-0 z-10 inset-x-0 fixed bg-white bg-opacity-80 backdrop-blur-xl px-6 pt-6 w-full border-b-2 border-[#E9E9E9]">
        <div className="flex justify-between items-center">
          <a
            href={TOOLSTACK}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <div className="flex flex-col">
              <span className="font-normal text-[16px] text-gray-700">
                Welcome To
              </span>
              <div className="flex items-center pt-1">
                <img className="w-24" src={logo} alt="logo" />
                <div className="pl-2 font-light text-[16px] text-gray-500">
                  /Figma plugin
                </div>
              </div>
            </div>
          </a>
          <div className="flex items-center space-x-2">
            <a href={TOOLSTACK} target="_blank">
              <div className="flex justify-center items-center border-gray-300 border rounded-2xl w-14 h-14 cursor-pointer">
                <img width={22} src={Link} alt="" />
              </div>
            </a>
            <a href="https://discord.gg/Gzep8WsF3y" target="_blank">
              <div className="flex justify-center items-center border-gray-300 border rounded-2xl w-14 h-14 cursor-pointer">
                <img width={22} src={discord} alt="" />
              </div>
            </a>
          </div>
        </div>
        <div className="relative z-10 flex items-center mt-5 pb-2 rounded-2xl gap-x-5">
          <div
            className={clsx(
              "h-0.5 bg-primary absolute top-full transition-transform",
              activeTab === "colorWheel"
                ? "translate-x-[103px] w-[105px]"
                : "translate-x-1 w-[80px]"
            )}
          />
          <div
            className={clsx(
              "flex items-center justify-center text-sm rounded-2xl h-full transition-colors cursor-pointer gap-1",
              activeTab === "aiColors" ? "text-primary" : "text-[#808080]"
            )}
            onClick={() => setActiveTab("aiColors")}
          >
            <MagicoonWhite
              color={activeTab === "aiColors" ? "#ff473b" : "#808080"}
              size="20px"
            />
            Ai Colors
          </div>
          <div
            className={clsx(
              "flex items-center justify-center text-sm rounded-2xl h-full transition-colors cursor-pointer gap-1",
              activeTab === "colorWheel" ? "text-primary" : "text-[#808080]"
            )}
            onClick={() => setActiveTab("colorWheel")}
          >
            <ColorWheel
              size="18px"
              color={activeTab === "colorWheel" ? "#ff473b" : "#808080"}
            />
            Color Wheel
          </div>
        </div>
      </div>

      {activeTab === "colorWheel" && <Explorer />}
      {activeTab === "aiColors" && <GeneratePalette />}
    </div>
  );
};

export default Home;
