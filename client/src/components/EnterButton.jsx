import React from "react"
import "../css/EnterButton.css"


const EnterButton = props => (

    <div className="workarea">
      <div className="row">
        <p className="quote">"Create With The Heart, Build With The Mind" <br /><small>- Criss Jami</small></p>
      </div>
      
      <div className="row">
        <button className="enterButton" onClick={props.onClick}>Connect With Me</button>
      </div>
      
      {/* <a className="personal" href="http://www.joshuatrimble.com">www.joshuatrimble.com</a> */}
    </div>
  
  );
  
  export default EnterButton;