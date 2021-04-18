var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
// var NavbarHeaderImage = require('./emailImage')

require('dotenv').config();

var transport = {
  host: 'smtp.gmail.com',
  // host: 'qvh6-ytnz.thursday-therapy.com',
  auth: {
    port: 465,
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  let toEmail = 'trimbledevelops@gmail.com'
  var mail = {
    from: name,
    // to: 'kgouveia@gfitwefit.com',  //Change to email address that you want to receive messages on
    to: toEmail,
    subject: req.body.subject,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail',
        err: err,
        data: data
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;