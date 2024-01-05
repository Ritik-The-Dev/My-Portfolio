import React , {useRef} from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills';
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'

function App() {
  const aboutRef = useRef(null);
  const Homee = useRef(null);
  const ContactMe = useRef(null);
  const skillsRef = useRef(null)
  
  return (
    <div className="App">
        <Navbar home = {Homee} about = {aboutRef} contact = {ContactMe} skills = {skillsRef}/>
        <Home homeRef={Homee} />
        <About aboutRef={aboutRef} />
        <Skills skillsRef={skillsRef}/>
        <ContactUs contactRef={ContactMe}/>
        <Footer/>
    </div>
  );
}

export default App;