import React, { useState } from "react";

const releases = [
  {
    title: "Endex",
    image:
      "https://carzonwheel.com/_next/image?url=https%3A%2F%2Fimg.carzonwheel.com%2Fuploads%2Fmahindra_scorpio_classic_1.webp&w=1920&q=60", // replace with real image
    desc: "Computer-Using Agent",
    date: "Dec 12, 2024",
    borderColor: "border-blue-500",
  },
  {
    title: "ALTERA",
    image:
      "https://carzonwheel.com/_next/image?url=https%3A%2F%2Fimg.carzonwheel.com%2Fuploads%2Fmahindra_scorpio_classic_2.webp&w=384&q=50",
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
    <div className="py-10 px-4 md:px-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-500">News</p>
          <h2 className="text-2xl font-semibold">
            <span className="text-blue-500">Latest</span>{" "}
            <span className="text-black">Releases</span>
          </h2>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-gray-600 hover:text-black text-sm"
        >
          {expanded ? "Show Less" : "View All"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleReleases.map((release, index) => (
          <div key={index} className="flex flex-col">
            <div
              className={`rounded-xl overflow-hidden border-4 ${release.borderColor}`}
            >
              <img
                src={release.image}
                alt={release.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-base font-semibold mt-3">{release.desc}</h3>
            <p className="text-sm text-gray-500">{release.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
