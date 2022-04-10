import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
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
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <AppBar />
        </motion.div>
      </AnimatePresence>

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
