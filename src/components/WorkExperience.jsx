import React from "react";
import './WorkExperience.css'
import data from '../data.json'

export const WorkExperience = () => {
  const WorkExperienceData = data.WorkExperience;
  return (
    <div className="work-card" id="Work"
    >

      {WorkExperienceData.map((exp, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "white",
          }}
          key={index}
        >
          <h3 style={{ color:'rgb(206, 152, 152)', fontSize:'18px' }}>{exp.designation}</h3>
          <ul className="list"
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#8B8A8F",
              flexWrap: 'wrap',
              fontSize:'14px'
            }}
          >
            <li>{exp.company} </li>
            <li>{exp.startDate} </li>
            <li>{exp.jobLocation}</li>
          </ul>
          <p style={{ color: "#8B8A8F", fontSize:'14px'}}>{exp.description}</p>
        </div>
      ))}
    </div>
  );
};
