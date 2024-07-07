import { pb_admin } from "~/server/pocketbase";
import { createTRPCRouter, publicProcedure } from "../trpc";

const timeRouter = createTRPCRouter({

    users: publicProcedure.query(({ }) => {
        const users = pb_admin.collection("figma_users").getFullList({
            sort: "-created",
        })
        return users
    })
})

export default timeRouter