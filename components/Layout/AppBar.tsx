import React from "react";
import Link from "next/link";
import { useTheme } from "context/ThemeContext";
import { useRouter } from "next/router";

const AppBar = () => {
  const { theme, setTheme } = useTheme();
  const { pathname } = useRouter();

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full flex items-center align-middle justify-between px-5 md:px-20 h-[65px] bg-white/70 dark:bg-black/20 backdrop-blur-sm border-b-[1px] border-zinc-200 dark:border-zinc-900">
        <h1 className="font-extrabold text-xl dark:text-white">LeulAria</h1>
        <div className="hidden h-full lg:flex font-medium items-center dark:text-zinc-50">
          <Link href="/">
            <a
              href=""
              className={`link-style ${pathname === "/" && 'active-link'}`}
            >
              home
            </a>
          </Link>
          <Link href="/experience">
            <a className={`link-style ${pathname === "/experience" && 'active-link'}`}>
              experience
            </a>
          </Link>
          <Link href="/projects">
            <a className={`link-style  ${pathname === "/projects" && 'active-link'}`}>
              projects
            </a>
          </Link>
          <Link href="/blog">
            <a className={`link-style ${pathname === "/blog" && 'active-link'}`}>
              blog
            </a>
          </Link>
          <Link href="/contact">
            <a
              href=""
              className={`link-style ${pathname === "/contact" && 'active-link'}`}
            >
              contact
            </a>
          </Link>

          <button className="ml-5 text-sm text-zinc-50 dark:text-zinc-900 bg-zinc-800 dark:bg-zinc-50 px-5 pb-[10px] pt-[7px] font-bold rounded-3xl hover:bg-zinc-700 dark;hover:bg-zinc-200">
            Download Resume
          </button>

          <a href="https://github.com/leularia" target="_blank">
            <button
              className="ml-5 icon-button flex items-center w-[45px] h-[45px]"
            >
              <svg
                width={20}
                height={20}
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <title>Logo Github</title><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
              </svg>
            </button>
          </a>

          <button
            onClick={() => {
              if (setTheme) {
                setTheme(theme === "light" ? "dark" : "light");
              }
            }}
            className="ml-5 icon-button"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="text-lg"
                width={20}
                height={20}
                viewBox="0 0 512 512"
              >
                <title>Moon</title>
                <path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width={20}
                height={20}
                viewBox="0 0 512 512"
              >
                <title>Sunny</title>
                <path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zM256 486a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zM369.14 164.86a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zM96 278H48a22 22 0 010-44h48a22 22 0 010 44zM403.08 425.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex lg:hidden">
          <div className="icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="dark:text-white w-[25px] h-[25px]"
            >
              <title>Menu</title>
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
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
