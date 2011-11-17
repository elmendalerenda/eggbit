App.Data = (function(lng, app, undefined) {

	var track = function(track_id) {
		var mockTrack = {
			id: track_id,
			name: 'Mario Bros 3',
			platform: 'NES',
			year: 1981,
			level: 1,
			cover_url: 'http://',
			music_url: 'http://'
		};


		return mockTrack;
	};

    return {
    	track: track
    }

})(LUNGO, App);