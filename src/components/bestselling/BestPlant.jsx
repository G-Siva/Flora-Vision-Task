import React from "react";
import SectionTitle from "../layout/SectionTitle";
import GlassCard from "../layout/GlassCard";
import { images } from "@/assets/assets";
import Button from "../layout/Button";

const BestPlant = () => {
  return (
    <section className="min-h-screen px-6 py-14">

      {/* Title */}
      <div className="text-center text-3xl mb-20">
        <SectionTitle text1={"Our"} text2={"Best O2"} />
      </div>

      {/* Main Glass Card */}
      <GlassCard
        className="
          w-full max-w-6xl mx-auto rounded-[40px] p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-visible">
        {/* Left — Plant Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src={images.plant1}
            alt="O2 Plant"
            className="
              w-[260px] sm:w-[300px] lg:w-[380px] drop-shadow-2xl object-contain"/>
        </div>

        {/* Right — Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col text-white">
          <h1 className="text-xl sm:text-2xl font-semibold leading-snug">
            We Have Small And Best O2 Plants Collection's
          </h1>

          <p className="text-sm text-white/80 mt-4 leading-relaxed">
            Oxygen-producing plants, often referred to as "O2 plants," are those
            that release oxygen into the atmosphere through the process of
            photosynthesis.
          </p>

          <p className="text-sm text-white/80 mt-4 leading-relaxed">
            Many plants can help filter out pollutants and toxins from the air,
            such as formaldehyde, benzene, and trichloroethylene. This makes the
            air cleaner and healthier to breathe.
          </p>

          {/* Explore + Arrows */}
          <div className="flex justify-between items-center mt-6">
            <Button text={"Explore"} />

            <div className="flex gap-4 items-center">
              {/* Left Arrow */}
              <img
                className="w-5 h-5 rotate-180 opacity-80 cursor-pointer"
                src={images.arrow}
                alt="prev"
              />

              {/* Counter */}
              <span className="text-md">
                01/<span className="text-xs opacity-80">04</span>
              </span>

              {/* Right Arrow */}
              <img
                className="w-5 h-5 opacity-80 cursor-pointer"
                src={images.arrow}
                alt="next"
              />
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Indicators */}
      <div className="flex items-center justify-center gap-3 mt-10">
        <div className="w-6 h-2 rounded-full bg-white/70"></div>
        <div className="w-2 h-2 rounded-full bg-white/70"></div>
        <div className="w-2 h-2 rounded-full bg-white/70"></div>
      </div>
    </section>
  );
};

export default BestPlant;
