import { useState } from "react";
import Explorer from "./components/explorer";
import useView from "./hooks/view";
import logo from "@ui/assets/shades.png";
import Link from "@ui/assets/link.svg";
import discord from "@ui/assets/discord.svg";
import { clsx } from "clsx";
import GeneratePalette from "./components/generate";
import { TOOLSTACK } from "@ui/shared/constants/constants";

const Home = () => {
  const [activeTab, setActiveTab] = useState("generate");
  useView();
  return (
    <div className="pt-40 w-full h-full">
      <div className="top-0 z-10 fixed bg-white bg-opacity-80 backdrop-blur-xl px-6 pt-6 w-full">
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
        <div className="relative z-10 flex items-center bg-[#E9E9E9] mt-5 p-1 rounded-2xl h-12">
          <div
            className={clsx(
              "w-1/2 flex items-center justify-center rounded-2xl h-full transition-colors cursor-pointer",
              activeTab === "generate" && "bg-white text-primary shadow-sm"
            )}
            onClick={() => setActiveTab("generate")}
          >
            Generate Palette
          </div>
          <div
            className={clsx(
              "w-1/2 flex items-center justify-center rounded-2xl h-full transition-colors cursor-pointer",
              activeTab === "explore" && "bg-white text-primary shadow-sm"
            )}
            onClick={() => setActiveTab("explore")}
          >
            Explore
          </div>
        </div>
      </div>

      {activeTab === "explore" && <Explorer />}
      {activeTab === "generate" && (
        <GeneratePalette
          onGenerated={() => {
            setActiveTab("explore");
          }}
        />
      )}
    </div>
  );
};

export default Home;
