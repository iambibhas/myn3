var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {
    "/": requestHandlers.home,
    "/room": requestHandlers.room
}

server.start(router.route, handle);