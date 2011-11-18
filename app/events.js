App.Events = (function(lng, app, undefined) {
	lng.Dom.Event.live('#btn_NewGame', 'TAP', function(event) {
    	app.newGame();
    });

    lng.Dom.Event.live('#btn_createMultiplayer', 'TAP', function(event) {
    	app.Services.createMultiplayer(1);
    });

    lng.Dom.Event.live('#btn_connectMultiplayer', 'TAP', function(event) {
    	var challenge_pin = lng.Dom.query('#txt_challengePin').val();

    	if (challenge_pin) {
			app.Services.connectMultiplayer(challenge_pin);
    	} else {
    		lng.Sugar.Growl.show('What Pin?', 'monkey', true, 2);
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