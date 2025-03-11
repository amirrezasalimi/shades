import { pb_admin } from "~/server/pocketbase";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

interface DailyStats {
  users: number;
  palettes: number;
  views: number;
  forks: number;
}

const timeRouter = createTRPCRouter({
  stats: publicProcedure
    .input(z.object({ days: z.number().positive() }))
    .query(async ({ input: { days } }) => {
      try {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        const dateFilter = `created >= '${startDate.toISOString()}'`;

        const [palettesDaily, usersDaily, viewsDaily, forksDaily] =
          await Promise.all([
            pb_admin.collection("palettes").getList(1, days, {
              filter: dateFilter,
              fields: "created",
              sort: "-created",
            }),
            pb_admin.collection("figma_users").getList(1, days, {
              filter: dateFilter,
              fields: "created",
              sort: "-created",
            }),
            pb_admin.collection("figma_views").getList(1, days, {
              filter: dateFilter,
              fields: "created",
              sort: "-created",
            }),
            pb_admin.collection("figma_forks").getList(1, days, {
              filter: dateFilter,
              fields: "created",
              sort: "-created",
            }),
          ]);

        const dailyStats = new Map<string, DailyStats>();

        // Helper function to aggregate daily counts
        const aggregateDaily = (
          items: Array<{ created: string }>,
          type: keyof DailyStats
        ) => {
          items.forEach((item) => {
            const date = item.created?.split("T")[0];
            if (date && !dailyStats.has(date)) {
              dailyStats.set(date, {
                users: 0,
                palettes: 0,
                views: 0,
                forks: 0,
              });
            }
            if (date) {
              const stats = dailyStats.get(date)!;
              stats[type]++;
            }
          });
        };

        // Aggregate all stats
        aggregateDaily(palettesDaily.items, "palettes");
        aggregateDaily(usersDaily.items, "users");
        aggregateDaily(viewsDaily.items, "views");
        aggregateDaily(forksDaily.items, "forks");

        return Array.from(dailyStats.entries())
          .map(([date, stats]) => ({ date, ...stats }))
          .sort((a, b) => b.date.localeCompare(a.date));
      } catch (error) {
        console.error("Stats Error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch stats",
        });
      }
    }),

  detailedStats: publicProcedure
    .input(z.object({ days: z.number().positive() }))
    .query(async ({ input: { days } }) => {
      try {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        const dateFilter = `created >= '${startDate.toISOString()}'`;

        const [palettes, users, views, forks] = await Promise.all([
          pb_admin.collection("palettes").getFullList({
            filter: dateFilter,
            fields: "id,referral,model_id,created",
          }),
          pb_admin.collection("figma_users").getFullList({
            filter: dateFilter,
            fields: "id",
          }),
          pb_admin.collection("figma_views").getFullList({
            filter: dateFilter,
            fields: "id",
          }),
          pb_admin.collection("figma_forks").getFullList({
            filter: dateFilter,
            fields: "id",
          }),
        ]);

        // Process referrals
        const referralCounts = palettes.reduce<Record<string, number>>(
          (acc, item) => {
            const ref = item.referral ?? "direct";
            acc[ref] = (acc[ref] ?? 0) + 1;
            return acc;
          },
          {}
        );

        // Process models
        const modelCounts = palettes.reduce<Record<string, number>>(
          (acc, item) => {
            const modelId = item.model_id ?? "unknown";
            acc[modelId] = (acc[modelId] ?? 0) + 1;
            return acc;
          },
          {}
        );

        // Calculate growth data
        const sortedPalettes = [...palettes].sort(
          (a, b) =>
            new Date(a.created).getTime() - new Date(b.created).getTime()
        );

        const growthData = sortedPalettes.reduce<
          Array<{ date: string; total: number }>
        >((acc, _, index) => {
          if (!sortedPalettes?.[index]) return acc;
          const date = sortedPalettes?.[index]?.created?.split("T")[0];
          const lastTotal = acc.length > 0 ? acc?.[acc.length - 1]?.total : 0;

          if (!acc.length || acc?.[acc?.length - 1]?.date !== date) {
            acc.push({ date: date ?? "unknown", total: (lastTotal ?? 0) + 1 });
          } else {
            // @ts-ignore
            acc[acc.length - 1].total++;
          }
          return acc;
        }, []);

        return {
          totals: {
            palettes: palettes.length,
            users: users.length,
            views: views.length,
            forks: forks.length,
          },
          referral: referralCounts,
          models: modelCounts,
          growth: growthData,
        };
      } catch (error) {
        console.error("Detailed Stats Error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch detailed stats",
        });
      }
    }),

  dailyActivity: publicProcedure
    .input(z.object({ days: z.number().positive() }))
    .query(async ({ input: { days } }) => {
      try {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        const dateFilter = `created >= '${startDate.toISOString()}'`;
        console.log("dateFilter", dateFilter);

        const [palettesDaily, usersDaily, viewsDaily, forksDaily] =
          await Promise.all([
            pb_admin.collection("palettes").getFullList({
              filter: dateFilter,
              fields: "created",
              sort: "+created",
            }),
            pb_admin.collection("figma_users").getFullList({
              filter: dateFilter,
              fields: "created",
              sort: "+created",
            }),
            pb_admin.collection("figma_views").getFullList({
              filter: dateFilter,
              fields: "created",
              sort: "+created",
            }),
            pb_admin.collection("figma_forks").getFullList({
              filter: dateFilter,
              fields: "created",
              sort: "+created",
            }),
          ]);
        console.log(`usersDaily`, usersDaily);

        // Generate an array of all dates in range
        const dailyData: Record<
          string,
          { users: number; palettes: number; views: number; forks: number }
        > = {};

        // Create entries for each day in the range
        for (let i = 0; i < days; i++) {
          const date = new Date(startDate);
          date.setDate(date.getDate() + i);
          const dateStr = date.toISOString().split("T")[0] as unknown as string;

          dailyData[dateStr] = {
            users: 0,
            palettes: 0,
            views: 0,
            forks: 0,
          };
        }

        // Helper function to count items per day
        const countByDay = (
          items: Array<{ created: string }>,
          key: keyof (typeof dailyData)[string]
        ) => {
          items.forEach((item) => {
            if (!item.created) return;
            const date = item.created.split(" ")[0] as unknown as string;
            if (dailyData[date]) {
              dailyData[date][key]++;
            } else {
              // console.log(`Date not in range: ${date} for ${key}`);
            }
          });
        };

        // Count all items
        countByDay(palettesDaily, "palettes");
        countByDay(usersDaily, "users");
        countByDay(viewsDaily, "views");
        countByDay(forksDaily, "forks");

        const result = Object.entries(dailyData)
          .map(([date, stats]) => ({ date, ...stats }))
          .sort((a, b) => a.date.localeCompare(b.date));

        // console.log("Returning daily activity data:", result);
        return result;
      } catch (error) {
        console.error("Daily Activity Error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch daily activity data",
        });
      }
    }),
});

export default timeRouter;
