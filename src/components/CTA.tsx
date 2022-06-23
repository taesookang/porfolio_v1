import React from "react";
import { useRouter } from "next/router";

interface Props {
  title: string;
  scrollToId: string;
}

export const CTA: React.FC<Props> = ({ title, scrollToId }) => {
  const router = useRouter();
  const scrollToSection = (id: string) => {
    router.push({ pathname: "/", query: { id: id } }, undefined, {
      shallow: true,
    });
  };

  return (
    // <button
    //   onClick={() => scrollToSection(scrollToId)}
    //   className="relative w-36 h-14 flex items-center justify-center font-medium group"
    // >
    //   <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-brand-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    //   <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-brand-primary"></span>
    //   <span className="relative text-black group-hover:text-white">
    //     {title}
    //   </span>
    // </button>
    // <button className="w-36 h-12 flex items-center justify-center font-medium bg-brand-primary text-brand-darken text-sm shadow-md hover:shadow-none hover:bg-brand-darken/80 hover:text-white ">
    //   {title}
    // </button>
    // <button className="w-36 h-12 text-sm font-medium transition-colors duration-150 shadow-md bg-white rounded-lg focus:shadow-outline hover:bg-brand-black hover:text-white">
    //   {title}
    // </button>
    <button className="w-36 h-12 flex items-center justify-center font-medium shadow-md bg-brand-black text-white rounded-sm transition duration-200 hover:bg-brand-darken hover:-translate-y-1">
      {title}
    </button>
  );
};

export default CTA;
