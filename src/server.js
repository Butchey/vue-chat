'use strict';

import Http from 'http';
import SocketIO from 'socket.io';


let server = Http.Server(app);

const requestHandler = (request, response) => {
  
}



var io = require('socket.io')(server);
io.on('connection', function(client){
  client.on('event', function(data){});
  client.on('disconnect', function(){});
});
server.listen(3000);
