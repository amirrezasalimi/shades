import * as Networker from "monorepo-networker";
import { CreatePalette } from "./messages/create-palette-frame";
import { GetCurrentUser } from "./messages/get-user";
import { GetSettings } from "./messages/get-settings";
import { SetSettings } from "./messages/set-settings";

export namespace NetworkMessages {
  export const registry = new Networker.MessageTypeRegistry();

  export const CREATE_PALETTE = registry.register(new CreatePalette("create-palette"));
  export const CURRENT_USER = registry.register(new GetCurrentUser("get-current-user"));
  export const GET_SETTINGS = registry.register(new GetSettings("get-settings"));
  export const SET_SETTINGS = registry.register(new SetSettings("set-settings"));
}
