import SliderTherapist from "../SliderTherapist/SliderTherapist";
// import Slider from "react-slick";

const FeaturedTherapist = () => {
  return (
    <div className="my-[30px] md:px-[30px] ">
      <h4 className="text-lg mb-[18px] px-4 md:px-0 font-medium">
        Featured Therapist
      </h4>
      {/* <SliderTherapist></SliderTherapist> */}

      <div>
        <SliderTherapist></SliderTherapist>
      </div>
    </div>
  );
};

export default FeaturedTherapist;
