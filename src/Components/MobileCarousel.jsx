import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {PageData} from "./styles"

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MobileCarousel = () => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "progressbar",
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper md:hidden py-10"
        >
          {PageData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="cursor-pointer bg-inherit text-white text-center w-full"
            >
              <p className="flex text-left">
                <span className="text-orange-600 mr-3 text-14">
                {React.createElement(item.icon, { size: 24 })}

                </span>
                {item.text}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default MobileCarousel;
