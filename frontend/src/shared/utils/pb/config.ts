import { pb_admin } from "~/server/pocketbase";

class Config {
    static async get(key: string): Promise<unknown> {
        try {
            const res = await pb_admin.collection("config").getFirstListItem(`key = "${key}"`);
            return res.value;
        }
        catch (e) {
            return null;
        }
    }
    static async set(key: string, value: unknown): Promise<void> {
        try {
            return await pb_admin.collection("config").create({
                key,
                value
            });
        }
        catch (e) {

        }
    }
}

export default Config;