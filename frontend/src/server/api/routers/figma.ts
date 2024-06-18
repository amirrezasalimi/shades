import { z } from "zod";
import { createTRPCRouter, getRequestIp, publicProcedure } from "../trpc";
import { pb_admin } from "~/server/pocketbase";
import { ClientResponseError, type ListResult } from "pocketbase";
import Config from "~/shared/utils/pb/config";
import { CONFIG_KEYS } from "~/shared/constants/config-keys";
import ms from "ms";
import { getFigmaUserId } from "~/shared/utils/pb/figma-user";
import type { PalettesResponse } from "~/server/pocketbase-schema";
import prettyMilliseconds from "pretty-ms";
import aiCreatePalette from "~/shared/utils/ai-create-palette";
import { env } from "~/env";
import generateShades, { getColorName } from "~/shared/utils/color";

export const figmaRouter = createTRPCRouter({
    checkUser: publicProcedure.input(z.object({
        data: z.object({
            id: z.string(),
            name: z.string(),
            color: z.string(),
            photo: z.string(),
            sessionId: z.string().or(z.number()),
        })
    })).mutation(async ({ input }) => {
        try {
            await pb_admin.collection("figma_users").getFirstListItem(`uid = "${input.data.id}"`);
            return true;
        } catch (e) {
            if (e instanceof ClientResponseError && e.status == 404) {
                const user = input.data;
                // add user
                try {
                    await pb_admin.collection("figma_users").create({
                        uid: user.id,
                        name: user.name,
                        photo: user.photo,
                        color: user.color,
                        session: user.sessionId,
                        password: "12345678",
                        passwordConfirm: "12345678"
                    })
                    return true;
                } catch (e) {
                    console.error(e);
                    return false;
                }
            }
            return false;
        }
    }),
    createPalette: publicProcedure.input(z.object({
        uid: z.string(),
        prompt: z.string().min(5).max(1000),
    })).mutation(async ({ input, ctx }) => {
        const user_id = await getFigmaUserId(input.uid);
        if (!user_id) {
            throw new Error("User not found");
        }
        const ip = getRequestIp(ctx.req as unknown as Request);

        // rate limits
        const limits = (await Config.get(CONFIG_KEYS.FIGMA_CREATE_PALETTE_LIMIT)) as string;
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
            throw new Error(`you reached the limit of ${max_creation} palettes per ${prettyMilliseconds(per_time_ms)}`);
        }

        // make
        try {
            const res = await aiCreatePalette(input.prompt);
            const add_res = await pb_admin.collection("palettes").create({
                data: res.colors,
                prompt: input.prompt,
                ai_prompt: res.ai_prompt,
                ip,
                model_id: env.AI_MODEL,
                usage: res.usage,
                referral: "figma",
                figma_user: user_id,
                cost: res.cost
            })
            return add_res.id;
        } catch (e) {
            throw new Error("Failed to save palette");
        }
    }),
    getPalette: publicProcedure.input(z.object({
        id: z.string(),
    })).query(async ({ input }) => {
        try {
            const res: PalettesResponse<Record<string, string>> = (await pb_admin.collection("palettes").getOne(input.id));
            const colors: Record<string, {
                name: string,
                hex: string,
                shades: Record<number, string>
            }> = {};
            for (const key in res.data) {
                const hex = res.data[key]!;
                const shades = generateShades(hex);
                colors[key] = {
                    name: getColorName(hex),
                    hex,
                    shades
                }
            }
            return {
                ...res,
                colors
            }
        } catch (e) {
            throw new Error("Palette not found");
        }
    }),
    getUserLimits: publicProcedure.input(z.object({
        uid: z.string(),
    })).query(async ({ input, ctx }) => {
        const ip = getRequestIp(ctx.req as unknown as Request);
        if (!ip) {
            throw new Error("Failed to get IP");
        }

        const user_id = await getFigmaUserId(input.uid);
        if (!user_id) {
            throw new Error("User not found");
        }
        const limits = (await Config.get(CONFIG_KEYS.FIGMA_CREATE_PALETTE_LIMIT)) as string;
        if (!limits) {
            throw new Error("System is busy, please try again later");
        }
        const limits_arr = limits.split(",");
        const per_time = limits_arr[0] ?? "1d";
        const max_creation = parseInt(limits_arr[1] ?? "10");
        let user_creation = 0;
        try {
            const res = await pb_admin.collection("palettes").getFullList({
                filter: `created >= "${new Date(Date.now() - ms(per_time)).toISOString()}"`,
            });
            user_creation = res.length;
        } catch (e) {
            console.error(e);
        }
        return {
            per_time,
            max_creation,
            user_creation
        }
    }),

    recentPalettes: publicProcedure.input(z.object({
        page: z.number().int().positive().default(1),
        limit: z.number().int().positive().default(15),
        date_from: z.string().optional(),
    })).query(async ({ input }) => {
        try {
            const res = await pb_admin.collection("palettes").getList(input.page, input.limit, {
                limit: input.limit,
                sort: "-created",
                fields: "id,prompt,created,data",
                page: input.page,
                filter: input.date_from ? `created > "${input.date_from}"` : undefined,
            });
            return res as ListResult<PalettesResponse<
                Record<string, string>
            >>
        }
        catch (e) {
            console.error(e);
            throw new Error("Failed to get recent palettes");
        }
    }),
    forkPalette: publicProcedure.input(z.object({
        uid: z.string(),
        palette_id: z.string(),
    })).mutation(async ({ input, ctx }) => {
        try {
            const ip = getRequestIp(ctx.req as unknown as Request);
            if (!ip) {
                throw new Error("Failed to get IP");
            }
            const user_id = await getFigmaUserId(input.uid);
            if (!user_id) {
                throw new Error("User not found");
            }
            // rate limit
            let lastRecord: PalettesResponse<Record<string, string>>[] = [];
            try {
                lastRecord = await pb_admin.collection("figma_forks").getFullList({
                    limit: 2,
                    sort: "-created",
                    fields: "created",
                    filter: `user = "${user_id}"`,
                    page: 1,
                });
            }
            catch (e) {
                console.error(e);
            }
            const delay_ms = ms("2m");
            const last = lastRecord?.[0];
            if (last) {
                const last_created = new Date(last.created).getTime();
                const now = new Date().getTime();
                const diff = now - last_created;
                if (diff < delay_ms) {
                    const remainingTime = prettyMilliseconds(delay_ms - diff);
                    throw new Error(`You can fork a palette in ${remainingTime}`);
                }
            }

            // add fork
            try {
                await pb_admin.collection("figma_forks").create({
                    user: user_id,
                    palette: input.palette_id,
                    ip
                })
            } catch (e) {
                console.error(e);
            }
        } catch (e) {

        }
    }),
    viewPlugin: publicProcedure.input(
        z.object({
            uid: z.string(),
        })
    ).mutation(async ({ input, ctx }) => {
        const ip = getRequestIp(ctx.req as unknown as Request);
        if (!ip) {
            throw new Error("Failed to get IP");
        }
        // same as fork but for viewing
        try {
            const user_id = await getFigmaUserId(input.uid);
            if (!user_id) {
                throw new Error("User not found");
            }
            // rate limit
            let lastRecord: PalettesResponse<Record<string, string>>[] = [];
            try {
                lastRecord = await pb_admin.collection("figma_views").getFullList({
                    limit: 2,
                    sort: "-created",
                    fields: "created",
                    filter: `user = "${user_id}"`,
                    page: 1,
                });
            }
            catch (e) {
                console.error(e);
            }
            const delay_ms = ms("2m");
            const last = lastRecord?.[0];
            if (last) {
                const last_created = new Date(last.created).getTime();
                const now = new Date().getTime();
                const diff = now - last_created;
                if (diff < delay_ms) {
                    const remainingTime = prettyMilliseconds(delay_ms - diff);
                    throw new Error(`You can view a palette in ${remainingTime}`);
                }
            }
            // add view
            try {
                await pb_admin.collection("figma_views").create({
                    user: user_id,
                    ip
                })
            } catch (e) {
                console.error(e);
            }
        } catch (e) {

        }
    }),
});