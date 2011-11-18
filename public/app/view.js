App.View = (function(lng, app, undefined) {

    var clock_seconds = 0;

    var progress = function(progress_id, percent) {
        var progress =  lng.Dom.query('#' + progress_id + ' .progress .value');
        lng.Dom.query('#' + progress_id + ' .progress .value').css('width', percent + '%');
    };

    var unloadTrack = function() {
        lng.Dom.query('.track').removeClass('load').addClass('unload');
    };

    var loadTrack = function(data) {
        lng.Data.Cache.set('track', data);
        lng.Dom.query('.track').removeClass('unload');

        setTimeout(function(){
            _showTrack(data);
        }, 100);
    };

    var _showTrack = function(data) {
        var track = app.Core.getTrackById(data.id);

        _setChoiceButton(data, 'opt_1', 'btn_choice_1');
        _setChoiceButton(data, 'opt_2', 'btn_choice_2');
        _setChoiceButton(data, 'opt_3', 'btn_choice_3');

        lng.Dom.query('.track').addClass('load');
        _initClock();
        app.music(track.music);
    };

    var _initClock = function() {
        clock_seconds = 0;
        app.View.progress('game', '100');

        clearInterval(app.View.countDown);
        setInterval(app.View.countDown, 1000);
    };

    var countDown = function() {
        if (clock_seconds <= 20) {
            clock_seconds++;
            var clock_width = ((20 - clock_seconds) * 100) / 20;
            app.View.progress('game', clock_width);
        } else {
            clearInterval(app.View.countDown);
        }
    };

    var _setChoiceButton = function(data, property, container_id) {
        var track = app.Core.getTrackById(data[property]);

        var container = lng.Dom.query('#' + container_id);
        container.html(track.name);
        container.data('track', track.id);
    }

    var initGame = function(data) {
        lng.Dom.query('.life .heart').removeClass('die');
        progress('game', '100');
        lng.Dom.query('.track').removeClass('load').removeClass('unload');
    };

    //Auto-start
    var _init = (function() {

    })();

    return{
        progress: progress,
        initGame: initGame,
        loadTrack: loadTrack,
        unloadTrack: unloadTrack,
        countDown: countDown
    }

})(LUNGO, App);