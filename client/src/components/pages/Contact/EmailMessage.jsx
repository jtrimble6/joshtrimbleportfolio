//node modules
import React, { Component } from "react";
import { connect } from "react-redux";

const styles = {
    msgStyle: {
      fontSize: "50%",
      textAlign: "center"
    }
  };

class EmailMsg extends Component {

  showLocationInfo = () => {
    const { response, message, sendingEmail } = this.props
    return response === true ?
      <div>
        <h2 className="uk-text-center uk-position-center textDown">{message.message}</h2>
      </div> : sendingEmail === true ?
      <div> 
          <h2 className="uk-text-center uk-position-center textDown confirmationMessage" style={styles.msgStyle} > Your message has been sent. I will be in touch shortly. Thank you! </h2> 
      </div> 
      : 
      <div>
        
      </div>
    }

  render() {
    return (
      <div>
        {this.showLocationInfo()}
      </div>
    )
 }

}

function mapStateToProps(state) {
//  console.log(state.contacts)
   return {
     message: state.contacts.message,
     sendingEmail: state.contacts.makeReq,
     response: state.contacts.recvdResp
   }
}

export default connect(mapStateToProps, null)(EmailMsg)