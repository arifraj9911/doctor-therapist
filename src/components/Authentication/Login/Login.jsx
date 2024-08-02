import { FcGoogle } from "react-icons/fc";
import loginImage from "../../../assets/images/login.png";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [passView, setPassView] = useState(false);

  const handleViewPassword = () => {
    setPassView(!passView);
  };

  // console.log(passView)

  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="flex justify-between gap-20 p-20">
        <div className="w-1/2">
          <h2 className="text-[40px] text-[#4285F3]">LOGO</h2>
          <h4 className="text-3xl my-3 font-bold">Log In To Your Account</h4>
          <p>Welcome Back! Select a method to log in:</p>
          <div className="flex gap-6  items-center mt-6">
            <div className="flex shadow-md justify-center rounded-lg items-center gap-2 bg-gradient-to-l  from-[#FFFFFF] to-[#E4E4E4] w-full py-3 px-5">
              <FcGoogle />
              <button>Google</button>
            </div>
            <div className="flex w-full justify-center shadow-md rounded-lg items-center gap-2 bg-gradient-to-l text-white from-[#298FFF] to-[#0778F5] py-3 px-5">
              <FaFacebook />
              <button>Facebook</button>
            </div>
          </div>
          <div className="divider my-8">or Continue with Email</div>
          {/* login form */}
          <form>
            <div className="flex flex-col gap-1">
              <label className="text-[16px] font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="input input-bordered outline-none focus:outline-none btn-md"
                name="email"
                placeholder="Enter your email"
                id=""
              />
            </div>
            <div className="flex flex-col gap-1 mt-6 relative">
              <label className="text-[16px] font-semibold" htmlFor="password">
                Password
              </label>
              <input
                type={`${passView ? "text" : "password"}`}
                className="input input-bordered outline-none focus:outline-none btn-md"
                name="password"
                placeholder="Enter your password"
                id=""
              />
              <span className="absolute right-4 top-[42px]">
                {passView ? (
                  <FaEyeSlash
                    onClick={handleViewPassword}
                    className="text-xl"
                  ></FaEyeSlash>
                ) : (
                  <FaEye
                    onClick={handleViewPassword}
                    className="text-xl"
                  ></FaEye>
                )}
              </span>
            </div>
            <div className="flex justify-between mt-1">
              <div className="space-x-2">
                <input type="checkbox" name="" id="" />
                <span className="text-sm">Remember Me</span>
              </div>
              <div>
                <span className="text-[#156BCA] font-medium text-sm underline">
                  Forgot Password
                </span>
              </div>
            </div>

            <div className="mt-10 w-3/4 mx-auto">
              <button className="px-4 py-2 w-full text-[16px] rounded-[10px] text-white bg-[#156BCA]">
                Sing In
              </button>
            </div>
          </form>
          <div className="text-center mt-2">
            <p className="text-sm">
              Don&apos;t Have an account?{" "}
              <span className="text-[#156BCA] underline">
                <Link to="/register">Create Account</Link>
              </span>{" "}
            </p>
          </div>
        </div>
        {/* login sidebar image */}
        <div className="w-4/5 relative">
          <img className="w-4/5 mx-auto blur-[6px]" src={loginImage} alt="" />
          <p className="w-1/3 bg-black text-white p-5 rounded-lg absolute top-72 left-52 opacity-70 text-[16px]">
            <span className="text-[#156BCA]">Sign In</span> to view all the
            message therapist
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
