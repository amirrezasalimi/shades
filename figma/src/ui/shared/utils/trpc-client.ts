import { AnyTRPCRouter } from '@trpc/server';
import { TRPCResponse } from '@trpc/server/rpc';
import { DecorateRouterRecord, createRecursiveProxy } from '@trpc/server/unstable-core-do-not-import';

interface TrpcActions {
    get: (...args: any[]) => any;
    post: (...args: any[]) => any;
}
interface TrpcTypes {
    [key: string]: {
        [key: string]: TrpcActions
    } & TrpcActions
}
export const createTinyRPCClient = (
    baseUrl: string,
) =>
    createRecursiveProxy(async (opts) => {
        const path = [...opts.path]; // e.g. ["post", "byId", "query"]
        const method = path.pop()! as 'query' | 'mutate';
        const dotPath = path.join('.'); // "post.byId" - this is the path procedures have on the backend
        let uri = `${baseUrl}/${dotPath}`;

        const [input] = opts.args;
        const stringifiedInput = input !== undefined && JSON.stringify(input);
        let body: undefined | string = undefined;
        if (stringifiedInput !== false) {
            if (method === 'query') {
                uri += `?input=${encodeURIComponent(stringifiedInput)}`;
            } else {
                body = stringifiedInput;
            }
        }
        console.log('fetching', uri, body);
        const json: TRPCResponse = await fetch(uri, {
            method: method === 'query' ? 'GET' : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        }).then((res) => res.json());

        if ('error' in json) {
            throw new Error(`Error: ${json.error.message}`);
        }
        // No error - all good. Return the data.
        return json.result.data;
    }) as TrpcTypes
