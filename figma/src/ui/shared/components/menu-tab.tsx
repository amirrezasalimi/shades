import ColorWheel from "@ui/assets/color-wheel";
import MagicoonWhite from "@ui/assets/magicoon-white";
import clsx from "clsx";

const MenuTab = ({
  tab,
  setTab,
}: {
  tab: string;
  setTab: (value: string) => void;
}) => {
  return (
    <div className="relative z-10 flex items-center mt-5 pb-2 rounded-2xl gap-x-5">
      <div
        className={clsx(
          "h-0.5 bg-primary absolute top-full transition-transform",
          tab === "colorWheel"
            ? "translate-x-[103px] w-[105px]"
            : "translate-x-1 w-[80px]"
        )}
      />
      <div
        className={clsx(
          "flex items-center justify-center text-sm rounded-2xl h-full transition-colors cursor-pointer gap-1",
          tab === "aiColors" ? "text-primary" : "text-[#808080]"
        )}
        onClick={() => setTab("aiColors")}
      >
        <MagicoonWhite
          color={tab === "aiColors" ? "#ff473b" : "#808080"}
          size="20px"
        />
        Ai Colors
      </div>
      <div
        className={clsx(
          "flex items-center justify-center text-sm rounded-2xl h-full transition-colors cursor-pointer gap-1",
          tab === "colorWheel" ? "text-primary" : "text-[#808080]"
        )}
        onClick={() => setTab("colorWheel")}
      >
        <ColorWheel
          size="18px"
          color={tab === "colorWheel" ? "#ff473b" : "#808080"}
        />
        Color Wheel
      </div>
    </div>
  );
};

export default MenuTab;
