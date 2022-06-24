import React from "react";
import { motion } from "framer-motion";

export const Greeting: React.FC = () => {
  const greeting = "Hello, I'm Taesoo";
  const letters = greeting.split("");

  return (
    <>
      {letters.map((letter, idx) => (
        <motion.span
          key={idx}
          className="text-2xl md:text-4xl mr-1 font-bold"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ delay: idx * 0.1, repeat: Infinity, repeatDelay: 3 }}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
};

export default Greeting;
