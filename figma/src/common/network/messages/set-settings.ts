import * as Networker from "monorepo-networker";
import { NetworkSide } from "../sides";
import { PluginSettings } from "@common/models/settings";


export class SetSettings extends Networker.MessageType<PluginSettings | any> {
    receivingSide(): Networker.Side {
        return NetworkSide.PLUGIN;
    }

    handle(settings: PluginSettings) {
        figma.clientStorage.setAsync("settings", settings);
    }
}
