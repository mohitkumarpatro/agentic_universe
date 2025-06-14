import React, { useState } from "react";

const testimonials = [
  {
    text: `“It's unimaginable to go back to a time before Agentic Universe where we'd have to take notes during the interviews. Agentic Universe has taken so much guesswork out of improving our processes.”`,
    author: "Giuseppe Colucci",
    handle: "@webflow",
    company: "BURBERRY",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: `“It's unimaginable to go back to a time before Agentic Universe where we'd have to take notes during the interviews. Agentic Universe has taken so much guesswork out of improving our processes.”`,
    author: "John Doe",
    handle: "@notion",
    company: "GUCCI",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    text: `“It's unimaginable to go back to a time before Agentic Universe where we'd have to take notes during the interviews. Agentic Universe has taken so much guesswork out of improving our processes.”`,
    author: "Maria Taylor",
    handle: "@slack",
    company: "CHANEL",
    avatar: "https://randomuser.me/api/portraits/women/70.jpg",
  },
  {
    text: `“It's unimaginable to go back to a time before Agentic Universe where we'd have to take notes during the interviews. Agentic Universe has taken so much guesswork out of improving our processes.”`,
    author: "Sarah Lee",
    handle: "@figma",
    company: "ARMANI",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: `“It's unimaginable to go back to a time before Agentic Universe where we'd have to take notes during the interviews. Agentic Universe has taken so much guesswork out of improving our processes.”`,
    author: "Liam Smith",
    handle: "@stripe",
    company: "ZARA",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
];

const visibleCards = 3;

export default function ClientThought() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeBtn, setActiveBtn] = useState(null); // 'prev' or 'next'

  const nextSlide = () => {
    setActiveBtn("next");
    setStartIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setActiveBtn(null), 200); // reset after 200ms
  };

  const prevSlide = () => {
    setActiveBtn("prev");
    setStartIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setActiveBtn(null), 200);
  };

  const getVisibleTestimonials = () => {
    return Array.from({ length: visibleCards }, (_, i) => {
      return testimonials[(startIndex + i) % testimonials.length];
    });
  };

  return (
    <section className="relative bg-black text-white py-20">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/3 w-[800px] h-[80px] 
       bg-gradient-to-r from-[#00C2D1] to-[#00C2D100] 
       rounded-full blur-2xl opacity-70"
      />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[16px] uppercase text-gray-400 mb-8">
          Agentic Universe
        </p>
        <h2 className="text-3xl sm:ext-[48px] font-500">
          Hear what our{" "}
          <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-transparent">
            Clients
          </span>{" "}
          Saying
        </h2>
        <div className="flex justify-center space-x-2 mt-4 mb-10">
          {testimonials.slice(0, 4).map((t, idx) => (
            <img
              key={idx}
              src={t.avatar}
              alt={t.author}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          ))}
        </div>

        {/* Carousel Cards */}
        <div className="overflow-hidden mt-10">
          <div className="flex flex-wrap justify-center gap-4 mt-4 mb-10">
            {getVisibleTestimonials().map((t, idx) => (
              <div
                key={idx}
                className="bg-[#111] rounded-xl p-6 sm:p-8 md:p-10 text-left border border-gray-800 min-h-[280px] flex flex-col justify-between w-full sm:w-[80%] md:w-[45%] lg:w-[30%]"
              >
                <p className="text-[16px] mb-4">{t.text}</p>
                <div className="flex items-center space-x-3 mt-8">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-left">
                    <p className="text-[16px]">
                      {t.author} {t.handle} &nbsp;&bull;&nbsp; {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="mt-10 flex justify-center items-center space-x-4">
          <button
            onClick={prevSlide}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-200 ${
              activeBtn === "prev"
                ? "bg-sky-500"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-200 ${
              activeBtn === "next"
                ? "bg-sky-500"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
