import "server-only";

import { headers } from "next/headers";
import { cache } from "react";

import { createCaller } from "~/server/api/root";
import { createTrpcContext } from "~/server/api/trpc";
import { UsersResponse } from "~/server/pocketbase-schema";
import { CreateContextOptions } from "vm";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(() => {
  const heads = new Headers(headers());
  heads.set("x-trpc-source", "rsc");

  return createTrpcContext({});
});



export const api = createCaller(async () =>
  await createContext()
);
