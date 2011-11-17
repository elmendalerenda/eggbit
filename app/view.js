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

    })();

    return{
        progress: progress,
        loadTrack: loadTrack,
        unloadTrack: unloadTrack
    }

})(LUNGO, App);