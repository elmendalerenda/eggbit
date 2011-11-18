App.Services = (function(lng, app, undefined) {

	var server_url = 'http://localhost:3000/';
	//var server_url = 'http://eggbit.herokuapp.com/';
	var server_socket;

	var repository = function() {
		lng.Service.get(server_url + 'tracks/all', {}, function(response) {
			var tracks = response.tracks;
			app.Data.saveRepository(tracks);
		});
	};

	var newGame = function(level) {
		lng.Sugar.Growl.show('Loading', 'monkey', true);

		lng.Service.get(server_url + 'game/new', {}, function(response) {
			var tracks = response.tracks;
			if (tracks.length) {
				console.error(tracks);
				app.game(tracks);
			}
		});
	};

	var saveScore = function(player, score) {
		lng.Service.post(server_url + 'game', {player: player, score: score}, function(response) {

		});
	};

	var createMultiplayer = function(player, level) {
		lng.Sugar.Growl.show('Creating', 'monkey', true);

		//@ToDo >> Conectar a la multiplayer (si estas online)
		server_socket.emit('createRoom', player);
  		server_socket.on('roomCreated', function (token) {
  			lng.Data.Cache.set('multiplayer', token);
			//lng.Sugar.Growl.hide();

			lng.Sugar.Growl.notify('Your Pin: ' + token, 'Pass to your friends', 'monkey', 'info', 10, function(){
				lng.Sugar.Growl.hide();
				lng.Router.section('game');
			});

     	});
	};

	var connectMultiplayer = function(challenge_pin, player) {
		lng.Sugar.Growl.show('Connecting', 'monkey', true);

 		server_socket.emit('join', {room: challenge_pin, player: player});
 		server_socket.on('joined', function (newPlayer) {
        	//startGame();
     	});
	};

	var _init = (function() {
		server_socket = io.connect(server_url);
	})();

    return {
    	repository: repository,
    	newGame: newGame,
    	saveScore: saveScore,
    	createMultiplayer: createMultiplayer,
    	connectMultiplayer: connectMultiplayer
    }

})(LUNGO, App);