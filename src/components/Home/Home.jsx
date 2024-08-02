import Banner from "./Banner";
import FeaturedTestimonial from "./FeaturedTestimonial";
import FeaturedTherapist from "./FeaturedTherapist";
import PopularCites from "./PopularCites";

const Home = () => {
  return (
    <div className="bg-[#EEF2F5] min-h-screen">
      <Banner></Banner>
      <FeaturedTherapist></FeaturedTherapist>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between mb-7 gap-2 md:gap-[30px] md:px-[30px]">
        <FeaturedTestimonial></FeaturedTestimonial>
        <PopularCites></PopularCites>
      </div>
    </div>
  );
};

export default Home;
