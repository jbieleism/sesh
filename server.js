var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var path = require('path')

var app = express();
var authenticationController = require('./server/controllers/authentication-controller')

mongoose.connect('mongodb://localhost:27017/seshdb', () => console.log("Connected to Database"))

app.use(bodyParser.json())
app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')) )


// Authentication
app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login', authenticationController.login)



app.listen(8000, () => console.log("listening on port 8000"))