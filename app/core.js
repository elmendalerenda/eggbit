App.Core = (function(lng, app, undefined) {

	_init = (function() {
		//@ToDo >> Conectar con server
        setTimeout(function(){
	        app.View.progress('loading', '20');
	        app.Data.getRepository();
	    }, 500);
	})();

    var checkChoice = function() {
        //@ToDo >> Si la opcion seleccionada es la correcta: +PUNTOS y NEXT MUSIC
    };

    var nextTrack = function() {
        App.View.unloadTrack();
        //@ToDo >> Tenemos que cargar la siguiente canción

        setTimeout(function(){ App.View.loadTrack(); }, 300);
    };

    var subtractLife = function() {
    	var lifes = lng.Dom.query('.life .heart:not(.die)');
    	if (lifes.length > 0) {
    		lng.Dom.query(lifes[0]).addClass('die');
    	} else {
    		playerDie();
    	}
    };

    var playerDie = function() {
		//@ToDo >> Cerrar la partida
    	lng.Sugar.Growl.show('The end', 'monkey', true, 3, function(){
    		lng.Router.back();
    	});
    };

    var cacheRepository = function(data) {
    	lng.Data.Cache.set('repository', data);
    	app.View.progress('loading', '40');

    	setTimeout(function(){
	        app.View.progress('loading', '60');
	        app.Data.getPlayer();
	    }, 300);
    };

    var cachePlayer = function(data) {
    	lng.Data.Cache.set('repository', data);
    	app.View.progress('loading', '80');

    	setTimeout(function(){
	        app.View.progress('loading', '100');
	        setTimeout(function(){
	        	lng.Router.section('main');
	        }, 500);
	    }, 300);
    }

    return {
    	cacheRepository: cacheRepository,
    	cachePlayer: cachePlayer,
        checkChoice: checkChoice,
        nextTrack: nextTrack,
        subtractLife: subtractLife,
        playerDie: playerDie
    }

})(LUNGO, App);