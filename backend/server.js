const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('Socket is active to connect');

  socket.on('chat', (payload) => {
    io.emit('chat', payload);
  });
});

server.listen('5000', () => {
  console.log('Server is listening at port 5000');
});
