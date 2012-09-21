var server = require("./server");
var router = require('router');
var requestHandlers = require("./requestHandlers");
var route = router();

route.get('/', requestHandlers.home)
route.get('/room', requestHandlers.room)

server.start(route);