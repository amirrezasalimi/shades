import PaletteFull from "@common/models/palette-full";
import { NetworkMessages } from "@common/network/messages";
import CustomToast from "@ui/shared/components/custom-toast";
import { api } from "@ui/shared/utils/trpc-client";
import { useState } from "react";
import toast from "react-hot-toast";
import CheckmarkIcon from "@ui/assets/check-circle.svg";
const useFork = () => {
  const [forkingId, setForkingId] = useState<string | null>(null);
  const addLog = async (paletteId: string) => {
    const currentUser = await NetworkMessages.CURRENT_USER.request();
    if (!currentUser) return null;
    api.figma.forkPalette.mutate({
      uid: currentUser.id,
      palette_id: paletteId,
    });
  };
  const forkToFigma = async (id: string,fullPalette:PaletteFull) => {
    if (forkingId) return;
    try {
      setForkingId(id);
      NetworkMessages.CREATE_PALETTE.send({
        palette: fullPalette,
      });
      await addLog(fullPalette.id);
      toast.custom(() => (
        <CustomToast
          message="Palette forked to Figma"
          icon={<img width={18} src={CheckmarkIcon} alt="done" />}
        />
      ));
    } catch (error) {
      console.error("Failed to fork palette", error);
    }
    setForkingId(null);
  };
  return {
    forkToFigma,
    isForking: !!forkingId,
    forkingId,
  };
};

export default useFork;
