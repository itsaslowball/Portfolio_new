import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import data from "../data.json";

export const EducationTimeline = () => {
  return (
    <div style={{ margin: "0.5rem" }}>
      <h2
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          marginBottom: "5rem",
          marginTop: "5rem",
        }}
      >
        My Education
      </h2>

      <VerticalTimeline>
        {data.Education.map((exp) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#1C1B23", color: "#8B8A90" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={exp.startDate}
              iconStyle={{ background: "orange", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">{exp.degree}</h3>
              <br></br>
              <h5
                className="vertical-timeline-element-title"
                style={{ color: "white" }}
              >
                {exp.institute}
                <span style={{ fontSize: "20px" }}>, {exp.location}</span>
              </h5>
              <br></br>
              <h5 className="vertical-timeline-element-subtitle"></h5>
              <p>{exp.marks}</p>
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
    </div>
  );
};
