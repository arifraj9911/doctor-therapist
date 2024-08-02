import { Link } from "react-router-dom";

import homeIcon from "../../assets/icons/home.png";
import userIcon from "../../assets/icons/user.png";
import searchIcon from "../../assets/icons/search.png";
import aboutIcon from "../../assets/icons/Iconly_Light_Paper.png";
import favoriteIcon from "../../assets/icons/favorite.png";
import infoIcon from "../../assets/icons/info.png";
import settingsIcon from "../../assets/icons/Setting.png";

const HeaderDrawer = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* <ul className="menu bg-base-200 text-base-content menu">
          
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul> */}
        <ul className=" bg-base-200   w-60 min-h-[500px]   text-[#5C635A]">
          <div className="bg-[#156BCA]  h-52 flex text-right pr-4 justify-end pb-4 flex-col items-end text-black">
            <div className="avatar online">
              <div className="w-14 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="">
              <h4 className="text-[16px] text-white">Arif Hossain</h4>
              <p className="text-[10px]">arif.raj9911@gmail.com</p>
            </div>
          </div>
          <div className="py-6 pr-4">
            <li className="  w-full flex py-3 pl-4 hover:border-l-2 hover:border-l-black hover:bg-[#D5E9FF] hover:text-black text-[16px]  text-left ">
              <Link className="flex gap-x-4 items-center justify-center" to="">
                <span>
                  {" "}
                  <img src={homeIcon} alt="home" />
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li className="  w-full flex py-3 pl-4 hover:border-l-2 hover:border-l-black hover:bg-[#D5E9FF] hover:text-black  text-[16px]   text-left">
              <Link className="flex gap-x-4 items-center justify-center" to="">
                <span>
                  {" "}
                  <img src={userIcon} alt="home" />
                </span>
                <span>New Listing</span>
              </Link>
            </li>
            <li className="  w-full flex py-3 pl-4 hover:border-l-2 hover:border-l-black hover:bg-[#D5E9FF] hover:text-black  text-[16px]  text-left">
              <Link className="flex gap-x-4 items-center justify-center" to="">
                <span>
                  {" "}
                  <img src={searchIcon} alt="home" />
                </span>
                <span>Search</span>
              </Link>
            </li>
            <li className="  w-full flex py-3 pl-4 hover:border-l-2 hover:border-l-black hover:bg-[#D5E9FF] hover:text-black  text-[16px]  text-left">
              <Link
                className="flex gap-x-4 items-center justify-center"
                to="/about"
              >
                <span>
                  {" "}
                  <img src={aboutIcon} alt="home" />
                </span>
                <span>About</span>
              </Link>
            </li>
            <li className="  w-full flex py-3 pl-4 hover:border-l-2 hover:border-l-black hover:bg-[#D5E9FF] hover:text-black text-[16px]   text-left">
              <Link className="flex gap-x-4 items-center justify-center" to="">
                <span>
                  {" "}
                  <img src={favoriteIcon} alt="home" />
                </span>
                <span>Favorites</span>
              </Link>
            </li>
            <hr className="my-2 w-4/5 ml-10" />
            <li className="  w-full flex py-3 pl-4 hover:border-l-2 hover:border-l-black hover:bg-[#D5E9FF] hover:text-black text-[16px]   text-left">
              <Link className="flex gap-x-4 items-center justify-center" to="">
                <span>
                  {" "}
                  <img src={infoIcon} alt="home" />
                </span>
                <span>Help Center</span>
              </Link>
            </li>
            <li className="   w-full flex py-3 pl-4 hover:border-l-2 hover:border-l-black hover:bg-[#D5E9FF] hover:text-black text-[16px]   text-left">
              <Link className="flex gap-x-4 items-center justify-center" to="">
                <span>
                  {" "}
                  <img src={settingsIcon} alt="home" />
                </span>
                <span>Settings</span>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HeaderDrawer;
