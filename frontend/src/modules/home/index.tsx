"use client";

import { Button, Input, Skeleton } from "@nextui-org/react";
import { api } from "~/shared/utils/trpc/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { LINKS } from "~/shared/constants/links";
import makeUrl from "~/shared/utils/make-url";
import Link from "next/link";
import { useInfiniteScroll } from "react-use-infinite-scroll-hook";

import type { PalettesResponse } from "~/server/pocketbase-schema";
import Palette from "./components/palette-overview";

const Home = () => {
  const [prompt, setPrompt] = useState("");
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<
    PalettesResponse<Record<string, string>>[]
  >([]);
  const recent = api.palette.recent.useQuery({
    limit: 10,
    page,
  });
  useEffect(() => {
    if (!recent.data) return;
    setItems((prev) => [...prev, ...recent.data.items]);
  }, [page, recent.data]);

  const canLoadMore = recent.data?.page !== recent.data?.totalPages;
  const next = async () => {
    if (recent.isLoading || !canLoadMore) return;
    const nextPage = (recent.data?.page ?? 1) + 1;
    setPage(nextPage);
  };
  const scrollElementRef = useInfiniteScroll<HTMLSpanElement>(next);

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
      <div className="flex w-full flex-col items-center text-center md:w-1/2">
        <h2 className="text-4xl font-bold text-[#FF776B] md:text-3xl">
          Generate Ai Color Palettes
        </h2>
        <div className="mt-6 flex w-full flex-col gap-4 md:flex-row">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            size="lg"
            fullWidth
            variant="bordered"
            placeholder="cyberpunk landing page"
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
            {!make.isPending && <>Make!</>}
          </Button>
        </div>
      </div>
      <div className="mt-16 flex w-full flex-col gap-4">
        <h3 className="text-2xl font-medium">Recent Palettes</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items?.map((palette) => (
            <Link
              key={palette.id}
              href={makeUrl(LINKS.PALETTE, { id: palette.id })}
            >
              <Palette key={palette.id} data={palette} />
            </Link>
          ))}

          {/* skeleton */}
          {recent.isFetching &&
            Array.from({ length: 9 }).map((_, index) => (
              <Skeleton className="rounded-lg" key={index}>
                <div className="h-60 w-full" />
              </Skeleton>
            ))}
          <span
            ref={scrollElementRef}
            className="w-full h-1 bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
