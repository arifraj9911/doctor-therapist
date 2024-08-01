import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div className="flex ">
      <div className="w-1/4 ">
        <Header></Header>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
