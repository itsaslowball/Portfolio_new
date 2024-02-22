import React from "react";
import "./Skills.css";
import { SkillCard } from "./SkillCard";
import data from '../data.json'


export const Skills = () => {
  const skillData = data.Skills;
  return (
    <div className="skills" id="Skills">
      <h1
        style={{
          textAlign: "center",
          color: "White",
          marginBottom: "1.875 rem",
          fontSize: "2.5 rem",
        }}
      >
        Skills
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          // gap: "0.625 rem",
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
