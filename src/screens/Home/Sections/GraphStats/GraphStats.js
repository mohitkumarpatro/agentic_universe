import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "80%",
    desc: "Lower operational workload",
    height: 360,
    bg: "bg-white",
    text: "text-[#080808]",
  },
  {
    value: "90%",
    desc: "Workflow automation across business ops",
    height: 400,
    bg: "bg-cyan-400",
    text: "text-white",
  },
  {
    value: "98%",
    desc: "Multilingual accuracy across 1,000+ languages",
    height: 440,
    bg: "bg-white",
    text: "text-[#080808]",
  },
  {
    value: "5X",
    desc: "Higher resolution rate in Tier 1 support",
    height: 480,
    bg: "bg-cyan-400",
    text: "text-white",
  },
];

export default function GraphStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5, once: false });

  return (
    <section className="bg-black text-white py-20 min-h-screen flex items-center justify-center px-20">
      <div className="max-w-8xl w-full flex flex-col lg:flex-row items-stretch justify-between gap-5">
        {/* Left Section */}
        <div className="flex flex-col justify-between gap-30 p-4 sm:p-8 lg:w-1/2">
          <div>
            <p className="text-[16px] text-[#FFFFFF80] mb-2">Real Data</p>
            <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-[50px] text-transparent font-500">
              10x Outcomes.
            </span>
            <span className="text-white text-[48px] font-500 block">
              In Real Time.
            </span>
          </div>
          <div>
            <p className="text-gray-300 mb-6 max-w-md">
              Deliver web experiences that get results with built-in tools for
              analytics, A/B testing, AI-driven personalization, and SEO.
            </p>
            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full">
              Experience AI in Action
            </button>
          </div>
        </div>

        {/* Right Section: Graph */}
        <div
          className="flex-1 flex items-end justify-end gap-6 lg:h-auto"
          ref={ref}
        >
          <div className="h-full flex items-end justify-end gap-6 w-full">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 300, opacity: 0, height: 0 }}
                animate={
                  inView
                    ? { y: 0, opacity: 1, height: item.height }
                    : { y: 300, opacity: 0, height: 0 }
                }
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  type: "spring",
                }}
                className={`w-[130px]  shadow-lg flex flex-col justify-between items-center ${item.bg} ${item.text}`}
              >
                {/* Percentage value at the top */}
                <div className="text-[50px] font-500 pt-2">{item.value}</div>

                {/* This empty div pushes the description to the bottom */}
                <div className="flex-1"></div>

                {/* Description at the bottom */}
                <div className="text-xs px-1 py-2 text-center">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
