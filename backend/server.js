
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';


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
    console.log('Message received:', message);
    socket.broadcast.emit('receive-message', {
      message: message,
      id: socket.id
    });
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
})

server.listen(4000, () => {
  console.log('Server listening on port 4000')
});