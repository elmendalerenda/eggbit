App.Core = (function(lng, app, undefined) {

	_init = (function(){
		//@ToDo >> Conectar con server

		//app.music('assets/sounds/smb_overworld.mp3');
        //lng.Router.section('main');
        //return false;

        //var track = app.Data.track(2);
        //loadTrack();

        //setTimeout(function(){ app.View.progress('game', '99'); }, 100);
        //setTimeout(function(){ app.View.loadTrack(); }, 300);
        //setTimeout(function(){ app.Core.nextTrack(); }, 2000);
        //return false;

        setTimeout(function(){ app.View.progress('loading', '30'); }, 500);
        setTimeout(function(){ app.View.progress('loading', '100'); }, 1000);
        setTimeout(function(){ lng.Router.section('main'); }, 1500);
	})();

    var checkChoice = function() {
        //@ToDo >> Si la opcion seleccionada es la correcta: +PUNTOS y NEXT MUSIC
    };

    var nextTrack = function() {
        App.View.unloadTrack();
        //@ToDo >> Tenemos que cargar la siguiente canción
        var track = App.Data.track(1);
        console.error(track);
        setTimeout(function(){ App.View.loadTrack(); }, 1000);
    };

    return{
        checkChoice: checkChoice,
        nextTrack: nextTrack
    }

})(LUNGO, App);