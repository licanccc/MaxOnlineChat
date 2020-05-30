const express = require("express");// use express to serve up the UI page
const app = express();
const http = require("http").Server(app);// Socket.IO uses a http server
const io = require("socket.io")(http);
const maxApi = require("max-api");


const port = process.env.PORT || 80;



io.on("connection",function (socket) {
    maxApi.outlet('a user connected');
    socket.on("disconnect", function(){
        maxApi.outlet('user disconnect')
    } );
    
});



http.listen(port, function () {
	maxApi.outlet("listening on *:" + port);
});