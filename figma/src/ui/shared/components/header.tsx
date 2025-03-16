import { TOOLSTACK } from "@ui/shared/constants/constants";
import logo from "@ui/assets/shades.png";
import telegram from "@ui/assets/telegram.svg";

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
              /plugin
            </div>
          </div>
        </div>
      </a>
      <div className="flex items-center space-x-2">
        <a href="https://t.me/+cJB9g6iFxP1mN2E0" target="_blank">
          <div className="flex justify-center items-center gap-2 px-4 border border-gray-300 rounded-2xl w-auto h-14 text-[#24A1DE] hover:scale-105 transition-transform cursor-pointer">
            <img width={22} src={telegram} alt="community" />
            <span className="text-sm">Community</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
