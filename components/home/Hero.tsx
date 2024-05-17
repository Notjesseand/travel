import React from "react";
import Header from "../Header";
import { overlayStyle, backgroundImageStyle } from "../styles";
import Carousel from "./Carousel";
import MobileCarousel from "./MobileCarousel";

const Hero = () => {
  const backgroundImg = () => {};

  return (
    <div
      className="min-h-[100vh] w-full px-7 md:px-24 flex flex-col bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1715954330/new-bg_xroc2r.jpg)] bg-bottom bg-cover bg-fixed"
      // style={backgroundImageStyle}
    >
      <div style={overlayStyle}></div>
      <div className="relative">
        <Header />
        <div className="flex flex-col justify-center min-h-[67vh] overflow-hidden md:px-14">
          <p className="text-white text-[50px] md:text-[70px] font-[800]">
            Let The Journey Begin
          </p>
          <p className="text-white ">
            Don&apos;t let the loud noise scare you, <br /> Let the rythms of
            the dance amuse you. <br /> You&apos;re given a very rare chance{" "}
            <br /> Feel the movement of our ancestors
          </p>
        </div>
        <div className="hidden md:block">
          <Carousel />
        </div>
        <div className="block md:hidden">
          <MobileCarousel />
        </div>
      </div>
    </div>
  );
};

export default Hero;
