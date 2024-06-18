import { CreateRectMessage } from "@common/network/messages/CreateRectMessage";
import { HelloMessage } from "@common/network/messages/HelloMessage";
import { PingMessage } from "@common/network/messages/PingMessage";
import { NetworkSide } from "@common/network/sides";
import * as Networker from "monorepo-networker";
import { CreatePalette } from "./messages/create-palette-frame";
import { RemoveFrame } from "./messages/remove-frame";
import { GetCurrentUser } from "./messages/get-user";

export namespace NetworkMessages {
  export const registry = new Networker.MessageTypeRegistry();

  export const CREATE_PALETTE = registry.register(new CreatePalette("create-palette"));
  export const REMOVE_FRAME = registry.register(new RemoveFrame(NetworkSide.PLUGIN));
  export const CURRENT_USER = registry.register(new GetCurrentUser("get-current-user"));

}
