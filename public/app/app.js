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

    var game = function(data) {
        lng.Data.Cache.set('game', data);

        App.View.initGame();

        var first_track = data[0];
        App.View.loadTrack(first_track);

        setTimeout(function(){
            lng.Router.section('game');
            lng.Sugar.Growl.hide();
        }, 300);
    };

    return {
        sound: sound,
        music: music,
        game: game
    };

})(LUNGO);