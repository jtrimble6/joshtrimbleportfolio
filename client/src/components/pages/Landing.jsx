import React, { Component } from 'react';
import NavTabs from '../nav/NavTabs'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import '../../css/Landing.css'

class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
      
        }

    }

    componentDidMount() {
        
      }
    
    
    

    render() {                                                       
        return (
          <div id='landingPage'>
            {/* <NavTabs /> */}
            <Home />
            {/* <About /> */}
            <Projects />
            <Contact />
          </div>
        )
    }
}

export default LandingPage