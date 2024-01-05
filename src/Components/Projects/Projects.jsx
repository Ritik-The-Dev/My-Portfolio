import React from 'react'
import currency from './Images/Currency.png'
import Snake from './Images/Snake Game.png'
import Stack from './Images/stackOver.jpg'
import TODO from './Images/ToDoList.jpg'
import Whether from './Images/whether.jpg'
import Tic from './Images/TicTacToe.avif'
import Age from './Images/Age.png'
import coming from './Images/coming.png'
import CodeEditor from './Images/CodeEditor.jpg'
import './Project.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Card from './Card'
import './Card.css'

const Projects = () => {
  return (
    <div className='topProjectDiv'>
      <Navbar />
          <div className="mainBox">
            <h1 style={{color :"white"}}>My Works</h1>
          <div className="work-list">
          <Card ProjectImage={Stack} ProjectTitle={"Stack OverFlow Clone"} ProjectDescription={"Stack Overflow is a question-and-answer website for computer programmers. In this Website anyone can share there Questions, Thoughts or files.."} ProjectLink={"https://mern-stack-overflow-clone.netlify.app/"}/>
          <Card ProjectImage={Snake} ProjectTitle={"Snake Game"} ProjectDescription={"Snake Game where User Remember their Childhood .. Can be Only Playable Using KeyBoard..."} ProjectLink={"https://ritik-the-dev.github.io/Snake-Game/"}/>
          <Card ProjectImage={currency} ProjectTitle={"Currency Converter"} ProjectDescription={"A simple currency converter built using react. We use Api to get the real time Currency Value. It allows users to convert between different currencies."} ProjectLink={"https://ritik-the-dev.github.io/Currency-Converter/"}/>
          </div>
          </div>
          <div className="mainBox">
          <div className="work-list">
          <Card ProjectImage={TODO} ProjectTitle={"To Do List"} ProjectDescription={"User can Use this app to remember their to do Task so that he/she won't Forget it .User can also check , Uncheck and Delete their Tasks.."} ProjectLink={"https://react-to-do-list-netlify.netlify.app/"}/>
          <Card ProjectImage={Tic} ProjectTitle={"Tic Tac Toe"} ProjectDescription={"Tic Tac Toe Game where User Remember their Childhood .. and Play it with their Friends.."} ProjectLink={"https://ritik-the-dev.github.io/Tic-Tac-Toe/"}/>
          <Card ProjectImage={Whether} ProjectTitle={"Whether App"} ProjectDescription={"Whether Fetching app built using react. We use Api to get the real time Whether Info. Which allows users to check Whether of different Cities or  different countries."} ProjectLink={"https://ritik-the-dev.github.io/Fetch-Whether/"}/>
          </div>
          </div>
          <div className="mainBox">
          <div className="work-list">
          <Card ProjectImage={CodeEditor} ProjectTitle={"Code Editor"} ProjectDescription={"Code Editor built using react. It Compiles the Html ,Css and Javascript Code to run on the Output Screen Smoothly."} ProjectLink={"https://netlify-code-editor.netlify.app/"}/>
          <Card ProjectImage={Age} ProjectTitle={"Age Calculator"} ProjectDescription={"It Gives the Accurate Data with the corresponding Year , Month and Day too. It allows users to Calculate their Age Precisely.."} ProjectLink={"https://netlify-age-calculator.netlify.app/"}/>
          <Card ProjectImage={coming} ProjectTitle={"Coming Soon"} ProjectDescription={"Coming Soon Working on New Projects will be live soon using more new technologies..."} ProjectLink={"#"}/>
          </div>
          </div>
        <Footer />
    </div>
    
  )
}

export default Projects


/*
            <div className="proje">
          <div className="major">
            <div className="projects-11">
              <h1 id='PRoeko'>Currency Converter</h1>
              <p id='pklr'>A simple currency converter built using react. We use Api to get the real time Currency Value. It allows users to convert between different currencies.
              </p>
              <Link to = "/CurrencyConverter"><button id='try'>Try it Now</button></Link>
            </div><div className="projimage">
              <img src={currency} alt=""  id='imgh'/>
              </div>
          </div>
        </div>
        <div className="proje">
          <div className="major">
            <div className="projects-11">
              <h1 id='PRoeko'>Whether Fetcher</h1>
              <p id='pklr'>A simple Whether Fetching app built using react. We use Api to get the real time Whether Info. Which allows users to check Whether of different Cities or  different countries.
              </p>
              <Link to = "/FetchWhether"><button id='try'>Try it Now</button></Link>
            </div><div className="projimage">
              <img src={Whether} alt=""  id='imgh'/>
              </div>
          </div>
        </div>
        <div className="proje">
          <div className="major">
            <div className="projects-11">
              <h1 id='PRoeko'>Age Calculator</h1>
              <p id='pklr'>A simple Age Calculator App built using Javascript. It Gives the Accurate Data with the corresponding Year , Month and Day too. It allows users to Calculate their Age Precisely.
              </p>
              <a href="https://ritik-the-dev-age-calculator.netlify.app/" target = "_blank"><button id='try'>Try it Now</button></a>
            </div><div className="projimage">
              <img src={Age} alt=""  id='imgh'/>
              </div>
          </div>
        </div>
        <div className="proje">
          <div className="major">
            <div className="projects-11">
              <h1 id='PRoeko'>To Do List</h1>
              <p id='pklr'>A simple To Do List built using Javascript. User can Use this app to remember their to do Task so that he/she won't Forget it .User can also check , Uncheck and Delete their Tasks. It also store user data in their Local Storage so data dont lost even after refreshig the site.
              </p>
              <a href="https://ritik-the-dev-to-do-list.netlify.app/" target = "_blank"><button id='try'>Try it Now</button></a>
            </div><div className="projimage">
              <img src={To} alt=""  id='imgh'/>
              </div>
          </div>
        </div>
        <div className="proje lasr">
          <div className="major">
            <div className="projects-11">
              <h1 id='PRoeko'>Tic Tac Toe</h1>
              <p id='pklr'>A simple Tic-Tac-Toe game built using Javascript. User can play this game with his/her partner to enjoy the game and User can also restart it from there only,
              </p>
              <a href="https://ritik-the-dev-tic-tac-toe.netlify.app/" target = "_blank"><button id='try'>Try it Now</button></a>
            </div><div className="projimage">
              <img src={Tic} alt=""  id='imgh'/>
              </div>
          </div>
        </div>
         */