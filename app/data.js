App.Data = (function(lng, app, undefined) {

	var table_tracks = {
        name: 'tracks',
        drop: false,
    	fields: {
            id: 'INTEGER',
            name: 'TEXT',
            platform: 'TEXT',
            year: 'INTEGER',
            cover: 'TEXT',
            music: 'TEXT',
            level: 'INTEGER DEFAULT 1'
        }
    };

    var table_settings = {
	    name: 'settings',
	    drop: false,
	    fields: {
		    player: 'TEXT',
		    name: 'TEXT'
		}
	};

    lng.Data.Sql.init({
	    name: 'eggbit.js',
	    version: '0.1',
	    schema: [ table_tracks, table_settings ]
	});

	var getPlayer = function() {
		lng.Data.Sql.select('settings', null, function(result){
			if (result.length > 0) {
				app.Core.cachePlayer();
			} else {
				//@ToDo >> Pedir al usuario su user twitter
				lng.Data.Sql.insert('settings', {player:'soyjavi'});
				app.Core.cachePlayer();
			}
		});
	};

	var getRepository = function() {
		lng.Data.Sql.select('tracks', null, function(result) {
			if (result.length > 0) {
				lng.Core.cacheRepository(data);
			} else {
				//@ToDo >> Llamar a server para bajar
				app.Services.repository();
			}
		});
	};

	var saveRepository = function(data) {
		//lng.Data.Sql.insert('tracks', data);
		app.Core.cacheRepository(data);
	};

    return {
    	getPlayer: getPlayer,
    	getRepository: getRepository,
    	saveRepository: saveRepository
    }

})(LUNGO, App);