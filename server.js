const express    = require('express'),
      bodyParser = require('body-parser'),
      mongoose   = require('mongoose'),
      path       = require('path'),
      app        = express(),
      port       = 8000;

mongoose.connect('mongodb://localhost:27017/seshdb');

mongoose.connect('connection', () => console.log('Connected to database'));

let count = 0;

let ensureAuthenticated = (req, res, next) => {

  count++;
  console.log(`${count} this many <--- `);
  console.log(req.headers);
  next();

};



app.get('/', ensureAuthenticated, (req, res) => res.sendFile(path.join(__dirname, './index.html')));

app.use('/public', express.static(`${__dirname}/client`));

app.listen(port, () => console.log('listening on port: ', port));













