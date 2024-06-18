import PaletteFull from "@common/models/palette-full";
import { NetworkMessages } from "@common/network/messages";
import { api } from "@ui/shared/utils/trpc-client";
import { useState } from "react";

const useFork = () => {
    const [forkingId, setForkingId] = useState<string | null>(null);

    const forkToFigma = async (id: string) => {
        try {
            const fullPalette = await api.figma.getPalette.query({
                id
            }) as unknown as PaletteFull;
            
            NetworkMessages.CREATE_PALETTE.send({ 
                palette: fullPalette,
             });
        } catch (error) {
            console.error("Failed to fork palette", error);
        }
    }
    return {
        forkToFigma,
        isForking: !!forkingId,
        forkingId
    }
}

export default useFork;