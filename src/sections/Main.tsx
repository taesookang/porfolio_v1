import React from "react";
import Image from "next/image";
import { Section, Greeting, CTA } from "../components";

interface Props {}

export const Main: React.FC<Props> = () => {
  return (
    <Section id="main">
      <div className="w-full min-h-full flex flex-col flex-1 items-center justify-center">
        <div className="w-fit">
          <div className="w-full flex justify-end">
            <Greeting />
          </div>
          <p className="mt-2 text-slate-400">
            Creating websites and applications
          </p>
          <div className="mt-14 w-full flex items-center justify-around">
            <CTA title="Works" scrollToId="works" />
            <CTA title="Contact" scrollToId="contact" />
          </div>
        </div>
      </div>
      <div className="w-full min-h-full flex flex-1 ">
        <Image
          className="min-w-[500px]"
          priority
          src="/images/drawing.svg"
          width={600}
          height={600}
        />
      </div>
    </Section>
  );
};

export default Main;
