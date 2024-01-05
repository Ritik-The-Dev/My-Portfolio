import React from "react";
import { Link } from "react-router-dom";
import Links from './Images/Link.svg'
import './Card.css'

const Card = ({ProjectTitle,ProjectImage,ProjectLink,ProjectDescription}) => {
  return (
    <div className="work">
      <img src={ProjectImage} />
      <div className="layer">
        <h3>{ProjectTitle}</h3>
        <p>
         {
            ProjectDescription
         }
        </p>
        <Link to={ProjectLink} title="" target="_blank">
          <img src={Links} alt="Link" style={{display:"flex",alignItems:"center",justifyContent:"center",height:"2rem"}}/>
          </Link>
      </div>
    </div>
  );
};

export default Card;
