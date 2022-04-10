import React from "react";

const AppBar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full flex items-center align-middle justify-between px-5 md:px-20 h-[65px] bg-white dark:bg-black/50 backdrop-blur-sm border-b-2 border-zinc-900">
        <h1 className="font-extrabold text-xl dark:text-white">LeulAria</h1>
        <div className="hidden md:flex font-medium items-center dark:text-zinc-50">
          <a href="" className="mx-3 hover:text-gray-400 uppercase text-xs">
            home
          </a>
          <a href="" className="mx-3 hover:text-gray-400 uppercase text-xs">
            about
          </a>
          <a href="" className="mx-3 hover:text-gray-400 uppercase text-xs">
            blogs
          </a>
          <a href="" className="mx-3 hover:text-gray-400 uppercase text-xs">
            contact
          </a>
          <button className="ml-5 text-sm text-zinc-900 bg-zinc-50 px-4 py-2 font-bold rounded-3xl hover:bg-zinc-200">
            Download Resume
          </button>
          <div className="ml-4 pt-[10px] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 m-auto cursor-pointer hover:text-gray-500"
              fill="currentColor"
              viewBox="0 0 23 23"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </div>
        </div>
        <div className="flex md:hidden">
          <div className="p-3 rounded-full hover:bg-zinc-900/50 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="text-white w-[25px] h-[25px]"
            >
              <title>Menu</title>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M80 160h352M80 256h352M80 352h352"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-[65px]"></div>
    </>
  );
};

export default AppBar;
