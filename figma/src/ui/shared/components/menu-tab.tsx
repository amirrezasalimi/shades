import ColorWheelIcon from "@ui/assets/color-wheel";
import MagicoonWhite from "@ui/assets/magicoon-white";
import clsx from "clsx";
import useMenu from "../../../store/useMenu";

const MenuTab = ({ style }: { style?: string }) => {
  const { activeTab, setActiveTab } = useMenu();
  return (
    <div
      className={clsx(
        "relative z-10 flex items-center mt-5 pb-2 gap-x-5",
        style
      )}
    >
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
        <ColorWheelIcon
          size="18px"
          color={activeTab === "colorWheel" ? "#ff473b" : "#808080"}
        />
        Color Wheel
      </div>
    </div>
  );
};

export default MenuTab;
