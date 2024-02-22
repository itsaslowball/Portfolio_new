import React from "react";
import "./Skills.css";
import { SkillCard } from "./SkillCard";

const skillData = [
  {
    title: "Backend",
    skills: ["NodeJs", "ExpressJs", "NestJs"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "ReactJs", "NextJs", "Bootstrap", "Tailwind-CSS"],
  },
  {
    title: "Programming Languages",
    skills: [
      "C",
      "C++",
      "Javascript",
      "Typescript",
      "C# (basic)",
      "Python (basic)",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "SQL"],
  },
  {
    title: "Others",
    skills: ["Git", "Data Structures", "DBMS"],
  },
];

export const Skills = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <h1
        style={{
          textAlign: "center",
          color: "White",
          marginBottom: "30px",
          fontSize: "40px",
        }}
      >
        Skills
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap:'10px'
        }}
      >
        <SkillCard title={skillData[0].title} skills={skillData[0].skills} />
        <SkillCard title={skillData[1].title} skills={skillData[1].skills} />
        <SkillCard title={skillData[2].title} skills={skillData[2].skills} />
        <SkillCard title={skillData[3].title} skills={skillData[3].skills} />
        <SkillCard title={skillData[4].title} skills={skillData[4].skills} />
      </div>
    </div>
  );
};
