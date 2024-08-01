import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderTop from "../components/HeaderTop/HeaderTop";

const Main = () => {
  return (
    <div className="flex ">
      <div className="w-1/4 ">
        <Header></Header>
      </div>
      <div className="flex-1">
        <HeaderTop></HeaderTop>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
