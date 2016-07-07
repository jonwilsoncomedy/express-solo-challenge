var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

var first = require('./modules/one.js');
var second = require('./modules/two.js');
var third = require('./modules/three.js');

// third.balance();
var fourth = {'balance': third.finalNumber()};

app.use(express.static('public'));

app.listen(port, function onServerListen(){
  console.log('Started Express Server on Port 3000');
  console.log('Press Control-C to stop');
});

app.get('/balance', function(request, response) {
  response.send(fourth);
});
