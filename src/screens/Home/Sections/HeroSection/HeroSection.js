import React from "react";
import Img1 from "./Images/Group 1321317678.png";

export const HeroSection = () => {
  // Company logos data
  const companyLogos = [
    { name: "Casper", opacity: "opacity-40" },
    { name: "SONOS", opacity: "opacity-60" },
    { name: "Samsara", opacity: "opacity-50" },
    { name: "Pendulum", opacity: "opacity-45" },
    { name: "Casper", opacity: "opacity-40" },
    { name: "Whereby", opacity: "opacity-35" },
    { name: "Pendulum", opacity: "opacity-50" },
  ];

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

          <h2 className="text-4xl md:text-[48px]  text-[#080808] mb-8 max-w-4xl mx-auto font-400">
            Hire Agentic AI That Works Like a Team
          </h2>

          <p className="text-[16px] text-[rgba(8,8,8,0.75)] mb-16 max-w-xl mx-auto leading-relaxed">
            Launch Enterprise-Ready Agentic AI That Handles Customer Service,
            Sales, Marketing and Ops - Without Human Intervention
          </p>

          {/* Company Logos */}
          <div className="relative overflow-hidden mb-16 mx-auto w-full max-w-3xl">
            {/* Gradient overlays for easing on sides */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Scrolling container */}
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
        <img src={Img1} alt="Img1" className="w-45 object-contain" />
      </div>
    </section>
  );
};
