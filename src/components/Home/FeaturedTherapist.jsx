import SliderTherapist from "../SliderTherapist/SliderTherapist";
// import Slider from "react-slick";

const FeaturedTherapist = () => {
 

  return (
    <div className="my-[30px] px-[30px] hidden md:block">
      <h4 className="text-lg mb-[18px] font-medium">Featured Therapist</h4>
      {/* <SliderTherapist></SliderTherapist> */}

      <div>
        <SliderTherapist></SliderTherapist>
      </div>
    </div>
  );
};

export default FeaturedTherapist;
