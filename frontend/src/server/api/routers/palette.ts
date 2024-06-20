import { z } from "zod";
import { createTRPCRouter, getRequestIp, publicProcedure } from "../trpc";
import { env } from "~/env";
import { pb_admin } from "~/server/pocketbase";
import type { PalettesResponse, PalettesRecord } from "~/server/pocketbase-schema";
import type { ListResult } from "pocketbase";
import aiCreatePalette from "~/shared/utils/ai-create-palette";
import prettyMs from "pretty-ms";
import ms from "ms";
import Config from "~/shared/utils/pb/config";
import { CONFIG_KEYS } from "~/shared/constants/config-keys";

export const paletteRouter = createTRPCRouter({
    make: publicProcedure.input(z.object({
        prompt: z.string().min(3).max(1000),
        referral: z.string().max(200).optional()
    })).mutation(async ({ input, ctx }) => {
        const ip = getRequestIp(ctx.req as unknown as Request);
        if (!ip) {
            throw new Error("Failed to get IP");
        }
        // rate limits
        const limits = (await Config.get(CONFIG_KEYS.SITE_CREATE_PALETTE_LIMIT)) as string;
        if (!limits) {
            throw new Error("System is busy, please try again later");
        }
        const limits_arr = limits.split(",");
        const per_time = limits_arr[0] ?? "1d";
        const per_time_ms = ms(per_time);
        // utc datetime
        const per_time_date = new Date(Date.now() - per_time_ms).toISOString();

        const max_creation = parseInt(limits_arr[1] ?? "10");

        let lastPalettes: PalettesResponse<Record<string, string>>[] = [];
        try {
            lastPalettes = await pb_admin.collection("palettes").getFullList({
                limit: 100,
                sort: "-created",
                fields: "created",
                filter: `ip = "${ip}" && created >= "${per_time_date}"`,
                page: 1,
            });
        }
        catch (e) {
            console.error(e);
        }
        if (lastPalettes.length >= max_creation) {
            throw new Error(`you reached the limit of ${max_creation} palettes per ${prettyMs(per_time_ms)}`);
        }

        // add to db
        try {
            const res = await aiCreatePalette(input.prompt);
            const add_res = await pb_admin.collection("palettes").create({
                data: res.colors,
                prompt: input.prompt,
                ai_prompt: res.ai_prompt,
                ip,
                model_id: env.AI_MODEL,
                usage: res.usage,
                referral: input.referral,
                cost: res.cost,
                description: res.description,
            } as PalettesRecord)
            return add_res.id;
        } catch (e) {
            throw new Error("Failed to save palette");
        }
    }),
    recent: publicProcedure.input(z.object({
        page: z.number().int().positive().default(1),
        limit: z.number().int().positive().default(10),
    })).query(async ({ input }) => {
        const res = await pb_admin.collection("palettes").getList(input.page, input.limit, {
            limit: input.limit,
            sort: "-created",
            fields: "id,prompt,created,data",
            page: input.page,
        });
        return res as ListResult<PalettesResponse<
            Record<string, string>
        >>
    }),
    get: publicProcedure
        .input(z.object({
            id: z.string()
        }))
        .query(async ({ input }) => {
            try {
                const res = await pb_admin.collection("palettes").getOne(input.id, {
                    fields: "id,prompt,created,data,full_data",
                });
                return res as PalettesResponse<Record<string, string>>;
            } catch (e) {
                throw new Error("Failed to get palette");
            }
        }),
    // figma plugin
    getPaletteFull: publicProcedure
        .input(z.object({
            id: z.string()
        }))
        .query(async ({ input }) => {
            try {
                const res = await pb_admin.collection("palettes").getOne(input.id, {
                    fields: "id,prompt,created,data,full_data",
                });
                return res as PalettesResponse<Record<string, string>>;
            } catch (e) {
                throw new Error("Failed to get palette");
            }
        }),

});