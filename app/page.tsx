"use client";
import React,{useState, useEffect} from "react";
import Hero from "@/components/Hero";
import PopularTours from "@/components/PopularTours";
import Discover from "@/components/Discover";

export default function Page() {
   const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const handleImageLoad = () => {
      // Set imagesLoaded to true when all images have loaded
      setImagesLoaded(true);
    };

    // Listen for the load event on all images
    window.addEventListener("load", handleImageLoad);

    // Clean up event listener
    return () => {
      window.removeEventListener("load", handleImageLoad);
    };
  }, []);

  setTimeout(() => {
    setImagesLoaded(true)
  }, 6000);

  return (
    <div className="bg-slate-900 my-0 py-0 font-custom">
      {!imagesLoaded && (
        <div className="flex justify-center items-center h-screen transition-all duration-500">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
        </div>
      )}
      {imagesLoaded && (
        <>
          <Hero />
          <PopularTours />
          <Discover />
        </>
      )}
    </div>
  );
}
