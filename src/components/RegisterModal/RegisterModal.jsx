import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthContext";

const RegisterModal = () => {
  const { createUser } = useContext(AuthContext);
  const [passView, setPassView] = useState(false);
  const [confirmPassView, setConfirmPassView] = useState(false);
  const [checkTerms, setCheckTerms] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm_password.value;

    if (password !== confirmPassword) {
      return toast.error("password did not match");
    } else {
      createUser(email, password)
        .then((res) => {
          console.log(res.user);
          if (res.user) {
            localStorage.setItem("userInfo", JSON.stringify({ name, email }));
            toast.success("Account Create Successfully");
            form.reset();
            navigate("/");
          }
        })
        .catch((err) => toast.error(err.message));
    }
  };

  const handleViewPassword = () => {
    setPassView(!passView);
  };
  const handleViewConfirmPassword = () => {
    setConfirmPassView(!confirmPassView);
  };

  const handleTermsCondition = () => {
    setCheckTerms(!checkTerms);
  };

  return (
    <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box text-center">
        <h3 className="font-bold text-2xl">Sign Up</h3>
        <p className=" text-sm">Fill in your information</p>

        <div className="text-left">
          <form onSubmit={handleSignup} className="mt-6">
            <div className="flex flex-col gap-1">
              <label className="text-[16px] font-semibold" htmlFor="email">
                Name
              </label>
              <input
                type="text"
                className="input input-bordered outline-none focus:outline-none btn-md"
                name="name"
                placeholder="Enter your name"
                id=""
              />
            </div>
            <div className="flex flex-col gap-1 mt-6">
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
            <div className="flex flex-col gap-1 mt-6 relative">
              <label
                className="text-[16px] font-semibold"
                htmlFor="confirm_password"
              >
                Confirm Password
              </label>
              <input
                type={`${confirmPassView ? "text" : "password"}`}
                className="input input-bordered outline-none focus:outline-none btn-md"
                name="confirm_password"
                placeholder="Enter your password again"
                id=""
              />
              <span className="absolute right-4 top-[42px]">
                {confirmPassView ? (
                  <FaEyeSlash
                    onClick={handleViewConfirmPassword}
                    className="text-xl"
                  ></FaEyeSlash>
                ) : (
                  <FaEye
                    onClick={handleViewConfirmPassword}
                    className="text-xl"
                  ></FaEye>
                )}
              </span>
            </div>
            <div className="space-x-2 mt-2">
              <input
                type="checkbox"
                value={checkTerms}
                onChange={handleTermsCondition}
                name=""
                id=""
              />
              <span className="text-[#4285F3] text-sm">
                Accept Terms and Service
              </span>
            </div>

            <div className="mt-10 w-3/4 mx-auto">
              <button
                type="submit"
                disabled={checkTerms === false}
                className={`px-4 py-2 w-full text-[16px] rounded-[10px] text-white  bg-[#156BCA] ${
                  !checkTerms && "bg-[#6ea3db] cursor-not-allowed"
                }`}
              >
                Sing Up
              </button>
            </div>
          </form>
          <div className="text-center mt-2">
            <p className="text-sm">
              Already Have an account?
              <span className="text-[#156BCA] underline">
                <Link to="/login">Login</Link>
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

export default RegisterModal;
