import React from "react";
import { Section, Skill, SectionLayout } from "../components";
import { skills } from "../data";

export const About: React.FC = () => {
  return (
    <Section id={"about"}>
      <div className="flex flex-col w-full">
        <SectionLayout title="About">
          <p className="paragraph">
            As a highly motivated and passionate <b>web developer</b>, I am
            eager to bring my expertise in coding and web development to a
            dynamic and innovative organization. With a strong background in web
            technologies, a deep understanding of the latest industry trends and
            a commitment to staying current with new advancements, I am
            confident that I have the skills, experience and drive to make a
            meaningful contribution to your team.
            <br />
            As a self-taught coder, I honed my skills through hands-on
            experience and a constant drive to improve. I am proficient in
            various web technologies including <b>React JS</b> and have a keen
            eye for <b>UX/UI design</b>. <br />
            My primary interest these days lies in <b>
              cloud services
            </b> and <b>artificial Intelligence</b>. I am eager to bring my
            skills and expertise to an organization that is looking for
            forward-thinking solutions and a commitment to excellence.
            <br />I am excited about the opportunity to put my skills to the
            test and join a company where I can make a real impact. With my
            dedication, creativity, and commitment to excellence, I am confident
            that I will be a valuable asset to your team.
          </p>
        </SectionLayout>
        <div className="my-24" />
        <SectionLayout title="skills">
          <div className="w-full flex flex-col">
            {skills.map((skillSet) => {
              const category = skillSet[0];
              const list = skillSet[1];
              return (
                <div
                  className="w-full flex flex-col items-center justify-center my-8"
                  key={category}
                >
                  <h3 className="capitalize w-full text-lg font-semibold mb-6">
                    {category}
                  </h3>
                  <div className="w-[90%] flex flex-col items-end justify-center">
                    {list.map((skill) => (
                      <Skill
                        title={skill.title}
                        level={skill.level}
                        key={skill.title}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </SectionLayout>
      </div>
    </Section>
  );
};

export default About;
