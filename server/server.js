const express = require("express");// use express to serve up the UI page
const app = express();
const http = require("http").Server(app);// Socket.IO uses a http server
const io = require("socket.io")(http);
// const maxApi = require("max-api");


const port = process.env.PORT || 80;



io.on("connection",function (socket) {
    console.log('a user connected');
    socket.on("disconnect", function(){
        console.log('user disconnect')
    } );
    
});



http.listen(port, function () {
	console.log("listening on *:" + port);
});