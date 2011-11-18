var express = require('express');
var eventd = require('./eventd');
var eggbit_data = require('./eggbit_data');

var eggbitd = express.createServer();

var resources = eggbit_data.resources;

eventd.start(eggbitd);

eggbitd.get('/server-side/*', function(req, res) {
  res.send('Forbbiden', 403);
});

eggbitd.get('/tracks/all', function(req, res) {
  res.send(JSON.stringify(resources), 200);
});

eggbitd.get('/game/new', function(req, res) {
  
   var game = [];
   var questions = [];
      
   for(var i =0; i < 20; i += 1){
    var id = randomInAnArray(questions)
    questions.push(id);
        
        var answers = [id];
        answers.push(randomInAnArray(answers));
        answers.push(randomInAnArray(answers));
        
        answers.sort(function(){
          return Math.random() > 0.5
        });

        var question = {};
        question[id] = answers;
        
        game.push(question);
      }
  
  res.send(JSON.stringify(game), 200);
});

eggbitd.get('/tracks/current-version', function(req, res) {
  res.send(JSON.stringify({version: '1.0'}), 200);
});

eggbitd.use(express.static(__dirname + '/..'));

var port = process.env.PORT || 3000;

eggbitd.listen(port, function() {
  console.log("Listening on " + port);
});

var randomInAnArray = function(list){
  
       var numQuestions = 40;
    
    var number = Math.floor(Math.random() * numQuestions); 
    
    while(list.indexOf(number) > -1 ){
        number = Math.floor(Math.random() * numQuestions);
    }
    return number;
};





