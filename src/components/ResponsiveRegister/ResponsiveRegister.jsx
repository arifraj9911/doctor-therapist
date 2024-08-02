import loginBanner from "../../assets/images/loginBanner.png";
import RegisterModal from "../RegisterModal/RegisterModal";

const ResponsiveRegister = () => {
    return (
        <div
      className="flex flex-col items-center pt-12"
      style={{
        backgroundImage: `url('${loginBanner}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-4xl text-[#4285F3]">LOGO</h2>
        <h4 className="text-xl font-bold">Create Your Account</h4>
        <p className="text-white text-center text-sm">
          {" "}
          Welcome Back! By click the sign up button you&apos;re agree Terms and
          Service and acknowledge the{" "}
          <span className="text-[#4285F3] underline">
            Privacy and Policy
          </span>{" "}
        </p>
      </div>
      <div className="w-3/5 mt-12">
        <p className="w-full bg-black text-center text-white p-5 rounded-lg opacity-70 text-[16px]">
          <span
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="text-[#156BCA] cursor-pointer"
          >
            Create Account
          </span>
          <br /> Fill in you information
        </p>
      </div>
      <RegisterModal></RegisterModal>
    </div>
    );
};

export default ResponsiveRegister;