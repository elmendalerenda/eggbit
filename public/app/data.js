App.Data = (function(lng, app, undefined) {

	var table_tracks = {
        name: 'tracks',
        drop: true,
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
		    version: 'TEXT'
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
				var settings = result[0];
				app.Core.cachePlayer(settings.player);
			} else {
				//@ToDo >> Pedir al usuario su user twitter
				var player = 'soyjavi';
				lng.Data.Sql.insert('settings', { player: player });
				app.Core.cachePlayer(player);
			}
		});
	};

	var getRepository = function() {
		lng.Data.Sql.select('tracks', null, function(result) {
			if (result.length > 0) {
				app.Core.cacheRepository(result);
			} else {
				app.Services.repository();
			}
		});
	};

	var saveRepository = function(data) {
		for (var i = 0, len = data.length; i < len; i++ ) {
			lng.Data.Sql.insert('tracks', data[i]);
		}

		app.Core.cacheRepository(data);
	};

    return {
    	getPlayer: getPlayer,
    	getRepository: getRepository,
    	saveRepository: saveRepository
    }

})(LUNGO, App);