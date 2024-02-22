import React from "react";
import "./Projects.css";

export const ProjectCard = (params) => {
  return (
    <div
      class="card project-card"
      style={{backgroundColor: '#1C1B23'}}
    >
      <img src={params.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title" style={{ color: "white" }}>
          {params.name}
        </h5>
        <p class="card-text" style={{ color: "#8B8A90" }}>
          {params.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.501vh" }}>
          {params.tags.map((tag) => (
            <p className="tags">{tag}</p>
          ))}
        </div>
        <div>
          <a href={params.github} class="btn btn-outline-success">
            GitHub
          </a>
          {params.demo !== "" && (
            <a
              href={params.demo}
              style={{ marginLeft: "1vh" }}
              class="btn btn-outline-warning "
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
