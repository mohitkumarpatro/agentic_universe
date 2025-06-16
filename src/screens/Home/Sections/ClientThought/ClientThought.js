import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css/mousewheel";
import "swiper/css";
import "swiper/css/navigation";
import LeftArrow from "./Images/LeftArrow.svg";
import RightArrow from "./Images/RightArrow.svg";

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
  {
    text: `“It's unimaginable to go back to a time before Agentic Universe where we'd have to take notes during the interviews. Agentic Universe has taken so much guesswork out of improving our processes.”`,
    author: "Liam Smith",
    handle: "@stripe",
    company: "ZARA",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    text: `“It's unimaginable to go back to a time before Agentic Universe where we'd have to take notes during the interviews. Agentic Universe has taken so much guesswork out of improving our processes.”`,
    author: "Liam Smith",
    handle: "@stripe",
    company: "ZARA",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    text: `“It's unimaginable to go back to a time before Agentic Universe where we'd have to take notes during the interviews. Agentic Universe has taken so much guesswork out of improving our processes.”`,
    author: "Liam Smith",
    handle: "@stripe",
    company: "ZARA",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    text: `“It's unimaginable to go back to a time before Agentic Universe where we'd have to take notes during the interviews. Agentic Universe has taken so much guesswork out of improving our processes.”`,
    author: "Liam Smith",
    handle: "@stripe",
    company: "ZARA",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    text: `“It's unimaginable to go back to a time before Agentic Universe where we'd have to take notes during the interviews. Agentic Universe has taken so much guesswork out of improving our processes.”`,
    author: "Liam Smith",
    handle: "@stripe",
    company: "ZARA",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
];

export default function ClientThought() {
  const [activeBtn, setActiveBtn] = useState(null);
  const swiperRef = useRef(null);

  const nextSlide = () => {
    setActiveBtn("next");
    swiperRef.current?.slideNext();
    setTimeout(() => setActiveBtn(null), 200);
  };

  const prevSlide = () => {
    setActiveBtn("prev");
    swiperRef.current?.slidePrev();
    setTimeout(() => setActiveBtn(null), 200);
  };
  return (
    <section className="relative bg-[#080808] text-white py-20 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 bg-cover bg-center w-full max-w-xl rounded-3xl shadow-2xl h-[150px] flex justify-center items-center"
        style={{ backgroundImage: `url("/Ellipse 8520.png")` }}
      />

      <div className="max-w-8xl mx-auto px-6 text-center">
        <p className="text-[16px] uppercase text-gray-400 mb-6">
          Agentic Universe
        </p>
        <h2 className="text-3xl sm:text-[48px] font-500 mb-10">
          Hear what our{" "}
          <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-transparent">
            Clients
          </span>{" "}
          are Saying
        </h2>

        <div className="flex justify-center space-x-2 my-10">
          {testimonials.slice(0, 4).map((t, idx) => (
            <img
              key={idx}
              src={t.avatar}
              alt={t.author}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          ))}
        </div>

        <Swiper
          modules={[Navigation, Mousewheel]}
          slidesPerView={4}
          spaceBetween={20}
          mousewheel={{ forceToAxis: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="!overflow-visible"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-[#111] rounded-xl p-6 sm:p-8 md:p-10 text-left  min-h-[280px] flex flex-col justify-between w-full cursor-pointer">
                <p className="text-[16px] mb-4">{t.text}</p>
                <div className="flex items-center space-x-3 mt-8">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex justify-between text-[16px] w-full">
                    <div className="flex flex-col">
                      <div className="flex items-center flex-shrink-0 gap-2">
                        <span>{t.author}</span>
                        <div className="w-[6px] h-[6px] bg-gradient-to-tr from-[#00C2D1] to-[#2684FF] rounded-full" />
                      </div>
                      <span className="whitespace-nowrap text-opacity-40 text-[#FFFFFF66]">{t.handle}</span>
                    </div>
                    <span className="text-right whitespace-nowrap text-opacity-40 text-[#FFFFFF66]">
                      {t.company}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 flex justify-center items-center space-x-4">
          <button
            onClick={prevSlide}
            className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-white transition-colors duration-200 text-[24px] ${
              activeBtn === "prev"
                ? "bg-[#00C2D1]"
                : "bg-[#F8F8F80D] hover:bg-[#00C2D1]"
            }`}
          >
            <img
              src={LeftArrow}
              alt="LeftArrow"
              className="w-[20px] h-[20px] object-contain"
            />
          </button>
          <button
            onClick={nextSlide}
            className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-white transition-colors duration-200 text-[24px] ${
              activeBtn === "next"
                ? "bg-[#00C2D1]"
                : "bg-[#F8F8F80D] hover:bg-[#00C2D1]"
            }`}
          >
            <img
              src={RightArrow}
              alt="RightArrow"
              className="w-[20px] h-[20px] object-contain"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
