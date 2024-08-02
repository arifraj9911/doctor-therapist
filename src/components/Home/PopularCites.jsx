const PopularCites = () => {
  const popularCities = [
    "Atlanta, GA",
    "Indianapolis, IN",
    "Philadelphia, PA",
    "Boston, MA",
    "Jacksonville, FL",
    "Queens, NY",
    "Chicago, IL",
    "Kansas City, MO",
    "Raleigh, NC",
    "Chicago, IL",
    "Los Angeles, CA",
    "San Antonio, TX",
    "El Paso, TX",
    "Miami, FL",
    "Tucson, AZ",
    "Fresno, CA",
    "Nashville, TN",
    "Upland, CA",
    "Houston, TX",
    "Oklahoma City, OK",
    "Washington, D.C.",
  ];

  return (
    <div className="">
      <h2 className="text-lg font-medium mb-4 px-4 md:px-0">Popular Cities</h2>
      <div className="grid grid-cols-3 gap-y-5 rounded-lg p-[30px] bg-white">
        {popularCities.map((city, index) => (
          <span
            className="text-sm border-b pb-[14px] text-[#156BCA] underline cursor-pointer"
            key={index}
          >
            {city}
            {/* <hr className="mt-4"/> */}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PopularCites;
