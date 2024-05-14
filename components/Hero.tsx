import React from "react";
import Background from "@/public/background.jpeg";
import Header from "./Header";
import { overlayStyle, backgroundImageStyle } from "./styles";
import Carousel from "./Carousel";
import MobileCarousel from "./MobileCarousel";

const Hero = () => {
  return (
    <div
      className="min-h-[100vh] w-full px-7 md:px-24 flex flex-col bg-[url(/new-bg.png)] bg-bottom bg-cover bg-fixed"
      // style={backgroundImageStyle}
    >
      <div style={overlayStyle}></div>
      <div className="relative">
        <Header />
        <div className="flex flex-col justify-center min-h-[67vh] overflow-hidden md:px-14">
          <p className="text-white text-[50px] md:text-[70px] font-[800]">
            Travel Time
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
