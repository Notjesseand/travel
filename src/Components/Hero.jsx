import React from "react";
import Background from "../assets/background.jpeg";
import Header from "./Header";
import { overlayStyle, backgroundImageStyle } from "./styles";
import Carousel from "./Carousel";
import MobileCarousel from "./MobileCarousel";

const Hero = () => {

  return (
    <div
      className="min-h-[100vh] w-full px-7 md:px-24 flex flex-col"
      style={backgroundImageStyle}
    >
      <div style={overlayStyle}></div>
      <div className="relative">
        <Header />
        <div className="flex flex-col justify-center min-h-[67vh] overflow-hidden md:px-14">
          <p className="text-white text-[50px] md:text-[70px] font-[800]">Travel Time</p>
          <p className="text-white ">Don't let the loud noise scare you, <br /> Let the rythms of the dance amuse you. <br /> You're given a very rare chance <br /> Feel the movement of our ancestors</p>
        </div>
        <Carousel className="hidden md:block"/>
        <MobileCarousel/>
      </div>
    </div>
  );
};

export default Hero;
