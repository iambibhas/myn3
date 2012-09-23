var http = require('http');
var route = require("./requestHandlers").route;
var common = require('./common');

(function (route){
    var server = http.createServer(route);
    server.listen(common.options.port, common.options.host);

    server.on('request', function(request, response) {
        var time = new Date().toUTCString();
        console.log(time + ": " + request.method + " request for " + request.url + " from " + request.headers.host);
    });
    
    console.log('Server running at http://' + common.options.host + ':' + common.options.port + '/');
})(route);