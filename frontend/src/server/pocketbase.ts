import Pocketbase from "pocketbase";
import { type TypedPocketBase } from "./pocketbase-schema";
import { env } from "~/env";

const pbInstance = (token?: string) => {
  const _ = new Pocketbase(env.NEXT_PUBLIC_POCKETBASE_HOST) as TypedPocketBase;
  _.autoCancellation(false);
  if (token) {
    _.beforeSend = (url, options) => {
      options.headers = {
        Authorization: `Bearer ${token}`,
        ...options.headers,
      };
      return {
        url,
        options,
      };
    };
  }
  return _;
};

const admin_token = env.POCKETBASE_ADMIN_TOKEN ?? "";
export const pb_admin = pbInstance(admin_token);

export { pbInstance };
