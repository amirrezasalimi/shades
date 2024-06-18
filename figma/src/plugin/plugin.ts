import * as Networker from "monorepo-networker";
import { initializeNetwork } from "@common/network/init";
import { NetworkSide } from "@common/network/sides";
import { NetworkMessages } from "@common/network/messages";

async function bootstrap() {
  initializeNetwork(NetworkSide.PLUGIN);


  if (figma.editorType === "figma") {
    figma.showUI(__html__, {
      width: 400,
      height: 680,
      title: "Shades!",
    });
  } else if (figma.editorType === "figjam") {
    /*    figma.showUI(__html__, {
          width: 689,
          height: 1397,
          title: "My FigJam Plugin!",
        }); */
  }

  console.log("Bootstrapped @", Networker.Side.current.getName());
}

bootstrap();
