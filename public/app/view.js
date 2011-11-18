App.View = (function(lng, app, undefined) {

    var progress = function(progress_id, percent) {
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
        console.error(data);
        var opt_1 = app.Core.getTrackById(data.opt_1);
        var opt_2 = app.Core.getTrackById(data.opt_2);
        var opt_3 = app.Core.getTrackById(data.opt_3);

        console.error(opt_1);
        //lng.Dom.query('#btn_choice_1').html(opt_1.name);
        //lng.Dom.query('#btn_choice_2').html(opt_2.name);
        //lng.Dom.query('#btn_choice_3').html(opt_3.name);


        lng.Dom.query('.track').addClass('load');
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