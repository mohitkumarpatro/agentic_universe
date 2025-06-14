import React from "react";

const features = [
  {
    title: "Cognitive Architecture",
    icon: "🔌",
    description: "Agents reason, recall, and plan – not just respond",
  },
  {
    title: "Multi-Agent Collaboration",
    icon: "🔌",
    description:
      "Assign agents to different departments or workflows – they work together, not in isolation",
  },
  {
    title: "Real-Time Data Sync",
    icon: "🔌",
    description:
      "Context-aware action across live systems – not disconnected triggers",
  },
  {
    title: "Autonomous Action",
    icon: "🔌",
    description:
      "Agents initiate complex actions across systems without human prompts",
  },
];

export default function EnterpriseCognition() {
  return (
    <section className="bg-white text-black py-20 px-4">
      {/* Text Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-gray-500 text-sm mb-2">
          A New Blueprint for How AI Gets Work Done
        </p>
        <h2 className="text-3xl sm:text-5xl font-semibold leading-tight">
          More than automation. This is{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
            enterprise-grade
          </span>{" "}
          cognition.
        </h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-cyan-300 to-cyan-500 text-white rounded-xl p-6 flex flex-col items-center shadow-lg"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              {feature.title}
            </h3>
            <p className="text-sm text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
