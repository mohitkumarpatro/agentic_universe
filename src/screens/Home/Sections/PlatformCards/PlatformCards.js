import React from "react";

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
    <section className="bg-white py-16 px-4 text-black">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 text-center mb-2">Platform</p>
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-cyan-500">Platform</span> for all
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition"
            >
              {/* Placeholder for image or graphic */}
              <div className="w-32 h-32 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-lg mb-4"></div>

              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
