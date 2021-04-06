import React, { Component } from 'react';
import "../../css/NavBar.css"
import ConnectTabs from "./ConnectTabs"
import ContactMe from "./ContactMe"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { Divider } from "material-ui"
import logo from '../../css/images/trimblelogofinal.svg';
import { NavLink } from 'reactstrap';
import { stack as Menu } from 'react-burger-menu'
import classnames from "classnames";
import { Link, Events, scrollSpy } from 'react-scroll'

library.add(faBars, faDice)

class NavTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "Home",
      collapsed: true,
      prevScrollPos: window.pageYOffset,
      visible: true
    }

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.classToggle = this.classToggle.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
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
    // this.toggleNavbar()
    // e.preventDefault()
    console.log('LOCATION: ', location)
    let section = document.getElementById(location)
    console.log('got element: ', section)
    section.scrollIntoView({behavior: "smooth"}); // Boolean parameter
    // let scroll = Scroll.animateScroll;
    // scroll.scrollTo(400);
    // const { prevScrollPos } = this.state;
  
    // const currentScrollPos = window.pageYOffset;
    // const visible = prevScrollPos > currentScrollPos;
  
    // this.setState({
    //   prevScrollPos: currentScrollPos,
    //   visible
    // });
    }


handlePageChange = page => {
    this.setState({ currentPage: page })
}

toggleNavbar = (event) => {
    event.preventDefault()
    console.log('TOGGLE NAVBAR')

    if (!this.state.collapsed) {
      this.setState({
        collapsed: true
      })
    } else {
      this.setState({
        collapsed: false
      })
    }
  }

classToggle = () => {
  const navs = document.querySelectorAll('.Navbar_Items')
  console.log("Navs: ", navs)
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}


  render() {        
    return (

      <div className="navTabs Navbar">
        
        {/* <div className="Navbar__Link Navbar__Link-toggle" onClick={this.classToggle}>
          <FontAwesomeIcon icon="fa-bars" />
          <i className="fas fa-bars"></i>
        </div> */}


        <nav 
          className={classnames("navbar navbar-expand-lg navbar")} 
          role='navigation' 
          id="mainNav"
        >
          <div className="row masterRow">
            <div className="pages">
              <div className="row">
                {/* <i className="navbarTogglerButtonCustom fas fa-bars navbar-toggler collapsed navbar-toggler-right" 
                  data-toggle='collapse' 
                  data-target="#navbarResponsive" 
                  aria-controls="navbarResponsive" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation" 
                  onClick={this.toggleNavbar}
                >
                <Menu 
                  right 
                  disableAutoFocus               
                  className='burgerMenu'
                  noOverlay
                  // customBurgerIcon={ bars }
                  customCrossIcon={ <img src={require("../../css/images/cross.png")} alt='close' /> } 
                >
                  <NavLink 
                    className='iconBar nav-link' 
                    onClick={this.toggleNavbar}
                    href="/"
                  > 
                    Home
                  </NavLink>

                  <NavLink
                    activeClass="active"
                    className='iconBar nav-link'
                    onClick={this.toggleNavbar}
                    to="scheduleInfo"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration= {500}
                  > 
                    About 
                  </NavLink>
                  
                  <NavLink 
                    className='iconBar nav-link' 
                    onClick={this.toggleNavbar}
                    href="/contact"
                  > 
                    Projects
                  </NavLink>

                  <NavLink 
                    className='iconBar nav-link' 
                    onClick={this.toggleNavbar}
                    href="/userLogin"
                  > 
                    Contact
                  </NavLink>

                </Menu>
                </i> */}
                <div className="row flex-container Navbar_Items" id="navbarResponsive">
                  {/* <ul className="navbar-nav"> */}

                  <div className="nav-item Navbar_Link" id="home-item">
                    <a
                      onClick={() => this.handleScroll("home")}
                      className={
                        this.currentPage === "Home" ? "nav-link active" : "nav-link"
                      }
                    >
                      Home
                    </a>
                  </div>

                  <div className="nav-item Navbar_Link" id="about-item">
                    <a
                      onClick={() => this.handleScroll("about")}
                      className={
                        this.currentPage === "About" ? "nav-link active" : "nav-link"
                      }
                    >
                      About
                    </a>
                  </div>
                  <div className="nav-item Navbar_Link" id="projects-item">
                    <a
                      onClick={() => this.handleScroll("projects")}
                      className={
                        this.currentPage === "Projects" ? "nav-link active" : "nav-link"
                      }
                    >
                      Projects
                    </a>
                  </div>
                  <div className="nav-item Navbar_Link" id="contact-item">
                    <a
                      onClick={() => this.handleScroll("contactFormContainer")}
                      className={
                        this.currentPage === "Contact" ? "nav-link active" : "nav-link"
                      }
                    >
                      Contact
                    </a>
                  </div>  
                  {/* </ul> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
        
          <div className="navTabsLogoLink Navbar__Link Navbar_Link-brand">
            <img src={logo} className="navbar-brand Navbar_Name" alt="logo" />
          </div>

        </div>
      );
      }
    }
  export default NavTabs;