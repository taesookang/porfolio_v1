import React from "react";
import Image from "next/image";
import { Section, Greeting, CTA } from "../components";
import { useGlobalContext } from "../context";

export const Main: React.FC = () => {
  const { scrollToSection } = useGlobalContext();

  return (
    <Section id="main">
      <div className="w-full min-h-full flex flex-col flex-1 items-center justify-center">
        <div className="w-fit min-w-[320px] mt-12 md:mt-0 flex flex-col items-center md:items-start">
          <div className="w-full flex justify-center md:justify-start">
            <Greeting />
          </div>
          <p className="mt-2 text-sm lg:text-base text-brand-black/40">
            Creating websites and applications
          </p>
          <div className="mt-14 w-full flex items-center justify-between">
            <CTA title="Works" callback={() => scrollToSection("works")} />
            <CTA title="Contact" callback={() => scrollToSection("contact")} />
          </div>
        </div>
      </div>
      <div className="w-full min-h-full flex flex-1 items-center justify-center">
        <div className="relative w-full max-w-[600px] aspect-square">
          <Image
            priority
            src="/images/drawing.svg"
            layout="fill"
            // width={600}
            // height={600}
          />
        </div>
      </div>
    </Section>
  );
};

export default Main;
