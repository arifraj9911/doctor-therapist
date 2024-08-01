import bannerBg from "../../assets/images/banner-bg.png";
import bannerimg from "../../assets/images/banner_img.png";
const Banner = () => {
  return (
    <div className="px-[30px] pt-[30px] ">
      <div className="bg-white p-[30px] rounded-[10px] flex gap-10">
        {/* text part */}
        <div className="font-medium">
          <h4 className="text-xl">
            I&apos;m Looking for Massage Therapist Near...
          </h4>
          <p className="text-[14px]  mt-6 mb-7">
            In using this site, I agree to be bound by the{" "}
            <span className="text-blue-500 underline">Terms of Service</span>{" "}
            and <span className="text-blue-500 underline">Privacy Policy</span>{" "}
          </p>
          <div className="relative ">
            <input
              type="text"
              name=""
              className="py-3 px-4 bg-[#EEF2F5] outline-none w-full rounded-[10px]"
              placeholder="Zip code or city name..."
              id=""
            />
            <button className="bg-[#156BCA] top-1 right-2 py-2 absolute px-8 text-white rounded-lg">
              Go
            </button>
          </div>
        </div>

        {/* image part */}
        <div
          className="flex justify-end"
          style={{
            backgroundImage: `url('${bannerBg}')`,
            backgroundSize: "cover",
            height: "25vh",
            width: "80vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img src={bannerimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
