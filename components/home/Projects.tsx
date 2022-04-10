import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Axum Hub",
      description:
        "A collaborative task management application that can let you chat, video conference, share resources and more...",
      github: "https://www.google.com",
      link: "https://axumhubio.netlify.app/",
      tools: ["VueJS", "NodeJS", "WebRTC"],
    },
    {
      name: "React Rolebased Router",
      description:
        "Binds react-router for creating an easy to use library for creating and managing routes with role.",
      github: "https://www.google.com",
      link: "https://axumhubio.netlify.app/",
      tools: ["ReactJS", "React Router DOM", "npm"],
    },
    {
      name: "React Waves Effect",
      description:
        "A React Waves/Ripple Effect Customizable Library component inspired by materialize css ripple effect.",
      github: "https://github.com/LeulAria/react-waves-effect",
      link: "https://leularia.github.io/react-waves-effect/",
      tools: ["Typescript", "ReactJS"],
    },
    {
      name: "Blogtalk",
      description: "Simple Blogging application built with Django.",
      github: "https://github.com/LeulAria/blogtalk",
      link: "https://blogtalk-alpha.herokuapp.com/",
      tools: ["Python", "Django"],
    },
    {
      name: "React Verification Input",
      description:
        "A React verification input component library that can be used for verification code input.",
      github: "https://github.com/LeulAria/react-verification-input",
      link: "https://leularia.github.io/react-verification-input/",
      tools: ["Typescript", "ReactJS"],
    },
  ];

  return (
    <div className="min-h-[100vh] mt-10">
      <div className="w-[90%] md:w-[80%] m-auto my z-10 relative">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="font-extrabold mb-3 text-3xl md:text-5xl text-black dark:text-white">
              Personal Projects
            </h1>
            <h1 className="font-normal mb-6 text-base md:text-xl text-zinc-500 max-w-[280px] md:max-w-[600px]">
              It's my passion and here are a few of my personal projects that i
              have worked on.
            </h1>
          </div>
          <div className="flex flex-wrap justify-center md:w-[90%] m-auto">
            {projects.map((project, i) => (
              <div className="w-full md:w-10/12 xl:w-4/12 min-h-[300px] max-w-[350px] p-5 group">
                <div className="flex flex-col ring-1 ring-gray-900/30 bg-[rgba(50,50,50,0.25)] text-white w-full h-full rounded-xl p-3 cursor-pointer transition-color duration-300 hover:bg-[rgba(30,30,35,.2)] hover:ring-gray-900/40">
                  <div className="flex items-center">
                    <svg
                      version="1.1"
                      fill="currentColor"
                      viewBox="0 0 700 700"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-14 h-14 text-zinc-900 transition-color duration-300 group-hover:text-zinc-700"
                    >
                      <path
                        d="m274.17 52.5c-83.766 0-151.67 67.902-151.67 151.67v151.66c0 83.766 67.902 151.67 151.67 151.67h151.66c83.766 0 151.67-67.902 151.67-151.67v-151.66c0-83.766-67.902-151.67-151.67-151.67zm111.71 140.88c-6.8359 6.8359-6.8359 17.918 0 24.75l61.871 61.871-61.871 61.871c-6.8359 6.8359-6.8359 17.914 0 24.75 6.832 6.8359 17.914 6.8359 24.75 0l74.242-74.246c6.8359-6.8359 6.8359-17.914 0-24.75l-74.242-74.246c-6.8359-6.832-17.918-6.832-24.75 0zm-71.758 0c6.8359 6.8359 6.8359 17.918 0 24.75l-61.871 61.871 61.871 61.871c6.8359 6.8359 6.8359 17.914 0 24.75-6.8359 6.8359-17.914 6.8359-24.75 0l-74.246-74.246c-6.832-6.8359-6.832-17.914 0-24.75l74.246-74.246c6.8359-6.832 17.914-6.832 24.75 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    <h2 className="ml-2 font-extrabold">{project?.name}</h2>
                  </div>
                  <div className="px-3 pb-3 text-base text-zinc-100 flex-grow">
                    {project?.description}
                  </div>
                  <div className="mt-5 text-xs mb-2 px-3">{project.tools.join(", ")}</div>
                </div>
              </div>
            ))}

            <div className="w-full md:w-10/12 xl:w-4/12 min-h-[230px] max-w-[350px] p-5">
              <div className="flex flex-col items-center justify-center border-[3px] border-dashed border-[rgba(50,50,50,0.25)] text-zinc-600 w-full h-full rounded-xl p-3 cursor-pointer transition-color duration-300 hover:border-[#38383ffe]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-20"
                  fill="currentColor"
                  viewBox="0 0 23 23"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <h1 className="-mt-2 text-left">More Projects In Github</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
