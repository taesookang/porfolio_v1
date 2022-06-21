import React from "react";
import { Section, SectionLayout} from "../components";

export const Works: React.FC = () => {
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
    <Section id={"works"}>
      <SectionLayout title="works">
        <div>Hi</div>
      </SectionLayout>
    </Section>
  );
};

export default Works;
