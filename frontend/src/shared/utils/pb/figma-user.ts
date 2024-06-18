import { pb_admin } from "~/server/pocketbase";

// returns id of user
export const getFigmaUserId = (id: string): Promise<string | boolean> => {
    return new Promise((resolve, reject) => {
        try {
            pb_admin.collection("figma_users").getFirstListItem(`uid = "${id}"`).then((res) => {
                if (res) {
                    resolve(res.id);
                } else {
                    resolve(false);
                }
            })
        }
        catch (e) {
            reject(false);
        }
    });
}