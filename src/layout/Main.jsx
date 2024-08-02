import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderTop from "../components/HeaderTop/HeaderTop";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import { Toaster } from "react-hot-toast";

const Main = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {location.pathname === "/login" ? (
        <Login></Login>
      ) : location.pathname === "/register" ? (
        <Register></Register>
      ) : (
        <div className="flex">
          <div className="w-1/4 ">
            <Header></Header>
          </div>
          <div className="flex-1">
            <HeaderTop></HeaderTop>
            <Outlet></Outlet>
          </div>
        </div>
      )}
       <Toaster />
    </div>
  );
};

export default Main;
