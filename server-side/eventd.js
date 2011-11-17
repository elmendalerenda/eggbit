var sio = require('socket.io');

exports.start = function(app, users, boards) {
  var io = sio.listen(app);
  var sockets = [];

  var broadcast = function(name, ev) {
    sockets.forEach(function(socket) {
      socket.emit(name, ev);
    });
  };

  io.sockets.on('connection', function(socket) {
    sockets.push(socket);

    socket.on('board/create', function(ev) {
      broadcast('board/create', ev);
    });

    socket.on('board/create/all', function(last_time) {
      socket.emit('board/create/replay', boards.all());
    });

    socket.on('board/remove', function(ev) {
      console.dir(ev);
      boards.remove(ev.id);
      broadcast('board/remove', ev);
    });

    socket.on('board/change', function(ev) {
      broadcast('board/change', ev);

    });

    socket.on('board/user_registered', function(ev) {
      broadcast('board/user_registered', ev);

    });

    socket.on('board/user_unregistered', function(ev) {
      broadcast('board/user_unregistered', ev);

    });

    socket.on('board/column/change', function(ev) {
      broadcast('board/column/change', ev);

    });

    socket.on('board/task/create', function(ev) {
      broadcast('board/task/create', ev);

    });

    socket.on('board/task/remove', function(ev) {
      broadcast('board/task/remove', ev);

    });

    socket.on('board/task/change', function(ev) {
      broadcast('board/task/change', ev);

    });

    socket.on('board/task/user_registered', function(ev) {
      broadcast('board/task/user_registered', ev);

    });

    socket.on('board/task/user_unregistered', function(ev) {
      broadcast('board/task/user_unregistered', ev);

    });

    socket.on('board/task/file_added', function(ev) {
      broadcast('board/task/file_added', ev);

    });

    socket.on('board/task/file_removed', function(ev) {
      broadcast('board/task/file_removed', ev);

    });

    socket.on('board/task/moved', function(ev) {
      broadcast('board/task/moved', ev);

    });

    socket.on('disconnect', function() {
      sockets.splice(sockets.indexOf(socket), 1);
    });
  });
};