import React from "react";
import "./Hero.css";
import data from  '../data.json'

export const Hero = () => {
  const heroData = data.Hero;

  return (
    <div className="container" id="About">
      <div className="profile-picture">
        <img src="./profile.jpg" />
      </div>

      <div className="info">
        <div className="info-div1">
          <p>{heroData.intro}</p>
        </div>
        <div className="info-div2">
          <p className="title">{heroData.title}</p>
          <p className="description">
          {heroData.description}
          </p>
        </div>
        <a href={heroData.resume}>
          <button
            style={{ color: "white" }}
            className="info-div3 btn btn-outline-success"
          >
            <h3>My Resume</h3>
          </button>
        </a>
      </div>
    </div>
  );
};
