import React from "react";
import { motion } from "framer-motion";

export const Greeting: React.FC = () => {
  const greeting = "Hello, I'm Taesoo";
  const letters = greeting.split("");

  const variants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: [0, 1.5, 1],
    },
  };

  return (
    <>
      {letters.map((letter, idx) => (
        <motion.span
          key={idx}
          className="text-2xl md:text-4xl mr-1 font-bold"
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.3,
            delay: idx * 0.2,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
};

export default Greeting;
