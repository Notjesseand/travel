// "use client";
import React, { useState, useEffect, useRef } from "react";
import Logo from "@/public/logo.png";
import { TfiSearch } from "react-icons/tfi";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import Image from "next/image";

const Header = () => {
  const [bars, setBars] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleSearchbar = () => {
    setOpen(!open);
  };

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
    <div>
      <div className="bg-inherit text-white pt-5 md:pt-8 w-full border-b-[1.5px] rounded-sm  flex items-center justify-between">
        <div className="flex">
          <img src="" alt="" />
          <Image
            src={Logo}
            alt=""
            height={60}
            width={80}
            className="h-14 md:h-20 cursor-pointer"
          />
          <p className="flex items-center text-xl font-bold font-mono cursor-pointer">
            Werlton
          </p>
        </div>
        <div className="hidden md:flex justify-evenly space-x-4 md:space-x-6 lg:space-x-8">
          <p className="cursor-pointer hover:text-orange-600 border-b-orange-700 border-b-[1.9px]">
            Main
          </p>
          <p className="cursor-pointer hover:text-orange-600">About Us</p>
          <Link href="/tours">
            <p className="cursor-pointer hover:text-orange-600">Tours</p>
          </Link>
          <p className="cursor-pointer hover:text-orange-600">Gallery</p>
          <p className="cursor-pointer hover:text-orange-600">Reviews</p>
          <p className="cursor-pointer hover:text-orange-600">Contacts</p>
        </div>
        <div className="flex">
          {open ? (
            <MdClose
              className="hover:text-orange-600 cursor-pointer hidden md:flex text-[29px]"
              onClick={toggleSearchbar}
            />
          ) : (
            <TfiSearch
              className="hover:text-orange-600 cursor-pointer hidden md:flex text-[25px]"
              onClick={toggleSearchbar}
            />
          )}

          {/*  */}
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
            <p className="cursor-pointer hover:text-orange-600 mt-2">
              About Us
            </p>
            <p className="cursor-pointer hover:text-orange-600">Tours</p>
            <p className="cursor-pointer hover:text-orange-600">Gallery</p>
            <p className="cursor-pointer hover:text-orange-600">Reviews</p>
            <p className="cursor-pointer hover:text-orange-600">Contacts</p>
          </div>
        )}
      </div>
      <div className="">
        {open && (
          <input
            type="text"
            name=""
            placeholder="search"
            id=""
            className="absolute blinking-cursor w-full flex mt-5 rounded-full py-3 outline-none border-2 border-orange-600 bg-slate-100 text-black px-4"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
