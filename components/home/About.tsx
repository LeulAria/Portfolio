import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r">
      <div className="w-[90%] md:w-[80%] m-auto z-10 relative">
        <div className="h-full">
          <div className="flex justify-evenly flex-col md:flex-row">
            <div className="hidden md:flex items-center justify-center w-[300px]">
              <div className="flex items-center justify-center w-[250px] h-[250px] overflow-hidden z-2">
                <img src="/img/me.jpeg" alt="me" className="" />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start py-[6%] text-center md:text-left h-full">
              <h1 className="font-extrabold mb-3 text-3xl md:text-5xl">
                About Me
              </h1>
              <div className="text-zinc-200 mx-auto max-w-[90%] md:max-w-[600px]">
                <h3 className="font-normal mt-5 mb-6 mx-auto text-base md:text-lg">
                  Let me start by introducing my self My name is Leulseged
                  Tariku ( Leul ), a professional fullstack software engineer
                  with over 2+ years of experiance in developing web
                  applications and microservices.
                </h3>
                <h3 className="font-normal mt-5 mb-6 text-base md:text-lg">
                  I have earned a Bachelor's of Science majoring in Computer
                  Science from Microlink College. I am highly motivated,
                  futuristic fun to work with, fast learner and highly
                  disciplined.
                </h3>
              </div>
              <button className="mx-auth text-gray-00 bg-clip-text text-transparent bg-gradient-to-l  from-[#53ed11] to-[#4a58d3] border-[3px] border-[#bdeaaa] px-9 py-2 flex items-center font-semibold rounded-3xl transition-transform duration-500 hover:scale-110">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
