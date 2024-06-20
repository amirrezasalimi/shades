import magicoon from "@ui/assets/magicoon.svg";
import magicoonWhite from "@ui/assets/magicoon-white.svg";

const GeneratePalette = () => {
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
          type="text"
          placeholder="E-commerce landing"
          className="border border-[#B0B0B0] my-6 px-5 py-3 w-full bg-white z-[1] rounded-2xl placeholder:text-[#999999] focus:outline-none text-[#313131] text-sm"
        />
        <button className="w-full from-primary bg-gradient-to-r to-[#EC681D] flex items-center justify-center z-[1] text-white h-[50px] space-x-1 rounded-2xl">
          {/* <svg
            aria-hidden="true"
            className="inline w-6 h-6 animate-spin text-white fill-[#EC681D]"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg> */}
          <>
            <img src={magicoonWhite} alt="magicoon" className="w-5" />
            <span className="text-[14px]">Generate & import to figma</span>
          </>
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
