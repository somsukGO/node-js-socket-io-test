const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 3000;

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', (socket) => {
  console.log(`client connected id: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`client disconnected is: ${socket.id}`);
  });

  socket.on('message', (message) => {
    socket.emit('message', message);
    // try {
    //   const json = JSON.parse(message);
    //   console.log(`json: ${json}`);

    // socket.broadcast.to(socket.id).emit('message', 'Hello');
    //   socket.emit('message', json);
    // } catch (err) {
    //   console.log(err.message);
    //   socket.emit('message', err.message);
    // }
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at port:${port}`);
});
