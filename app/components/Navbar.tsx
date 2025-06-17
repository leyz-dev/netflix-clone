"use client";
import React from "react";
import Image from "next/image";
import NetflixLogo from "../public/Logonetflix.png";
import LanguageDropdown from "./LanguageDropdown";

const Navbar = () => {
  return (
    <nav className="w-full h-20 p-5 py-4 absolute top-0 left-0 z-10 bg-gradient-to-b from-black/70 to-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px]">
          <Image
            src={NetflixLogo}
            alt="Netflix logo"
            layout="responsive"
            width={160}
            height={48}
            priority
          />
        </div>
        <div className="flex items-center gap-x-4">
          <LanguageDropdown />
          <button className="bg-[#E50914] text-white font-bold px-4 py-2 text-sm rounded-md">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
