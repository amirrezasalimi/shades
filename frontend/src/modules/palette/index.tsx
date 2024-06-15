"use client";
import { Button, Spinner} from "@nextui-org/react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { baseColorsKeys } from "~/shared/constants/keys";
import { LINKS } from "~/shared/constants/links";
import generateShades from "~/shared/utils/color";
import { api } from "~/shared/utils/trpc/react";
import { useMemo } from "react";
import PaletteGenerate from "./components/palette-generate";
import EventsGenerate from "./components/events-generate";

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

  const prompt = palette.data?.prompt;
  useMemo(() => {
    if (prompt) {
      document.title = `Shades - ${prompt}`;
    }
  }, [prompt]);
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
            <PaletteGenerate fullData={fullData} />
            <EventsGenerate data={data} />
          </div>
        )}
      </div>
    </>
  );
};

export default Palette;
