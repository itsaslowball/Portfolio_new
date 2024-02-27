import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

import { FaExternalLinkAlt } from "react-icons/fa";

import "./Projects.css";

export const ProjectCard = (params) => {
  return (
    <div
      class="card project-card"
      style={{
        backgroundColor: "#1C1B23",
      }}
    >
      <img src={params.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h7 class="card-title" style={{ color: "white" }}>
              {params.name}
            </h7>
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

        <p class="card-text" style={{ color: "#8B8A90", fontSize: "17px" }}>
          {params.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {params.tags.map((tag) => (
            <p className="tags" style={{ marginRight: "9px" }}>
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
