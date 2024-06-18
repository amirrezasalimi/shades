"use client";
import { Button, Spinner, Tab, Tabs, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { baseColorsKeys } from "~/shared/constants/keys";
import { LINKS } from "~/shared/constants/links";
import generateShades from "~/shared/utils/color";
import { api } from "~/shared/utils/trpc/react";
import { useMemo } from "react";

import {
  NewUser,
  BuyTicket,
  CreateAccount,
  Events,
  Chat,
  DownloadApp,
  PaletteGenerate,
  TopSeller,
} from "./components";

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
        <div className="flex w-full flex-col mt-10">
          <Tabs size="lg" aria-label="Options">
            <Tab key="colors" title="Colors">
              <Card className="bg-inherit shadow-none">
                <CardBody className="p-0">
                  {palette.isFetched && (
                    <div className="flex flex-col gap-8">
                      <PaletteGenerate fullData={fullData} />
                      <Events data={data} />
                    </div>
                  )}
                </CardBody>
              </Card>
            </Tab>
            <Tab key="preview" title="Preview">
              <Card className="bg-inherit shadow-none">
                <CardBody>
                  <div
                    style={{ backgroundColor: fullData?.secondary?.[200] }}
                    className={`flex items-center flex-wrap flex-1 gap-3 min-[420px]:p-7 p-3 rounded-3xl mt-8`}
                  >
                    <div className="w-full md:max-w-4xl mx-auto">
                      <div className="flex md:space-x-4 flex-col md:flex-row items-center md:items-end mb-5 w-full">
                        <Chat color={fullData} />
                        <div className="flex flex-col max-[420px]:w-full space-y-4">
                          <TopSeller color={fullData} />
                          <NewUser color={fullData} />
                        </div>
                      </div>
                      <div className="flex items-center md:items-end justify-between w-full flex-col md:flex-row space-y-5 md:space-y-0">
                        <BuyTicket color={fullData} />
                        <CreateAccount color={fullData} />
                        <DownloadApp color={fullData} />
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Palette;
