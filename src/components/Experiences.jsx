import React from "react";
import { WorkExperience } from "./WorkExperience";
import { Education } from "./Education";
import './WorkExperience.css'

export const Experiences = () => {
  return (
    <div className="experiences" id="Work">
      <div style={{display:'flex', flexDirection:'column', color:'white', justifyContent:'center', alignItems:'center'}}>
        <h3 style={{alignItems:'center', marginBottom:'20px'}}>Work Experience</h3>
        <WorkExperience />
      </div>

      <div style={{display:'flex', flexDirection:'column', color:'white', justifyContent:'center', alignItems:'center'}}>
        <h3 style={{alignItems:'center', marginBottom:'20px'}}>Education</h3>
        <Education/>
      </div>

    </div>
  );
};
