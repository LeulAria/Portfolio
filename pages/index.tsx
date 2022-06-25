import Head from "next/head";
import type { NextPage } from "next";
import Hero from "../components/home/Hero";
import Stacks from "../components/home/Stacks";
import Projects from "../components/home/Projects";
import About from "../components/home/About";

import { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer";
import AppBar from "../components/Layout/AppBar";
import HomePageIntro from "../components/home/HomePageIntro";
import Hero2 from "../components/home/Hero2";
import { useTheme } from "context/ThemeContext";

const Home: NextPage = () => {
  const { theme } = useTheme();
  const [showSlideShow, setShowSlideShow] = useState(false);

  useEffect(() => {
    setShowSlideShow(true);
  }, []);

  return (
    <div className="min-h-[calc(100vh - 60px)] text-zinc-900 dark:text-white">
      <Head>
        <title>LeulAria | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showSlideShow && <HomePageIntro />}
    </div>
  );
};

export default Home;
