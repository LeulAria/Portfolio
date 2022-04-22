import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useViewportScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -600]);
  const y2 = useTransform(scrollY, [0, 500], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 0.7]);

  const squareVariants = {
    visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <div className="relative h-[calc(100vh-65px)] flex items-center justify-center bg-[url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org… 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e')">
      <div className="content absolute scale-[2.3] opacity-20">
        <div>
          <svg
            width="366"
            height="366"
            viewBox="0 0 366 366"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              stroke="#C13F21"
              stroke-width="2"
              cx="183"
              cy="183"
              r="130"
              fill="none"
              fill-rule="evenodd"
              stroke-dasharray="35,7,10,80"
            />
          </svg>
        </div>

        <div>
          <svg
            width="366"
            height="366"
            viewBox="0 0 366 366"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M251.346 306.299c68.096-37.746 92.7-123.549 54.953-191.645-37.746-68.096-123.549-92.7-191.645-54.953-68.096 37.746-92.7 123.549-54.953 191.645 37.746 68.096 123.549 92.7 191.645 54.953z"
              stroke="#D36E2D"
              stroke-width="4"
              fill="none"
              fill-rule="evenodd"
              stroke-dasharray="140,4,10,80"
              opacity=".441"
            />
          </svg>
        </div>

        <div>
          <svg
            width="366"
            height="366"
            viewBox="0 0 366 366"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              stroke="#D36E2D"
              stroke-width="4"
              cx="183"
              cy="183"
              r="141"
              fill="none"
              fill-rule="evenodd"
              stroke-dasharray="51,4,10,80"
            />
          </svg>
        </div>

        <div>
          <svg
            width="366"
            height="366"
            viewBox="0 0 366 366"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M92.733 302.788c66.157 49.854 160.202 36.636 210.055-29.52 49.854-66.158 36.636-160.203-29.52-210.056-66.158-49.854-160.203-36.636-210.056 29.52-49.854 66.158-36.636 160.203 29.52 210.056z"
              stroke="#DDA032"
              stroke-width="8"
              fill="none"
              fill-rule="evenodd"
              stroke-dasharray="56,2,4"
              opacity=".688"
            />
          </svg>
        </div>

        <div>
          <svg
            width="366"
            height="366"
            viewBox="0 0 366 366"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              stroke="#DDA032"
              stroke-width="8"
              cx="183"
              cy="183"
              r="150"
              fill="none"
              fill-rule="evenodd"
              stroke-dasharray="76,2,40,180"
            />
          </svg>
        </div>
      </div>

      <div className="absolute top-[23%] left-[50%] -translate-x-[50%] w-[90%] md:m-auto z-10  mx-auto">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h1 className="w-full font-extrabold text-xl md:text-3xl dark:text-white">
              {"🎉 hooray leul here"}
            </h1>

            <h1 className="min-h-[80px] md:min-h-[160px] mt-3 mx-auto max-w-[980px] font-extrabold text-center text-3xl md:text-8xl text-black dark:text-white">
              Fullstack Software Developer
            </h1>
            <h1 className="mt-10 font-normal mb-6 mx-auto max-w-[260px] md:max-w-[500px] text-sm md:text-lg text-gray-00 bg-clip-text text-transparent bg-gradient-to-l  from-[#a7ef89] to-[#9187ef]">
              {
                "Developing quality softwares currently working as a microservice's and web-application developer."
              }
            </h1>

            {/* <div className="flex flex-col md:flex-row justify-center dark:text-zinc-50 max-w-[70%] md:max-w-[400px] m-auto mt-16 md:mt-10 h-[60px] pt-3">
              <button className=" text-gray-00 bg-clip-text text-transparent bg-gradient-to-l  from-[#4ae806] to-[#5362ea] border-[3px] border-[#bdeaaa] px-9 py-2 flex items-center font-semibold rounded-3xl transition-transform duration-500 hover:scale-110 text-center justify-center">
                Projects
              </button>
              <button className="px-5 py-4 flex items-center font-semibold rounded-2xl mx-5 justify-center">
                Contact Me {"->"}
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
