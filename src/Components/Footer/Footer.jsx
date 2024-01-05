import React from 'react'
import Insta from './Images/instagram.png'
import github from './Images/github.png'
import linkedin from './Images/linkedin.png'
import whatsapp from './Images/whatsapp.png'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="lko">
        <div className="profiles">
          <div className="linkssss">
        <a href="https://www.instagram.com/__ritik__732/" target='_blank'><img src={Insta} alt="" id='ih1' /></a>
        <a href="https://www.linkedin.com/in/ritikjoshi/" target='_blank'><img src={linkedin} alt="" id='ih1' /></a>
        <a href="https://wa.me/8630910212" target='_blank'><img src={whatsapp} alt="" id='ih1' /></a>
        <a href="https://github.com/Ritik-The-Dev" target='_blank'><img src={github} alt="" id='ih1' /></a>
        </div>
        <div className='copyr'>
        <h1 id='copyr'>Copyright &copy; 2023 Ritik Joshi. All right received</h1>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
