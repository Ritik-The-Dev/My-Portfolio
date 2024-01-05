import React from 'react'

const SkillSchema = ({title,description,skillImage}) => {
  return (

        <div className="skill skill-js">
        <div className="skill-content-icon">
            <div className="skill-content-icon-2" >
              <img src={skillImage} alt="image" style={{width:"70px"}}/>
            </div>
          </div>
          <div className="skill-content">
            <span>{title}</span>
            <p>
              {description}
            </p>
          </div>
        </div>
  )
}

export default SkillSchema
