import React  from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import contact from '../Home/Images/letter.png'
import menu from './main-menu.png'
import cross from './close.png'

const Navbar = (props) => {
  
  const scrollToSection = (elementRef) =>{
    try{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:'smooth'
    })}
    catch(err){
      console.log("Back to Home")
    }
    }

  

  const handleClick = ()=>{
    let gh = document.querySelector(".items");
    let items = document.querySelectorAll("#mxnx");
      gh.classList.toggle("jss");
      items.forEach((e)=>{
        e.addEventListener("click",closemenu)
      })
  }
  const closemenu = ()=>{
    let gh = document.querySelector(".items");
    gh.classList.toggle("jss");
  }
  return (
    <div>
      <div className="container">
        <nav className="navbar">
          <div className="lkj">
            <h1 id='logo'>Logo</h1></div>
            <div className="items ems jss">
              <li id='vghs' onClick={closemenu}><img src={cross} alt="Close" id='crossijh'/></li>
              <Link to= '/'> <li id='mxnx' onClick={()=> scrollToSection(props.home)} >Home</li></Link>
              <Link to= '/'> <li id='mxnx' onClick={()=> scrollToSection(props.about)} >About</li></Link>
              <Link to= '/'> <li id='mxnx' onClick={()=> scrollToSection(props.skills)} >Skills</li></Link>
            <Link to= '/Projects'><li >Projects</li></Link>
            <Link to= '/'><li id='mxnx' onClick={()=> scrollToSection(props.contact)}>Contact me</li> </Link>
            </div>
            <button onClick={()=> scrollToSection(props.contact)} className='BTN'> <img src={contact} id='contac' alt='img'/>Contact me</button>
            <div className="men">
            <img src={menu} id='cont' alt='menu' onClick={handleClick}/>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar