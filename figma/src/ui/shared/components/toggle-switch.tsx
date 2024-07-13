import React from "react";

interface ToggleSwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, handleToggle }) => {
  return (
    <div
      className={`relative inline-block w-12 h-7 transition duration-200 ease-linear
        ${isOn ? "bg-[#46BF33]" : "bg-[#D7D7D7]"} rounded-full cursor-pointer`}
      onClick={handleToggle}
    >
      <span
        className={`absolute left-1 top-1/2 -translate-y-1/2 inline-block w-5 h-5 transform bg-white rounded-full shadow
          ${
            isOn ? "translate-x-full" : ""
          } transition duration-200 ease-linear`}
      />
    </div>
  );
};

export default ToggleSwitch;
