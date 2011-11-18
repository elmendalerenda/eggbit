var express = require('express');
var eventd = require('./eventd');
var helpers = require('./helpers');
var eggbit_data = require('./eggbit_data');

var eggbitd = express.createServer(
    express.bodyParser()
);

var resources = eggbit_data.resources;

eventd.start(eggbitd);

eggbitd.get('/tracks/all', function(req, res) {
  res.send(JSON.stringify(resources), 200);
});

eggbitd.get('/game/new', function(req, res) {
  
  var game = helpers.createGame();
  
  res.send(JSON.stringify(game), 200);
});

eggbitd.post('/scores/publish', function(req, res) {
    var player = req.body.player;
    var score = req.body.score;
  
    var user = socket.username;
    var room = params.room;
    var theScore = params.score;
    var theUser = eventd.scores[user];
    
    if(!theUser) {
      theUser = {};
      theUser[user] = user;
      theUser.score = 0;
      eventd.scores[user] = theUser;
    }
    
    theUser.score += theScore;   
   
    res.send(JSON.stringify({score: theUser.score}), 200);
});


eggbitd.get('/tracks/current-version', function(req, res) {
  res.send(JSON.stringify({version: '1.3'}), 200);
});

eggbitd.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

eggbitd.listen(port, function() {
  console.log("Listening on " + port);
});






