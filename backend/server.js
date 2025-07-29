const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('send-message', (message) => {
    socket.broadcast.emit('receive-message', message)
  });

  socket.on('disconnect', () => {
    console.log('A user disonnected');
  });
})

server.listen(4000, () => {
  console.log('Server listening on port 4000')
});