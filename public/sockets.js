var socket;
var room;
var currentGame;
var lastScore;
var currentLevel;
var player;

var init = function(){
    socket = io.connect('http://localhost:3000'); 
};

var createRoom = function(){
     socket.emit('createRoom', player);
  
     socket.on('roomCreated', function (roomReceived) {
          room = roomReceived;
          console.log(room);
          startGame();
     });
};

var joinRoom = function(){
     var params = {room: room, player: player};
     console.log('paramsSent', params);
     socket.emit('join', params);
  
     socket.on('joined', function (newPlayer) {
          startGame();
          console.log(newPlayer);
     });
};

var startGame = function(){
     
     socket.emit('startGame', room);
    
     socket.on('starting', function (game) {
          currentGame = game;
          nextQuestion();
     });
};

var nextQuestion = function() {
     console.log('question');
     socket.emit('correctAnswer', room);
     
     socket.on('nextQuestion', function() {
          console.log('Going to next cuestion');
          publishScore();
                    
     });
};

var publishScore = function() {
     
     var myScore = 5;
     
     socket.emit('publishScore',{room: room, score: myScore});  
   
     socket.on('showScore', function() {
        console.log('scores received');  
     });
   
     
};

