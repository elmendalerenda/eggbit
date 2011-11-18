var App = (function(lng, undefined) {

    //Define your LungoJS Application Instance
    lng.App.init({
        name: 'eggBIT',
        version: '0.1'
    });

    var sound = function(sound_url) {
        lng.Sugar.Sound.play(sound_url);
    };

    var music = function(music_url) {
        lng.Sugar.Sound.background(music_url);
    };

    var newGame = function() {
        //@ToDo:
        //var track = app.Data.track(2);
        //loadTrack();

        //setTimeout(function(){ app.View.progress('game', '99'); }, 100);
        //setTimeout(function(){ app.View.loadTrack(); }, 300);
        //setTimeout(function(){ app.Core.nextTrack(); }, 2000);
        //return false;
        //lng.Router.section('game');
    };

    var multiPlayer = function() {

    };

    return {
        sound: sound,
        music: music,
        newGame: newGame,
        multiPlayer: multiPlayer
    };

})(LUNGO);