import { pb_admin } from "~/server/pocketbase";
import { createTRPCRouter, publicProcedure } from "../trpc";

const timeRouter = createTRPCRouter({

    users: publicProcedure.query(({ }) => {
        const users = pb_admin.collection("figma_users").getList(1, 1000, {
            sort: "-created"
        })
        return users
    })
})

export default timeRouter