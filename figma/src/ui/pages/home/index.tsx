import { NetworkMessages } from "@common/network/messages";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("Creating palette frame");

    NetworkMessages.CREATE_PALETTE.send({ palette: {} });
  }, []);
  return <div className="font-bold text-xl">
      Home
  </div>;
};

export default Home;
