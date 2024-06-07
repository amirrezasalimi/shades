"use client";

import { Button, Input, Skeleton } from "@nextui-org/react";
import { api } from "~/shared/utils/trpc/react";
import Palette from "./components/palette-overview";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { LINKS } from "~/shared/constants/links";
import makeUrl from "~/shared/utils/make-url";
import Link from "next/link";

const Home = () => {
  const [prompt, setPrompt] = useState("");
  const recent = api.palette.recent.useQuery({
    limit: 20,
    page: 1,
  });

  const make = api.palette.make.useMutation();
  const router = useRouter();

  const makePalette = async () => {
    if (make.isPending) return;
    if (!prompt.trim()) {
      toast("Please enter a prompt");
      return;
    }
    make
      .mutateAsync({ prompt })
      .then((id) => {
        router.push(
          makeUrl(LINKS.PALETTE, {
            id,
          }),
        );
      })
      .catch((e: Error) => {
        toast(e.message);
      });
  };
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-1/2 flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-[#FF776B]">
          Generate Ai Color Palettes
        </h2>
        <div className="mt-6 flex w-full gap-4">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            size="lg"
            fullWidth
            variant="bordered"
            placeholder="a cyberpunk landing page"
            disabled={make.isPending}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                makePalette();
              }
            }}
          />
          <Button
            size="lg"
            variant="solid"
            className="bg-[#FF776B] px-12 text-medium font-semibold text-white"
            disabled={make.isPending}
            onClick={makePalette}
            isLoading={make.isPending}
          >
            Make!
          </Button>
        </div>
      </div>
      <div className="mt-16 flex w-full flex-col gap-4">
        <h3 className="text-2xl font-medium">Recent Palettes</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* skeleton */}
          {recent.isLoading &&
            Array.from({ length: 9 }).map((_, index) => (
              <Skeleton className="rounded-lg" key={index}>
                <div className="h-60 w-full" />
              </Skeleton>
            ))}
          {recent.data?.map((palette) => (
            <Link
              key={palette.id}
              href={makeUrl(LINKS.PALETTE, { id: palette.id })}
            >
              <Palette key={palette.id} data={palette} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
