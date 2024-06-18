import { NetworkMessages } from "@common/network/messages";
import { useEffect } from "react";
import Explorer from "./components/explorer";

const Home = () => {
  useEffect(() => {
    console.log("Creating palette frame");

    NetworkMessages.CREATE_PALETTE.send({ palette: {} });
  }, []);
  return <div className="font-bold text-xl">
      <Explorer/>
  </div>;
};

export default Home;
