import React, { useState } from "react";

const industries = [
  { label: "BFSI Industry", icon: "🏦" },
  { label: "Retail Industry", icon: "🏬" },
  { label: "Travel Industry", icon: "🧳" },
  { label: "Digital Native Industry", icon: "💻" },
  { label: "Energy & Utilities", icon: "⚡" },
];

export default function EnterpriseIndustries() {
  const [activeIndex, setActiveIndex] = useState(2);

  const rotateLeft = () => {
    setActiveIndex(
      (prev) => (prev - 1 + industries.length) % industries.length
    );
  };

  const rotateRight = () => {
    setActiveIndex((prev) => (prev + 1) % industries.length);
  };

  const getVisibleItems = () => {
    const prev = (activeIndex - 1 + industries.length) % industries.length;
    const next = (activeIndex + 1) % industries.length;
    return [industries[prev], industries[activeIndex], industries[next]];
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto text-center ">
        <p className="text-[16px] text-gray-400 mb-1">Industries</p>
        <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-transparent font-500 text-[48px] ">
          Enterprise-Ready
        </span>

        {/* Icons Section */}
        <div className="flex justify-center items-center gap-16 mb-12 mt-10">
          {visibleItems.map((item, index) => {
            const isCenter = index === 1;
            return (
              <div
                key={item.label}
                className={`flex flex-col items-center ${
                  isCenter ? "z-10" : ""
                }`}
              >
                <div className="relative w-72 h-72 flex items-center justify-center">
                  {/* Animated ring for center item */}
                  {isCenter && (
                    <svg
                      className="absolute w-full h-full animate-spin-slow"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="48.5"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="280"
                        strokeDashoffset="110"
                        strokeLinecap="round"
                        className="text-[#00C2D1]"
                      />
                    </svg>
                  )}

                  {/* Circle container */}
                  <div
                    className={`
        rounded-full flex flex-col items-center justify-center
        ${isCenter ? "w-72 h-72 text-cyan-200" : "w-48 h-48 text-cyan-300"}
      `}
                    style={{
                      background: `linear-gradient(135deg, #2684FF00 0%, #00C2D1 100%)`,
                    }}
                  >
                    <div
                      className={`${
                        isCenter ? "text-5xl mb-3" : "text-4xl mb-2"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <p
                      className={`text-center ${
                        isCenter ? "text-base font-medium" : "text-sm"
                      }`}
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Description & Arrows */}
        <div className="flex justify-center items-center gap-4 text-gray-300">
          <button
            onClick={rotateLeft}
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white"
          >
            ←
          </button>
          <p className="text-[16px] max-w-md">
            Sees, hears, and reads like a human. Understands voice, video, tone,
            and emotion in real-time – detecting urgency, frustration.
          </p>
          <button
            onClick={rotateRight}
            className="w-10 h-10 rounded-full bg-sky-400 hover:bg-sky-500 flex items-center justify-center text-white"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
