import Stacks from "components/home/Stacks";
import TabComponent from "components/utils/TabComponent";
import React from "react";
import Projects from "../components/home/Projects";

const experience = () => {

  const tabs = [
    {
      icon: <svg
        className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
      </svg>,
      title: "Npm Packages",
      content: <div className="mt-10">
        <Projects />
      </div>
    },
    {
      icon: <svg
        className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
      </svg>,
      title: "WebSites",
      content: <div className="mt-10">
        <Projects />
      </div>
    },
    {
      icon: <svg
        className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
        <path
          fill-rule="evenodd"
          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
          clip-rule="evenodd"
        ></path>
      </svg>,
      title: "Backend",
      content: <div className="mt-10">
        <Projects />
      </div>
    },
    {
      icon: <svg
        className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
        <path
          fill-rule="evenodd"
          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
          clip-rule="evenodd"
        ></path>
      </svg>,
      title: "Mobile Apps",
      content: <div className="mt-10">
        <Projects />
      </div>
    },
    {
      icon: <svg
        className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
        <path
          fill-rule="evenodd"
          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
          clip-rule="evenodd"
        ></path>
      </svg>,
      title: "My Stack",
      content: <div className="mt-10">
        <Stacks />
      </div>
    }
  ]

  return (
    <div className="mx-[10%]">
      <div className="flex items-center mt-[10%]">
        <div className="mb-10 w-full flex justify-between text-start">
          <div>
            <h1 className="relative mt-3 mx-auto max-w-[980px] inline font-extrabold text-3xl md:text-6xl text-black dark:text-white">
              My Personal
            </h1>
            <h1 className="-mt-5 x-auto max-w-[980px] font-extrabold text-3xl md:text-7xl text-black dark:text-white">
              <span className="text-[#464cef] text-5xl font-[600]">
                Projects
              </span>
            </h1>
          </div>

          <h1 className="mt-2 font-normal mb-6 ml-1 max-w-[260px] md:max-w-[500px] text-sm md:text-lg text-gray-00 bg-clip-text text-transparent bg-gradient-to-l from-[#449322] to-[#433b8c] dark:from-[#a7ef89] dark:to-[#6e62de]">
            {
              "It's my passion and here are a few of my personal projects that i have worked on."
            }
          </h1>
        </div>
      </div>


      <TabComponent tabs={tabs} />
    </div>
  );
};

export default experience;
