const express = require('express');
const app = express();
const socketIO = require('socket.io');

//start server
const server = app.listen(3000, () => {
  console.log('server started on port: 3000');
});

//socketIO
const io = socketIO(server);

io.on('connection', function (socket) {
  id = socket.id;
  console.log('new connection ', id);

  socket.on('message', function (data) {
    console.log('message ' + data);
  });

  socket.on('disconnect', function () {
    console.log('user ' + socket.id + ' disconnected ');
  });
});
