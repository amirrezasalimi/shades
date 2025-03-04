import clsx from "clsx";

const ColorWheel = ({ style }: { style?: string }) => {
  return <div className={clsx("w-56 h-56 mx-6", style)}>ColorWheel</div>;
};

export default ColorWheel;
