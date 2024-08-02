import { useEffect, useState } from "react";
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const SliderTherapist = () => {
  const [therapist, setTherapist] = useState([]);

  useEffect(() => {
    fetch("therapist.json")
      .then((res) => res.json())
      .then((data) => setTherapist(data));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerView = 4;

  const nextSlide = () => {
    if (currentIndex < therapist.length - slidesPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative px-4 py-6 w-full rounded-lg bg-white overflow-hidden">
      <div
        className="flex mx-4  transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
        }}
      >
        {therapist.map((user, index) => (
          <div key={index} className=" overflow-hidden  flex flex-shrink-0 p-2">
            <div className="card card-compact  border max-w-max flex flex-col bg-base-100 h-full shadow-xl">
              <figure className="h-40">
                <img
                  src={user.image}
                  alt="Shoes"
                  className="w-full h-full p-[10px]"
                />
              </figure>
              <div className=" flex flex-col  flex-grow">
                <h2 className="card-title text-[14px] px-4 pt-2 pb-1">
                  {user.name}
                </h2>
                <div className="pl-[18px] space-y-2 text-[#5C635A]">
                  <p className="text-xs flex items-center gap-2">
                    <FaLocationDot />
                    {user.address}
                  </p>
                  <p className="text-xs flex items-center gap-2">
                    <FaCar></FaCar>
                    {user.contact}
                  </p>
                </div>
                <div className="bg-[#D4E9FF] hover:bg-[#156BCA] hover:text-white mt-5 duration-200 ease-in-out">
                  <button className=" self-end w-full p-4 underline font-medium text-sm  ">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 bg-[#D4E9FF] top-1/2 transform -translate-y-1/2   px-2 py-1 ml-1 text-black text-3xl w-11 rounded-full duration-200 ease-in-out hover:bg-[#156BCA] hover:text-white"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute bg-[#D4E9FF] right-0 top-1/2 transform -translate-y-1/2 hover:bg-[#156BCA] duration-200 ease-in-out hover:text-white  px-2 py-1 mr-1 text-black text-3xl w-11 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default SliderTherapist;
