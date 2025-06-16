import React from "react";
import Img1 from "./Images/Group 1321317739.png";

const cards = [
  {
    title: "Cognitive Architecture",
    description: "Agents reason, recall, and plan – not just respond",
  },
  {
    title: "System Integrators",
    description: "Agents reason, recall, and plan – not just respond",
  },
  {
    title: "Hardware & Tech Partners",
    description: "Agents reason, recall, and plan – not just respond",
  },
  {
    title: "Enterprise Ready",
    description: "Agents reason, recall, and plan – not just respond",
  },
];

export default function PlatformCards() {
  return (
    <section className="bg-white py-16 px-5 text-black">
      <div className="max-w-8xl mx-auto">
        <p className="text-[16px] text-gray-400 mb-1 text-center">Industries</p>
        <h2 className="text-[48px] text-center mb-12">
          <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-transparent font-500  ">
            Platform
          </span>{" "}
          for all
        </h2>

        <div className="overflow-x-auto">
          <div className="flex gap-6 px-4" style={{ width: "max-content" }}>
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl shadow-sm p-5 px-4 flex-shrink-0 flex flex-col items-center text-center hover:shadow-md transition"
                style={{ minWidth: "calc(100% / 3.3)" }} // 3 cards + half of 4th
              >
                {/* Title - single line, aligned start, with ellipsis if overflow */}
                <h3 className="text-[#080808] text-[24px] font-50 w-full text-start whitespace-nowrap overflow-hidden text-ellipsis">
                  {card.title}
                </h3>

                {/* Description - single line, aligned start, with ellipsis if overflow */}
                <p className="text-[16px] text-[#080808CC] mt-1 w-full text-start whitespace-nowrap overflow-hidden text-ellipsis">
                  {card.description}
                </p>

                {/* Image */}
                <p className="mt-10">
                  <img
                    src={Img1}
                    alt="Img1"
                    className="w-[300px] h-[300px] object-contain"
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
