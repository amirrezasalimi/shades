import { pb_admin } from "~/server/pocketbase";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

const timeRouter = createTRPCRouter({
  users: publicProcedure.query(({}) => {
    const users = pb_admin.collection("figma_users").getFullList({
      sort: "-created",
    });
    return users;
  }),
  // get last x days stats : users, palettes, views, forks
  stats: publicProcedure
    .input(
      z.object({
        days: z.number(),
      })
    )
    .query(async ({ input: { days } }) => {
      const users_stats = await pb_admin
        .collection("figma_users_stats")
        .getFullList({
          sort: "-created",
          perPage: days,
        });
      const forks_stats = await pb_admin
        .collection("figma_forks_stats")
        .getFullList({
          sort: "-created",
          perPage: days,
        });
      const views_stats = await pb_admin
        .collection("figma_views_stats")
        .getFullList({
          sort: "-created",
          perPage: days,
        });
      const palettes_stats = await pb_admin
        .collection("figma_palettes_stats")
        .getFullList({
          sort: "-created",
          perPage: days,
        });

      const daysStats: Record<
        string,
        { users: number; palettes: number; views: number; forks: number }
      > = {};

      users_stats.forEach((day) => {
        const dayStat = daysStats[day.created];
        if (!dayStat) {
          daysStats[day.created] = {
            users: day.count,
            palettes: 0,
            views: 0,
            forks: 0,
          };
        } else {
          dayStat.users = day.count;
        }
      });
      forks_stats.forEach((day) => {
        const dayStat = daysStats[day.created];
        if (!dayStat) {
          daysStats[day.created] = {
            users: 0,
            palettes: 0,
            views: 0,
            forks: day.count,
          };
        } else {
          dayStat.forks = day.count;
        }
      });
      views_stats.forEach((day) => {
        const dayStat = daysStats[day.created];
        if (!dayStat) {
          daysStats[day.created] = {
            users: 0,
            palettes: 0,
            views: day.count,
            forks: 0,
          };
        } else {
          dayStat.views = day.count;
        }
      });
      console.log(palettes_stats);
      
      palettes_stats.forEach((day) => {
        const dayStat = daysStats[day.created];
        if (day.figma_user == "") return;
        if (!dayStat) {
          daysStats[day.created] = {
            users: 0,
            palettes: day.count,
            views: 0,
            forks: 0,
          };
        } else {
          dayStat.palettes = day.count;
        }
      });

      //   convert to array
      const daysStatsArray = Object.keys(daysStats).map((key) => {
        return {
          date: key,
          ...daysStats[key],
        };
      });
      return daysStatsArray.reverse();
    }),
});

export default timeRouter;
