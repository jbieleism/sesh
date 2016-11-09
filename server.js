var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var path = require('path')

var app = express();
var authenticationController = require('./server/controllers/authentication-controller')

mongoose.connect('mongodb://localhost:27017/seshdb', () => console.log("Connected to Database"))

app.use(bodyParser.json())
app.use('/public', express.static(__dirname + '/public'))
app.use('/node_modules', express.static(__dirname + '/node_modules'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')) )


// Authentication
app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login', authenticationController.login)

var port = 8000;

app.listen(port, () => console.log("Listening on port: ", port))