import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useViewportScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -600]);
  const y2 = useTransform(scrollY, [0, 500], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 0.7]);

  const squareVariants = {
    visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <div className="relative h-[calc(100vh-65px)] flex items-center justify-center bg-[url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org… 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e')">
      <motion.svg
        style={{ y: y1 }}
        version="1.1"
        width="4440"
        height="1600"
        viewBox="0 0 4440 1600"
        preserveAspectRatio="none"
        className="hidden md:block absolute w-full h-full top-0 left-0"
      >
        <g mask='url("#SvgjsMask1488")' fill="none">
          <g
            transform="translate(0, 0)"
            strokeLinecap="round"
            stroke="url(#SvgjsLinearGradient1489)"
          >
            <path d="M670 480.46 L670 705.46" strokeWidth="75"></path>
            <path d="M670 817.96 L670 892.96" strokeWidth="75"></path>
            <path d="M670 1005.46 L670 1119.54" strokeWidth="75"></path>
            <path d="M770 255.12 L770 1080.12" strokeWidth="75"></path>
            <path d="M770 1192.62 L770 1344.88" strokeWidth="75"></path>
            <path
              d="M870 383.67 L870 608.6700000000001"
              strokeWidth="75"
            ></path>
            <path
              d="M870 721.1700000000001 L870 946.1700000000001"
              strokeWidth="75"
            ></path>
            <path d="M870 1058.67 L870 1216.33" strokeWidth="75"></path>
            <path d="M970 776.89 L970 823.11" strokeWidth="75"></path>
            <path d="M1070 641.29 L1070 958.71" strokeWidth="75"></path>
            <path d="M1170 685.92 L1170 914.08" strokeWidth="75"></path>
            <path d="M1270 620.04 L1270 695.04" strokeWidth="75"></path>
            <path d="M1270 807.54 L1270 979.96" strokeWidth="75"></path>
            <path d="M1370 722.34 L1370 877.66" strokeWidth="75"></path>
            <path d="M1470 500.15 L1470 800.15" strokeWidth="75"></path>
            <path d="M1470 912.65 L1470 1099.85" strokeWidth="75"></path>
            <path d="M1570 492.78 L1570 567.78" strokeWidth="75"></path>
            <path d="M1570 680.28 L1570 830.28" strokeWidth="75"></path>
            <path d="M1570 942.78 L1570 1107.22" strokeWidth="75"></path>
            <path d="M1670 564.12 L1670 714.12" strokeWidth="75"></path>
            <path d="M1670 826.62 L1670 1035.88" strokeWidth="75"></path>
            <path d="M1770 288.7 L1770 513.7" strokeWidth="75"></path>
            <path d="M1770 626.2 L1770 701.2" strokeWidth="75"></path>
            <path d="M1770 813.7 L1770 1311.3" strokeWidth="75"></path>
            <path d="M1870 606.11 L1870 756.11" strokeWidth="75"></path>
            <path
              d="M1870 868.61 L1870 993.8900000000001"
              strokeWidth="75"
            ></path>
            <path d="M1970 468.31 L1970 768.31" strokeWidth="75"></path>
            <path d="M1970 880.81 L1970 1131.69" strokeWidth="75"></path>
            <path d="M2070 536.12 L2070 611.12" strokeWidth="75"></path>
            <path d="M2070 723.62 L2070 873.62" strokeWidth="75"></path>
            <path d="M2070 986.12 L2070 1063.88" strokeWidth="75"></path>
            <path d="M2170 619.44 L2170 694.44" strokeWidth="75"></path>
            <path d="M2170 806.94 L2170 980.56" strokeWidth="75"></path>
            <path d="M2270 491.82 L2270 1108.17" strokeWidth="75"></path>
            <path d="M2370 669.68 L2370 930.32" strokeWidth="75"></path>
            <path d="M2470 587.13 L2470 662.13" strokeWidth="75"></path>
            <path
              d="M2470 774.63 L2470 1012.8699999999999"
              strokeWidth="75"
            ></path>
            <path d="M2570 292.97 L2570 817.97" strokeWidth="75"></path>
            <path d="M2570 930.47 L2570 1080.47" strokeWidth="75"></path>
            <path d="M2570 1192.97 L2570 1307.03" strokeWidth="75"></path>
            <path d="M2670 746.81 L2670 853.19" strokeWidth="75"></path>
            <path d="M2770 406.3 L2770 931.3" strokeWidth="75"></path>
            <path d="M2770 1043.8 L2770 1193.7" strokeWidth="75"></path>
            <path d="M2870 630 L2870 705" strokeWidth="75"></path>
            <path d="M2870 817.5 L2870 970" strokeWidth="75"></path>
            <path d="M2970 762.4 L2970 837.6" strokeWidth="75"></path>
            <path d="M3070 672.63 L3070 927.38" strokeWidth="75"></path>
            <path d="M3170 277.53 L3170 802.53" strokeWidth="75"></path>
            <path d="M3170 915.03 L3170 1322.47" strokeWidth="75"></path>
            <path d="M3270 620.39 L3270 695.39" strokeWidth="75"></path>
            <path d="M3270 807.89 L3270 979.61" strokeWidth="75"></path>
            <path d="M3370 543.62 L3370 768.62" strokeWidth="75"></path>
            <path d="M3370 881.12 L3370 1056.38" strokeWidth="75"></path>
            <path d="M3470 433.31 L3470 808.31" strokeWidth="75"></path>
            <path d="M3470 920.81 L3470 1166.69" strokeWidth="75"></path>
            <path d="M3570 503.56 L3570 1096.43" strokeWidth="75"></path>
            <path d="M3670 626 L3670 974" strokeWidth="75"></path>
            <path d="M3770 507.3 L3770 807.3" strokeWidth="75"></path>
            <path d="M3770 919.8 L3770 1092.7" strokeWidth="75"></path>
          </g>
        </g>
        <defs>
          <mask id="SvgjsMask1488">
            <rect width="4440" height="1600" fill="#ffffff"></rect>
          </mask>
          <linearGradient
            x1="2220"
            y1="216"
            x2="2220"
            y2="1384"
            gradientUnits="userSpaceOnUse"
            id="SvgjsLinearGradient1489"
          >
            <stop stopColor="rgba(43, 11, 160, 0.153)" offset="0"></stop>
            <stop stopColor="rgba(158, 10, 35, 0.167)" offset="1"></stop>
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        style={{ y: y2, opacity }}
        variants={squareVariants}
        version="1.1"
        width="4440"
        height="1600"
        viewBox="0 0 4440 1600"
        preserveAspectRatio="none"
        className="hidden md:block absolute w-full h-full top-0 left-0"
      >
        <g mask='url("#SvgjsMask1488")' fill="none">
          <g
            transform="translate(0, 0)"
            strokeLinecap="round"
            stroke="url(#SvgjsLinearGradient1489)"
          >
            <path d="M670 480.46 L670 705.46" strokeWidth="75"></path>
            <path d="M670 817.96 L670 892.96" strokeWidth="75"></path>
            <path d="M670 1005.46 L670 1119.54" strokeWidth="75"></path>
            <path d="M770 255.12 L770 1080.12" strokeWidth="75"></path>
            <path d="M770 1192.62 L770 1344.88" strokeWidth="75"></path>
            <path
              d="M870 383.67 L870 608.6700000000001"
              strokeWidth="75"
            ></path>
            <path
              d="M870 721.1700000000001 L870 946.1700000000001"
              strokeWidth="75"
            ></path>
            <path d="M870 1058.67 L870 1216.33" strokeWidth="75"></path>
            <path d="M970 776.89 L970 823.11" strokeWidth="75"></path>
            <path d="M1070 641.29 L1070 958.71" strokeWidth="75"></path>
            <path d="M1170 685.92 L1170 914.08" strokeWidth="75"></path>
            <path d="M1270 620.04 L1270 695.04" strokeWidth="75"></path>
            <path d="M1270 807.54 L1270 979.96" strokeWidth="75"></path>
            <path d="M1370 722.34 L1370 877.66" strokeWidth="75"></path>
            <path d="M1470 500.15 L1470 800.15" strokeWidth="75"></path>
            <path d="M1470 912.65 L1470 1099.85" strokeWidth="75"></path>
            <path d="M1570 492.78 L1570 567.78" strokeWidth="75"></path>
            <path d="M1570 680.28 L1570 830.28" strokeWidth="75"></path>
            <path d="M1570 942.78 L1570 1107.22" strokeWidth="75"></path>
            <path d="M1670 564.12 L1670 714.12" strokeWidth="75"></path>
            <path d="M1670 826.62 L1670 1035.88" strokeWidth="75"></path>
            <path d="M1770 288.7 L1770 513.7" strokeWidth="75"></path>
            <path d="M1770 626.2 L1770 701.2" strokeWidth="75"></path>
            <path d="M1770 813.7 L1770 1311.3" strokeWidth="75"></path>
            <path d="M1870 606.11 L1870 756.11" strokeWidth="75"></path>
            <path
              d="M1870 868.61 L1870 993.8900000000001"
              strokeWidth="75"
            ></path>
            <path d="M1970 468.31 L1970 768.31" strokeWidth="75"></path>
            <path d="M1970 880.81 L1970 1131.69" strokeWidth="75"></path>
            <path d="M2070 536.12 L2070 611.12" strokeWidth="75"></path>
            <path d="M2070 723.62 L2070 873.62" strokeWidth="75"></path>
            <path d="M2070 986.12 L2070 1063.88" strokeWidth="75"></path>
            <path d="M2170 619.44 L2170 694.44" strokeWidth="75"></path>
            <path d="M2170 806.94 L2170 980.56" strokeWidth="75"></path>
            <path d="M2270 491.82 L2270 1108.17" strokeWidth="75"></path>
            <path d="M2370 669.68 L2370 930.32" strokeWidth="75"></path>
            <path d="M2470 587.13 L2470 662.13" strokeWidth="75"></path>
            <path
              d="M2470 774.63 L2470 1012.8699999999999"
              strokeWidth="75"
            ></path>
            <path d="M2570 292.97 L2570 817.97" strokeWidth="75"></path>
            <path d="M2570 930.47 L2570 1080.47" strokeWidth="75"></path>
            <path d="M2570 1192.97 L2570 1307.03" strokeWidth="75"></path>
            <path d="M2670 746.81 L2670 853.19" strokeWidth="75"></path>
            <path d="M2770 406.3 L2770 931.3" strokeWidth="75"></path>
            <path d="M2770 1043.8 L2770 1193.7" strokeWidth="75"></path>
            <path d="M2870 630 L2870 705" strokeWidth="75"></path>
            <path d="M2870 817.5 L2870 970" strokeWidth="75"></path>
            <path d="M2970 762.4 L2970 837.6" strokeWidth="75"></path>
            <path d="M3070 672.63 L3070 927.38" strokeWidth="75"></path>
            <path d="M3170 277.53 L3170 802.53" strokeWidth="75"></path>
            <path d="M3170 915.03 L3170 1322.47" strokeWidth="75"></path>
            <path d="M3270 620.39 L3270 695.39" strokeWidth="75"></path>
            <path d="M3270 807.89 L3270 979.61" strokeWidth="75"></path>
            <path d="M3370 543.62 L3370 768.62" strokeWidth="75"></path>
            <path d="M3370 881.12 L3370 1056.38" strokeWidth="75"></path>
            <path d="M3470 433.31 L3470 808.31" strokeWidth="75"></path>
            <path d="M3470 920.81 L3470 1166.69" strokeWidth="75"></path>
            <path d="M3570 503.56 L3570 1096.43" strokeWidth="75"></path>
            <path d="M3670 626 L3670 974" strokeWidth="75"></path>
            <path d="M3770 507.3 L3770 807.3" strokeWidth="75"></path>
            <path d="M3770 919.8 L3770 1092.7" strokeWidth="75"></path>
          </g>
        </g>
        <defs>
          <mask id="SvgjsMask1488">
            <rect width="4440" height="1600" fill="#ffffff"></rect>
          </mask>
          <linearGradient
            x1="2220"
            y1="216"
            x2="2220"
            y2="1384"
            gradientUnits="userSpaceOnUse"
            id="SvgjsLinearGradient1489"
          >
            <stop stopColor="rgba(43, 11, 160, 0.08)" offset="0"></stop>
            <stop stopColor="rgba(158, 10, 35, 0.27)" offset="1"></stop>
          </linearGradient>
        </defs>
      </motion.svg>

      <div className="w-[90%] md:w-[80%] -mt-10 md:m-auto md:mt-auto z-10 relative">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h1 className="w-full font-semibold text-xl md:text-3xl dark:text-white">
              {"🎉Hooray i'm Leul"}
            </h1>

            <h1 className="min-h-[80px] md:min-h-[160px] mt-3 mx-auto max-w-[680px] font-extrabold text-center text-3xl md:text-7xl text-black dark:text-white">
              Fullstack Software Developer
            </h1>
            <h1 className="font-normal mb-6 mx-auto max-w-[260px] md:max-w-[500px] text-sm md:text-lg text-gray-00 bg-clip-text text-transparent bg-gradient-to-l  from-[#a7ef89] to-[#9187ef]">
              {"Located in Addis Ababa, working as a fullstack software engineer developing microservice's and web-applications."} 
            </h1>

            <div className="flex flex-col md:flex-row justify-center dark:text-zinc-50 max-w-[70%] md:max-w-[400px] m-auto mt-16 md:mt-10 h-[60px] pt-3">
              <button className=" text-gray-00 bg-clip-text text-transparent bg-gradient-to-l  from-[#4ae806] to-[#5362ea] border-[3px] border-[#bdeaaa] px-9 py-2 flex items-center font-semibold rounded-3xl transition-transform duration-500 hover:scale-110 text-center justify-center">Projects</button>
              <button className="px-5 py-4 flex items-center font-semibold rounded-2xl mx-5 justify-center">Contact Me {'->'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
