import React from 'react'
import './skills.css'
import SkillSchema from './SkillSchema'
import skill1 from './Images/skill1.png'
import skill2 from './Images/skill2.png'
import skill3 from './Images/skill3.png'
import skill4 from './Images/skill4.png'
import skill5 from './Images/skill5.svg'
import skill6 from './Images/skill6.png'
import skill7 from './Images/skill7.png'
import skill8 from './Images/skill8.png'

const Skills = (props)=> {
  return (
    <div ref={props.skillsRef} style={{display:"flex",alignItems:"center",justifyContent:"center",background:"#364148"}}>
    <div id='skills'>
      <div className="skill-icon">
        <i className="fa-brands fa-readme" aria-hidden="true"></i><span>Skills</span>
      </div>
      <h2>My Toolbox</h2>
      <div className="skills-container">
        <SkillSchema skillImage={skill2} title={"JavaScript"} description = {"JavaScript is the backbone of dynamic web applications, allowing me to create interactive and responsive features that enhance user experiences."}/>
        <SkillSchema skillImage={skill3} title={"React"} description = {"React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. "}/>
        <SkillSchema skillImage={skill5} title={"Next Js"} description = {"Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations. "}/>
        <SkillSchema skillImage={skill8} title={"Node js"} description = {" Node.js used to  executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting."}/>
        <SkillSchema skillImage={skill7} title={"Express Js"} description = {"Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js. "}/>
        <SkillSchema skillImage={skill6} title={"MongoDB"} description = {"MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. "}/>
        <SkillSchema skillImage={skill1} title={"Responsive Web Design"} description = {"Responsive web design ensures that websites I create adapt seamlessly to various screen sizes, providing an optimal viewing experience on all devices Using Html , Css , Bootstrap and Tailwind."}/>
        <SkillSchema skillImage={skill4} title={"Git and Version Control"} description = {"Git and version control are essential for collaborative coding, enabling me to track changes, collaborate with others, and maintain a clean project history."}/>
      </div>
      <div className="more-skill">
        <span> I'm
          constantly expanding my skill set to stay up-to-date with the latest
          trends in web development.</span>
      </div>
    </div>
    </div>
  )
}

export default Skills
