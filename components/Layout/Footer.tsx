import React from "react";

const Footer = () => {
  return (
    <div className="min-h-[230px] border-t-2 border-zinc-800 mt-36">
      <div className="flex flex-col-reverse md:flex-row justify-between w-[90%] mx-auto py-5 md:py-10">
        <div className="mt-10 md:mt-0 flex flex-col min-h-[80px] md:min-h-[180px]">
          <h1 className="font-extrabold text-xl text-white">LeulAria™</h1>
          <p className="font-normal text-base text-zinc-200">
            Software Engineer
          </p>
          <p className="mb-4 md:mt-2 font-normal text-sm text-gray-400">
            leulsegedtariku@gmail.com
          </p>

          <p className="text-center md:text-left text-zinc-600 text-xs mt-auto">
            &copy; {new Date().getFullYear()} LeulAria. All rights reserved.
          </p>

          <p className="block md:hidden text-center text-zinc-600 text-xs">
            Made with ♥ NextJS and Vercel.
          </p>
        </div>
        <div className="min-h-[150px] flex flex-col-reverse md:flex-row flex-grow">
          <div className="flex-grow"></div>
          <div className="max-w-[350px] mr-[10vw]">
            <h2 className="mt-5 md:mt-0 text-white font-bold mb-2">Contact</h2>
            <div className="flex flex-wrap md:block justify-start">
              <a
                href="#"
                className="block min-w-[120px] text-gray-400 hover:text-gray-200 text-sm mt-1 "
              >
                Github
              </a>
              <a
                href="#"
                className="block min-w-[120px] text-gray-400 hover:text-gray-200 text-sm mt-1 "
              >
                Twitter
              </a>
              <a
                href="#"
                className="block min-w-[120px] text-gray-400 hover:text-gray-200 text-sm mt-1 "
              >
                Telegram
              </a>
              <a
                href="#"
                className="block min-w-[120px] text-gray-400 hover:text-gray-200 text-sm mt-1 "
              >
                Instagram
              </a>
              <a
                href="#"
                className="block min-w-[120px] text-gray-400 hover:text-gray-200 text-sm mt-1 "
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="max-w-[350px]">
            <p className="text-gray-50 font-bold">Subscribe to my newsletters.</p>
            <p className="mt-1 text-gray-500 text-xs">
              Join my blog newsletter and stay updated when ever i create a new
              blog so you can be notified earlier.
            </p>
            <div className="flex mt-3">
              <input
                type="text"
                className="bg-transparent text-white text-sm font-semibold outline-none border-zinc-600 border-2 rounded-md p-2"
              />
              <button className="ml-3 bg-zinc-800 hover:bg-zinc-900 text-white font-extrabold text-sm py-3 px-4 rounded-md">
                Subscribe
              </button>
            </div>
            <p className="hidden md:block mt-5 text-zinc-600 text-xs">
              Made with ♥ NextJS and Vercel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
