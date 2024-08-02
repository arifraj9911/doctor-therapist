import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderTop from "../components/HeaderTop/HeaderTop";
import Login from "../components/Authentication/Login/Login";

const Main = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div >
      {
        location.pathname === '/login' ? <Login></Login> :  <div className="flex">
        <div className="w-1/4 ">
          <Header></Header>
        </div>
        <div className="flex-1">
          <HeaderTop></HeaderTop>
          <Outlet></Outlet>
        </div>
        </div>
      }
     
    </div>
  );
};

export default Main;
