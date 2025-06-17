import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-start lg:justify-center text-center text-white px-4 pt-28 lg:pt-0"
    >
      <h1 className="text-3xl font-black lg:text-6xl drop-shadow-lg">
        Unlimited movies, TV <br /> shows, and more
      </h1>
      <p className="mt-4 text-lg ">Starts at ₱169. Cancel anytime.</p>
      <p className="mt-2">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center w-full max-w-xl">
        <input
          type="text"
          placeholder="Email address"
          className="px-4 py-3 rounded-md w-full sm:w-2/3"
        />
        <button className="px-6 py-3 bg-[#E50914] text-white font-semibold rounded-md w-full sm:w-auto">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
