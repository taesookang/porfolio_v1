import React from "react";

interface Props {
  id: string;
  children: React.ReactNode;
}

export const Section: React.FC<Props> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="w-full min-h-screen flex items-center justify-center"
    >
      <div className="container flex w-full min-h-screen py-24 px-20">

      {children}
      </div>
    </section>
  );
};

export default Section;
