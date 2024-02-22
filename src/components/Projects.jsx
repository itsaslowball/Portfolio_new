import React from "react";
import "./Projects.css";
import { ProjectCard } from "./ProjectCard";

const projectsDetails = [
  {
    image: "./event1.jpg",
    name: "Project 1",
    description:
      "This is my project which has been solved and used by me andsio aoidao asifjas aia aidfasiuasf This is my project which has been solved and used by me andsio aoidao asifjas aia aidfasiuas",
    tags: ["NestJs", "ReactJs", "FullStack"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    image: "./profile.jpg",
    name: "Project 2",
    description:
      "This is my project which has been solved and used by me andsio aoidao asifjas aia aidfasiuasf",
    tags: ["MongoDb", "ReactJs", "FullStack"],
    github: "https://github.com",
    demo: "",
  },
  {
    image: "./event1.jpg",
    name: "Project 3",
    description:
      "This is my project which has been solved and used by me andsio aoidao asifjas aia aidfasiuasf",
    tags: ["Web development", "ReactJs", "FullStack"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
        image: "./event1.jpg",
        name: "Project 4",
        description:
          "This is my project which has been solved and used by me andsio aoidao asifjas aia aidfasiuasf This is my project which has been solved and used by me andsio aoidao asifjas aia aidfasiuas",
        tags: ["NestJs", "ReactJs", "FullStack"],
        github: "https://github.com",
        demo: "https://demo.com",
      },
];

export const Projects = () => {
  return (
    <div style={{ marginTop: "10vh" }}>
      <h1
        style={{
          textAlign: "center",
          color: "White",
          marginBottom: "3vh",
          fontSize: "4vh",
        }}
      >
        Projects
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {projectsDetails.map((proj,index) => (
          <ProjectCard image={proj.image} name={proj.name} description={proj.description} tags={proj.tags} github={proj.github} demo={proj.demo} key={index} />
        ))}
      </div>
    </div>
  );
};
