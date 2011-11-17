App.View = (function(lng, app, undefined) {

    var progress = function(progress_id, percent) {
        lng.Dom.query('#' + progress_id + ' .progress .value').css('width', percent + '%');
    };

    var nextQuiz = function() {

    };

    var unloadQuiz = function() {
        lng.Dom.query('.quiz').removeClass('load').addClass('unload');
    };

    var loadQuiz = function(data) {
        lng.Dom.query('.quiz').removeClass('unload');
        setTimeout(function(){
            lng.Dom.query('.quiz').addClass('load');
        }, 100);
    };

    //Auto-start
    var _init = (function() {
        //app.music('assets/sounds/smb_overworld.mp3');
        //lng.Router.section('game');


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
        loadQuiz: loadQuiz,
        unloadQuiz: unloadQuiz
    }

})(LUNGO, App);