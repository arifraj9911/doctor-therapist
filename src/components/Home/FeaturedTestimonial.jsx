import { useEffect } from "react";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";

const FeaturedTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="mb-[30px] ">
      <h2 className="text-lg font-medium px-4 md:px-0 mb-4">
        Featured Testimonial
      </h2>
      <div className="bg-white rounded-lg p-3 md:p-[30px]">
        <div className="grid grid-rows-2   gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              className="flex gap-4 p-[10px] items-center  rounded-lg border"
              key={index}
            >
              <div className="w-full h-full">
                <img src={testimonial.image} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-[#5C635A]">{testimonial.address}</p>
                <h4 className="text-sm font-medium text-[#232F3C]">
                  {testimonial.name}{" "}
                  <span className="text-[#156BCA] italic font-bold">
                    by Cork
                  </span>{" "}
                </h4>
                <p className="text-[13px] text-[#5C635A] font-medium">
                  {testimonial.description}{" "}
                  <span className="text-[#156BCA] cursor-pointer">
                    Read More...
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5 text-[#3B463373]">
          <GoDotFill className="text-[#156BCA] text-xl" />
          <GoDotFill className="text-xl" />
          <GoDotFill className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedTestimonial;
