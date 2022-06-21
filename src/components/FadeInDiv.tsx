import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;

}

// motion variants
const fadeIn = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  shown: {
    opacity: 1,
    y: 0,
  },
};

export const FadeInDiv: React.FC<Props> = ({
  children,

}) => {
  return (
    <motion.div
      className="w-full flex"
      variants={fadeIn}
      initial="hidden"
      whileInView="shown"
      transition={{ duration: 1, ease: "easeIn" }}
      //   viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInDiv;
