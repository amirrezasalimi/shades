import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import angleLeft from "@ui/assets/angle-left.svg";

interface Option {
  value: any;
  label: string;
}

interface DropdownProps {
  label: string;
  value: any;
  options: Option[];
  onChange: (value: any) => void;
  className?: string;
}

const Dropdown = ({
  label,
  value,
  options,
  onChange,
  className,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={clsx("z-10 flex-1", className)}>
      <label className="block mb-2 font-light text-sm">{label}</label>
      <div className="relative w-full" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex justify-between items-center bg-white p-3 border-[#b0b0b0] border-[0.5px] rounded-2xl w-full h-12 font-light text-sm transition"
        >
          {selectedOption?.label}
          <span className="text-gray-500">
            <img
              width={16}
              className={clsx(
                "transition-transform",
                isOpen ? "rotate-90" : "-rotate-90"
              )}
              src={angleLeft}
              alt=""
            />
          </span>
        </button>

        <div
          className={`absolute left-0 top-full my-2 w-full py-2 bg-white border-[0.5px] border-[#b0b0b0] shadow-lg rounded-xl overflow-hidden transition-all duration-200 ${
            isOpen ? "opacity-100 max-h-[15.5rem]" : "opacity-0 max-h-0"
          }`}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="hover:bg-[#F3F3F3] mx-2.5 mt-0.5 px-3 py-2 rounded-xl text-gray-700 text-sm transition cursor-pointer"
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
