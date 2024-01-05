import React from 'react'
import img from './Images/bg-image.png'
import hire from './Images/hire.png'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = (props) => {
  return (
    <div>
      <div className="home" ref={props.homeRef}>
        <div className="bdy">
            <h1 id='h1'>Hello,</h1>
            <h1 id='h2'>I'm <span id='name'>Ritik</span></h1>
            <h1 id='h3'>MERN STACK DEVELOPER</h1>
            <p id='par'>I am a Skilled and Passionate Web Developer with Experience in <br /> creating visually appealing and user-friendly Websites</p>    
            <li><Link to={"/Projects"} ><button id='bt'><img src={hire} id='ig2' alt='img'/>Projects</button></Link></li>
        </div>
        <div className="img">
            <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
