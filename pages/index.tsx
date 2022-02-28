import Head from "next/head";
import type { NextPage } from "next";
import Hero from "../components/home/Hero";
import Stacks from "../components/home/Stacks";
import Projects from "../components/home/Projects";
import { useEffect } from "react";
import Footer from "../components/Layout/Footer";

const Home: NextPage = () => {

  useEffect(() => {
    console.log(window.innerWidth);
  })

  return (
    <div className="min-h-screen dark:bg-black text-zinc-900 dark:text-white">
      <Head>
        <title>LeulAria | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* AppBar */}
      <div className="flex items-center align-middle justify-between px-20 h-[65px] bg-white dark:bg-black ">
        <h1 className="font-extrabold text-xl dark:text-white">LeulAria</h1>
        <div className="hidden md:flex items-center dark:text-zinc-50">
          <a href="" className="mx-3">
            home
          </a>
          <a href="" className="mx-3">
            about
          </a>
          <a href="" className="mx-3">
            blogs
          </a>
          <a href="" className="mx-3">
            contact
          </a>
          <button className="ml-5 bg-zinc-900 text-white dark:text-zinc-900 dark:bg-zinc-50 px-6 py-2 text-sm font-bold rounded-3xl transition-transform duration-300 hover:scale-105">
            Download Resume
          </button>
        </div>
      </div>

      {/* Hero */}
      <Hero />

      {/* Stacks */}
      <Stacks />

      {/* Projects */}
      <Projects />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
