import React from 'react'
import './About.css'


const About = (props) => {

  return (
    <div>
      <div className="about" ref={props.aboutRef}>
        <div className="ma">
          <br /><br />
          <div className='About-info-box'>
        <div className="about-content con">
          <span>Name</span>
          <p>Ritik Joshi</p>
          <span>Birthday</span>
          <p>Dec 08, 2004</p>
          <span>Email</span>
          <p>joshiritik865@gmail.com</p>
          <span className="">PH. Number</span>
          <p className="">Unavailable</p>
          <span className="">address</span>
          <p>Rudrapur, Uttarakhand</p>
          <span>Nationality</span>
          <p>Indian</p>
        </div>
        <div className="about-content">
        <h2 className="">Mern Stack Web Developer</h2>
        <p className="sub-heading">A Web Developer based In Uttarakhand,India</p>
        <p className="abt-content">
          Hi, I'm Ritik from Rudrapur, Uttarakhand. I am a Skilled and Passionate Mern Stack Developer with experience in creating visually appealing and user-friendly Websites . I have a Strong Understanding of Development for both Front-End and Back-End...  
        </p>
        <a href="https://drive.google.com/file/d/1PaejoEgKzKt4Q7kJpINhBhQVBMvM7_YN/view?usp=sharing" target='_black'>
        <button className="resume-btn btns">
          Download Resume
        </button></a>
      </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default About
