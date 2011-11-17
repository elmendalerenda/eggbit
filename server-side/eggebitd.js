var express = require('express');
var eventd = require('./eventd');
var eggbit_data = require('./eggbit_data');

var eggbitd = express.createServer(
    express.logger(),
    express.bodyParser()
);

var resources = eggbit_data.resources;

//eventd.start(eggbitd, users, boards);

eggbitd.get('/server-side/*', function(req, res) {
  res.send('Forbbiden', 403);
});

eggbitd.get('/repository', function(req, res) {

});

eggbitd.get('/user/:id', function(req, res) {
  var id = req.params.id;

});

eggbitd.use(express.static(__dirname + '/..'));

var port = 3000;

eggbitd.listen(port, function() {
  console.log("Listening on " + port);
});
