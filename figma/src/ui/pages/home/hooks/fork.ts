import PaletteFull from "@common/models/palette-full";
import { NetworkMessages } from "@common/network/messages";
import { api } from "@ui/shared/utils/trpc-client";
import { useState } from "react";

const useFork = () => {
    const [forkingId, setForkingId] = useState<string | null>(null);
    const addLog = async (paletteId: string) => {
        const currentUser = await NetworkMessages.CURRENT_USER.request();
        if (!currentUser) return null;
        api.figma.forkPalette.mutate({
            uid: currentUser.id,
            palette_id: paletteId
        });
    }
    const forkToFigma = async (id: string) => {
        try {
            setForkingId(id);
            const fullPalette = await api.figma.getPalette.query({
                id
            }) as unknown as PaletteFull;

            NetworkMessages.CREATE_PALETTE.send({
                palette: fullPalette,
            });
            await addLog(fullPalette.id);
        } catch (error) {
            console.error("Failed to fork palette", error);
        }
        setForkingId(null);
    }
    return {
        forkToFigma,
        isForking: !!forkingId,
        forkingId
    }
}

export default useFork;