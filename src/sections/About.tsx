import React from "react";
import { Section, Skill, SectionLayout } from "../components";

export const About: React.FC = () => {
  const skills = [
    { title: "Typescript", level: 95 },
    { title: "Next JS ", level: 95 },
    { title: "React JS", level: 95 },
    { title: "Tailwind CSS", level: 95 },
    { title: "SASS / SCSS", level: 80 },
    { title: "Firebase", level: 90 },
    { title: "GraphCMS", level: 80 },
    { title: "GraphQL", level: 80 },
    { title: "Node JS", level: 60 },
    { title: "Mongo DB", level: 60 },
    { title: "Docker", level: 50 },
  ];

  return (
    <Section id={"about"}>
      <div className="flex flex-col w-full">
        <SectionLayout title="About">
          <p className="paragraph">
            Hello, my name is Taesoo and I am a self-taught coder who is
            proficient in <b>React JS</b> and currently looking for a chance to
            start my career as a <b>front-end developer</b>. <br />
            Even though I studied CIS when I was in college, I learned most of
            my web development concepts by myself, since my college's web
            development courses mainly covered HTML, CSS, and JS basics, rather
            than diving deep into modern frameworks.
            <br />
            Also, my interest in UX/UI design led me to learn web design tools
            such as Sketch and Figma, which enhanced my development skills
            greatly. As I practiced and built my own projects, I became aware of
            the importance of efficiency in coding and how fascinating it is to
            simplify complicated problems. Therefore, my primary interests in
            these days are data structure/algorithm and clean coding.
          </p>
        </SectionLayout>
        <div className="my-24" />
        <SectionLayout title="skills">
          <div className="w-full flex flex-col items-center justify-center">
            {skills.map((skill) => (
              <Skill
                title={skill.title}
                level={skill.level}
                key={skill.title}
              />
            ))}
          </div>
        </SectionLayout>
      </div>
    </Section>
  );
};

export default About;
