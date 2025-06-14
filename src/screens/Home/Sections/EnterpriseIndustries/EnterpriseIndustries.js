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
    <section className="bg-black text-white py-20 px-6 md:px-12 rounded-3xl">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-400 uppercase mb-2">Industries</p>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12">
          Enterprise-Ready
        </h2>

        {/* Icons Section */}
        <div className="flex justify-center items-center gap-16 mb-12">
          {visibleItems.map((item, index) => {
            const isCenter = index === 1;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center w-82 h-100"
              >
                <div className="relative w-32 h-32 flex items-center justify-center">
                  {isCenter && (
                    <svg
                      className="absolute w-full h-full animate-spin-slow"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="188"
                        strokeDashoffset="47"
                        strokeLinecap="round"
                        className="text-cyan-500"
                      />
                    </svg>
                  )}

                  {/* Circle container with icon and label inside */}
                  <div className="w-28 h-28 rounded-full bg-cyan-800/30 text-cyan-300 flex flex-col items-center justify-center p-3 z-10">
                    <div className="text-3xl mb-1">{item.icon}</div>
                    <p className="text-xs text-center">{item.label}</p>
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
          <p className="text-sm max-w-xl">
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
