import magicoon from "@ui/assets/magicoon.svg";
import magicoonWhite from "@ui/assets/magicoon-white.svg";
const GeneratePalette = () => {
  return (
    <div className="mx-6 relative">
      <div className="before:left-0 before:-top-10 before:absolute before:bg-[url(@ui/assets/lineVector.svg)] before:w-full before:h-full"></div>
      <div className="flex items-center justify-center flex-col space-y-4 pt-14 mb-24">
        <img src={magicoon} alt="magicoon icon" width={75} />
        <div className="text-[#313131] text-xl">
          Generate <span className="text-primary">Ai</span> Color Palettes
        </div>
        <p className="text-center text-xs font-normal text-[#686868]">
          Tell me the title of the project or the <br /> pages of your site so
          that I can suggest <br /> you a color palette:
        </p>
        <input
          type="text"
          placeholder="E-commerce landing"
          className="border border-[#B0B0B0] px-5 py-3 w-full bg-white z-[1] rounded-2xl placeholder:text-[#999999] focus:outline-none text-[#313131] text-sm"
        />
        <button className="w-full from-primary bg-gradient-to-r to-[#EC681D] flex items-center justify-center z-[1] text-white h-[50px] space-x-1 rounded-2xl">
          <img src={magicoonWhite} alt="magicoon" className="w-5" />
          <span className="text-[14px]">Generate & import to figma</span>
        </button>
      </div>
      <div className="text-[#686868] flex items-center justify-center">
        Power taken from
        <a className="text-[#378CF0] pl-1" href="">
          shades.toolstack.run
        </a>
      </div>
    </div>
  );
};

export default GeneratePalette;
