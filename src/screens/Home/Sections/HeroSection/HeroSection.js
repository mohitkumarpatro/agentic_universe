import React, { useRef, useState } from "react";
import video1 from "./Images/5854603-uhd_4096_2160_24fps.mp4";

export const HeroSection = () => {
  const companyLogos = [
    { name: "Casper", opacity: "opacity-40" },
    { name: "SONOS", opacity: "opacity-60" },
    { name: "Samsara", opacity: "opacity-50" },
    { name: "Pendulum", opacity: "opacity-45" },
    { name: "Casper", opacity: "opacity-40" },
    { name: "Whereby", opacity: "opacity-35" },
    { name: "Pendulum", opacity: "opacity-50" },
  ];

  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <section className="pt-40 pb-16 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <p className="text-[#08080880] text-[16px] mb-4">
            Move beyond automations
          </p>

          <h1 className="text-6xl md:text-[72px] font-500 mb-8">
            <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-transparent">
              Agentic Universe
            </span>
          </h1>

          <h2 className="text-4xl md:text-[48px] text-[#080808] mb-8 max-w-4xl mx-auto font-400">
            Hire Agentic AI That Works Like a Team
          </h2>

          <p className="text-[16px] text-[rgba(8,8,8,0.75)] mb-16 max-w-xl mx-auto leading-relaxed">
            Launch Enterprise-Ready Agentic AI That Handles Customer Service,
            Sales, Marketing and Ops - Without Human Intervention
          </p>

          {/* Company Logos */}
          <div className="relative overflow-hidden mb-16 mx-auto w-full max-w-3xl">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="whitespace-nowrap flex animate-scroll gap-12">
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <div
                  key={index}
                  className={`text-2xl font-medium text-gray-400 ${logo.opacity}`}
                >
                  {logo.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🔥 Video Section with Hover Controls */}
        <div
          className="relative w-full max-w-3xl mx-auto group"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={video1}
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg object-cover"
          />
          {/* Play/Pause button on hover */}
          <button className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {isPaused ? "▶" : "⏸"}
          </button>
        </div>
      </div>
    </section>
  );
};
