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

    var checkChoice = function() {
        //@ToDo >> Si la opcion seleccionada es la correcta: +PUNTOS y NEXT MUSIC
    };

    var nextTrack = function() {
        App.View.unloadTrack();
        //@ToDo >> Tenemos que cargar la siguiente canción
        var track = App.Data.track(1);
        console.error(track);
        //
        setTimeout(function(){ App.View.loadTrack(); }, 1000);
    };

    return {
        sound: sound,
        music: music,
        checkChoice: checkChoice,
        nextTrack: nextTrack
    };

})(LUNGO);