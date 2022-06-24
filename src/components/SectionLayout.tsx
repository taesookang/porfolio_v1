import React from "react";
import { FadeInDiv } from "../components";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const SectionLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <FadeInDiv>
      <div className="w-full flex flex-col md:flex-row">
      <div className="w-full mb-16 md:mb-0 md:w-1/3 flex text-brand-darken justify-center md:justify-start">
        <h2 className="text-2xl md:text-[16px]">{title}</h2>
      </div>
      <div className="w-full md:w-2/3 flex">{children}</div>
      </div>
    </FadeInDiv>
  );
};

export default SectionLayout;
