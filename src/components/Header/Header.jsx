import { Link } from "react-router-dom";
import homeIcon from "../../assets/icons/home.png";
import userIcon from "../../assets/icons/user.png";
import searchIcon from "../../assets/icons/search.png";
import aboutIcon from "../../assets/icons/Iconly_Light_Paper.png";
import favoriteIcon from "../../assets/icons/favorite.png";
import infoIcon from "../../assets/icons/info.png";
import settingsIcon from "../../assets/icons/Setting.png";

const Header = () => {
  return (
    <div className="py-12 border-r">
      <h2 className="text-[40px] mb-10 pl-28 text-[#4285F3]">LOGO</h2>
      <ul className="flex flex-col   items-start text-[#5C635A]">
        <li className="mb-2  w-full flex pl-16 py-2  hover:bg-[#D5E9FF] hover:text-black text-[16px]  text-left ">
          <Link className="flex gap-x-4 items-center justify-center" to="">
            <span>
              {" "}
              <img src={homeIcon} alt="home" />
            </span>
            <span>Home</span>
          </Link>
        </li>
        <li className="mb-2  w-full flex pl-16 py-2  hover:bg-[#D5E9FF] hover:text-black  text-[16px]   text-left">
          <Link className="flex gap-x-4 items-center justify-center" to="">
            <span>
              {" "}
              <img src={userIcon} alt="home" />
            </span>
            <span>New Listing</span>
          </Link>
        </li>
        <li className="mb-2  w-full flex pl-16 py-2  hover:bg-[#D5E9FF] hover:text-black  text-[16px]  text-left">
          <Link className="flex gap-x-4 items-center justify-center" to="">
            <span>
              {" "}
              <img src={searchIcon} alt="home" />
            </span>
            <span>Search</span>
          </Link>
        </li>
        <li className="mb-2  w-full flex pl-16 py-2  hover:bg-[#D5E9FF] hover:text-black  text-[16px]  text-left">
          <Link className="flex gap-x-4 items-center justify-center" to="">
            <span>
              {" "}
              <img src={aboutIcon} alt="home" />
            </span>
            <span>About</span>
          </Link>
        </li>
        <li className="-ml-[2px]  w-full flex pl-16 py-2  hover:bg-[#D5E9FF] hover:text-black text-[16px]   text-left">
          <Link className="flex gap-x-4 items-center justify-center" to="">
            <span>
              {" "}
              <img src={favoriteIcon} alt="home" />
            </span>
            <span>Favorites</span>
          </Link>
        </li>
        <hr className="my-5 w-4/5 ml-10" />
        <li className="mb-2 -ml-[2px]  w-full flex pl-16 py-2  hover:bg-[#D5E9FF] hover:text-black text-[16px]   text-left">
          <Link className="flex gap-x-4 items-center justify-center" to="">
            <span>
              {" "}
              <img src={infoIcon} alt="home" />
            </span>
            <span>Help Center</span>
          </Link>
        </li>
        <li className="mb-2 -ml-[2px]  w-full flex pl-16 py-2  hover:bg-[#D5E9FF] hover:text-black text-[16px]   text-left">
          <Link className="flex gap-x-4 items-center justify-center" to="">
            <span>
              {" "}
              <img src={settingsIcon} alt="home" />
            </span>
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
