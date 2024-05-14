import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import image1 from "@/public/tour1.jpeg";
import { ToursAds } from "./styles";

const ToursCarosel = () => {
  const screenWidth = window.innerWidth;
  let slidesPerView = 4; // Default for larger screens

  switch (true) {
    case screenWidth <= 520:
      slidesPerView = 1; // Mobile screens
      break;
    case screenWidth <= 824:
      slidesPerView = 2; // Tablet screens
      break;
    default:
      slidesPerView = 4; // Larger screens
  }

  console.log(ToursAds, "bu toursad");

  return (
    <div className="">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper px-8"
      >
        {ToursAds.map((items, index) => {
          return (
            <SwiperSlide
              key={index}
              className="swiper-slide rounded-md flex items-center justify-center mt-8"
            >
              <img
                src={items.image}
                alt=""
                className="h-[530px] md:h-96 w-full max-w-full max-h-full object-cover object-center rounded px-5"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ToursCarosel;
