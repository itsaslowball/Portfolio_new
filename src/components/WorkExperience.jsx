import React from "react";
import './WorkExperience.css'


const WorkExperienceData = [
  {
    startDate: "04-01-2024",
    endDate: "",
    company: "Contentstack",
    designation: "Associate Software Engineer Intern",
    description: `Worked in a team to create the company's internal website called TechX using NextJs. Currently working with the Automation Hub team. `,
    jobLocation: "remote",
  },
  {
    startDate: "04-01-2023",
    endDate: "",
    company: "CSI-JSSSTU",
    designation: "General Secretary",
    description: `Over the span of 1 year, I conducted many events and taught many students. I also organised workshops related to web-development and ML `,
    jobLocation: "Mysuru",
  },
];

export const WorkExperience = () => {
  return (
    <div className="work-card"
    >

      {WorkExperienceData.map((exp) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "white",
          }}
        >
          <h3 style={{ color:'rgb(206, 152, 152)' }}>{exp.designation}</h3>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "40px",
              color: "#8B8A8F",
              flexWrap:'wrap'
            }}
          >
            <li>{exp.company} </li>
            <li>{exp.startDate} </li>
            <li>{exp.jobLocation}</li>
          </ul>
          <p style={{ color: "#8B8A8F" }}>{exp.description}</p>
        </div>
      ))}
    </div>
  );
};
