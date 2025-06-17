import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Image from "next/image";
import HeroImage from "./public/hero.jpg";

const page = () => {
  return (
    <div className="relative w-full">
      {/* Background image */}
      <Image
        src={HeroImage}
        alt="Hero Background"
        fill
        priority
        className="object-cover -z-10 blur-sm"
      />

      {/* Foreground content */}
      <Navbar />
      <Hero />
    </div>
  );
};

export default page;
