import createPaletteFrame from "../../../ui/shared/utils/palette-frame";
import * as Networker from "monorepo-networker";
import { NetworkSide } from "../sides";
import PaletteFull from "@common/models/palette-full";

interface Payload {
  palette: PaletteFull;
}

export class CreatePalette extends Networker.MessageType<Payload> {
  receivingSide(): Networker.Side {
    return NetworkSide.PLUGIN;
  }

  handle(payload: Payload, from: Networker.Side) {
    if (payload.palette.fullColors) {
      createPaletteFrame({
        palette: payload.palette.fullColors,
        description: payload.palette.description,
        id: payload.palette.id,
        title: payload.palette.prompt,
        keyAsLabel: payload.palette.keyAsLabel,
        addToStyles: payload.palette.addToStyles,
      });
    }
  }
}
