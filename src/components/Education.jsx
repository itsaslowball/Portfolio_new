import React from 'react'
import './WorkExperience.css'
import data from '../data.json'

export const Education = () => {
        const EducationData = data.Education
  return (
        <div className="edu-card" id='Education'
        // style={{width:'500px'}}
    >
        {EducationData.map((exp)=>(
                <div style={{display:'flex', justifyContent:'center' , alignItems:'center', flexDirection:'column'}}>
                <h3 style={{color:'rgb(206, 152, 152)', fontSize:'18px'}}>{exp.degree}</h3>
                <ul style={{display:'flex' , justifyContent:'space-between', gap:'40px', color:'#8B8A8F', fontSize:'14px'}}>
                        <li>{exp.institute}</li>
                        <li>{exp.location}</li>

                </ul>
                <ul style={{display:'flex' , justifyContent:'space-between', gap:'40px', color:'#8B8A8F',flexWrap:'wrap', fontSize:'14px'}}>
                        <li>{exp.startDate} </li>
                        <li>{exp.endDate} </li>
                        <li>{exp.marks}</li>


                </ul>
                {/* <p style={{ color:'#8B8A8F'}}>{exp.description}</p> */}
        </div>
        ))}
        
    </div>
  )
}
