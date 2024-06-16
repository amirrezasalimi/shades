import * as Networker from "monorepo-networker";
import { NetworkSide } from "../sides";

interface Payload {
    id: string
}

export class RemoveFrame extends Networker.MessageType<Payload> {
    constructor(private side: Networker.Side) {
        super("hello-" + side.getName());
    }
    receivingSide(): Networker.Side {
        return NetworkSide.UI;
    }

    handle(payload: Payload, from: Networker.Side) {
        const frame = figma.currentPage.findOne(node => node.id === payload.id);
        if (frame) {
            frame.remove();
        }
    }
}
