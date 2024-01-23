"use client";
import { useState, useEffect } from "react";
import {
  BiSolidLeftArrowCircle,
  BiSolidRightArrowCircle,
} from "react-icons/bi";

const Carousel = ({ slides }) => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const autoplayDelay = 3000; // Set the delay between slides in milliseconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoplayDelay);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [current]);

  return (
    <div className="overflow-hidden relative max-h-96 my-8">
      <div
        className={`flex transition ease-out duration-400`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt="Slider Image"
            className="object-cover object-bottom h-full w-full"
          />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full items-center justify-between flex px-10 text-white text-sm md:text-base lg:text-xl xl:text-3xl">
        <button onClick={previousSlide}>
          <BiSolidLeftArrowCircle />
        </button>
        <button onClick={nextSlide}>
          <BiSolidRightArrowCircle />
        </button>
      </div>

      <div className="absolute bottom-0 sm:bottom-6 md:bottom-4 py-4 flex justify-center gap-2 w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`rounded-full w-2 h-2 md:w-3 md:h-3 cursor-pointer ${
              index == current ? "bg-white" : "bg-gray-300"
            }`}
            onClick={() => {
              setCurrent(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
