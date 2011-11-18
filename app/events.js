App.Events = (function(lng, app, undefined) {
	lng.Dom.Event.live('#btn_NewGame', 'TAP', function(event) {
    	app.newGame();
    });

    lng.Dom.Event.live('#btn_createMultiplayer', 'TAP', function(event) {

    });

    lng.Dom.Event.live('#btn_connectMultiplayer', 'TAP', function(event) {
    	var challenge_pin = lng.Dom.query('#txt_challengePin').val();

    	if (challenge_pin) {
			app.Services.connectMultiplayer();
    	}
    });

    lng.Dom.Event.live('.sound', 'TAP', function(event) {
        app.sound('assets/sounds/button.wav');
    });

    lng.Dom.Event.bind('.choices a', 'TAP', function(event) {
		app.Core.nextTrack();
    });



    return {

    }

})(LUNGO, App);