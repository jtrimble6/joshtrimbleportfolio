//node modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from 'react-grid-system';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form'

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
    marginBottom: "-10px"
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
        message: ""
      }
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.submitContactReqToServer("contacts", this.state)
    this.setState({name: "", email: "", message: ""})
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { pristine, reset, submitting } = this.props;
    return (
      <div id='contactFormContainer'>
        <div className='uk-position-center formMargin'>
          <Paper zDepth={2} style={styles.paperStyle}>
           <form onSubmit={this.handleOnSubmit} style={styles.formStyle}>
             <Row>
               <Col xs={12} sm={12} md={12} lg={12} style={styles.rowStyle}>
                 <Field className='contactField' type='text' placeholder='Your Name' name='name' onChange={this.handleOnChange} value={this.state.name} component={renderField}/>
               </Col>
             </Row>
             <Row>
               <Col xs={12} sm={12} md={12} lg={12} style={styles.rowStyle}>
                 <Field className='contactField' type='email' placeholder='Your Email' name='email' onChange={this.handleOnChange} value={this.state.email} component={renderField}/>
               </Col>
             </Row>
             <Row>
               <Col xs={12} sm={12} md={12} lg={12} style={styles.rowStyle}>
                 <Field name="subject" onChange={this.handleOnChange} value={this.state.message} component={renderField} label="Subject"/>
               </Col>
             </Row>
             <Row>
               <Col xs={12} sm={12} md={12} lg={12}>
                 <Field placeholder='Your Message' name='message' onChange={this.handleOnChange} value={this.state.message} component={renderField} label="Your Message" multiLine={true} rows={5}/>
               </Col>
             </Row>
             <Row style={styles.buttonPlace}>
               <Col xs={6} sm={6} md={6} lg={6}>
                 <RaisedButton type="submit" label="Submit" primary={true} disabled={pristine || submitting} onClick={this.handleOnSubmit} style={styles.buttonStyle}/>
               </Col>
               <Col xs={6} sm={6} md={6} lg={6}>
                 <RaisedButton type="button" label="Reset" disabled={pristine || submitting} onClick={reset} style={styles.resetStyle}/>
               </Col>
             </Row>
           </form>
         </Paper>

        </div>

          <div>
            { < EmailMsg /> }
          </div>

          <div className="uk-text-center uk-position-bottom" style={styles.signature}>
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

