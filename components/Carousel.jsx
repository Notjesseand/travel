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
      pagination={{
        type: "progressbar",
        style: { backgroundColor: "red", marginTop: "3px" },
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper hidden md:block"
    >
      <SwiperSlide className="cursor-pointer flex h-24 bg-inherit text-white text-center w-full mt-3">
        <p className="flex">
          <IoMdPin className=" text-2xl text-orange-700 " />
          Embark on Unforgettable Journeys with Us
        </p>
      </SwiperSlide>
      <SwiperSlide className="flex h-24 bg-inherit text-white text-center w-full mt-3">
        <p className="flex">
          <BsGlobeAsiaAustralia className="text-2xl text-orange-700" />
          Discover the World&apso;s Most Breathtaking Destinations
        </p>
      </SwiperSlide>{" "}
      <SwiperSlide className="flex h-24 bg-inherit text-white text-center w-full mt-3">
        <p className="flex">
          <MdOutlineExplore className="text-3xl text-orange-700" />
          Explore, Dream, and Wander – Your Adventure Awaits
        </p>
      </SwiperSlide>{" "}
      <SwiperSlide className="flex h-24 bg-inherit text-white text-center w-full mt-3">
        {/* <MdOutlineExplore className="text-3xl text-orange-700" /> */}
        <p className="flex">
          <FaGift className="text-2xl text-orange-700" />
          Customize Your Dream Vacation with Our Travel Packages
        </p>
      </SwiperSlide>
      <SwiperSlide className="flex h-24 bg-inherit text-white text-center w-full mt-3">
        {/* <MdOutlineExplore className="text-3xl text-orange-700" /> */}
        <p className="flex">
          <SiHappycow className="text-2xl text-orange-700" />
          Adventure Awaits: Choose Your Perfect Tour Package
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
