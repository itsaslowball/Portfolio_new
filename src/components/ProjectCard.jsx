import React from "react";
import "./Projects.css";

export const ProjectCard = (params) => {
  return (
    <div
      class="card project-card"
      style={{
        backgroundColor: "#1C1B23",
      }}
    >
      <img src={params.image} class="card-img-top" alt="..."/>
      <div class="card-body" >
        <h7 class="card-title" style={{ color: "white" }}>
          {params.name}
        </h7>
        <p class="card-text" style={{ color: "#8B8A90", fontSize: "13px" }}>
          {params.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.501vh" }}>
          {params.tags.map((tag) => (
            <p className="tags">{tag}</p>
          ))}
        </div>
        <div>
          <a
            href={params.github}
            class="btn btn-outline-success"
            style={{ width: "11vh", fontSize: "2vh", padding: "0.5vh" }}
          >
            GitHub
          </a>
          {params.demo !== "" && (
            <a
              href={params.demo}
              class="btn btn-outline-warning"
              style={{
                width: "11vh",
                fontSize: "2vh",
                padding: "0.5vh",
                marginLeft: "1vh",
              }}
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
