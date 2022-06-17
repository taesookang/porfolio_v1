import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

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

  const menuItemProps = {
    className:
      "text-[10px] absolute rounded-full shadow-md w-12 h-12 flex items-center justify-center hover:bg-[#E2CFC1] transition-colors ease-in",
    initial: { x: 0, y: 0, opacity: 0 },
    transition: { ease: "easeOut", duration: 0.2 },
  };

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
    <div className="fixed w-full h-24 py-2 px-8 flex items-center justify-between">
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
            className="w-6 h-[2px] bg-black"
          />
          <motion.div
            animate={lowerBar}
            style={{ originX: 0 }}
            variants={_lowerBar}
            className="w-6 h-[2px] bg-black mt-2"
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.button
                initial={menuItemProps.initial}
                animate={{ x: -30, opacity: 1 }}
                exit={menuItemProps.initial}
                transition={menuItemProps.transition}
                style={{
                  bottom: -8,
                  right: 40,
                }}
                className={menuItemProps.className}
              >
                About
              </motion.button>
              <motion.button
                initial={menuItemProps.initial}
                animate={{ x: -20, y: 20, opacity: 1 }}
                exit={menuItemProps.initial}
                transition={menuItemProps.transition}
                style={{
                  bottom: -32,
                  right: 24,
                }}
                className={menuItemProps.className}
              >
                Works
              </motion.button>
              <motion.button
                initial={menuItemProps.initial}
                animate={{ y: 34, opacity: 1 }}
                exit={menuItemProps.initial}
                transition={menuItemProps.transition}
                style={{
                  bottom: -48,
                  right: 0,
                }}
                className={menuItemProps.className}
              >
                Contact
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
