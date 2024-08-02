import { CiLogin } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import loginAvatar from "../../assets/images/login_avatar.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthContext";
import { HiMenuAlt3 } from "react-icons/hi";
import HeaderDrawer from "../HeaderDrawer/HeaderDrawer";

const HeaderTop = () => {
  const { user, logOut } = useContext(AuthContext);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo);
  return (
    <div className="h-[88px] flex items-center border-b">
      <div className="flex justify-between w-full items-center px-5 md:px-[30px]">
        {/* login info  */}
        <h2 className="text-2xl md:hidden inline text-[#4285F3]">LOGO</h2>
        <div className=" gap-3 hidden md:flex items-center">
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL || loginAvatar} />
            </div>
          </div>
          <div>
            <h4 className="text-[16px] flex items-center  justify-between">
              {user?.displayName || userInfo?.name}
              <IoIosArrowDown />
            </h4>
            <p className="text-xs">{user?.email}</p>
          </div>
        </div>

        {/*login options  */}
        <div className="flex items-center">
          <FaRegBell className="mr-4 md:mr-6 text-4xl rounded-full p-2 border border-[#E7E7E7]" />
          <div className="drawer-content  md:hidden">
            <label htmlFor="my-drawer-4" className="drawer-button ">
              <HiMenuAlt3 className=" text-xl" />
            </label>
          </div>

          <div className="hidden md:block">
            {user?.email ? (
              <button
                onClick={() => logOut()}
                className="flex border-l-2 pl-6 font-semibold items-center text-[16px] text-[#F15E4A] gap-x-3"
              >
                <Link to="/login">Log Out</Link>
                <CiLogin className="text-4xl text-[#F15E4A] font-bold bg-[#FFECEA] rounded-full p-2" />
              </button>
            ) : (
              <button className="flex border-l-2 pl-6 font-semibold items-center text-[16px] text-[#F15E4A] gap-x-3">
                <Link to="/login">Login</Link>
                <CiLogin className="text-4xl text-[#F15E4A] font-bold bg-[#FFECEA] rounded-full p-2" />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <HeaderDrawer></HeaderDrawer>
      </div>
    </div>
  );
};

export default HeaderTop;
