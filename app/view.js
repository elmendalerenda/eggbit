App.View = (function(lng, app, undefined) {

    var progress = function(progress_id, percent) {
        lng.Dom.query('#' + progress_id + ' .progress .value').css('width', percent + '%');
    };

    var unloadTrack = function() {
        lng.Dom.query('.track').removeClass('load').addClass('unload');
    };

    var loadTrack = function(data) {
        //@ToDo
        lng.Dom.query('.track').removeClass('unload');
        setTimeout(function(){
            lng.Dom.query('.track').addClass('load');
        }, 100);
    };

    var game = function() {
        progress('game', '100');
        lng.Dom.query('.life .heart').removeClass('die');


        lng.Router.section('game');
    };

    //Auto-start
    var _init = (function() {

    })();

    return{
        progress: progress,
        game: game,
        loadTrack: loadTrack,
        unloadTrack: unloadTrack
    }

})(LUNGO, App);