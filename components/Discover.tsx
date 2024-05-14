"use client";
import React from "react";
import { DiscoverImageStyle } from "./styles";
import { DiscoverOverlayStyle } from "./styles";
import { BsPlayCircle } from "react-icons/bs";
import {
  SlSocialInstagram,
  SlSocialDribbble,
  SlSocialBehance,
} from "react-icons/sl";
import { TiSocialPinterest } from "react-icons/ti";

const Discover = () => {
  return (
    <div
      className="min-h-[100vh] w-full px-7 md:px-24 flex flex-col justify-center bg-[url(/background4.jpeg)]"
      style={DiscoverImageStyle}
    >
      <div
        className="bg-[url(/background4.jpg)] "
        style={DiscoverOverlayStyle}
      ></div>
      <div className="relative h-full flex flex-col justify-center font-bold">
        <p className="text-white text-5xl md:text-6xl md:w-[40%]">
          Discover the world in a new way
        </p>
        <p className="flex md:justify-normal text-white font-normal items-center gap-x-3 mt-2">
          <BsPlayCircle className="text-white text-4xl cursor-pointer hover:text-orange-600" />{" "}
          Watch the video
        </p>
        <div className="w-full py-4 grid grid-cols-1   md:flex gap-y-6 gap-x-3">
          <p className="text-white font-montserrat font-normal  md:w-2/5">
            Travel isn't just about the destinations; it's about the moments
            that unfold along the way. It's the joy of discovering new cultures,
            the thrill of stepping into the unknown, and the stories that become
            a part of our journey. Every adventure is a chapter in the book of
            life, each page filled with memories that color our world.
          </p>
          <div className="flex-grow flex justify-between  space-x-5">
            <div className="h-full w-[50%] relative group">
              <img
                src="/vid2.jpeg"
                alt=""
                className="cursor-pointer h-36 w-full object-cover object-top rounded group-hover:brightness-50 brightness-75 transition-all duration-300"
              />
              <BsPlayCircle className="cursor-pointer text-3xl absolute z-20 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 " />
            </div>

            <div className="h-full w-[50%] relative group">
              <img
                src="/vid.jpeg"
                alt=""
                className="cursor-pointer h-36 w-full object-cover object-top rounded group-hover:brightness-50 brightness-75 transition-all duration-300 "
              />
              <BsPlayCircle className="cursor-pointer text-3xl absolute z-20 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 " />
            </div>
          </div>
        </div>
      </div>
      <div className="z-20 top-0 bottom-0 flex items-end text-white p-4 justify-between">
        <SlSocialInstagram className="text-3xl hover:text-orange-600" />
        <SlSocialDribbble className="text-3xl hover:text-orange-600" />
        <SlSocialBehance className="text-3xl hover:text-orange-600" />
        <TiSocialPinterest className="text-3xl hover:text-orange-600" />
      </div>
    </div>
  );
};

export default Discover;
