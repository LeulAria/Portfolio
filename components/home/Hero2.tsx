import React from "react";
import Link from "next/link";

const Hero2 = () => {
  return (
    <div className="w-[100vw] h-[calc(100vh-100px)] overflow-hidden flex items-center justify-center">

      <div className="overflow-hidden absolute content mt-[10vh] left-[23%] scale-[2.3] opacity-10">
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

      <div className="absolute top-[27%] w-[90%] md:m-auto z-10  mx-auto">
        <div className="flex items-center">
          <div className="max-w-[840px] w-[80%] mx-auto flex flex-col items-center">
            <h1 className="block relative text-center mt-3 mb-5 font-extrabold text-3xl md:text-6xl text-black dark:text-white">
              Hy their i'm
              <span className="text-[#3f43ba] dark:text-[#464cef] font-[900]"> leul </span> a fullstack software{" "}
              <span className="text-[#3f43ba] dark:text-[#464cef] font-[900]">
                engineer {" "}
              </span>
              welcome.
            </h1>

            <h1 className="font-[300] mb-6 max-w-[500px] w-[80%] mx-auto text-center text-sm md:text-xl">
              {
                "im currently working as a microservice and web-applications developer."
              }
            </h1>
            <div className="mt-5 flex">
              <Link href="/contact">
                <button className="pl-8 flex items-center button-action bg-black dark:text-black text-white rounded-[30px]">
                  <span className="mr-2">Get In Touch</span>
                  <svg width="25px" height="25px" className="mt-[5px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Arrow Forward</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M268 112l144 144-144 144M392 256H100" /></svg>
                </button>
              </Link>

              <Link href="/projects">
                <button className="pl-8 flex items-center button-action bg-white dark:bg-black text-black dark:text-white rounded-[30px]">
                  <span className="mr-2">Projects</span>

                  <svg width="25px" height="25px" className="mt-[5px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Arrow Forward</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M268 112l144 144-144 144M392 256H100" /></svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
