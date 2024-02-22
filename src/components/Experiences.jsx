import React from "react";
import { WorkExperience } from "./WorkExperience";
import { Education } from "./Education";
import './WorkExperience.css'
const EducationData = [];

export const Experiences = () => {
  return (
    <div className="experiences">
      <div style={{display:'flex', flexDirection:'column', color:'white', justifyContent:'center', alignItems:'center'}}>
        <h1 style={{alignItems:'center', marginBottom:'20px'}}>Work Experience</h1>
        <WorkExperience />
      </div>

      <div style={{display:'flex', flexDirection:'column', color:'white', justifyContent:'center', alignItems:'center'}}>
        <h1 style={{alignItems:'center', marginBottom:'20px'}}>Education</h1>
        <Education/>
      </div>

    </div>
  );
};
