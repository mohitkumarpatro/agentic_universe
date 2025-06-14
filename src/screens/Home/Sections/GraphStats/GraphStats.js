import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "80%",
    desc: "Lower operational workload",
    height: 160,
    bg: "bg-white",
    text: "text-cyan-500",
  },
  {
    value: "90%",
    desc: "Workflow automation across business ops",
    height: 200,
    bg: "bg-cyan-400",
    text: "text-white",
  },
  {
    value: "98%",
    desc: "Multilingual accuracy across 1,000+ languages",
    height: 240,
    bg: "bg-white",
    text: "text-cyan-500",
  },
  {
    value: "5X",
    desc: "Higher resolution rate in Tier 1 support",
    height: 280,
    bg: "bg-cyan-400",
    text: "text-white",
  },
];

export default function GraphStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5, once: false });

  return (
    <section className="bg-black text-white py-20 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <p className="text-sm text-gray-400 mb-2">Real Data</p>
          <h2 className="text-4xl font-bold mb-4">
            10x{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Outcomes.
            </span>
            <br />
            In Real Time.
          </h2>
          <p className="text-gray-300 mb-6 max-w-md">
            Deliver web experiences that get results with built-in tools for
            analytics, A/B testing, AI-driven personalization, and SEO.
          </p>
          <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full">
            Experience AI in Action
          </button>
        </div>

        {/* Right Section: Graph */}
        <div className="flex-1 flex items-end justify-center gap-6" ref={ref}>
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
              className={`w-24 rounded-t-xl shadow-lg flex flex-col justify-end items-center ${item.bg} ${item.text}`}
            >
              <div className="text-lg font-bold pt-3">{item.value}</div>
              <div className="text-xs px-2 py-2 text-center">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
