var express = require('express');
var eventd = require('./eventd');
var eggbit_data = require('./eggbit_data');

var eggbitd = express.createServer();

var resources = eggbit_data.resources;

eventd.start(eggbitd);

eggbitd.get('/server-side/*', function(req, res) {
  res.send('Forbbiden', 403);
});

/*
eggbitd.get('/user/:id', function(req, res) {
  var id = req.params.id;
});
*/

eggbitd.use(express.static(__dirname + '/..'));

var port = 3000;

eggbitd.listen(port, function() {
  console.log("Listening on " + port);
});





