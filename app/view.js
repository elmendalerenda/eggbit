App.View = (function(lng, app, undefined) {

    var progress = function(progress_id, percent) {
        lng.Dom.query('#' + progress_id + ' .progress .value').css('width', percent + '%');
    };

    var unloadTrack = function() {
        lng.Dom.query('.track').removeClass('load').addClass('unload');
    };

    var loadTrack = function(data) {
        lng.Dom.query('.track').removeClass('unload');
        setTimeout(function(){
            lng.Dom.query('.track').addClass('load');
        }, 100);
    };

    //Auto-start
    var _init = (function() {
        //app.music('assets/sounds/smb_overworld.mp3');

        var track = app.Data.track(2);
        loadTrack();

        //setTimeout(function(){ app.View.progress('game', '99'); }, 100);
        //setTimeout(function(){ app.View.loadQuiz(); }, 300);
        //setTimeout(function(){ app.nextMusic(); }, 2000);
        //return false;

        setTimeout(function(){ app.View.progress('loading', '30'); }, 1000);
        setTimeout(function(){ app.View.progress('loading', '100'); }, 2000);
        setTimeout(function(){ lng.Router.section('main'); }, 3000);
    })();

    return{
        progress: progress,
        loadTrack: loadTrack,
        unloadTrack: unloadTrack
    }

})(LUNGO, App);