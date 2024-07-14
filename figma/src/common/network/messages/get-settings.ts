import * as Networker from "monorepo-networker";
import { NetworkSide } from "../sides";
import { PluginSettings } from "@common/models/settings";


export class GetSettings extends Networker.MessageType<void, 
    Promise<PluginSettings | null>
> {

    receivingSide(): Networker.Side {
        return NetworkSide.PLUGIN;
    }
    async handle(){
        return (await figma.clientStorage.getAsync("settings")) as PluginSettings | null;

    }
}
