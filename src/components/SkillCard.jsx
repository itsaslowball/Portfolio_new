import React from "react";
import "./Skills.css";
export const SkillCard = (params) => {
  return (
    <div className="skillcard">
      <div className="title">{params.title}</div>
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "4px",
        }}
      >
        {params.skills.map((skill, index) => (
          <span className="skill-tag" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
