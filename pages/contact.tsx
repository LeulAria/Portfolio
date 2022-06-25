import React from "react";

const experience = () => {
  return (
    <div className="min-h-[calc(100vh-135px)] mx-[10%] flex justify-start items-center">
      <div className="w-full z-30 flex items-center">
        <div className="flex items-center">
          <div className="text-start">
            <h1 className="relative mt-3 mx-auto max-w-[980px] inline font-extrabold text-3xl md:text-6xl text-black dark:text-white">
              Contact Me
            </h1>
            <h1 className="min-h-[80px] md:min-h-[160px] mx-auto max-w-[980px] font-extrabold text-3xl md:text-7xl text-black dark:text-white">
              Let's Get <br />
              <span className="text-[#464cef] text-6xl">In Touch</span>
            </h1>
            <h1 className="mt-0 font-normal mb-6 max-w-[260px] md:max-w-[500px] text-sm md:text-xl text-gray-00 bg-clip-text text-transparent bg-gradient-to-l  from-[#439a1e] to-[#393184] dark:from-[#a7ef89] dark:to-[#6e62de]">
              {"Have any question? would love to hear from you."}
            </h1>
          </div>
        </div>

        <div className="md:w-[450px] md:ml-[10%]">
          <div className="max-w-sm">
            <div className="flex flex-col items-center pb-10">
              <div className="mb-3 w-24 h-24 rounded-full shadow-lg bg-[url('/img/me.jpeg')] bg-cover bg-center"></div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Leulseged Tariku
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Software Engineer
              </span>
              <div className="flex mt-4 space-x-3 lg:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center py-2 pt-1 px-4 text-sm font-medium text-center hover:text-gray-800 dark:text-white dark:hover:text-gray-300"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="inline-flex items-center py-2 pt-1 px-4 text-sm font-medium text-center hover:text-gray-800 dark:text-white dark:hover:text-gray-300"
                >
                  Github
                </a>
                <a
                  href="#"
                  className="inline-flex items-center py-2 pt-1 px-4 text-sm font-medium text-center hover:text-gray-800 dark:text-white dark:hover:text-gray-300"
                >
                  Telegram
                </a>
                <a
                  href="#"
                  className="inline-flex text-white bg-zinc-800 rounded-lg hover:bg-gray-900 items-center py-2 pt-1 px-4 text-sm font-medium text-center "
                >
                  Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default experience;
