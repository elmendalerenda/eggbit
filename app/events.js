App.Events = (function(lng, app, undefined) {

    lng.Dom.Event.live('a.button', 'TAP', function(event) {
        app.sound('assets/sounds/button.wav');
    });

    lng.Dom.Event.bind('.options a', 'TAP', function(event) {
		app.nextMusic();
    });

    return {

    }

})(LUNGO, App);