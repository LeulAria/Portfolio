import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r w-[90vw] md:w-[100vw] h-[100vh] px-[10%]">
      <div className="w-[90%] md:w-[80%] m-auto z-10 relative">
        <div className="h-full">
          <div className="flex justify-evenly flex-col md:flex-row">
            <div className="flex flex-col items-center md:items-start py-[6%] text-center md:text-left h-full">
              <h1 className="font-extrabold md:mb-1 text-3xl md:text-6xl">
                About <span className="text-[#464cef]">Me</span>
              </h1>
              <div className="mx-auto max-w-[90%] md:max-w-[600px]">
                <h3 className="font-[400] mt-5 mb-6 mx-auto text-sm md:text-lg">
                  {`Let me start by introducing my self My name is Leulseged
                  Tariku ( Leul ), a professional fullstack software engineer
                  with over 2+ years of experiance in developing web
                  applications and microservices.`}
                </h3>
                <h3 className="font-[400] mt-5 mb-6 text-sm md:text-lg">
                  {`I have earned a Bachelor's of Science majoring in Computer
                  Science from Microlink College. I am highly motivated,
                  futuristic fun to work with, fast learner and highly
                  disciplined.`}
                </h3>
              </div>
              <div>
                <h1 className="font-bold text-gray-300 text-lg md:text-xl">Contact me</h1>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center w-[300px]">
              <div className="flex items-center justify-center w-[250px] h-[250px] overflow-hidden z-2">
                <Image
                  src="/img/me.jpeg"
                  alt="my picture"
                  width={250}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
