var express = require('express');
var eventd = require('./eventd');
var eggbit_resources = require('./eggbit_resources');

var eggbitd = express.createServer(
    express.logger(),
    express.bodyParser()
);

/*
var users = fixtures.users;
var boards = fixtures.boards;

eventd.start(ubikd, users, boards);
*/

eggbitd.get('/server-side/*', function(req, res) {
  res.send('Forbbiden', 403);
});

eggbitd.get('/repository', function(req, res) {

});

eggbitd.get('/user/:id', function(req, res) {
  var id = req.params.id;
  var user = users.by_name(id);
  if(user)
    res.send(JSON.stringify(user), 200);
  else {
    var twitter_api = 'http://api.twitter.com/1/statuses/user_timeline.json?include_rts=true&count=1&screen_name=' + id;
    request({
      url: twitter_api,
      method:"GET",
      headers:{
        'user-agent': 'node.js'
      }
    }, function(error, response, body) {
      if(!error && response.statusCode === 200) {
        var info = JSON.parse(body)[0];
        var user = {
          name: id,
          bio: info.user.description,
          avatar: info.user.profile_image_url,
          home_page: info.user.url
        };
        users.save(user);
        res.send(JSON.stringify(user), 200);
      } else if(error) {
        res.send("Not Found", 404);
      }
    });
  }
});

eggbitd.use(express.static(__dirname + '/..'));

var port = process.env.PORT || 3000;

eggbitd.listen(port, function() {
  console.log("Listening on " + port);
});
