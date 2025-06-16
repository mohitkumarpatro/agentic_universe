import React from "react";
import Item1 from "./Images/Frame.png";
import Item2 from "./Images/Frame (1).png";
import Item3 from "./Images/Frame (2).png";
import Item4 from "./Images/Frame (3).png";
import Item5 from "./Images/Mask group (1).png";

const features = [
  {
    icon: Item1,
    title: "Think and act in real time",
    description:
      "Formli’s agentic AI leverages live data and context to make the right decision - across every channel, tool, and customer touchpoint.",
  },
  {
    icon: Item2,
    title: "Activate outcomes, not just automations",
    description:
      "From demo rebookings to refunds to retention – deploy fully functional agents that deliver measurable results from day one. No code. No lag.",
  },
  {
    icon: Item3,
    title: "Turn business logic into intelligent action",
    description:
      "Seamlessly integrate your systems, workflows, and rules. Our agents understand how your business runs — and execute accordingly.",
  },
  {
    icon: Item4,
    title: "Learn, adapt, & optimize - autonomously",
    description:
      "Formli agents continuously improve with every interaction, just like your best team member — only faster, always on, and built to scale.",
  },
];

export default function ReimagineWork() {
  return (
    <div className="pt-20 bg-white text-gray-800">
      <div className="text-center ">
        <h1 className="text-4xl md:text-[32px] font-500 mb-10 px-4 md:px-10">
          <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-transparent font-500">
            Reimagine Work
          </span>
          <span className="text-[#080808] font-500 ml-3">with AI</span>
        </h1>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-20">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="border rounded-xl py-6 px-8 shadow hover:shadow-md transition min-h-[380px] flex flex-col justify-between"
            >
              <div>
                <img
                  src={feature.icon}
                  alt={`Feature ${idx + 1}`}
                  className="w-[60px] h-[60px] object-contain hover:scale-125"
                />
                <h3 className="text-[22px] font-500 mt-8 mb-4 text-left min-h-[56px] border-b-2 pb-5">
                  <p>
                    {feature.title.split(" ").slice(0, 4).join(" ")}
                    <br />
                    {feature.title.split(" ").slice(4).join(" ")}
                  </p>
                </h3>

                <p className="text-[16px] text-gray-600 font-400 text-left min-h-[10px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="py-20 mt-16 text-center bg-gradient-to-br from-white to-blue-50 px-4">
          <div className="mb-6">
            <img
              src={Item5}
              alt={``}
              className="w-[60px] h-[60px] object-contain mx-auto"
            />

            <h2 className="text-3xl md:text-[48px] font-500 mt-6">
              Experience the{" "}
              <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-transparent">
                AI agent
              </span>
            </h2>
            <p className="text-gray-600 text-[16px] max-w-2xl mx-auto  mt-8">
              Elevate your site with AI embedded across the Webflow platform and
              extend its power with deep integrations with a growing ecosystem
              of AI-powered apps.
            </p>
          </div>
          <button className="mt-4 px-6 py-3 text-white font-500 rounded-full bg-gradient-to-r from-[#00C2D1] to-[#2684FF] hover:opacity-90 transition text-[16px]">
            Explore The Live Demo
          </button>
        </section>
      </div>
    </div>
  );
}
