import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { MenuButtons } from ".";
import { useGlobalContext, useOnClickOutside } from "../context";

interface Props {}

// motion variants
const _upperBar = {
  open: { rotate: "45deg", y: -3.3, x: 4 },
  close: { rotate: 0, y: 0, x: 0 },
};

const _lowerBar = {
  open: { rotate: "-45deg", y: 3.3, x: 4 },
  close: { rotate: 0, y: 0, x: 0 },
};

export const Header: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const upperBar = useAnimation();
  const lowerBar = useAnimation();

  const { scrollToSection } = useGlobalContext();

  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  useEffect(() => {
    if (isOpen) {
      upperBar.start("open");
      lowerBar.start("open");
    } else {
      upperBar.start("close");
      lowerBar.start("close");
    }
  }, [isOpen]);

  return (
    <div className="fixed w-full h-24 py-2 px-8 flex items-center justify-between z-50">
      <button
        onClick={() => scrollToSection("main")}
        className="flex flex-col items-end invisible lg:visible"
      >
        <span className="font-bold text-xl text-right">Taesoo.</span>
        <span className="font-light -mt-2 text-right">Kang</span>
      </button>
      <div className="relative" ref={ref}>
        <button
          className="w-12 h-12 bg-white lg:bg-transparent shadow-md md:shadow-none rounded-full flex flex-col items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={upperBar}
            style={{ originX: 0 }}
            variants={_upperBar}
            className="w-6 h-[2px] bg-brand-black"
          />
          <motion.div
            animate={lowerBar}
            style={{ originX: 0 }}
            variants={_lowerBar}
            className="w-6 h-[2px] bg-brand-black mt-2"
          />
        </button>
        <AnimatePresence>
          {isOpen && <MenuButtons setIsOpen={setIsOpen} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
