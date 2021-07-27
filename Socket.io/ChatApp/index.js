const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;
const path = require('path');
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname + '/public')));

let users = [];

io.on('connection', socket => {
    console.log(' ');
    // console.log(`Client ${socket.id} Connected..`);

    socket.on('login', name => {
        users.push({name, id: socket.id});
        console.log(`${name} Joined the Chatroom`);
        socket.emit('success', 'success');
    });

    socket.on('chat', message => {
        let {name, _} = users.filter(user=> {
            return user.id === socket.id;
        })[0];
        io.emit('chat', `${name}::${message}`);
    });

    socket.on('disconnect', () => {
        console.log(`${socket.id} left the Chatroom`);
    })


});

server.listen(port);

