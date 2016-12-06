var express = require('express');
var app = express();
var path = require('path');

var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = 8080;

var routes = require('./routes');
// let flypay = require('./app/routes/flypay');
// let ndUser = require('./app/routes/nandos-delivery-user');
// let ndLocation = require('./app/routes/nandos-delivery-location');

// let config = require('config'); //we load the db location from the JSON files
//don't show the log when it is test
// if(config.util.getEnv('NODE_ENV') !== 'test') {
//use morgan to log at command line
app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
// }

//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: 'application/json'
}));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.get('/', function(req, res, next) {
//   // Handle the get for this route
// });

// app.post('/', function(req, res, next) {
//  // Handle the post for this route
// });

// app.use(express.static('doc'));
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/doc/index.html'));
// });

// app.get("/", (req, res) => res.json({ message: "v1" }));

// app.route("/nandos-api/oauth/v2/token").get(nandos.getOAuthToken);
// app.route("/nandos-api/v1/register").post(nandos.registerUser);
// app.route("/nandos-api/v1/user").post(nandos.postUser);
// app.route("/nandos-api/v1/user/change-password").get(nandos.changePassword);
// app.route("/nandos-api/v1/send-password-reset-email").post(nandos.sendPasswordResetEmail);
// // app.route("/nandos-api/api/v1/token/:confirmationToken/reset-password").post(nandos.resetPassword);
//
//
// app.route("/flypay-api/v1/sso/clienttoken").post(flypay.getClientToken);
// app.route("/flypay-api/v1/sso/usertoken").post(flypay.getUserToken);
//
// app.route("/api/v1/session").post(ndUser.createSession);
// app.route("/api/v1/login").post(ndUser.getLoggedInUser);
// app.route("/api/v1/register").post(ndUser.register);
// app.route("/api/v1/user").get(ndUser.getUser).post(ndUser.postUser);
// app.route("/api/v1/user/change-password").post(ndUser.changePassword);
// app.route("/api/v1/user/send-password-reset").post(ndUser.sendPasswordReset);
// app.route("/api/v1/user/resetPassword").post(ndUser.resetPassword);
//
// app.route("/api/v1/location/estimates/:postcode").get(ndLocation.getLocation);
// app.route("/api/v1/location/:id/menu").get(ndLocation.getMenu);
// app.route("/api/v1/location/:id/slots").post(ndLocation.postDeliverySlots);

app.route("/api/v1/competitions").get(routes.getCompetitions);

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing
