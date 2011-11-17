App.View = (function(lng, app, undefined) {

    var progress = function(progress_id, percent) {
        lng.Dom.query('#' + progress_id + ' .progress .value').css('width', percent + '%');
    };

    //Auto-start
    var _init = (function() {
        //app.music('assets/sounds/smb_overworld.mp3');
        lng.Router.section('game');

        setTimeout(function(){ app.View.progress('game', '99'); }, 100);
        return false;

        setTimeout(function(){ app.View.progress('loading', '30'); }, 1000);
        setTimeout(function(){ app.View.progress('loading', '100'); }, 2000);
        setTimeout(function(){ lng.Router.section('main'); }, 3000);
    })();

    return{
        progress: progress
    }

})(LUNGO, App);