"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import PopularTours from "@/components/PopularTours";
import Discover from "@/components/Discover";

export default function Page() {
  //  const [imagesLoaded, setImagesLoaded] = useState(false);
  // useEffect(() => {
  //   const handleImageLoad = () => {
  //     // Set imagesLoaded to true when all images have loaded
  //     setImagesLoaded(true);
  //   };

  //   // Listen for the load event on all images
  //   window.addEventListener("load", handleImageLoad);

  //   // Clean up event listener
  //   return () => {
  //     window.removeEventListener("load", handleImageLoad);
  //   };
  // }, []);

  // setTimeout(() => {
  //   setImagesLoaded(true)
  // }, 1500);

  return (
    <div className="bg-slate-900 my-0 py-0 font-custom">
      <Hero />
      <PopularTours />
      <Discover />
    </div>
  );
}
