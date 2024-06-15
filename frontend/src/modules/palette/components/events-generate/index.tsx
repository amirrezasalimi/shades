import React from "react";
import { TbCopy } from "react-icons/tb";
import { eventColorsKeys } from "~/shared/constants/keys";
import { copyClipboard } from "~/shared/utils/copy-clipboard";

type EventsData = Record<string, string>;
interface EventsGenerateProps {
  data: EventsData;
}
const EventsGenerate: React.FC<EventsGenerateProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium">Events</h2>
      <div className="grid grid-cols-1 gap-4 rounded-xl border bg-white p-4 shadow-sm md:grid-cols-2 lg:grid-cols-4">
        {eventColorsKeys.map((name, index) => (
          <div
            key={index}
            style={{ backgroundColor: data?.[name] ?? "" }}
            className="group flex h-20 cursor-pointer gap-2 rounded-lg p-4"
            onClick={() => copyClipboard(data?.[name] ?? "")}
          >
            <div className="flex flex-col">
              <span className="text-lg font-medium capitalize text-white text-opacity-90">
                {data?.[name] ?? ""}
              </span>
              <span className="text-lg font-medium capitalize text-white text-opacity-90">
                {name}
              </span>
            </div>
            <TbCopy
              size={24}
              className="text-white opacity-0 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsGenerate;
