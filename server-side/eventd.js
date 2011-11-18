var sio = require('socket.io');
exports.scores = {};

exports.start = function(app) {
  var io = sio.listen(app);
  var sockets = [];

  var challenges = {};
  var numQuestions = 40;

  io.sockets.on('connection', function (socket) {
   
    socket.on('createRoom', function (username) {
       var room = randomString();
       socket['username'] = username;
       challenges[room] = [socket];
       console.log('created room',  room);
       socket.emit('roomCreated', room);
    });
    
    socket.on('join', function (params) {
      
      console.log('joined',  params);
      
      var aRoom = params.room;
      var username = params.player;
      if(!challenges[aRoom]) return;
 
      socket.username = username;
      challenges[aRoom].push(socket);
      broadcast(aRoom, 'joined', username);
    });
    
    socket.on('startGame', function (aRoom) {
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
      
      console.log(game)
      
      broadcast(aRoom, 'starting', game);
    });
    
    socket.on('correctAnswer', function (room) {
      console.log(challenges[room].length);
      broadcast(room, 'nextQuestion', null);
    });

    socket.on('publishScore', function (params) {
        var user = socket.username;
        var room = params.room;
        var theScore = params.score;
        var theUser = exports.scores[user];
        
        if(!theUser) {
          theUser = {};
          theUser[user] = user;
          theUser.score = 0;
          exports.scores[user] = theUser;
        }
        
        theUser.score += theScore;
        
        broadcast(room, 'showScore', {player: socket['username'], score: theScore});
    });
  });
  
  
  var randomInAnArray = function(list){
    
    var number = Math.floor(Math.random() * numQuestions); 
    
    while(list.indexOf(number) > -1 ){
        number = Math.floor(Math.random() * numQuestions);
    }
    return number;
  }
  
  var broadcast = function (room, event, params){
    for(var i = 0; i < challenges[room].length; i++){
        challenges[room][i].emit(event, params);
    }
  };
  
  var randomString = function() {
      var chars = "0123456789";
      var string_length = 6;
      var randomstring = '';
      for (var i=0; i<string_length; i++) {
          var rnum = Math.floor(Math.random() * chars.length);
          randomstring += chars.substring(rnum,rnum+1);
      }
      return randomstring;
  }
};