App.Services = (function(lng, app, undefined) {

	var server_url = 'http://localhost:3000/';
	var server_socket;

	var repository = function() {
		lng.Service.get(server_url + 'tracks/all', {}, function(response) {
			var tracks = response.tracks;
			app.saveRepository(tracks);
		});
	};

	var newGame = function(level) {
		lng.Sugar.Growl.show('Loading', 'monkey', true);

		//@ToDo >> Conectar a la multiplayer (si estas online)
		setTimeout(function(){

			var data = {};
			app.game(data);
		}, 100);
	};

	var createMultiplayer = function(player, level) {
		lng.Sugar.Growl.show('Creating', 'monkey', true);

		//@ToDo >> Conectar a la multiplayer (si estas online)
		server_socket.emit('createRoom', player);
  		server_socket.on('roomCreated', function (token) {
  			lng.Data.Cache.set('multiplayer', token);
    		//startGame();
     	});

		setTimeout(function(){
			var data = {};
			app.game(data);
		}, 2000);
	};

	var connectMultiplayer = function(challenge_pin) {
		lng.Sugar.Growl.show('Connecting', 'monkey', true);

		//@ToDo >> Conectar a la multiplayer (si estas online)
		setTimeout(function(){
			var data = {};
			app.game(data);
		}, 2000);
	};

	var _init = (function() {
		alert(server_url);
		server_socket = io.connect(server_url);
	})();

    return {
    	repository: repository,
    	newGame: newGame,
    	createMultiplayer: createMultiplayer,
    	connectMultiplayer: connectMultiplayer
    }

})(LUNGO, App);