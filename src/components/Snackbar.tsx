import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

import { motion } from "framer-motion";

interface Props {
  setSnackBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Snackbar: React.FC<Props> = ({ setSnackBarOpen }) => {
  return (
    <motion.div
      className="fixed flex items-center gap-3 bottom-8 right-8 bg-green-600 py-4 px-6 rounded-md text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <FiCheckCircle size={20} color={"#ffffff"} />
      <p className="text-sm font-medium">
        Message sent. I'll get back to you ASAP.
      </p>
      <button
        onClick={() => {
          setSnackBarOpen(false);
        }}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-white/20"
      >
        <MdOutlineClose size={20} color={"#ffffff"} />
      </button>
    </motion.div>
  );
};

export default Snackbar;
