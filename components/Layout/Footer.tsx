import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-[#222] rounded-lg shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-lg  cursor-pointer font-[300] whitespace-nowrap dark:text-white">
            Leul<span className="font-[600]">Aria</span>
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6  text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6  text-white">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Leul,
        </a>
        . All Rights Reserved. <br />
        <span className="mt-1 text-sm">
          Made with NextJS, NextUI and Tailwind
        </span>
      </span>
    </footer>
  );
};

export default Footer;
