import { useEffect } from "react";
import Explorer from "./components/explorer";
import useView from "./hooks/view";

const Home = () => {
  useView();
  return <div className="font-bold text-xl">
      <Explorer/>
  </div>;
};

export default Home;
