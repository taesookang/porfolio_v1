import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionLayout, FadeInDiv } from "../components";

interface IProject {
  title: string;
  platform: string;
  thumbnail: string;
  desc: string;
  repo: string;
}

export const Works: React.FC = () => {
  const projects: IProject[] = [
    {
      title: "Calculator",
      platform: "mobile",
      thumbnail: "/images/calc.png",
      desc: "A mobile app which offers basic calculation functionalities as well as dark mode appearance.",
      repo: "https://github.com/taesookang/calculator_RN",
    },
    {
      title: "instagrid",
      platform: "web",
      thumbnail: "/images/instagrid.png",
      desc: "Instagram cloned web app includes key features such as post, follow, like and comment",
      repo: "https://github.com/taesookang/instagrid",
    },
    {
      title: "Noogle",
      platform: "web",
      thumbnail: "/images/noogle.png",
      desc: "Google search cloned web app which allows users to search websites, news, images and videos by simply typing in search term.",
      repo: "https://github.com/taesookang/noogle",
    },
    {
      title: "Soju haus",
      platform: "web",
      thumbnail: "/images/soha.png",
      desc: "A Restaurant web app which offers categorized food menu, events, photos of the restaurant, and link to reservation webpage.",
      repo: "https://github.com/taesookang/soha",
    },
    {
      title: "Moovle",
      platform: "web",
      thumbnail: "/images/moovle.png",
      desc: "A Movie search web app which offers watchlist service and movie search by categories and query with detailed information and a short trailer for each result.",
      repo: "https://github.com/taesookang/moovle",
    },
  ];

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
