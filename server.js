var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var path = require('path')

var app = express();

mongoose.connect('mongodb://localhost:27017/seshdb', () => console.log("Connected to Database"))


app.use(bodyParser.json())

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')) )


app.listen(8000, () => console.log("listening on port 8000"))