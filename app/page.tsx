"use client";
import React from "react";
import Hero from "@/components/home/Hero";
import PopularTours from "@/components/home/PopularTours";
import Discover from "@/components/home/Discover";
import TopDestinations from "@/components/home/TopDestinations";

export default function Page() {
  return (
    <div className="bg-slate-900 my-0 py-0 font-custom">
      <Hero />
      <PopularTours />
      <TopDestinations />
      <Discover />
    </div>
  );
}
