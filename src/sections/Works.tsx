import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionLayout, FadeInDiv } from "../components";
import { projects } from "../data";

export const Works: React.FC = () => {
  return (
    <Section id={"works"}>
      <SectionLayout title="works">
        <ul className="flex flex-col gap-7 w-full px-4">
          {projects.map((project) => (
            <FadeInDiv key={project.title}>
              <li className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center justify-around w-full h-fit my-8 first:mt-0 ">
                <div className="relative mb-6 min-w-[176px] w-3/4 sm:w-44 aspect-square rounded-full shadow-md overflow-hidden bg-white">
                  <Image
                    src={project.thumbnail}
                    layout="fill"
                    objectFit="revert"
                    objectPosition="center"
                  />
                </div>
                <div className="w-full flex flex-col ml-0 sm:ml-8 py-4 justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <h1 className="capitalize text-xl font-medium">
                        {project.title}
                      </h1>
                      <span className="capitalize ml-2 bg-brand-black text-white rounded-full px-2 py-[2px] font-medium text-[10px]">
                        {project.platform}
                      </span>
                    </div>
                    <p className="paragraph py-2">{project.desc}</p>
                  </div>
                  <Link href={project.repo}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-end "
                    >
                      <button className="font-medium text-brand-secondary hover:opacity-60">
                        Go to repo &gt;&gt;
                      </button>
                    </a>
                  </Link>
                </div>
              </li>
            </FadeInDiv>
          ))}
        </ul>
      </SectionLayout>
    </Section>
  );
};

export default Works;
