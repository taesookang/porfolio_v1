import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { MenuButtons } from '.'

interface Props {}

// motion variants
const _upperBar = {
  open: { rotate: "45deg", y: -3.3 },
  close: { rotate: 0, y: 0 },
};

const _lowerBar = {
  open: { rotate: "-45deg", y: 3.3 },
  close: { rotate: 0, y: 0 },
};

export const Header: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const upperBar = useAnimation();
  const lowerBar = useAnimation();

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
      <div className="flex flex-col items-end">
        <span className="font-bold text-xl text-right">Taesoo.</span>
        <span className="font-light -mt-2 text-right">Kang</span>
      </div>
      <div className="relative">
        <button
          className="w-8 h-8 flex flex-col items-center justify-center"
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
          {isOpen && (
            <MenuButtons />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
