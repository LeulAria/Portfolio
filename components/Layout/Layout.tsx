import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useTheme } from "context/ThemeContext";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { theme } = useTheme();
  const [scrollYNumber, setScrollYNumber] = useState(0);
  const [scrollUpTrigger, setScrollUpTrigger] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setScrollYNumber(window.scrollY);
    setScrollUpTrigger(scrollYNumber + 100 > window.scrollY);
  };

  return (
    <div className={`${theme}`}>
      <div className="-mt-[70px] bg-white dark:bg-black">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AppBar />
          </motion.div>
        </AnimatePresence>

        <div className="min-h-[calc(100vh-400px)] mx-auto pt-[30px]">
          {children}
        </div>

        <Footer />
      </div>
    </div >
  );
};

export default Layout;
