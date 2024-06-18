import PaletteFull from "@common/models/palette-full";
import { api } from "@ui/shared/utils/trpc-client";
import { useState } from "react";

const useFork = () => {
    const [forkingId, setForkingId] = useState<string | null>(null);

    const forkToFigma = (id: string) => {
        try {
            const fullPalette = api.figma.getPalette.query({
                id
            }) as unknown as PaletteFull;
            console.log(fullPalette);
        } catch (error) {

        }
    }
    return {
        forkToFigma,
        isForking: !!forkingId,
        forkingId
    }
}

export default useFork;