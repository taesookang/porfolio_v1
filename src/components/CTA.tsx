import React from "react";
import {  useRouter } from 'next/router'

interface Props {
  title: string;
  scrollToId: string;
}

export const CTA: React.FC<Props> = ({ title, scrollToId }) => {
    const router = useRouter()
  const scrollToSection = (id: string) => {
    router.push({pathname: "/", query:{id: id}}, undefined, {shallow: true})
    // const violation = document.getElementById(id);
    // window.scrollTo({
    //   top: violation?.offsetTop,
    //   behavior: "smooth",
    // });
    
};

  return (
    <button
      onClick={() => scrollToSection(scrollToId)}
      className="relative w-36 h-14 flex items-center justify-center font-medium group"
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-brand-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-brand-primary"></span>
      <span className="relative text-black group-hover:text-white">
        {title}
      </span>
    </button>
  );
};

export default CTA;
