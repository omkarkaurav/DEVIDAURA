import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="hero-container w-11/12 md:w-4/5 h-4/5 mt-5 flex flex-col items-center relative shadow-lg rounded-xl p-6">
        
        {/* Title */}
        <div className="text-center z-10">
          <div className="flex gap-6 md:gap-12 text-4xl md:text-6xl font-bold">
            <h1>DEVID</h1>
            <h1>AURA</h1>
          </div>
          <p className="flex gap-4 md:gap-10 text-lg md:text-xl mt-2 text-blue-500">
            <span>Presence in</span>
            <span>every step</span>
          </p>
        </div>

        {/* Perfume Image */}
        <img
          className="absolute w-52 md:w-72 lg:w-96 -bottom-10"
          src="/src/assets/bottle-perfume.png"
          alt="Perfume Bottle"
        />

        {/* Shop & Socials */}
        <div className="w-full flex justify-between items-center p-4 mt-auto">
          <div className="ml-5">
            <a href="#">
              <button className="flex items-center border border-black bg-white px-4 py-2 rounded-full text-blue-600 font-semibold shadow-md">
                Shop Now
                <span className="ml-2 bg-blue-600 text-white p-1 rounded-full">
                  →
                </span>
              </button>
            </a>
          </div>
          <div className="flex flex-col gap-3 p-2 bg-white rounded-lg shadow-lg">
            <a href="#"><img src="/src/assets/instagram.svg" alt="Instagram" className="w-6"/></a>
            <a href="#"><img src="/src/assets/twitter.svg" alt="Twitter" className="w-6"/></a>
            <a href="#"><img src="/src/assets/facebook.svg" alt="Facebook" className="w-6"/></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
