var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var app = express();
var port = 8000;

mongoose.connect('mongodb://localhost:27017/seshdb');

mongoose.connect('connection', function() {
  console.log('Connected to database')
})


// app.use('/app', express.static(__dirname + '/app'))
// app.use('../node_modules', express.static(__dirname +  "/node-modules"))



app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../client/index.html'))
})


app.listen(port, function(){
  console.log('listening on port: ', port)
})