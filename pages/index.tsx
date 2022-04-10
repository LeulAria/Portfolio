import Head from "next/head";
import type { NextPage } from "next";
import Hero from "../components/home/Hero";
import Stacks from "../components/home/Stacks";
import Projects from "../components/home/Projects";
import { useEffect } from "react";
import Footer from "../components/Layout/Footer";
import AppBar from "../components/Layout/AppBar";
import About from "../components/home/About";

const Home: NextPage = () => {
  useEffect(() => {
    console.log(window.innerWidth);
  });

  return (
    <div className="min-h-[calc(100vh - 60px)] dark:bg-black text-zinc-900 dark:text-white">
      <Head>
        <title>LeulAria | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero */}
      <Hero />

      {/* About Me */}
      <About />

      {/* Stacks */}
      <Stacks />

      {/* Projects */}
      <Projects />
    </div>
  );
};

export default Home;
