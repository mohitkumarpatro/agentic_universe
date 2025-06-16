import React from "react";
import img1 from "./Images/Group 1321317731.png";

const cards = [
  {
    title: "Cognitive Architecture",
    icon: img1,
    description: "Agents reason, recall, and plan – not just respond",
  },
  {
    title: "System Integrators",
    icon: img1,
    description: "Agents reason, recall, and plan – not just respond",
  },
  {
    title: "Hardware & Tech Partners",
    icon: img1,
    description: "Agents reason, recall, and plan – not just respond",
  },
  {
    title: "Enterprise Ready",
    icon: img1,
    description: "Agents reason, recall, and plan – not just respond",
  },
];

export default function EnterpriseCognition() {
  return (
    <section className="bg-white text-black py-20 px-4">
      {/* Text Section */}
      <p className="text-[16px] text-gray-400 mb-1 text-center">
        A New Blueprint for How AI Gets Work Done
      </p>
      <div className="text-center max-w-3xl mx-auto mb-16 text-[48px] font-500">
        <span className="text-black font-500 text-[48px]">
          More than automation. This is{" "}
        </span>
        <br />
        <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-transparent font-500 text-[48px]">
          enterprise-grade
        </span>{" "}
        cognition.
      </div>

      {/* Grid Section */}
      <div className="overflow-x-auto">
        <div
          className="flex gap-6 px-4"
          // style={{ width: "max-content" }}
        >
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

              {/* Image */}
              <p className="my-5 ">
                <img
                  src={card.icon}
                  alt="Img1"
                  className="w-full h-full object-contain"
                />
              </p>
              <p className="text-[16px] text-[#080808CC] mt-1 w-full text-start whitespace-nowrap overflow-hidden text-ellipsis">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
