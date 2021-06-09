const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const http = require('http');

// Create server
const app = express();
const server = http.Server(app);

// Enable Cors to Socket IO
app.use(cors());

// Init Socket IO Server
const io = socketio(server);

// Called when a client start a socket connection
io.on('connection', (socket) => {

});

// Start server in port 3000 or the port passed at "PORT" env variable
server.listen(process.env.PORT || 3000,
  () => console.log('Server Listen On: *:', process.env.PORT || 3000));
