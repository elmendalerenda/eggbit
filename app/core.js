App.Core = (function(lng, app, undefined) {

	_init = (function(){
		//@ToDo >> Conectar con server
        setTimeout(function(){ app.View.progress('loading', '30'); }, 500);
        setTimeout(function(){ app.View.progress('loading', '100'); }, 1000);
        //setTimeout(function(){ lng.Router.section('main'); }, 1500);

        lng.Router.section('multiplayer');
	})();

    var checkChoice = function() {
        //@ToDo >> Si la opcion seleccionada es la correcta: +PUNTOS y NEXT MUSIC
    };

    var nextTrack = function() {
        App.View.unloadTrack();
        //@ToDo >> Tenemos que cargar la siguiente canción
        var track = App.Data.track(1);
        setTimeout(function(){ App.View.loadTrack(); }, 1000);
    };

    return{
        checkChoice: checkChoice,
        nextTrack: nextTrack
    }

})(LUNGO, App);