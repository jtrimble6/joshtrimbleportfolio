import React from "react"
import "../css/NavBar.css"
import ConnectTabs from "./ConnectTabs"
import ContactMe from "./ContactMe"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { Divider } from "material-ui"

library.add(faBars, faDice)

const NavTabs = props => (

  <div className="navTabs Navbar">
    <div className="Navbar__Link Navbar_Link-brand">
      <a className="Navbar_Name">Joshua Trimble</a>   
      {/* <div className='navbarSpinner'>
        <FontAwesomeIcon icon="fa-dice-d20" />
        <i className="fas fa-dice-d20 fa-spin"></i> 
      </div> */}
          
      <a className="Navbar_Title">
        {/* Web Developer <br /> */}
        <ConnectTabs 
          // onClick={props.handleConnectClick}
        />
      </a>
      
    </div>
    <div className="Navbar__Link Navbar__Link-toggle" onClick={props.handleTabsClick}>
      <FontAwesomeIcon icon="fa-bars" />
      <i 
        className="fas fa-bars"></i>
    </div>
    <nav className="flex-container Navbar_Items" onClick={props.handleTabsClick}>
      <div className="nav-item Navbar_Link" id="home-item">
        <a
          onClick={() => props.handlePageChange("Home")}
          className={
            props.currentPage === "Home" ? "nav-link active" : "nav-link"
          }
        >
          Home
        </a>
      </div>
      <div className="nav-item Navbar_Link" id="about-item">
        <a
          onClick={() => props.handlePageChange("About")}
          className={
            props.currentPage === "About" ? "nav-link active" : "nav-link"
          }
        >
          About
        </a>
      </div>
      <div className="nav-item Navbar_Link" id="projects-item">
        <a
          onClick={() => props.handlePageChange("Projects")}
          className={
            props.currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
      </div>
      <div className="nav-item Navbar_Link" id="contact-item">
        <a
          onClick={() => props.handlePageChange("Contact")}
          className={
            props.currentPage === "Contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </a>
      </div>
    </nav>
    </div>
  );
  
  export default NavTabs;