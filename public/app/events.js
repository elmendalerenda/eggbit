App.Events = (function(lng, app, undefined) {
	lng.Dom.Event.live('#btn_NewGame', 'TAP', function(event) {
    	app.Services.newGame();
    });

    lng.Dom.Event.live('#btn_createMultiplayer', 'TAP', function(event) {
        var player = lng.Data.Cache.get('player');
        lng.Sugar.Growl.show('Coming soon', 'monkey', true, 3);
    	//@ToDo >> Coming Soon >> app.Services.createMultiplayer(player);
    });

    lng.Dom.Event.live('.back', 'TAP', function(event) {
        app.music(null);
    });

    lng.Dom.Event.live('#btn_connectMultiplayer', 'TAP', function(event) {
    	var challenge_pin = lng.Dom.query('#txt_challengePin').val();

    	if (challenge_pin) {
            var player = lng.Data.Cache.get('player');
			lng.Sugar.Growl.show('Coming soon', 'monkey', true, 3);
            //@ToDo >> Coming Soon >> app.Services.connectMultiplayer(challenge_pin, player);
    	} else {
    		lng.Sugar.Growl.show('What Pin?', 'monkey', true, 2);
    	}
    });

    lng.Dom.Event.bind('.choices a', 'TAP', function(event) {
        var track_id = lng.Dom.query(this).data('track');
        app.Core.checkChoice(track_id);
    });

    lng.Dom.Event.live('.sound', 'TAP', function(event) {
        app.sound('assets/sounds/button.wav');
    });

    return {

    }

})(LUNGO, App);