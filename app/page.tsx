"use client";
import React from "react";
import Hero from "@/components/Hero";

import PopularTours from "@/components/PopularTours";
import Discover from "@/components/Discover";

export default function Page() {
  return (
    <div className="bg-slate-900 my-0 py-0 font-custom">
      <Hero />
      <PopularTours />
      <Discover />
    </div>
  );
}
