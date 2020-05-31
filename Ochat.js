const maxApi = require('max-api');
const io = require('socket.io-client');
const socket = io("http://www.wangkeyu.tech:3000");
//const socket = io("http://localhost:3000");



socket.on("connect", (res) => {
	// print when connection to socket.io is successful
    console.log("connection: " + socket.connected);
});

socket.on("max-message", (msg) => {
    maxApi.outlet("max-message", msg);
});


maxApi.addHandlers({
    send: (dir) => {
        socket.emit("max-message", dir);
    }
})


