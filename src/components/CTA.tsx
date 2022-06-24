import React from "react";
import { useRouter } from "next/router";

interface Props {
  title: string;
  callback?: () => void;
  type?: "button" | "submit" | "reset" | undefined
}

export const CTA: React.FC<Props> = ({ title, callback, type="button"}) => {
  
  return (
    <button type={type} onClick={callback} className="w-36 h-12 flex items-center justify-center font-medium shadow-md bg-brand-black text-white rounded-sm transition duration-200 hover:bg-brand-darken hover:-translate-y-1">
      {title}
    </button>
  );
};

export default CTA;
