import * as Networker from "monorepo-networker";
import { NetworkSide } from "../sides";


export class GetCurrentUser extends Networker.MessageType<void,User | null> {

    receivingSide(): Networker.Side {
        return NetworkSide.PLUGIN;
    }

    handle() {
        return figma.currentUser;
    }
}
