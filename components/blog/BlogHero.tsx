import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useTransform,
  useViewportScroll,
  Variants,
} from "framer-motion";

const BlogHero = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute content left-[43%] scale-[2.3] opacity-20">
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

      <div className="absolute left-[10%] w-[90%] md:m-auto z-10  mx-auto">
        <div className="flex items-center">
          <div className="text-start">
            <h1 className="relative mt-3 mx-auto max-w-[980px] inline font-extrabold text-3xl md:text-6xl text-black dark:text-white">
              My Blog Posts
            </h1>

            <h1 className="min-h-[80px] md:min-h-[160px] mx-auto max-w-[980px] font-extrabold text-3xl md:text-7xl text-black dark:text-white">
              Latest Articles Every
              <br />
              <span className="text-[#464cef] font-[400] text-6xl">
                Weekend.
              </span>
            </h1>
            <h1 className="mt-0 font-normal mb-6 max-w-[260px] md:max-w-[500px] text-sm md:text-xl text-gray-00 bg-clip-text text-transparent bg-gradient-to-l  from-[#dc5656] to-[#9187ef]">
              {
                "Welcome to my blog. I'm a software engineer, and I write about software development, design, and life."
              }
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
