import { CreateRectMessage } from "@common/network/messages/CreateRectMessage";
import { HelloMessage } from "@common/network/messages/HelloMessage";
import { PingMessage } from "@common/network/messages/PingMessage";
import { NetworkSide } from "@common/network/sides";
import * as Networker from "monorepo-networker";
import { CreatePalette } from "./messages/create-palette-frame";
import { RemoveFrame } from "./messages/remove-frame";

export namespace NetworkMessages {
  export const registry = new Networker.MessageTypeRegistry();

  export const PING = registry.register(new PingMessage("ping"));

  export const HELLO_PLUGIN = registry.register(
    new HelloMessage(NetworkSide.PLUGIN)
  );

  export const HELLO_UI = registry.register(new HelloMessage(NetworkSide.UI));
  export const CREATE_PALETTE = registry.register(new CreatePalette("create-palette"));
  export const REMOVE_FRAME = registry.register(new RemoveFrame(NetworkSide.PLUGIN));

  export const CREATE_RECT = registry.register(
    new CreateRectMessage("create-rect")
  );
}
