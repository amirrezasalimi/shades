import React from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  return (
    <div
      className={`relative inline-block w-12 h-7 transition duration-200 ease-linear
        ${
          checked ? "bg-[#46BF33]" : "bg-[#D7D7D7]"
        } rounded-full cursor-pointer`}
      onClick={() => {
        onChange(!checked);
      }}
    >
      <span
        className={`absolute left-1 top-1/2 -translate-y-1/2 inline-block w-5 h-5 transform bg-white rounded-full shadow
          ${
            checked ? "translate-x-full" : ""
          } transition duration-200 ease-linear`}
      />
    </div>
  );
};

export default ToggleSwitch;
