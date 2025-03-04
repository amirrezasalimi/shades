import { TOOLSTACK } from "@ui/shared/constants/constants";
import logo from "@ui/assets/shades.png";
import Link from "@ui/assets/link.svg";
import discord from "@ui/assets/discord.svg";

const Header = () => {
  return (
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
  );
};

export default Header;
