import React, { Component } from 'react';
import NavTabs from '../nav/NavTabs'
import Home from './Home'
import Bio from './Bio'
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
            <Bio />
            <Projects />
            <Contact />
          </div>
        )
    }
}

export default LandingPage