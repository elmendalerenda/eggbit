App.Services = (function(lng, app, undefined) {

	var newGame = function(level) {

	};

	var createMultiplayer = function(level) {

	};

	var connectMultiplayer = function(challenge_pin) {
		//@ToDo >> Conectar a la multiplayer (si estas online)
		setTimeout(function(){
			lng.Router.section('game');
		}, 1000);
	};

    return {
    	newGame: newGame,
    	createMultiplayer: createMultiplayer,
    	connectMultiplayer: connectMultiplayer
    }

})(LUNGO, App);