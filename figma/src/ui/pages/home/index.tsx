import { useState } from "react";
import Explorer from "./components/explorer";
import useView from "./hooks/view";
import logo from "@ui/assets/shades.png";
import Link from "@ui/assets/link.svg";
import discord from "@ui/assets/discord.svg";
import { clsx } from "clsx";
import GeneratePalette from "./components/generate";

const Home = () => {
  const [activeTab, setActiveTab] = useState("explore");
  useView();
  return (
    <div className="w-full h-full">
      <div className="p-6 pb-2 sticky top-0 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-normal text-gray-700 text-[16px]">
              Welcome To
            </span>
            <div className="flex items-center pt-1">
              <img className="w-24" src={logo} alt="logo" />
              <div className="text-gray-500 pl-2 text-[16px] font-light">
                /Figma plugin
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <a href="https://shades.toolstack.run" target="_blank">
              <div className="border border-gray-300 flex items-center justify-center rounded-2xl w-14 h-14 cursor-pointer">
                <img width={22} src={Link} alt="" />
              </div>
            </a>
            <a href="https://discord.gg/Gzep8WsF3y" target="_blank">
              <div className="border border-gray-300 flex items-center justify-center rounded-2xl w-14 h-14 cursor-pointer">
                <img width={22} src={discord} alt="" />
              </div>
            </a>
          </div>
        </div>
        <div className="flex items-center bg-[#E9E9E9] h-12 rounded-2xl mt-5 p-1">
          <div
            className={clsx(
              "w-1/2 flex items-center justify-center rounded-2xl h-full transition-colors cursor-pointer",
              activeTab === "generate" && "bg-white text-primary"
            )}
            onClick={() => setActiveTab("generate")}
          >
            Generate Palette
          </div>
          <div
            className={clsx(
              "w-1/2 flex items-center justify-center rounded-2xl h-full transition-colors cursor-pointer",
              activeTab === "explore" && "bg-white text-primary"
            )}
            onClick={() => setActiveTab("explore")}
          >
            Explore
          </div>
        </div>
      </div>
      {activeTab === "explore" && <Explorer />}
      {activeTab === "generate" && <GeneratePalette />}
    </div>
  );
};

export default Home;
