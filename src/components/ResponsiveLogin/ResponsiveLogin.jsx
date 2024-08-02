import loginBanner from "../../assets/images/loginBanner.png";
import LoginModal from "../HeaderTop/LoginModal/LoginModal";

const ResponsiveLogin = () => {
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
        <h4 className="text-xl font-bold">Sign In To Your Account</h4>
        <p className="text-white text-center text-sm"> Welcome Back!</p>
      </div>
      <div className="w-3/5 mt-12">
        <p className="w-full bg-black text-center text-white p-5 rounded-lg opacity-70 text-[16px]">
          <span
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="text-[#156BCA] cursor-pointer"
          >
            Login
          </span>
          <br />
          To Your Account
        </p>
      </div>
      <LoginModal></LoginModal>
    </div>
  );
};

export default ResponsiveLogin;
