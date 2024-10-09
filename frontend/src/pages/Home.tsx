import { FC } from "react";
import Search from "../components/Search.tsx";
import "../styles/pages/Home.scss";

const Home: FC = () => {
  return <div className="home"><Search /></div>;
};

export default Home;