import { createTRPCClient, getFetch, httpBatchLink, loggerLink } from '@trpc/client';
import { TRPCResponse } from '@trpc/server/rpc';
import { AnyRouter } from '@trpc/server/unstable-core-do-not-import';
import { TRPC_HOST } from '../constants/constants';
import SuperJSON from 'superjson';


interface TrpcActions {
    query: (...args: any[]) => Promise<TRPCResponse<any>>;
    mutate: (...args: any[]) => Promise<TRPCResponse<any>>;
}
interface TrpcTypes {
    [key: string]: {
        [key: string]: TrpcActions
    } & TrpcActions
}
export const api = createTRPCClient<AnyRouter>({
    links: [loggerLink({
        enabled: (op) =>
            import.meta.env.NODE_ENV === "development" ||
            (op.direction === "down" && op.result instanceof Error),
    }),
    httpBatchLink({
        url: TRPC_HOST, transformer: SuperJSON,
        fetch: async (input, init?) => {
            const fetch = getFetch();
            return fetch(input, {
                ...init,
            }).catch((err) => {
                throw err
            })
        },
    })],
}) as any as TrpcTypes;

