App.Services = (function(lng, app, undefined) {

	var newGame = function(level) {
		lng.Sugar.Growl.show('Loading', 'monkey', true);

		//@ToDo >> Conectar a la multiplayer (si estas online)
		setTimeout(function(){
			lng.Sugar.Growl.hide();
			app.View.game();
		}, 2000);
	};

	var createMultiplayer = function(level) {
		lng.Sugar.Growl.show('Creating', 'monkey', true);

		//@ToDo >> Conectar a la multiplayer (si estas online)
		setTimeout(function(){
			lng.Sugar.Growl.hide();

		}, 2000);
	};

	var connectMultiplayer = function(challenge_pin) {
		lng.Sugar.Growl.show('Connecting', 'monkey', true);

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