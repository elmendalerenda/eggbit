App.Services = (function(lng, app, undefined) {

	var repository = function() {
		//@ToDo >> Conectar a la multiplayer (si estas online)
		setTimeout(function(){
			var data = {};
			app.Data.saveRepository(data);
		}, 100);
	};

	var newGame = function(level) {
		lng.Sugar.Growl.show('Loading', 'monkey', true);

		//@ToDo >> Conectar a la multiplayer (si estas online)
		setTimeout(function(){

			var data = {};
			app.game(data);
		}, 100);
	};

	var createMultiplayer = function(level) {
		lng.Sugar.Growl.show('Creating', 'monkey', true);

		//@ToDo >> Conectar a la multiplayer (si estas online)
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

    return {
    	repository: repository,
    	newGame: newGame,
    	createMultiplayer: createMultiplayer,
    	connectMultiplayer: connectMultiplayer
    }

})(LUNGO, App);