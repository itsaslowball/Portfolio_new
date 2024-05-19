import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import data from "../data.json";

export const WorkTimeline = () => {
  return (
    <>
      <h2
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          marginBottom: "5rem",
          marginTop: "4rem",
        }}
      >
        Experiences
      </h2>
      <VerticalTimeline>
        {data.WorkExperience.map((exp) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#1C1B23", color: "#8B8A90" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={exp.startDate}
              iconStyle={{ background: "green", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {exp.designation}
              </h3>
              <h4
                className="vertical-timeline-element-title"
                style={{ color: "white" }}
              >
                {exp.company}
                <span style={{ fontSize: "20px" }}>, {exp.jobLocation}</span>
              </h4>
              <h5 className="vertical-timeline-element-subtitle"></h5>
              <p>
                <ul>
                  {exp.description.map((point) => {
                    return <li>{point}</li>;
                  })}
                </ul>
              </p>
              {exp.techStack && (
                <>
                  <br></br>
                  <h5>Worked On</h5>
                  {exp.techStack &&
                    exp.techStack.map((stack) => {
                      return <span style={{ color: "white" }}>{stack} </span>;
                    })}
                </>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
};
