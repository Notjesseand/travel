import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdPin } from "react-icons/io";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { SiHappycow } from "react-icons/si";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
// import { Pagination, Navigation } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ type: "progressbar", style: { backgroundColor: 'red' } }}
      modules={[Autoplay, Pagination]}
      className="mySwiper hidden md:block"
    >
      <SwiperSlide className="cursor-pointer flex h-24 bg-inherit text-white text-center w-full">
        <p className="flex">
          <IoMdPin className=" text-2xl text-orange-700" />
          Embark on Unforgettable Journeys with Us
        </p>
      </SwiperSlide>
      <SwiperSlide className="flex h-24 bg-inherit text-white text-center w-full">
        <BsGlobeAsiaAustralia className="text-2xl text-orange-700" />
        Discover the World's Most Breathtaking Destinations
      </SwiperSlide>{" "}
      <SwiperSlide className="flex h-24 bg-inherit text-white text-center w-full">
        <MdOutlineExplore className="text-3xl text-orange-700" />
        Explore, Dream, and Wander – Your Adventure Awaits
      </SwiperSlide>{" "}
      <SwiperSlide className="flex h-24 bg-inherit text-white text-center w-full">
        {/* <MdOutlineExplore className="text-3xl text-orange-700" /> */}
        <FaGift className="text-2xl text-orange-700" />
        Customize Your Dream Vacation with Our Travel Packages
      </SwiperSlide>
      <SwiperSlide className="flex h-24 bg-inherit text-white text-center w-full">
        {/* <MdOutlineExplore className="text-3xl text-orange-700" /> */}
        <SiHappycow className="text-2xl text-orange-700" />
        Adventure Awaits: Choose Your Perfect Tour Package
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
