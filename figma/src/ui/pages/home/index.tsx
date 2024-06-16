import { NetworkMessages } from "@common/network/messages";
import createPaletteFrame from "@ui/shared/utils/palette-frame";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("Creating palette frame");

    NetworkMessages.CREATE_PALETTE.send({ palette: {} });
    NetworkMessages.HELLO_PLUGIN.send({ text: "Hey there, Figma!" });
  }, []);
  /*   const recent = useQuery({
    queryKey: ["palette", "recent"],
    queryFn: async () => {
      return api.palete.recent.get({ page: 1, limit: 10 });
    },
  }); */
  return <div className="font-bold text-xl"></div>;
};

export default Home;
