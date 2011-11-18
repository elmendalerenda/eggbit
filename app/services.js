App.Services = (function(lng, app, undefined) {

	var newGame = function(level) {

	};

	var createMultiplayer = function(level) {

	};

	var connectMultiplayer = function(challenge_pin) {
		lng.Sugar.Growl.show('Loading', 'monkey', true);
		//@ToDo >> Conectar a la multiplayer (si estas online)
		setTimeout(function(){
			lng.Sugar.Growl.hide();
			lng.Router.section('game');
		}, 2000);
	};

    return {
    	newGame: newGame,
    	createMultiplayer: createMultiplayer,
    	connectMultiplayer: connectMultiplayer
    }

})(LUNGO, App);