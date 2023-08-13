import React from "react";
import ToursCarosel from "./ToursCarosel";

const PopularTours = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center md:pb-32 bg-gray-900">
      <p className="text-white text-3xl text-center">Popular Tours</p>
      <p className="text-white text-center mt-2">
        From Majestic Mountains to Pristine Beaches – Our Picks for You
      </p>
      <ToursCarosel/>
    </div>
  );
};

export default PopularTours;
