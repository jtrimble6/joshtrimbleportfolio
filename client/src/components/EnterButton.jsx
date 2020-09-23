import React from "react"
import "../css/EnterButton.css"


const EnterButton = props => (

    <div className="workarea">
      <p className="quote">"Create With The Heart, Build With The Mind" <br /><small>- Criss Jami</small></p>
      <button className="enterButton" onClick={props.onClick}>Entrance</button>
      {/* <a className="personal" href="http://www.joshuatrimble.com">www.joshuatrimble.com</a> */}
    </div>
  
  );
  
  export default EnterButton;