import React, { useState } from "react";
import Img1 from "./Images/Group 1321317597.png";

const releases = [
  {
    title: "Endex",
    image: Img1,
    desc: "Computer-Using Agent",
    date: "Dec 12, 2024",
    borderColor: "border-blue-500",
  },
  {
    title: "ALTERA",
    image: Img1,
    desc: "Computer-Using Agent",
    date: "Dec 12, 2024",
    borderColor: "",
  },
  {
    title: "Zendesk",
    image: Img1,
    desc: "Computer-Using Agent",
    date: "Dec 12, 2024",
    borderColor: "",
  },
  {
    title: "Zendesk",
    image:
      "https://carzonwheel.com/_next/image?url=https%3A%2F%2Fimg.carzonwheel.com%2Fuploads%2Fmahindra_scorpio_classic_3.webp&w=384&q=50",
    desc: "Computer-Using Agent",
    date: "Dec 12, 2024",
    borderColor: "",
  },
  // You can add more cards if you want to test View All
];

export default function LatestReleases() {
  const [expanded, setExpanded] = useState(false);
  const visibleReleases = expanded ? releases : releases.slice(0, 3);

  return (
    <div className="py-20 px-4 md:px-[100px]">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-[16px] text-gray-400 mb-1">News</p>

          <h1 className="text-[48px] font-500 mb-10">
            <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-transparent font-500">
              Latest
            </span>
            <span className="text-[#080808] font-500 ml-3">Releases </span>
          </h1>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-gray-600 hover:text-black text-[16px] underline pr-5"
        >
          {expanded ? "Show Less" : "View All"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleReleases.map((release, index) => (
          <div key={index} className="flex flex-col">
            <div className={`rounded-xl overflow-hidden`}>
              <img
                src={release.image}
                alt={release.title}
                className="w-[464px] h-[440px] object-cover"
              />
            </div>
            <h3 className="text-[20px] font-500 mt-5">{release.desc}</h3>
            <p className="text-[14px] text-[#080808]">{release.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
