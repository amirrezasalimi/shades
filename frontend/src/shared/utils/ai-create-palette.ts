import OpenAI from "openai";
import Decimal from "decimal.js";
import Config from "./pb/config";
import { CONFIG_KEYS } from "../constants/config-keys";

const makePrompt = (prompt: string) => {
  return `You are an expert UI/UX designer with a deep understanding of color theory and the ability to create stunning color palettes. Your task is to generate a color palette based on the following input:
"${prompt}"

Requirements:
- Every color must be a valid hex code in the #RRGGBB format (include the '#' symbol).
- All selected colors must be exclusively from the 500 shade.

Output:
Return a JSON object exactly in the following structure, with no additional commentary:
{
  "primary": "#hexcolor",
  "secondary": "#hexcolor",
  "neutral": "#hexcolor",
  "success": "#hexcolor",
  "error": "#hexcolor",
  "warning": "#hexcolor",
  "info": "#hexcolor",
  "background": "#hexcolor",
  "text": "#hexcolor",
  "description": "A brief paragraph (under 50 words) explaining the rationale behind the palette."
}`;
};

const aiCreatePalette = async (prompt: string) => {
  let ai_model: {
    endpoint: string;
    key: string;
    name: string;
    temperature: number;
    per_1m: string; // ex: 1.5,2
  } | null;
  try {
    const ai_config = (await Config.get(CONFIG_KEYS.AI_MODEL)) as string;
    ai_model = JSON.parse(ai_config);
    if (!ai_model) {
      throw "Ai Service Unavailable";
    }
  } catch (e) {
    throw "Ai Service Unavailable";
  }
  const openAi = new OpenAI({
    apiKey: ai_model.key,
    baseURL: ai_model.endpoint,
  });

  const ai_prompt = makePrompt(prompt);
  const ai_res = await openAi.chat.completions.create({
    model: ai_model.name,
    messages: [
      {
        role: "user",
        content: ai_prompt,
      },
    ],
    temperature: ai_model.temperature ?? 0.5,
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
  const ai_price = ai_model.per_1m.split(",");
  const input_1m_price = parseFloat(ai_price[0] ?? "1");
  const output_1m_price = parseFloat(ai_price[1] ?? "1");

  const input_cost = new Decimal(input_tokens)
    .dividedBy(1000000)
    .times(input_1m_price)
    .toDecimalPlaces(8)
    .toNumber();
  const output_cost = new Decimal(output_tokens)
    .dividedBy(1000000)
    .times(output_1m_price)
    .toDecimalPlaces(8)
    .toNumber();
  const total_cost = new Decimal(input_cost)
    .plus(output_cost)
    .toDecimalPlaces(8)
    .toNumber();

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
    ai_model,
  };
};

export default aiCreatePalette;
