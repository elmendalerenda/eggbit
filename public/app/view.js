App.View = (function(lng, app, undefined) {

    var progress = function(progress_id, percent) {
        lng.Dom.query('#' + progress_id + ' .progress .value').css('width', percent + '%');
    };

    var unloadTrack = function() {
        lng.Dom.query('.track').removeClass('load').addClass('unload');
    };

    var loadTrack = function(data) {
        lng.Data.Cache.set('track', data);

        //@ToDo
        lng.Dom.query('.track').removeClass('unload');
        setTimeout(function(){
            lng.Dom.query('.track').addClass('load');
        }, 100);
    };

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
        unloadTrack: unloadTrack
    }

})(LUNGO, App);