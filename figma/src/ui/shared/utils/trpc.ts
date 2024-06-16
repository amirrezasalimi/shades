import { TRPC_HOST } from "../constants/constants";
import { createTinyRPCClient } from "./trpc-client";


export const api = createTinyRPCClient(
    TRPC_HOST
)