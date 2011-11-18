var sio = require('socket.io');

exports.start = function(app) {
  var io = sio.listen(app);
  var sockets = [];

  var rooms = {};
  var scores = {};
  var numQuestions = 40;

  io.sockets.on('connection', function (socket) {
   
    socket.on('createRoom', function (username) {
       var room = randomString();
       socket['username'] = username;
       rooms[room] = [socket];
       console.log('created room',  room);
       socket.emit('roomCreated', room);
    });
    
    socket.on('join', function (params) {
      
      console.log('joined',  params);
      
      var aRoom = params.room;
      var username = params.player;
      if(!rooms[aRoom]) return;
 
      socket.username = username;
      rooms[aRoom].push(socket);
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
      console.log(rooms[room].length);
      broadcast(room, 'nextQuestion', null);
    });

    socket.on('publishScore', function (params) {
        var user = socket.username;
        var room = params.room;
        var theScore = params.score;
        var theUser = scores[user];
        
        if(!theUser) {
          theUser = {};
          theUser[user] = user;
          theUser.score = 0;
          scores[user] = theUser;
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
    for(var i = 0; i < rooms[room].length; i++){
        rooms[room][i].emit(event, params);
    }
  };
  
  var randomString = function() {
      var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
      var string_length = 6;
      var randomstring = '';
      for (var i=0; i<string_length; i++) {
          var rnum = Math.floor(Math.random() * chars.length);
          randomstring += chars.substring(rnum,rnum+1);
      }
      return randomstring;
  }
};