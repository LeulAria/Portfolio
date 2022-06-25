import React from "react";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  Move,
  Sticky,
} from "react-scroll-motion";
import Hero2 from "./Hero2";

const HomePageIntro = () => {
  const animateVariant = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={animateVariant}>
          <div className="w-full h-full">
            <Hero2 />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={animateVariant}>
          <></>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={animateVariant}>
          <h1 className="font-extrabold mb-6 text-center text-xl md:text-2xl lg:text-7xl max-w-[350px] m-auto md:max-w-[900px]">
            i have over 3+ years of <span className="text-[#464cef]">experaince</span> as a fullstack developer.
          </h1>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={animateVariant}>
          <></>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={animateVariant}>
          <h1 className="font-extrabold mb-6 text-center text-xl md:text-2xl lg:text-7xl max-w-[350px] m-auto md:max-w-[900px]">
            worked with over 5+ companies on 20+ <span className="text-[#464cef]">projects</span>.
          </h1>
        </Animator>
      </ScrollPage>
      <ScrollPage page={5}>
        <Animator animation={animateVariant}>
          <></>
        </Animator>
      </ScrollPage>
      <ScrollPage page={6}>
        <Animator animation={animateVariant}>
          <div>
            <div className="absolute top-[30%] left-[7%]">
              <div className="atom">
                <div className="electron"></div>
                <div className="electron-alpha"></div>
                <div className="electron-omega"></div>
              </div>
            </div>
            <h1 className="font-extrabold mb-6 text-center text-xl md:text-2xl lg:text-7xl max-w-[350px] m-auto md:max-w-[900px]">
              Graduated with a BSc Degree Majoring in <span className="text-[#464cef]">computer science</span>.
            </h1>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={7}>
        <Animator animation={animateVariant}>
          <></>
        </Animator>
      </ScrollPage>
      <ScrollPage page={8}>
        <Animator animation={animateVariant}>
          <div className="">
            <div className="flex flex-col">
              <h1 className="font-extrabold mb-3 text-3xl md:text-7xl text-black dark:text-white">
                I mainly work with <span className="text-[#464cef]">Typescript</span>, Python and Golang.
              </h1>
              <h1 className="font-normal mb-6 text-base md:text-xl mx-0 max-w-[280px] md:max-w-[700px]">
                {`mainly speicalzing on building complax web applications, i wright clean, scalable and maintainable code on my projects, i am very fast and eficcent programmer. who always try to learn and improve in my carrier.`}
              </h1>
            </div>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={9}>
        <Animator animation={animateVariant}>
          <></>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default HomePageIntro;
