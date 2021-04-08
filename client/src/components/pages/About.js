import React, { Component } from 'react';
import pp from '../../css/Trim.jpg'
import "../../css/About.css"
import { Button } from "reactstrap"
import { Link, Events, scrollSpy } from 'react-scroll'

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollPos: window.pageYOffset,
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();
    // window.addEventListener("scroll", this.handleScroll);
  }

handleScroll = (location) => {
    console.log('LOCATION: ', location)
    let section = document.getElementById(location)
    console.log('got element: ', section)
    section.scrollIntoView({behavior: "smooth"}); // Boolean parameter
    }

  render() {        
    return (
        <div className="aboutContainer" id="about">
            <div className="col-lg-12 col-sm-12 aboutField">
                <h1 className='aboutTitle'>Welcome!</h1>
                <div className='row'>
                    <p className='aboutContent'>I'm Josh - A Freelance Web Developer based in Austin, Tx with expertise in Javascript and React. My focus is developing clean websites that are user-friendly and mobile responsive.</p>
                </div>
                <div className='row'>
                    <Button className='recentWorkButton bouncy' onClick={() => this.handleScroll("projects")}>
                        My Recent Work
                    </Button>
                </div>
            </div>
        </div>    
    )}
}
export default About;
