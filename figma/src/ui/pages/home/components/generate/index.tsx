import magicoon from "@ui/assets/magicoon.svg";
import magicoonWhite from "@ui/assets/magicoon-white.svg";
import { useMutation } from "@tanstack/react-query";
import { api } from "@ui/shared/utils/trpc-client";
import { NetworkMessages } from "@common/network/messages";
import { useState } from "react";
import toast from "react-hot-toast";
import CustomToast from "@ui/shared/components/custom-toast";
import useFork from "../../hooks/fork";
import Spinner from "@ui/shared/components/spinner";
interface Props {
  onGenerated: () => void;
}
const GeneratePalette = ({ onGenerated }: Props) => {
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
  });

  const forker = useFork();
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
        await forker.forkToFigma(paletteId);
        onGenerated();
        setPrompt("");
      });
    }
  };

  return (
    <div className="mx-6 relative">
      <div className="before:left-0 before:-top-10 before:absolute before:bg-[url(@ui/assets/lineVector.svg)] before:w-full before:h-full"></div>
      <div className="flex items-center justify-center flex-col pt-14 mb-24">
        <img src={magicoon} alt="magicoon icon" width={75} />
        <div className="text-[#313131] text-xl my-4">
          Generate <span className="text-primary">Ai</span> Color Palettes
        </div>
        <p className="text-center text-xs font-normal text-[#686868]">
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
          className="border border-[#B0B0B0] my-6 px-5 py-3 w-full bg-white z-[1] rounded-2xl placeholder:text-[#999999] focus:outline-none text-[#313131] text-sm"
        />
        <button
          onClick={submit}
          disabled={generate.isPending}
          className="w-full from-primary bg-gradient-to-r to-[#EC681D] flex items-center justify-center z-[1] text-white h-[50px] space-x-1 rounded-2xl"
        >
          {generate.isPending ? (
            <Spinner />
          ) : (
            <>
              <img src={magicoonWhite} alt="magicoon" className="w-5" />
              <span className="text-[14px]">Generate & import to figma</span>
            </>
          )}
        </button>
      </div>
      <div className="text-[#686868] flex items-center justify-center text-sm">
        Power taken from
        <a
          className="text-[#378CF0] pl-1"
          href="https://shades.toolstack.run"
          target="_blank"
        >
          shades.toolstack.run
        </a>
      </div>
    </div>
  );
};

export default GeneratePalette;
