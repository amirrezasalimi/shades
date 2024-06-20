import * as Networker from "monorepo-networker";
import { initializeNetwork } from "@common/network/init";
import { NetworkSide } from "@common/network/sides";

async function bootstrap() {
  initializeNetwork(NetworkSide.PLUGIN);

  if (figma.editorType === "figma") {
    figma.showUI(__html__, {
      width: 400,
      height: 680,
      title: "Shades - Ai color palette generator",
    });
  }
  console.log("Bootstrapped @", Networker.Side.current.getName());
}

bootstrap();
