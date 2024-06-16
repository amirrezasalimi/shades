import createPaletteFrame from "../../../ui/shared/utils/palette-frame";
import * as Networker from "monorepo-networker";
import { NetworkSide } from "../sides";

interface Payload {
    palette?: object
}

export class CreatePalette extends Networker.MessageType<Payload> {

    receivingSide(): Networker.Side {
        return NetworkSide.PLUGIN;
    }

    handle(payload: Payload, from: Networker.Side) {
        createPaletteFrame();
    }
}
