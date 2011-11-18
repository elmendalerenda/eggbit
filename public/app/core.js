App.Core = (function(lng, app, undefined) {

    var current_index_track = 0;
    var repository = [];

	_init = (function() {
		//@ToDo >> Conectar con server
        setTimeout(function(){
	        app.View.progress('loading', '20');
	        app.Data.getRepository();
	    }, 500);
	})();

    var initGame = function(game) {
        current_index_track = 0;
        var track = game[current_index_track];
        App.View.loadTrack(track);

        setTimeout(function(){
            lng.Router.section('game');
            lng.Sugar.Growl.hide();
        }, 300);
    };

    var checkChoice = function(track_id) {
        var track = lng.Data.Cache.get('track');
        console.error('PRUEBA');
        console.error(track);

        if (track.id === track_id) {
            //@ToDo >> Si la opcion seleccionada es la correcta: +PUNTOS y NEXT MUSIC
        } else {
            //@ToDo >> Si falla, no sumar puntos
        }
        nextTrack();
    };

    var nextTrack = function() {
        app.View.unloadTrack();

        current_index_track ++;
        if (current_index_track < 20) {
            setTimeout(function(){
                var tracks = lng.Data.Cache.get('game');
                var track = game[current_index_track];

                app.View.loadTrack(track);
            }, 300);
        } else {
            playerDie();
        }
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
            //@ToDo >> Tenemos que llevarle al highscores
    	});
    };

    var cacheRepository = function(data) {
    	//lng.Data.Cache.set('repository', data);
    	repository = data;
        app.View.progress('loading', '40');

    	setTimeout(function() {
	        app.View.progress('loading', '60');
	        app.Data.getPlayer();
	    }, 300);
    };

    var cachePlayer = function(data) {
    	lng.Data.Cache.set('player', data);
    	app.View.progress('loading', '80');

    	setTimeout(function() {
	        app.View.progress('loading', '100');

	        setTimeout(function(){
	        	lng.Router.section('main');
	        }, 500);
	    }, 300);
    };

    var getTrackById = function(track_id) {
        var track = {};

        console.error(track_id);
        console.error(repository);
        for (var i = 0, len = repository.length; i <= len; i++) {
            if (repository[i].id === track_id) {
                track = repository[i];
                break;
            }
        }
        console.error(track);

        return track;
    };

    return {
    	cacheRepository: cacheRepository,
    	cachePlayer: cachePlayer,
        checkChoice: checkChoice,
        nextTrack: nextTrack,
        subtractLife: subtractLife,
        playerDie: playerDie,
        initGame: initGame,
        getTrackById: getTrackById
    }

})(LUNGO, App);