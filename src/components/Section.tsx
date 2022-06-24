import React from "react";

interface Props {
  id: string;
  children: React.ReactNode;
}

export const Section: React.FC<Props> = ({ id, children }) => {
  return (
    <section id={id} className="w-full flex items-center justify-center">
      <div className="container flex flex-col-reverse md:flex-row w-full py-24 px-8 lg:px-24">{children}</div>
    </section>
  );
};

export default Section;
