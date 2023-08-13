import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import image1 from "../assets/tour1.jpeg";
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


  return (
    <div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        autoplay= {{delay:3000, disableOnInteraction:false}}
        modules={[Pagination, Autoplay]}
        className="mySwiper px-8"
      >
        {ToursAds.map((items, index)=>{
          return(
            <SwiperSlide key={index} className="h-[530px] md:h-96 rounded-md object-contain mt-8">
              <img src={items.image} alt="" className="h-full w-full object-cover object-top rounded" />
            </SwiperSlide>
        )})}

       
      </Swiper>
    </div>
  );
};

export default ToursCarosel;
