import React from "react"
import Particles from 'react-particles-js'
import EnterButton from '../EnterButton'
import "../../css/Particles.css"

const Home = props => (
  
  <div className="homeContainer">
    <Particles params={{
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
    />
  </div>
  
)

export default Home