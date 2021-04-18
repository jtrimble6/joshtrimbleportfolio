const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require("path");
const contactRoutes = require('./routes/API/contactAPI')
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))


// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client", "build")));
// }

app.use(function(req, res, next) { //allow cross origin requests
	res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Credentials", true);
	next();
  });

app.use('/joshtrimbleportfolio/', express.static(path.join(__dirname, "client/build")));

app.use(contactRoutes)

app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});