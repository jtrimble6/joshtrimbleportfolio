//node modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from 'react-grid-system';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form'
import { Alert, Form } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import axios from 'axios'

//custom modules
import { submitContactReqToServer } from "../../actions/submitContactReq";
import EmailMsg from "./EmailMessage";
import renderField from './renderField';
import { validate } from './validate';

//css
import '../../../css/Contact.css'

const styles = {
  formStyle: {
    padding: 10
  },
  paperStyle: {
    marginBottom:10,
    background: "#ffffff6e"
  },
  buttonPlace: {
    textAlign: "center"
  },
  rowStyle: {
    marginBottom: "-10px",
    borderTop: '#008eff'
  },
  signature: {
    textAlign: "center"
  },
  buttonStyle: {
    color: "#008eff"
  }
};

class SendContactInfo extends Component {
  constructor(props){
    super(props)
      this.state = {
        name: "",
        email: "",
        subject: "",
        message: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this)
      this.sendEmail = this.sendEmail.bind(this)
      this.resetForm = this.resetForm.bind(this)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.submitContactReqToServer("contacts", this.state)
    this.setState({name: "", email: "", message: "", subject: ""})
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const subject = document.getElementById('subject').value
        this.sendEmail(name, email, message, subject)
      }
    
  sendEmail = (name, email, message, subject) => {
        // console.log(name, email, message)
        axios({
            method: "POST", 
            url: process.env.NODE_ENV === 'development' ? "http://localhost:3000/send" : "https://trimbledevelops.com/send",
            data: {
                name: name,   
                email: email,  
                message: message,
                subject: subject
            }
        }).then((response)=> {
            if (response.data.msg === 'success'){
                console.log("Message Sent."); 
                Alert.success('Your email has been sent!', 10000)
                this.setState({
                  contactSuccess: true
                })
                this.resetForm()
            } else if(response.data.msg === 'fail'){
              console.log("Message failed to send.")
              console.log(response.data)
              Alert.error('Sorry, there was an error sending the email. Please try again.', 10000)
              this.setState({
                contactError: true
              })
            }
        })
        this.resetForm()
    }

  resetForm(){
        document.getElementById('contactForm').reset();
      }
  

  render() {
    const { pristine, reset, submitting } = this.props;
    return (
      <div id='contactFormContainer' className='row contactFormRow'>
        <div className='uk-position-center formMargin'>
          <Paper zDepth={2} style={styles.paperStyle}>
           <Form id='contactForm' onSubmit={this.handleOnSubmit} style={styles.formStyle}>
             <Row>
               <Col xs={12} sm={12} md={12} lg={12} style={styles.rowStyle}>
                 <Field id='name' className='contactField' type='text' placeholder='Your Name' name='name' onChange={this.handleOnChange} value={this.state.name} component={renderField}/>
               </Col>
             </Row>
             <Row>
               <Col xs={12} sm={12} md={12} lg={12} style={styles.rowStyle}>
                 <Field id='email' className='contactField' type='email' placeholder='Your Email' name='email' onChange={this.handleOnChange} value={this.state.email} component={renderField}/>
               </Col>
             </Row>
             <Row>
               <Col xs={12} sm={12} md={12} lg={12} style={styles.rowStyle}>
                 <Field id='subject' name="subject" onChange={this.handleOnChange} value={this.state.message} component={renderField} label="Subject"/>
               </Col>
             </Row>
             <Row>
               <Col xs={12} sm={12} md={12} lg={12}>
                 <Field id='message' placeholder='Your Message' name='message' onChange={this.handleOnChange} value={this.state.message} component={renderField} label="Your Message" multiLine={true} rows={5}/>
               </Col>
             </Row>
             <Row style={styles.buttonPlace}>
               <Col xs={6} sm={6} md={6} lg={6}>
                 <RaisedButton type="submit" label="Submit" primary={true} disabled={pristine || submitting} onClick={this.handleSubmit} style={styles.buttonStyle}/>
               </Col>
               <Col xs={6} sm={6} md={6} lg={6}>
                 <RaisedButton type="button" label="Reset" disabled={pristine || submitting} onClick={reset} style={styles.resetStyle}/>
               </Col>
             </Row>
           </Form>
         </Paper>

        </div>

          <div>
            { < EmailMsg /> }
          </div>

          <div className="contactFormReminder uk-text-center" style={styles.signature}>
            <h5> When It Comes To Web Development, Think Of Me — Joshua Trimble </h5>
          </div>
        </div>
      );
    }
  };

  const mapDispatchToProps = dispatch => {
  return bindActionCreators(
  { submitContactReqToServer }, dispatch);

};

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'sendContactInfo',  // a unique identifier for this form
  validate                 // <--- warning function given to redux-form
})(SendContactInfo))

