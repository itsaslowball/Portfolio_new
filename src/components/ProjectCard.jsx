import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

import { FaExternalLinkAlt } from "react-icons/fa";

import "./Projects.css";

export const ProjectCard = (params) => {
  return (
    <div
      className="card project-card"
      style={{
        backgroundColor: "#1C1B23",
      }}
    >
      <img src={params.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p className="card-title" style={{ color: "white" }}>
              {params.name}
            </p>
          </div>

          <div>
            <a
              href={params.github}
              style={{ fontSize: "2.4vh", color: "white" }}
            >
              <FaGithub />
            </a>
            {params.demo !== "" && (
              <a
                href={params.demo}
                style={{
                  fontSize: "2.3vh",
                  textDecoration: "none",
                  marginLeft: "3vh",
                  color: "red",
                }}
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>

        <p className="card-text" style={{ color: "#8B8A90", fontSize: "15px" }}>
          {params.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {params.tags.map((tag, index) => (
            <p className="tags" style={{ marginRight: "9px" }} key={index}>
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
