"use client";
import { Button, Spinner } from "@nextui-org/react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { baseColorsKeys, eventColorsKeys } from "~/shared/constants/keys";
import { LINKS } from "~/shared/constants/links";
import generateShades, { colorContrast } from "~/shared/utils/color";
import { TbCopy } from "react-icons/tb";
import toast from "react-hot-toast";
import { api } from "~/shared/utils/trpc/react";
import { useMemo } from "react";
const Palette = ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const palette = api.palette.get.useQuery({ id });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = palette.data?.data ?? {};

  const fullData = useMemo(() => {
    const result: Record<string, Record<string, string>> = {};
    for (const key of baseColorsKeys) {
      if (data?.[key]) {
        const shades = generateShades(data?.[key] ?? "");
        result[key] = shades;
      }
    }
    return result;
  }, [data]); // dependencies

  const copyClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    toast("Copied to clipboard");
  };

  const prompt = palette.data?.prompt;
  useMemo(() => {
    if (prompt) {
      document.title = `Shades - ${prompt}`;
    }
  }, [prompt]);

  console.log("palette", fullData);
  
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex items-center justify-between">
          {palette.isPending && (
            <div className="flex w-full justify-center py-8">
              <Spinner />
            </div>
          )}
          {palette.isFetched && (
            <>
              <div className="flex items-center gap-2">
                <Link href={LINKS.HOME}>
                  <Button variant="light" isIconOnly>
                    <FaArrowLeft size={24} />
                  </Button>
                </Link>
                <h2 className="bg-gradient-to-r from-[#363636] to-[#7d7d7d] bg-clip-text text-lg font-bold text-transparent md:text-3xl">
                  {palette.data?.prompt}
                </h2>
              </div>
            </>
          )}
        </div>
        {palette.isFetched && (
          <div className="mt-12 flex flex-col gap-8">
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
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-medium">Base Colors</h2>
              <div className="flex flex-col gap-4">
                {baseColorsKeys.map((name, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm"
                  >
                    <h2 className="text-xl font-medium">{name}</h2>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-5 lg:grid-cols-11">
                      {Object.entries(fullData?.[name] ?? {})
                        .reverse()
                        .map(([key, value]: [string, string]) => (
                          <div
                            key={value}
                            style={{
                              backgroundColor: value,
                              color: colorContrast(value),
                            }}
                            onClick={() => copyClipboard(value)}
                            className={`group flex h-16 cursor-pointer items-center justify-center rounded-lg p-4`}
                          >
                            <div className="flex flex-col">
                              <span className="text-medium font-medium opacity-70 group-hover:hidden">
                                {key}
                              </span>
                              <span className="text-xs font-medium opacity-70 group-hover:hidden">
                                {value}
                              </span>
                            </div>
                            <TbCopy
                              size={24}
                              className="opacity-0 group-hover:opacity-100"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Palette;
