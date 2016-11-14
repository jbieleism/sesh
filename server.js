const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

const app = express();
const authenticationController = require('./server/controllers/authentication-controller');
const profileController = require('./server/controllers/profile-controller');
const seshController = require('./server/controllers/sesh-controller')


mongoose.connect('mongodb://localhost:27017/seshdb', () => console.log("Connected to Database"));

app.use(bodyParser.json());
app.use(multipartMiddleware);
app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/uploads', express.static(__dirname + '/uploads'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')) );


// Authentication
app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login', authenticationController.login);



// Profile
app.post('/api/profile/editPhoto', multipartMiddleware, profileController.updatePhoto);
app.post('/api/profile/updateUsername', profileController.updateUsername);
app.post('/api/profile/bio', profileController.updateBio);


app.post('/api/sesh/post', seshController.postSesh);
app.get('/api/sesh/get', seshController.getSeshes)



var port = 8000;

app.listen(port, () => console.log("Listening on port: ", port));









