import { z } from "zod";
import { createTRPCRouter, getFingerprint, publicProcedure } from "../trpc";
import { OpenAI } from 'openai'
import { env } from "~/env";
import { pb_admin } from "~/server/pocketbase";
import type { PalettesResponse, PalettesRecord } from "~/server/pocketbase-schema";
import generateShades from "~/shared/utils/color";


const openAi = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
    baseURL: env.OPENAI_API_BASE_URL
});

const makePrompt = (prompt: string) => {
    return `You are an expert UI/UX designer with a deep understanding of color theory and the ability to create stunning color palettes.
Please provide a color combination for :
"${prompt}"
each choosen color should be in shade of 500 only.
Format the output strictly in JSON with no additional commentary or colors, like this,no extra talk or chat:
{
"primary": "hex color",
"secondary": "hex color",
"neutral": "hex color",
"success": "hex color",
"error": "hex color",
"warning": "hex color",
"info": "hex color",
"background": "hex color",
"text": "hex color"
}
`
}
export const paletteRouter = createTRPCRouter({
    make: publicProcedure.input(z.object({
        prompt: z.string().min(5).max(1000),
    })).mutation(async ({ input, ctx }) => {
        const ip = getFingerprint(ctx.req as unknown as Request);
        // limits : 1 request per 10 minutes
        let lastPalettes: PalettesResponse<Record<string, string>>[] = [];
        try {
            lastPalettes = await pb_admin.collection("palettes").getFullList({
                limit: 10,
                sort: "-created",
                fields: "created",
                filter: `ip = "${ip}"`,
                page: 1,
            });
        }
        catch (e) {
            console.log(e);
        }
        const last = lastPalettes?.[0];
        if (lastPalettes.length > 0 && last) {
            const last_created = new Date(last.created).getTime();
            const now = new Date().getTime();
            const diff = now - last_created;
            if (diff < 600000) {
                const remainingMinutes = Math.ceil((600000 - diff) / 60000);
                throw new Error(`You can generate your next palette in ${remainingMinutes} minutes`);
            }
        }

        const ai_prompt = makePrompt(input.prompt);
        const ai_res = await openAi.chat.completions.create({
            model: "anthropic/claude-3-opus",
            messages: [
                {
                    role: "user",
                    content: ai_prompt,
                }
            ]
        });
        const res = ai_res.choices?.[0]?.message.content;
        if (!res) {
            throw new Error("Failed to generate palette");
        }
        let colors: Record<string, string>;
        try {
            colors = JSON.parse(res);
        } catch (e) {
            console.log(e, res);
            throw new Error("Failed to parse palette");
        }

        // add to db
        try {
            const add_res = await pb_admin.collection("palettes").create({
                data: colors,
                prompt: input.prompt,
                ai_prompt,
                ip: getFingerprint(ctx.req as unknown as Request),
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
        const res = await pb_admin.collection("palettes").getFullList({
            limit: input.limit,
            sort: "-created",
            fields: "id,prompt,created,data",
            page: input.page,
        });
        return res as PalettesResponse<Record<string, string>>[];
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
});