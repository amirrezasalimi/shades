import OpenAI from "openai";
import { env } from "~/env";
import Decimal from "decimal.js";

const openAi = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
    baseURL: env.OPENAI_API_BASE_URL
});

const makePrompt = (prompt: string) => {
    return `You are an expert UI/UX designer with a deep understanding of color theory and the ability to create stunning color palettes.
Please provide a color combination for :
"${prompt}"
each choosen color should be in shade of 500 only.
and "description" should be a 1 paragraph description reason for colors combination and overall (under 50 words).
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
"text": "hex color",
"description": "1 paragraph description of the palette"
}
`
}

const aiCreatePalette = async (prompt: string) => {
    const ai_prompt = makePrompt(prompt);
    const ai_res = await openAi.chat.completions.create({
        model: env.AI_MODEL,
        messages: [
            {
                role: "user",
                content: ai_prompt,
            }
        ],
        temperature: 0.5,
    });
    const res = ai_res.choices?.[0]?.message.content;

    if (!res) {
        throw new Error("Failed to generate palette");
    }
    let colors: Record<string, string>;
    try {
        colors = JSON.parse(res);
    } catch (e) {
        console.error(e, res);
        throw new Error("Failed to parse palette");
    }

    const input_tokens = ai_res?.usage?.total_tokens ?? 0;
    const output_tokens = ai_res?.usage?.completion_tokens ?? 0;
    // Todo: make it dynamic
    const ai_price = env.AI_PRICE_PER_M.split(",");
    const input_1m_price = parseFloat(ai_price[0] ?? "1");
    const output_1m_price = parseFloat(ai_price[1] ?? "1");

    const input_cost = new Decimal(input_tokens).dividedBy(1000000).times(input_1m_price).toDecimalPlaces(8).toNumber();
    const output_cost = new Decimal(output_tokens).dividedBy(1000000).times(output_1m_price).toDecimalPlaces(8).toNumber();
    const total_cost = new Decimal(input_cost).plus(output_cost).toDecimalPlaces(8).toNumber();

    const description = colors?.description ?? "";
    // remove the description from the colors object
    if (colors?.description) {
        delete colors.description;
    }
    return {
        colors,
        ai_prompt,
        usage: ai_res?.usage ?? {},
        cost: total_cost,
        description,
    }
}

export default aiCreatePalette;