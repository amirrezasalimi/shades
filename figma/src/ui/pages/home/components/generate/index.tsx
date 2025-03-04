import magicoon from "@ui/assets/magicoon.svg";
import { useMutation } from "@tanstack/react-query";
import { api } from "@ui/shared/utils/trpc-client";
import { NetworkMessages } from "@common/network/messages";
import { useState } from "react";
import toast from "react-hot-toast";
import CustomToast from "@ui/shared/components/custom-toast";
import useFork from "../../hooks/fork";
import Spinner from "@ui/shared/components/spinner";
import { TOOLSTACK } from "@ui/shared/constants/constants";
import ColorPalette from "../explorer/components/colors-palette";
import MagicoonWhite from "@ui/assets/magicoon-white";
import Recent from "../recent";

const GeneratePalette = () => {
  const [prompt, setPrompt] = useState<string>("");
  const generate = useMutation<any, any, string>({
    mutationFn: async (data) => {
      const currentUser = await NetworkMessages.CURRENT_USER.request();
      if (!currentUser) return null;
      const res = await api.figma.createPalette.mutate({
        uid: currentUser.id,
        prompt: data,
      });
      return res as unknown as string;
    },
    onError(error) {
      if (error?.message) {
        toast.custom(() => <CustomToast message={error.message} />);
      }
    },
  });

  const forker = useFork();
  const [showPaletteModal, setShowColorModal] = useState(false);
  const [selectedPaletteId, setSelectedPaletteId] = useState<string | null>(
    null
  );
  const [showRecentModal, setShowRecentModal] = useState(false);

  const submit = () => {
    // not less than 4 characters
    if (!prompt.trim()) {
      toast.custom(() => <CustomToast message="Please enter a prompt" />);
    } else if (prompt.length < 4) {
      toast.custom(() => (
        <CustomToast message="Prompt should be at least 4 characters" />
      ));
    } else {
      if (generate.isPending) return;
      generate.mutateAsync(prompt).then(async (paletteId) => {
        if (!paletteId) return;
        setSelectedPaletteId(paletteId);
        setShowColorModal(true);
        setPrompt("");
      });
    }
  };

  return (
    <div className="relative mx-6">
      <ColorPalette
        showModal={setShowColorModal}
        isOpen={showPaletteModal}
        paletteId={selectedPaletteId}
      />
      <Recent isOpen={showRecentModal} showModal={setShowRecentModal} />

      <div className="before:-top-10 before:left-0 before:absolute before:bg-[url(@ui/assets/lineVector.svg)] before:w-full before:h-full"></div>
      <div className="flex flex-col justify-center items-center mb-12 pt-5">
        <img src={magicoon} alt="magicoon icon" width={65} />
        <div className="mt-3 mb-2 text-[#313131] text-xl">
          Generate <span className="text-primary">Ai</span> Color Palettes
        </div>
        <p className="font-normal text-[#686868] text-center text-xs">
          Tell me the title of the project or the <br /> pages of your site so
          that I can suggest <br /> you a color palette:
        </p>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          // an enter
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submit();
            }
          }}
          type="text"
          placeholder="E-commerce landing"
          className="z-[1] border-[#B0B0B0] bg-white my-6 px-5 py-3 border rounded-2xl w-full text-sm placeholder:text-[#999999] focus:outline-none text-[#313131]"
        />
        <button
          onClick={submit}
          disabled={generate.isPending}
          className="z-[1] flex justify-center items-center space-x-1 bg-gradient-to-r from-primary to-[#EC681D] rounded-2xl w-full h-[50px] text-white"
        >
          {generate.isPending ? (
            <Spinner />
          ) : (
            <>
              <MagicoonWhite size="22px" />
              <span className="text-[14px]">Generate</span>
            </>
          )}
        </button>
        <span className="text-[#686868] text-sm font-light my-3.5">or</span>
        <button
          className="z-[1] flex justify-center items-center space-x-1 rounded-2xl w-full h-[50px] text-white border border-[#B0B0B0]"
          onClick={() => setShowRecentModal(true)}
        >
          {generate.isPending ? (
            <Spinner />
          ) : (
            <>
              <span className="text-[14px] text-black font">
                Recent Generated
              </span>
            </>
          )}
        </button>
      </div>
      <div className="flex justify-center items-center text-[#686868] text-sm">
        Power taken from
        <a className="pl-1 text-[#378CF0]" href={TOOLSTACK} target="_blank">
          shades.toolstack.run
        </a>
      </div>
    </div>
  );
};

export default GeneratePalette;
