import React from "react"
import { SocialIcon } from 'react-social-icons';
// import { scaleRotate as Menu } from 'react-burger-menu'
import { slide as Menu } from 'react-burger-menu'
import "../css/ConnectTabs.css"

class ConnectTabs extends React.Component {

  state = {
    isOpen: false
  }

  showMenu (event) {
    event.preventDefault();
  }

  isMenuOpen = (e) => {
    e.preventDefault()
    console.log("open menu")
    if (this.state.isOpen) {
      this.setState ({
        isOpen: false
      })
    } else {
      this.setState ({
        isOpen: true
      })
    }
    // return state.isOpen;
  };

  render() {
    return (
      <div className="connectButton">
        <div className="iconWrapper">
          <a href="#" className="connectText" onClick={ this.isMenuOpen }>Connect With Me</a>
            <main id="page-wrap">
            <Menu 
              right
              isOpen={ this.state.isOpen }
              width={ "75%" }
              // zIndex={ "0" }
              // onStateChange={(state) => this.handleStateChange(state)}
            >
              <a id="linkedin" className="menu-item" href="https://linkedin.com/in/joshuataylortrimble" target="_blank">Linked In</a><br />
              <a id="github" className="menu-item" href="https://github.com/jtrimble6" target="_blank">Github</a><br />
              <a id="blog" className="menu-item" href="#">Blog</a>
              {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
            
          </Menu>
          </main>
        </div>
      </div>
    )
  }
    // <div className="connectButton" onClick={props.onClick}>
    //   <div className="iconWrapper">
    //     <a href="#" className="connectText">Connect With Me</a>
    //     {/* <ul>
    //       <li>
    //         <a href="https//twitter.com/share"><SocialIcon network="twitter" color="#ff5a01" /><i className="fa faTwitter"></i></a>
    //       </li>
    //       <li>
    //         <a href="https//twitter.com/share"><SocialIcon network="twitter" color="#ff5a01" /><i className="fa faTwitter"></i></a>
    //       </li>
    //       <li>
    //         <a href="https//twitter.com/share"><SocialIcon network="twitter" color="#ff5a01" /><i className="fa faTwitter"></i></a>
    //       </li>
    //       <li>
    //         <a href="https//twitter.com/share"><SocialIcon network="twitter" color="#ff5a01" /><i className="fa faTwitter"></i></a>
    //       </li>
    //       <li>
    //         <a href="#" className="closeIcons">Close</a>
    //       </li>
    //     </ul> */}
    //   </div>
    // </div>
  
  };
  
  export default ConnectTabs;