import React from 'react'
import './WorkExperience.css'
const EducationData = [
        {
                startDate: '2020',
                endDate:'2024',
                institute:'JSS Science And Technology University',
                degree: 'B.E in Information Science and Engineering',
                location: 'Mysuru, Karnataka',
                marks: '9.01 CGPA'
        },
        {
                startDate: '2017',
                endDate:'2019',
                institute:`St. Josheph's Senior Secondary School`,
                degree: 'Intermediate',
                location: 'Muzzafarpur, Bihar',
                marks: '78%'
        },
        {
                startDate: '2012',
                endDate:'2017',
                institute:`St. Xavier's Higher Secondary School`,
                degree: 'Matriculation',
                location: 'Bettiah, Bihar',
                marks: '10 CGPA'
        }
]
export const Education = () => {
  return (
        <div className="edu-card" id='Education'
        // style={{width:'500px'}}
    >
        {EducationData.map((exp)=>(
                <div style={{display:'flex', justifyContent:'center' , alignItems:'center', flexDirection:'column'}}>
                <h3 style={{color:'rgb(206, 152, 152)'}}>{exp.degree}</h3>
                <ul style={{display:'flex' , justifyContent:'space-between', gap:'40px', color:'#8B8A8F'}}>
                        <li>{exp.institute}</li>
                        <li>{exp.location}</li>

                </ul>
                <ul style={{display:'flex' , justifyContent:'space-between', gap:'40px', color:'#8B8A8F',flexWrap:'wrap'}}>
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
