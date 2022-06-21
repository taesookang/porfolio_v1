import React from 'react'
import { motion } from 'framer-motion'


export const MenuButtons: React.FC = () => {
    const menuItemProps = {
        className:
          "text-[10px] absolute rounded-full shadow-md w-12 h-12 flex items-center justify-center bg-white hover:bg-brand-primary transition-colors ease-in",
        initial: { x: 0, y: 0, opacity: 0 },
        transition: { ease: "easeOut", duration: 0.2 },
      };
    return (
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
                  bottom: -35,
                  right: 26,
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
    );
}

export default MenuButtons;