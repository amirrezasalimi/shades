import { ReactNode } from "react";

const CustomToast = ({
  icon,
  message,
}: {
  icon?: ReactNode;
  message: string;
}) => {
  return (
    <div className="flex items-center space-x-3 bg-[#F3F3F3] border border-[#E9E9E9] p-3 rounded-2xl backdrop-blur-lg bg-opacity-90">
      {icon}
      <div className="text-[#4C4C4C]">{message}</div>
    </div>
  );
};

export default CustomToast;
