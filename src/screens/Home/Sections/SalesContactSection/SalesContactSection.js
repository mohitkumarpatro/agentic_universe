import React, { useState } from "react";

const features = [
  {
    title: "Sales CX AI",
    desc: "Instantly understands customer needs, adapts to every conversation, and drives conversions with precision.",
    version: "service 1.0",
  },
  {
    title: "Service CX AI",
    desc: "",
    version: "service 2.0",
  },
  {
    title: "Marketing CX AI",
    desc: "",
    version: "service 3.0",
  },
  {
    title: "Operations CX AI",
    desc: "",
    version: "service 4.0",
  },
];

export default function SalesContactSection() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Gradient Card with Contact Form */}
        <div className="bg-gradient-to-br from-cyan-300 via-cyan-400 to-cyan-500 p-10 rounded-2xl flex items-center justify-center shadow-xl relative">
          <div className="bg-white p-6 rounded-xl shadow-md max-w-sm w-full text-center z-10">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Contact our sales team
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Have questions or ready to get started? Fill out the form below,
              and we’ll get back to you as soon as possible.
            </p>
            <input
              type="email"
              placeholder="nico@default.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-2 rounded-md font-semibold">
              Request A Demo →
            </button>

            <div className="mt-4 flex justify-center items-center space-x-4 text-xs text-gray-500">
              <span>© Coefficient</span>
              <span>runway</span>
              <span>= Equals</span>
              <span>Harmonic</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Feature Checklist */}
        <div className="space-y-8">
          <div>
            <p className="text-sm text-gray-400 uppercase mb-2">
              Enterprise Integration, Simplified
            </p>
            <h2 className="text-4xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Deploy in Days.
              </span>
              <br />
              Not Quarters.
            </h2>
          </div>

          <div className="relative h-[550px] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bottom-0 overflow-y-auto pr-2">
              {/* Feature Cards */}
              <div className="mt-10 space-y-4">
                {features.map((item, i) => {
                  const isExpandable = i === 0;
                  const isExpanded = expanded && isExpandable;

                  return (
                    <div
                      key={i}
                      onClick={isExpandable ? toggleExpand : undefined}
                      className={`cursor-pointer p-5 rounded-xl border border-gray-200 transition-all duration-300 ${
                        isExpandable
                          ? isExpanded
                            ? "bg-white shadow-lg scale-[1.02]"
                            : "bg-white shadow"
                          : "bg-gray-50"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-2.5 h-2.5 bg-sky-500 rounded-full mt-1" />
                          <h4 className="text-lg font-medium">{item.title}</h4>
                        </div>
                        <span className="text-sm text-gray-400">
                          {item.version}
                        </span>
                      </div>

                      {/* Expanding Section */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isExpanded ? "max-h-40 mt-2" : "max-h-0"
                        }`}
                      >
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
