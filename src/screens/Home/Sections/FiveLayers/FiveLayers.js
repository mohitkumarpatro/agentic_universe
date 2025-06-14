import React, { useState } from "react";
import "./FiveLayers.css"; // Custom styles here
import Img1 from "./Images/Vector 3490.png";

const layers = [
  {
    id: 1,
    name: "Perception Layer",
    description:
      "Sees, hears, and reads like a human. Understands voice, video, tone, and emotion in real-time - detecting urgency, frustration, and shifts in context across every conversation.",
    solves: [
      "Repeating info to bots",
      "Conversations that start from zero",
      "Shallow, one-turn chat interactions",
    ],
  },
  {
    id: 2,
    name: "Context Layer",
    description:
      "Maintains memory of past conversations, customer preferences, and behavior.",
    solves: [
      "Loss of continuity in interactions",
      "Repeating user history",
      "No personalization",
    ],
  },
  {
    id: 3,
    name: "Tool Access Layer",
    description:
      "Connects with tools like CRMs, ERPs, and support systems to act in real time.",
    solves: [
      "Switching between apps",
      "Manual task handling",
      "Inaccessible real-time data",
    ],
  },
  {
    id: 4,
    name: "Execution Layer",
    description:
      "Takes actions like scheduling, ordering, updating records, or initiating workflows.",
    solves: [
      "Delayed task execution",
      "Dependency on human agents",
      "Manual errors",
    ],
  },
  {
    id: 5,
    name: "Reasoning Layer",
    description:
      "Applies logic and decision trees to complex problems for strategic execution.",
    solves: [
      "Inefficient resolutions",
      "Misaligned decisions",
      "Lack of business logic awareness",
    ],
  },
];

export default function FiveLayers() {
  const [activeLayer, setActiveLayer] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hovered, setHovered] = useState(null);

  const handleClick = (layer) => {
    setActiveLayer(layer);
    setIsExpanded(true);
  };

  return (
    <section className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      <h2 className="text-center text-[16px] text-gray-400 mb-2">
        Layered Intelligence. Unmatched Autonomy.
      </h2>
      <h1 className="text-3xl sm:text-[48px] font-500 text-center mt-10">
        <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-transparent font-500">
          Five Layers.
        </span>{" "}
        <span className="text-white">One</span>
      </h1>
      <h1 className="text-3xl sm:text-[48px] font-500 text-center mt-5">
        Super-intelligent Agentic AI.
      </h1>

      <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center">
        {layers.map((layer, index) => {
          const isHovered = hovered === layer.id;
          const isActive = activeLayer?.id === layer.id;
          const isVisible = isHovered || isActive;

          return (
            <>
              <div
                key={layer.id}
                onMouseEnter={() => setHovered(layer.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => {
                  handleClick(layer);
                  setIsExpanded(true);
                }}
                className={`absolute transition-all duration-300 ease-in-out ${
                  isActive ? "scale-105" : ""
                }`}
                style={{
                  top: `${100 + index * (isExpanded ? 70 : 40)}px`,
                  zIndex: 10 + index,
                  cursor: "pointer",
                  width: "800px",
                  height: "80px",
                }}
              >
                <svg width="800" height="80" viewBox="0 0 800 80">
                  {/* Main polygon with full glow effect */}
                  <polygon
                    points="80,0 720,0 800,80 0,80"
                    fill="#0a0a0a"
                    stroke={isVisible ? "#00ffff" : "#888"}
                    strokeWidth={
                      hovered === layer.id || isExpanded === layer.id
                        ? "2"
                        : "1"
                    }
                    className={`transition-all duration-300 ${
                      hovered === layer.id || isExpanded === layer.id
                        ? "shadow-[0_0_15px_rgba(0,255,255,0.8)]"
                        : ""
                    }`}
                    style={{
                      filter:
                        hovered === layer.id || isExpanded === layer.id
                          ? "drop-shadow(0 0 8px rgba(0, 255, 255, 0.8))"
                          : "none",
                    }}
                  />

                  {/* Single moving dot - only visible on hover */}
                  {hovered === layer.id && (
                    <>
                      <circle
                        r="4"
                        fill="white"
                        className="animate-move-dot"
                        style={{
                          filter:
                            "drop-shadow(0 0 3px rgba(255, 255, 255, 0.8))",
                        }}
                      />
                      <style>
                        {`
            @keyframes move-dot {
              0% {
                transform: translate(80px, 0px);
                animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
              }
              25% {
                transform: translate(720px, 0px);
                animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
              }
              50% {
                transform: translate(800px, 80px);
                animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
              }
              75% {
                transform: translate(0px, 80px);
                animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
              }
              100% {
                transform: translate(80px, 0px);
              }
            }
            .animate-move-dot {
              animation: move-dot 6s linear infinite;
            }
          `}
                      </style>
                    </>
                  )}
                </svg>
              </div>
              {isHovered ? (
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[140px] mt-1   bg-gray-800 px-3 py-3 rounded-xl text-[18px] font-500 shadow border border-cyan-800 z-50 text-white">
                  {layer.name}
                </div>
              ) : hovered === null ? (
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[140px] mt-1 text-cyan-300  bg-gray-800 px-3 py-3 rounded-xl text-[18px] font-500 shadow border border-cyan-800 z-50 text-white">
                  Click on each layer to expand
                </div>
              ) : null}
            </>
          );
        })}

        {/* Popup */}
        {activeLayer && (
          <div className="absolute w-[90%] max-w-md bg-[#080808] text-white border border-gray-700 rounded-2xl p-6 shadow-xl z-[9999]">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-gray-400 text-xs mb-1">
                  Layer {activeLayer.id}
                </p>
                <h3 className="text-[24px] font-500  mb-2">
                  {activeLayer.name}
                </h3>
              </div>
              <button
                className="text-white text-xl ml-4 hover:text-gray-400"
                onClick={() => {
                  setActiveLayer(null);
                  setIsExpanded(false);
                }}
              >
                &times;
              </button>
            </div>
            <p className="text-[16px] text-gray-300 mb-4">
              {activeLayer.description}
            </p>
            <div className="bg-zinc-900 rounded-lg p-4">
              <p className="text-[18px] font-500 mb-2">Solves</p>
              <ul className="list-disc list-inside space-y-1 text-[16px] ">
                {activeLayer.solves.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
