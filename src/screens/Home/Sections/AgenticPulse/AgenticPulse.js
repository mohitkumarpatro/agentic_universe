import React, { useState } from "react";
import Img1 from "./Images/Ellipse 11755.png";
// import EllipseBg from "./Images/Rectangle 484.png";

const features = [
  {
    title: "Sales CX AI",
    desc: "Instantly understands customer needs, adapts to every conversation, and drives conversions with precision.",
    version: "service 1.0",
  },
  {
    title: "Service CX AI",
    desc: "Instantly understands customer needs, adapts to every conversation, and drives conversions with precision.",

    version: "service 2.0",
  },
  {
    title: "Marketing CX AI",
    desc: "Instantly understands customer needs, adapts to every conversation, and drives conversions with precision.",

    version: "service 3.0",
  },
  {
    title: "Operations CX AI",
    desc: "Instantly understands customer needs, adapts to every conversation, and drives conversions with precision.",

    version: "service 4.0",
  },
];

export default function AgenticPulse() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        {/* LEFT SECTION */}
        <div>
          <p className="text-sm text-gray-400 mb-6 text-[16px]">
            Powering Outcomes Across Every Domain
          </p>
          <h2 className="text-4xl sm:text-[48px] font-500 mb-4">
            Agentic{" "}
            <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-transparent font-500">
              Pulse™
            </span>
          </h2>
          <p className="text-[#080808] mb-6 max-w-sm text-[16px] font-200">
            Infinite context, seamless adaptability-driving and evolving results
            in sales, service, marketing, and operations.
          </p>
          <button className="mt-4 px-6 py-3 text-white font-500 rounded-full bg-gradient-to-r from-[#00C2D1] to-[#2684FF] hover:opacity-90 transition text-[16px]">
            Experience AI in Action
          </button>

          {/* Feature Cards */}
          <div className="relative h-[550px] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bottom-0 overflow-y-auto pr-2">
              {/* Feature Cards */}
              <div className="mt-10 space-y-4">
                {features.map((item, i) => {
                  const isExpanded = expandedItems[i];

                  return (
                    <div
                      key={i}
                      onClick={() => toggleExpand(i)}
                      className={`cursor-pointer p-5 relative rounded-xl border border-gray-200 transition-all duration-300 ${
                        isExpanded ? "bg-white shadow-lg" : "bg-gray-50"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-2.5 h-2.5 bg-sky-500 rounded-full " />
                          <h4 className="text-[20px] font-400 text-[#080808]">
                            {item.title}
                          </h4>
                        </div>
                        <span className="text-[16px] text-[#080808B]">
                          {item.version}
                        </span>
                      </div>

                      {/* Expanding Section */}
                      <div
                        className={`transition-all duration-300 overflow-hidden  ${
                          isExpanded ? "max-h-40 mt-3" : "max-h-0"
                        }`}
                      >
                        <p className="text-gray-500 text-[16px]">{item.desc}</p>
                        {isExpanded ? (
                          <img
                            src={Img1}
                            alt="Img1"
                            className="w-20 h-15  absolute right-0 bottom-0"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex justify-center items-center max-w-7xl w-full bg-cover bg-center py-10 px-4">
          <div
            className="bg-cover bg-center w-full max-w-xl rounded-3xl shadow-2xl h-[600px] flex justify-center items-center"
            style={{ backgroundImage: `url("/Rectangle 484.png")` }} // Removed the curly braces and $ symbol
          >
            <div className="bg-white p-6 rounded-xl shadow text-center max-w-[300px]">
              <h3 className="text-[24px] font-bold mb-2 mx-auto max-w-[150px]">
                Contact our sales team
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Have questions or ready to get started? Fill out the form below,
                and we’ll get back to you as soon as possible.
              </p>
              <input
                type="email"
                placeholder="nico@default.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
              <button className="px-6 py-2 text-white font-500 rounded-full bg-gradient-to-r from-[#00C2D1] to-[#2684FF] hover:opacity-90 transition text-[16px]">
                Request A Demo →
              </button>
              <div className="mt-4 flex justify-center gap-4 text-xs text-gray-400">
                <span>🧩 Coefficient</span>
                <span>= Equals</span>
                <span>🎵 Harmonic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
