import { FcGoogle } from "react-icons/fc";
import loginImage from "../../../assets/images/login.png";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-between p-20">
        <div>
          <h2 className="text-[40px] text-[#4285F3]">LOGO</h2>
          <h4 className="text-3xl">Log In To Your Account</h4>
          <p>Welcome Back! Select a method to log in:</p>
          <div className="flex gap-6 items-center mt-6">
            <div className="flex shadow-md rounded-lg items-center gap-2 bg-gradient-to-l  from-[#FFFFFF] to-[#E4E4E4] py-2 px-5">
              <FcGoogle />
              <button>Google</button>
            </div>
            <div className="flex shadow-md rounded-lg items-center gap-2 bg-gradient-to-l text-white from-[#298FFF] to-[#0778F5] py-2 px-5">
              <FaFacebook />
              <button>Facebook</button>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img className="w-3/4 mx-auto " src={loginImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
