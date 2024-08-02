import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthContext";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LoginModal = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [passView, setPassView] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        if (res.user) {
          toast.success("Login Successfully");
          navigate(location?.state ? location?.state : "/");
          form.reset();
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successfully");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleViewPassword = () => {
    setPassView(!passView);
  };
  return (
    <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box text-center">
        <h3 className="font-bold text-2xl">Sign In</h3>
        <p className=" text-sm">Fill in your information</p>

        <div className="text-left">
          <div className="flex gap-6  items-center mt-6">
            <div
              onClick={handleGoogleLogin}
              className="flex shadow-md justify-center rounded-lg items-center gap-2 bg-gradient-to-l  from-[#FFFFFF] to-[#E4E4E4] w-full py-3 px-5"
            >
              <FcGoogle />
              <button>Google</button>
            </div>
            <div className="flex w-full justify-center shadow-md rounded-lg items-center gap-2 bg-gradient-to-l text-white from-[#298FFF] to-[#0778F5] py-3 px-5">
              <FaFacebook />
              <button>Facebook</button>
            </div>
          </div>
          <div className="divider my-8">or Continue with Email</div>
          <form onSubmit={handleSignIn}>
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
              <button
                type="submit"
                className="px-4 py-2 w-full text-[16px] rounded-[10px] text-white bg-[#156BCA]"
              >
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
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default LoginModal;
