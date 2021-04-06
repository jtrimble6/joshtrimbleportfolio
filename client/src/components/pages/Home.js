import React from "react"
import Particles from 'react-particles-js'
import EnterButton from '../EnterButton'
import NavTabs from '../nav/NavTabs'
import About from './About'
import pp from '../../css/Trim.jpg'
import '../../css/Home.css'
import "../../css/Particles.css"
import "../../css/About.css"

const Home = props => (
  
  <div className="landingContainer">
    <div className='landingBackground'></div>
    <NavTabs />
    <About />
    {/* <div className='imgContainer'>
        <img src={pp} alt="Josh Trimble" className="img" />
    </div> */}
    {/* <Particles params={{
      particles: {
        size: {
          value: 3,
          random: true,
          color: "#008eff",
        },
        line_linked: {
          width: 3,
          color: "#008eff",
          shadow: {
            enable: true,
            color: "#008eff",
            blur: 5
          }
        }
      }
    }}/>
    <EnterButton 
      onClick={props.onClick}
    /> */}
  </div>
  
)

export default Home