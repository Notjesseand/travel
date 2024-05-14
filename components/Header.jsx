import React, { useState, useEffect, useRef } from "react";
import Logo from "@/public/logo.png";
import { TfiSearch } from "react-icons/tfi";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [bars, setBars] = useState(false);
  const dropdownRef = useRef(null);

  const toggle = () => {
    setBars((prevState) => !prevState);
    setTimeout(() => {
      setBars(false);
    }, 10000);
  };

  const openDropdown = () => {
    setBars(true);
  };

  const closeDropdown = () => {
    setBars(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (bars) {
        closeDropdown();
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [bars]);

  const handleDropdownHover = () => {
    openDropdown();
  };

  const handleDropdownLeave = () => {
    setTimeout(closeDropdown, 1000); // Close dropdown after 300ms
  };

  return (
    <div className="bg-inherit text-white pt-5 md:pt-8 w-full border-b-[1.5px] rounded-sm  flex items-center justify-between">
      <div className="flex">
        <img src={Logo} alt="" className="h-14 md:h-20 cursor-pointer" />
        <p className="flex items-center text-xl font-bold font-mono cursor-pointer">
          Werlton
        </p>
      </div>
      <div className="hidden md:flex justify-evenly space-x-4 md:space-x-6 lg:space-x-8">
        <p className="cursor-pointer hover:text-orange-600 border-b-orange-700 border-b-[1.9px]">
          Main
        </p>
        <p className="cursor-pointer hover:text-orange-600">About Us</p>
        <p className="cursor-pointer hover:text-orange-600">Tours</p>
        <p className="cursor-pointer hover:text-orange-600">Gallery</p>
        <p className="cursor-pointer hover:text-orange-600">Reviews</p>
        <p className="cursor-pointer hover:text-orange-600">Contacts</p>
      </div>
      <div className="flex">
        <TfiSearch className="hover:text-orange-600 cursor-pointer hidden md:flex text-[25px]" />
        <FaBars
          onClick={toggle}
          className={`hover:text-orange-600 cursor-pointer flex md:hidden mr-5 text-[25px] transition transform ${
            bars ? "rotate-90" : "hover:text-white"
          }`}
        />
      </div>
      {bars && (
        <div
          onMouseEnter={handleDropdownHover}
          onMouseLeave={handleDropdownLeave}
          className={` px-3 rounded-md pb-2 backdrop-blur z-20  absolute w-full h-auto top-20 block md:hidden space-y-3 transition-opacity ${
            bars ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="cursor-pointer hover:text-orange-600 mt-2">About Us</p>
          <p className="cursor-pointer hover:text-orange-600">Tours</p>
          <p className="cursor-pointer hover:text-orange-600">Gallery</p>
          <p className="cursor-pointer hover:text-orange-600">Reviews</p>
          <p className="cursor-pointer hover:text-orange-600">Contacts</p>
        </div>
      )}
    </div>
  );
};

export default Header;
