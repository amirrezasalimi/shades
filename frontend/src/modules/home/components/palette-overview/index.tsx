import { type PalettesRecord } from "~/server/pocketbase-schema";
import { baseColorsKeys, eventColorsKeys } from "~/shared/constants/keys";

interface Props {
  data: PalettesRecord<Record<string, string>>;
}
const Palette = ({ data }: Props) => {
  const colors = data.data ?? {};

  return (
    <div className="min-h-60 w-full rounded-xl border bg-white p-3 transition-all hover:shadow-xl">
      <div className="group relative flex aspect-video w-full overflow-hidden rounded-lg">
        {baseColorsKeys.map((name, index) => (
          <div
            key={index}
            style={{ backgroundColor: colors[name] }}
            className={`overflow-hidde flex  h-full w-1/5 items-center justify-center`}
          >
            <span className="text-xs font-medium capitalize text-white text-opacity-0 transition-all group-hover:text-opacity-80">
              {name}
            </span>
          </div>
        ))}
        <div className="absolute bottom-0 right-0 m-3 flex gap-2 rounded-md border-gray-400 bg-white p-1">
          {eventColorsKeys.map((name, index) => (
            <div
              key={index}
              style={{ backgroundColor: colors[name] }}
              className="h-5 w-5 rounded-full"
            />
          ))}
        </div>
      </div>
      <div>
        <p className="mt-2 line-clamp-1 w-full text-medium capitalize text-gray-700">
          {data.prompt}
        </p>
      </div>
    </div>
  );
};

export default Palette;
