var http = require('http');
var route = require("./requestHandlers").route;

var host = '127.0.0.1';
var port = 1338;

(function (route){
    http.createServer(route).listen(port, host);
    console.log('Server running at http://' + host + ':' + port + '/');
})(route);