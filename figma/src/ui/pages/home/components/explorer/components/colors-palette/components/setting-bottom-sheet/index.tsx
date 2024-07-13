import { FC, useState } from "react";
import settings from "@ui/assets/settings.svg";
import x from "@ui/assets/x-icon.svg";
import ToggleSwitch from "@ui/shared/components/toggle-switch";

interface Toggle {
  isOpen: boolean;
  showBottomSheet: (isOpen: boolean) => void;
}

const Setting: FC<Toggle> = ({ showBottomSheet, isOpen }) => {
  const [isOnStyle, setIsOnStyle] = useState(true);
  const [isOnVariable, setIsOnVariable] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          onClick={() => showBottomSheet(false)}
          className="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-10 z-30"
        ></div>
      )}

      <div
        className={`fixed z-40 rounded-t-2xl bg-white left-0 right-0 w-full transition duration-200 ease-linear p-6 ${
          isOpen ? "translate-y-[-200px]" : "translate-y-0"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img width={20} src={settings} alt="" />
              <span className="font-medium">Import settings</span>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => showBottomSheet(false)}
            >
              <img width={24} src={x} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-6 mb-4">
            <div className="">
              <div className="font-medium">Add color to the Style</div>
              <div className="font-light text-gray-400 text-xs">
                It helps you add all the colors to the styles.
              </div>
            </div>
            <ToggleSwitch
              isOn={isOnStyle}
              handleToggle={() => setIsOnStyle(!isOnStyle)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <div className="font-medium">Add color to the Variable</div>
              <div className="font-light text-gray-400 text-xs">
                This feature adds all colors to the tokens.
              </div>
            </div>
            <ToggleSwitch
              isOn={isOnVariable}
              handleToggle={() => setIsOnVariable(!isOnVariable)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
