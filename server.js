var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var app = express();
var authenticationController = require('./server/controllers/authentication-controller');
var profileController = require('./server/controllers/profile-controller');

mongoose.connect('mongodb://localhost:27017/seshdb', () => console.log("Connected to Database"));

app.use(bodyParser.json());
app.use(multipartMiddleware)
app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')) );


// Authentication
app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login', authenticationController.login);



// Profile
app.post('/api/profile/editPhoto', multipartMiddleware, profileController.updatePhoto)
app.post('/api/profile/updateUsername', profileController.updateUsername)
app.post('/api/profile/bio', profileController.updateBio)

var port = 8000;

app.listen(port, () => console.log("Listening on port: ", port));